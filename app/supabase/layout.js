/** app/supabase/layout.js - minimal, stylish root for supabase subtree */
import React from "react";
import "../globals.css";

export const metadata = {
  title: "Supabase Area • Thomas",
};

export default function SupabaseLayout({ children }) {
  return (
    <>
      {/* Minimal small header (no heavy nav text) */}
      <header className="border-b bg-white/80">
        <nav className="mx-auto max-w-5xl px-4 py-3">
          <a href="/" className="text-sm font-medium text-zinc-700 hover:text-black">
            ← Home
          </a>
        </nav>
      </header>

      {/* Main container */}
      <main className="min-h-[70vh] bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-10">
          {children}
        </div>
      </main>
    </>
  );
}
