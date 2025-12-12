// components/ExpertiseGrid.js
'use client'

import { useEffect, useRef, useState } from 'react'
import {
  SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiDjango, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiGit, SiGithub, SiFlask, SiVercel, SiSupabase,
  SiAws, SiOpenai, SiVisualstudiocode
} from 'react-icons/si'

const SKILLS = [
  { id: 'python', label: 'Python', Icon: SiPython, desc: 'Scripting, APIs, data tasks' },
  { id: 'js', label: 'JavaScript', Icon: SiJavascript, desc: 'Modern ES + DOM + tooling' },
  { id: 'html', label: 'HTML', Icon: SiHtml5, desc: 'Accessible semantic markup' },
  { id: 'css', label: 'CSS', Icon: SiCss3, desc: 'Responsive layout and components' },
  { id: 'react', label: 'React', Icon: SiReact, desc: 'Component-driven UI, hooks' },
  { id: 'next', label: 'Next.js', Icon: SiNextdotjs, desc: 'App router, SSR/SSG, edge' },
  { id: 'tailwind', label: 'Tailwind CSS', Icon: SiTailwindcss, desc: 'Utility-first styling' },
  { id: 'bootstrap', label: 'Bootstrap', Icon: SiBootstrap, desc: 'Quick prototyping' },
  { id: 'django', label: 'Django', Icon: SiDjango, desc: 'Monoliths, admin, ORM' },
  { id: 'flask', label: 'Flask', Icon: SiFlask, desc: 'Microservices and APIs' },
  { id: 'git', label: 'Git', Icon: SiGit, desc: 'Source control & feature branching' },
  { id: 'github', label: 'GitHub', Icon: SiGithub, desc: 'Pull requests & CI' },
  { id: 'vercel', label: 'Vercel', Icon: SiVercel, desc: 'Deployments & edge functions' },
  { id: 'supabase', label: 'Supabase', Icon: SiSupabase, desc: 'Realtime DB & auth' },
  { id: 'aws', label: 'AWS', Icon: SiAws, desc: 'Cloud services & infra basics' },
  { id: 'openai', label: 'OpenAI', Icon: SiOpenai, desc: 'LLM integrations' },
  { id: 'vscode', label: 'VS Code', Icon: SiVisualstudiocode, desc: 'Editor & workflows' }
]

export default function ExpertiseGrid() {
  const containerRef = useRef(null)
  const [visible, setVisible] = useState({}) // map of id => true

  useEffect(() => {
    if (!containerRef.current) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-skill-id')
            if (id) {
              setVisible(prev => ({ ...prev, [id]: true }))
              obs.unobserve(entry.target)
            }
          }
        })
      },
      { root: null, threshold: 0.15 }
    )

    const els = containerRef.current.querySelectorAll('[data-skill-id]')
    els.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="mx-auto max-w-5xl">
      {/* top grid - visual tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {SKILLS.map((it, i) => {
          const Icon = it.Icon
          const isVisible = !!visible[it.id]
          return (
            <div
              key={it.id}
              data-skill-id={it.id}
              className={`transform rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-sm
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-98'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-sm">
                  <Icon className="text-2xl" aria-hidden />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{it.label}</div>
                  <div className="mt-1 text-xs text-zinc-400">{it.desc}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* secondary summary cards (desktop) */}
      <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <h3 className="text-sm font-semibold text-zinc-200">Services I offer</h3>
        <p className="mt-2 text-zinc-400 text-sm">
          End-to-end web development: product thinking, frontend engineering, backend & APIs,
          authentication, data modelling, deployment & observability.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">
            <div className="text-sm font-medium text-white">Frontend Engineering</div>
            <div className="mt-1 text-xs text-zinc-400">
              React, Next.js, responsive UI, accessibility, and performance optimisation.
            </div>
          </div>

          <div className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">
            <div className="text-sm font-medium text-white">Backend & APIs</div>
            <div className="mt-1 text-xs text-zinc-400">
              Node / Python REST APIs, Supabase/Postgres, background jobs and webhooks.
            </div>
          </div>

          <div className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">
            <div className="text-sm font-medium text-white">Deployment & Cloud</div>
            <div className="mt-1 text-xs text-zinc-400">
              Vercel / Supabase / basic AWS services. CI, environment setup and health checks.
            </div>
          </div>

          <div className="rounded-md border border-zinc-800 bg-zinc-900/50 p-3">
            <div className="text-sm font-medium text-white">Consult + Mentorship</div>
            <div className="mt-1 text-xs text-zinc-400">
              Code reviews, architecture advice, interview prep and learning roadmaps.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
