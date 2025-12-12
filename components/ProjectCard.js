// components/ProjectCard.js
import Link from 'next/link'
import CardStars from '@/components/previews/CardStars'
import CardOrbit from '@/components/previews/CardOrbit'
import CardGradient from '@/components/previews/CardGradient'
import Button from './Button'

function Preview({ kind }) {
  if (kind === 'stars') return <CardStars />
  if (kind === 'orbit') return <CardOrbit />
  return <CardGradient />
}

/**
 * @param {{project: {
 *   slug: string, title: string, summary: string,
 *   tags: string[], preview: 'stars'|'orbit'|'gradient',
 *   demoUrl?: string, repoUrl?: string
 * }}} props
 */
export default function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-sm transition hover:border-indigo-700/60 hover:shadow-indigo-900/20">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <Preview kind={project.preview} />
      </div>

      <div className="relative">
        <h3 className="text-lg font-semibold text-white">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        {project.summary && <p className="mt-1 text-sm text-zinc-300">{project.summary}</p>}

        {project.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map(t => (
              <span
                key={t}
                className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-1 text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex gap-3">
          <Link href={`/projects/${project.slug}`} className="rounded-md">
            <Button as="link" className="px-3 py-1.5" small>
              View details
            </Button>
          </Link>

          <Button as="a" href={project.demoUrl || '#'} className="px-3 py-1.5" small>
            Demo
          </Button>

          <Button as="a" href={project.repoUrl || '#'} className="px-3 py-1.5" small>
            Code
          </Button>
        </div>
      </div>
    </article>
  )
}
