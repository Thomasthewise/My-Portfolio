// app/projects/[slug]/not-found.js
"use client"; // make it a Client Component if you want interactivity

import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="mb-6">Sorry, the project you are looking for does not exist.</p>
      <Link
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back to Projects
      </Link>
    </div>
  );
}

