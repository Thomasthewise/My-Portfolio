"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function SupaAuthTest() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfiles() {
      const { data, error } = await supabase.from("profiles").select("*");
      if (error) setError(error.message);
      else setProfiles(data);
    }

    fetchProfiles();
  }, []);

  return (
    <div>
      <h1>Supabase Auth Test — Profiles</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {profiles.length === 0 ? <p>No profiles found (table empty).</p> : (
        <ul>
          {profiles.map(p => (
            <li key={p.id}>{p.username} — {p.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
