// app/projects/ProjectsClient.js
'use client'

import { useMemo, useState } from 'react'
import { categories, projects } from '@/lib/projects-data'
import ProjectCardImage from '@/components/ProjectCardImage'
import ProjectFilters from '@/components/ProjectFilters'
import FeaturedProject from '@/components/FeaturedProject'

export default function ProjectsClient() {
  const [cat, setCat] = useState('all')

  // counts for filter chips
  const options = useMemo(() => {
    const counts = projects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {})
    return categories.map(c =>
      c.key === 'all'
        ? { ...c, count: projects.length }
        : { ...c, count: counts[c.key] || 0 }
    )
  }, [])

  // featured project
  const featured = useMemo(
    () => projects.find(p => p.featured) || projects[0],
    []
  )

  // filtered list
  const filtered = useMemo(() => {
    const list = projects.filter(p => p.slug !== featured.slug)
    if (cat === 'all') return list
    return list.filter(p => p.category === cat)
  }, [cat, featured.slug])

  // scroll to top function
  const scrollToTop = () => {
    const el = document.querySelector('#top')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main id="top" className="relative z-10 mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white">Work</h1>

      {/* Filter chips */}
      <ProjectFilters options={options} current={cat} onChange={setCat} />

      {/* Featured */}
      <FeaturedProject project={featured} />

      {/* Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {filtered.map(p => (
          <ProjectCardImage key={p.slug} project={p} />
        ))}
      </section>

      {/* Scroll to top */}
      <div className="flex justify-center mt-10">
        <button
          onClick={scrollToTop}
          className="h-12 w-12 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          ⬆
        </button>
      </div>
    </main>
  )
}
