// app/projects/[slug]/not-found.js
"use client";

import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="py-32 text-center text-zinc-300">
      <h1 className="mb-4 text-3xl font-bold text-white">Project Not Found</h1>

      <p className="mb-8 text-zinc-400">
        The project you’re looking for does not exist or is still being built.
      </p>

      <Link href="/projects" className="text-indigo-400 hover:underline">
        ← Back to Projects
      </Link>
    </div>
  );
}
