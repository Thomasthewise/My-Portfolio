"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "../../../lib/supabase";
import slugify from "slugify";

export default function Projects({ user }) {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProjects = useCallback(async () => {
    if (!user) return setProjects([]);

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("user_id", user.id)
      .order("position", { ascending: true });

    if (error) {
      if (process.env.NODE_ENV !== "production") console.error("fetchProjects error:", error);
      setProjects([]);
    } else setProjects(data || []);
  }, [user]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleUpload = async () => {
    if (!user) return alert("You must be signed in");
    if (!title) return alert("Please add a title");
    if (!image) return alert("Please add an image file");

    setLoading(true);
    try {
      const fileExt = image.name.split(".").pop();
      const fileName = `${slugify(title, { lower: true, strict: true })}-${Date.now()}.${fileExt}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("projects")
        .upload(fileName, image, { upsert: false });
      if (uploadError) throw uploadError;

      const { data: { publicUrl } = {} } = supabase.storage
        .from("projects")
        .getPublicUrl(fileName);

      const publicURL = publicUrl || (uploadData?.path && `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${uploadData.path}`);

      const { error } = await supabase.from("projects").insert({
        title,
        slug: slugify(title, { lower: true, strict: true }),
        description,
        image_url: publicURL,
        user_id: user.id,
        created_at: new Date().toISOString(),
      });
      if (error) throw error;

      setTitle("");
      setDescription("");
      setImage(null);
      await fetchProjects();
    } catch (_err) {
      if (process.env.NODE_ENV !== "production") console.error("handleUpload error", _err);
      alert(_err.message || "Upload error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this project?")) return;
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) alert(error.message);
    else fetchProjects();
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Projects</h2>

      <div className="grid gap-2 mb-4">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" className="border p-2" />
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description (Markdown ok)" className="border p-2" />
        <input type="file" onChange={(e)=>setImage(e.target.files?.[0] ?? null)} />
        <div className="flex gap-2">
          <button onClick={handleUpload} disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded">
            {loading ? "Uploading…" : "Add Project"}
          </button>
        </div>
      </div>

      <ul>
        {projects.length === 0 && <li className="text-sm text-zinc-400">No projects yet.</li>}
        {projects.map((p) => (
          <li key={p.id} className="border p-3 rounded mb-2 flex gap-4 items-start">
            <div className="w-28 h-20 bg-zinc-800 shrink-0">
              {p.image_url ? <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" /> : null}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-zinc-400">{p.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500">{new Date(p.created_at).toLocaleString()}</p>
                  <button onClick={()=>handleDelete(p.id)} className="text-red-500 text-sm mt-2">Delete</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
