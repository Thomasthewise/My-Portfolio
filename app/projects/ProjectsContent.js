'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import FeaturedProject from '@/components/FeaturedProject'

// Example project data
const projects = [
  {
    slug: 'project-1',
    title: 'Project One',
    summary: 'This is the first project.',
    tags: ['frontend', 'react'],
    preview: 'stars',
    demoUrl: '#',
    repoUrl: '#',
    featured: true,
    image: '/project1.jpg',
  },
  {
    slug: 'project-2',
    title: 'Project Two',
    summary: 'This is the second project.',
    tags: ['backend', 'node'],
    preview: 'orbit',
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
    image: '/project2.jpg',
  },
]

export default function ProjectsContent() {
  const [cat, setCat] = useState('all')
  const categories = ['all', 'frontend', 'backend', 'fullstack']

  const filteredProjects =
    cat === 'all'
      ? projects
      : projects.filter(p => p.tags.includes(cat))

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-white">Projects</h1>

      {/* Category filter buttons */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-lg border px-3 py-1.5 text-sm ${
              cat === c
                ? 'border-indigo-500 text-indigo-400'
                : 'border-zinc-700 text-zinc-300 hover:border-indigo-400 hover:text-indigo-300'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Featured projects */}
      {projects.filter(p => p.featured).map(p => (
        <div key={p.slug} className="mb-12">
          <FeaturedProject project={p} />
        </div>
      ))}

      {/* Project cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  )
}
