// app/dashboard/skills/skills.js
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

/**
 * Dashboard skills manager
 * - Loads skills for the authenticated user
 * - Adds and deletes skills
 *
 * Important: keeps fetch logic inside the effect so setState happens inside async callback
 * and we avoid the "calling setState synchronously in effect" error.
 */
export default function Skills({ user }) {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadSkills() {
      if (!user) {
        if (mounted) setSkills([]);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("skills")
          .select("*")
          .eq("user_id", user.id)
          .order("position", { ascending: true });

        if (!error) {
          if (mounted) setSkills(data || []);
        } else {
          if (mounted) setSkills([]);
        }
      } catch (err) {
        if (mounted) setSkills([]);
      }
    }

    // call the async loader inside the effect
    loadSkills();

    // cleanup guard
    return () => {
      mounted = false;
    };
  }, [user]);

  const handleAddSkill = async () => {
    if (!user) return alert("Please sign in first.");
    const name = (skillName || "").trim();
    if (!name) return alert("Enter a skill name.");

    setLoading(true);
    try {
      const { error } = await supabase.from("skills").insert({
        name,
        user_id: user.id,
        created_at: new Date().toISOString(),
      });

      if (error) {
        alert(error.message || "Failed to add skill");
      } else {
        setSkillName("");
        // reload after insert
        const { data } = await supabase
          .from("skills")
          .select("*")
          .eq("user_id", user.id)
          .order("position", { ascending: true });
        setSkills(data || []);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSkill = async (id) => {
    if (!confirm("Delete this skill?")) return;
    const { error } = await supabase.from("skills").delete().eq("id", id);
    if (error) alert(error.message || "Delete failed");
    else setSkills((s) => s.filter((x) => x.id !== id));
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Skills</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Add skill"
          className="border p-2 flex-1"
        />
        <button
          onClick={handleAddSkill}
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Adding…" : "Add"}
        </button>
      </div>

      <ul>
        {skills.length === 0 && (
          <li className="text-sm text-zinc-400">No skills yet.</li>
        )}
        {skills.map((s) => (
          <li
            key={s.id}
            className="flex justify-between items-center border p-2 mb-2"
          >
            <span>{s.name}</span>
            <button
              onClick={() => handleDeleteSkill(s.id)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
