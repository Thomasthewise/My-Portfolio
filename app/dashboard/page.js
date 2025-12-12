"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import Login from "./login";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const getUser = async () => {
      try {
        const { data: { user: u } = {} } = await supabase.auth.getUser();
        if (!mounted) return;
        setUser(u ?? null);
      } catch (_err) {
        if (!mounted) return;
        setUser(null);
        if (process.env.NODE_ENV !== "production") console.error(_err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setUser(session.user);
      if (!session) setUser(null);
    });

    return () => {
      mounted = false;
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

  if (loading) return <div className="p-8"><p>Loading dashboard…</p></div>;

  if (!user) return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard — sign in</h1>
      <Login onSuccess={(u) => setUser(u)} />
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-zinc-400">Signed in as {user.email}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              setUser(null);
            }}
            className="px-3 py-1 rounded bg-zinc-800 text-white"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="space-y-8">
        <Projects user={user} />
        <Skills user={user} />
      </main>
    </div>
  );
}
