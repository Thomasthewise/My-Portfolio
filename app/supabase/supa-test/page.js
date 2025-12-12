"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../../lib/supabase";

function Avatar({ name, size = 40 }) {
  const initials = (name || "")
    .split(" ")
    .map((n) => n[0]?.toUpperCase() || "")
    .slice(0, 2)
    .join("");
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-zinc-100 border border-zinc-200 text-sm font-semibold text-black"
    >
      {initials || "—"}
    </div>
  );
}

function ActionButton({ text, onClick }) {
  const [done, setDone] = useState(false);

  async function handleClick() {
    if (text && onClick === null) {
      try {
        await navigator.clipboard.writeText(text);
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      } catch {
        setDone(false);
      }
    } else if (onClick) {
      onClick();
    }
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded px-3 py-1 text-xs font-medium border border-zinc-300 text-black hover:bg-zinc-50"
    >
      {done ? "Copied" : text ? "Copy" : "Email"}
    </button>
  );
}

export default function SupaTest() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const [view, setView] = useState("cards");
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchUserAndProfiles() {
      setLoading(true);
      try {
        const { data: userData } = await supabase.auth.getUser();
        if (!mounted) return;
        setUser(userData.user || null);
      } catch {
        if (mounted) setUser(null);
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("id, username, email, created_at, user_id")
          .order("created_at", { ascending: false })
          .limit(200);

        if (!mounted) return;
        if (error) {
          setError(error.message || "Failed to load profiles");
          setProfiles([]);
        } else {
          setProfiles(data || []);
        }
      } catch {
        setError("Unexpected error");
        setProfiles([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchUserAndProfiles();
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return profiles;
    const q = query.toLowerCase().trim();
    return profiles.filter(
      (p) =>
        (p.username || "").toLowerCase().includes(q) ||
        (p.email || "").toLowerCase().includes(q)
    );
  }, [profiles, query]);

  const isAdminView = view === "table";

  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-black">Supabase Profiles</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Profiles visible to the current session (RLS enforced).
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {user ? (
            <div className="flex items-center gap-3 rounded-full bg-white px-3 py-1 border border-zinc-200 shadow-sm">
              <span className="text-xs text-zinc-500">You are logged in as</span>
              <span className="ml-2 text-sm font-medium text-black">{user.email}</span>
            </div>
          ) : (
            <div className="text-sm text-zinc-500">Not signed in</div>
          )}

          <div className="flex gap-2">
            <label className="flex items-center gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by name or email"
                className="rounded px-3 py-2 border border-zinc-200 bg-white text-black placeholder:text-zinc-400"
                style={{ minWidth: 220 }}
              />
            </label>

            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setView("cards")}
                className={`px-3 py-2 text-sm font-medium border border-r-0 rounded-l ${
                  view === "cards" ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setView("table")}
                className={`px-3 py-2 text-sm font-medium border rounded-r ${
                  view === "table" ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        {loading ? (
          <div className="py-12 text-center">
            <span className="text-black/70">Loading profiles…</span>
          </div>
        ) : error ? (
          <div className="py-8 text-center text-red-600">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-black/80">
              No profiles found (try clearing the filter or logging in).
            </p>
          </div>
        ) : isAdminView ? (
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">User</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Email</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">User ID</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Joined</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id} className="border-b last:border-b-0">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={p.username} />
                        <div>
                          <div className="text-sm text-black font-semibold">{p.username || "—"}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-black break-words">{p.email || "—"}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-xs text-zinc-500 break-words">{p.user_id || "—"}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-zinc-700">
                        {p.created_at ? new Date(p.created_at).toLocaleString() : "—"}
                      </div>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <ActionButton text={p.email} onClick={null} />
                      <ActionButton onClick={() => p.email && window.open(`mailto:${p.email}`)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="p-4 rounded-lg border border-zinc-100 bg-white shadow-sm flex items-start gap-4 transition-transform hover:scale-[1.02] hover:shadow-md"
              >
                <Avatar name={p.username} size={48} />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-black">{p.username || "—"}</h2>
                      <p className="mt-1 text-sm text-black/85 break-words">{p.email || "—"}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-xs text-zinc-500">Joined</div>
                      <div className="text-sm text-zinc-700">
                        {p.created_at ? new Date(p.created_at).toLocaleDateString() : "—"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <ActionButton text={p.email} onClick={null} />
                    <ActionButton
                      onClick={() => p.email && (window.location.href = `mailto:${p.email}`)}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

