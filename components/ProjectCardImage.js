'use client'

import React from 'react'

export default function ProjectCardImage({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/80 shadow-lg">
      <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
      <div className="p-4">
        <h3 className="text-white font-semibold">{project.title}</h3>
        <p className="text-zinc-400 text-sm mt-1">{project.category}</p>
      </div>
    </div>
  )
}
