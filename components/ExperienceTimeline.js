// components/ExperienceTimeline.js
'use client'
import { useEffect, useRef, useState } from 'react'

const EVENTS = [
  { year: '2026', title: 'UniCollege — IT Programming', detail: 'Full-time coursework, back+front projects & Certiport prep' },
  { year: '2025', title: 'Raspberry Pi / Robotics Projects', detail: 'Hardware + Python projects and dashboard work' },
  { year: '2024', title: 'Personal Portfolio', detail: 'Built and deployed portfolio using Next.js, Tailwind & Supabase' },
  { year: '2022', title: 'Started coding path', detail: 'Self-study, projects, small freelance work' }
]

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setVisible(true)
      })
    }, { threshold: 0.15 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="mx-auto max-w-3xl">
      <div className="relative pl-6">
        <div className="absolute left-2 top-0 h-full w-[2px] bg-zinc-800" />
        <ul className="space-y-6">
          {EVENTS.map((ev, i) => (
            <li
              key={ev.year}
              className={`relative flex gap-4 items-start ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'} transition-all duration-700`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="z-10 -ml-6 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white shadow-sm">
                {ev.year}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{ev.title}</div>
                <div className="mt-1 text-xs text-zinc-400">{ev.detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
