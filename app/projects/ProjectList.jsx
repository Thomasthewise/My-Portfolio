// app/projects/ProjectsClient.jsx
'use client'

import { useMemo, useState } from 'react'
import ProjectCardImage from '@/components/ProjectCardImage'
import ProjectFilters from '@/components/ProjectFilters'
import FeaturedProject from '@/components/FeaturedProject'

/**
 * Client-side Projects UI (filters, featured, grid)
 * Props:
 *  - initialCategories: array from /lib/projects-data
 *  - initialProjects: array from /lib/projects-data
 */
export default function ProjectsClient({ initialCategories = [], initialProjects = [] }) {
  const [cat, setCat] = useState('all')

  // counts for filter chips
  const options = useMemo(() => {
    const counts = initialProjects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {})
    return initialCategories.map(c =>
      c.key === 'all'
        ? { ...c, count: initialProjects.length }
        : { ...c, count: counts[c.key] || 0 }
    )
  }, [initialCategories, initialProjects])

  // get featured and rest
  const featured = useMemo(
    () => initialProjects.find(p => p.featured) || initialProjects[0] || null,
    [initialProjects]
  )

  const filtered = useMemo(() => {
    if (!featured) return []
    const list = initialProjects.filter(p => p.slug !== featured.slug)
    if (cat === 'all') return list
    return list.filter(p => p.category === cat)
  }, [cat, featured, initialProjects])

  return (
    <main className="relative z-10 mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white">Work</h1>

      {/* Filter chips */}
      <ProjectFilters options={options} current={cat} onChange={setCat} />

      {/* Featured */}
      {featured && <FeaturedProject project={featured} />}

      {/* Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <ProjectCardImage key={p.slug} project={p} />
        ))}
      </section>
    </main>
  )
}
