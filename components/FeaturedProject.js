'use client'

import React from 'react'

export default function FeaturedProject({ project }) {
  if (!project) return null
  return (
    <div className="my-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg backdrop-blur">
      <h2 className="text-xl font-bold text-white">{project.title}</h2>
      <p className="mt-2 text-zinc-400">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
      >
        Visit Project
      </a>
    </div>
  )
}
