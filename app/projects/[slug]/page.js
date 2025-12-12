// app/projects/[slug]/page.js
import { projects } from '@/lib/projects-data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const p = projects.find(pr => pr.slug === params.slug)
  if (!p) return { title: 'Project not found' }
  return {
    title: `${p.title} • Projects`,
    description: p.summary || 'Project details',
    openGraph: { title: p.title, description: p.summary || '', images: [p.image] }
  }
}

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="relative z-10 mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-4">
        <Link href="/projects" className="text-sm text-indigo-300 hover:underline">← Back to Projects</Link>
      </nav>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-sm">
        <div className="relative h-64 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/20 to-transparent" />
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-zinc-400">{project.category}</p>
          <h1 className="mt-1 text-2xl font-bold text-white">{project.title}</h1>
          {project.summary && <p className="mt-2 text-zinc-300">{project.summary}</p>}

          {project.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-1 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-5 flex gap-3">
            <a href={project.demoUrl || '#'} className="rounded-lg border border-zinc-700 px-4 py-2 text-zinc-200 hover:bg-zinc-800/60">Live demo</a>
            <a href={project.repoUrl || '#'} className="rounded-lg border border-zinc-700 px-4 py-2 text-zinc-200 hover:bg-zinc-800/60">Code</a>
          </div>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <p className="mt-2 text-zinc-300">
              Placeholder write‑up for {project.title}. I’ll add a proper case study here:
              Problem → Approach → Results → Learnings, with screenshots and links.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}