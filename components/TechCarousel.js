'use client'

import { useEffect, useRef, useState } from 'react'
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiSupabase,
  SiHeroku,
  SiOpenai,
  SiGithub,
  SiGit
} from 'react-icons/si'
import { FaAws, FaDatabase } from 'react-icons/fa'

/**
 * Horizontal auto-scrolling tech carousel.
 * - Auto-advances every 2s
 * - Pauses on hover
 * - Lights up on hover
 * - Infinite loop (duplicates items)
 */
export default function TechCarousel() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [step, setStep] = useState(220) // px fallback

  // Your items (icons + label + brand-ish color)
  const items = [
    { name: 'Python', Icon: SiPython, color: 'text-blue-500' },
    { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'HTML', Icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS', Icon: SiCss3, color: 'text-blue-400' },
    { name: 'React', Icon: SiReact, color: 'text-cyan-400' },
    { name: 'Django', Icon: SiDjango, color: 'text-emerald-500' },
    { name: 'Flask', Icon: SiFlask, color: 'text-zinc-200' },
    { name: 'Next.js', Icon: SiNextdotjs, color: 'text-white' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'Bootstrap', Icon: SiBootstrap, color: 'text-violet-500' },
    { name: 'SQL', Icon: FaDatabase, color: 'text-indigo-400' },
    { name: 'Git', Icon: SiGit, color: 'text-orange-500' },
    { name: 'GitHub', Icon: SiGithub, color: 'text-zinc-200' },
    { name: 'Vercel', Icon: SiVercel, color: 'text-white' },
    { name: 'Supabase', Icon: SiSupabase, color: 'text-emerald-500' },
    { name: 'AWS', Icon: FaAws, color: 'text-orange-400' },
    { name: 'Heroku', Icon: SiHeroku, color: 'text-purple-400' },
    { name: 'OpenAI', Icon: SiOpenai, color: 'text-emerald-400' }
  ]

  // duplicate to allow seamless looping
  const looped = [...items, ...items]

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    // measure one card (width + gap)
    const firstCard = track.querySelector('[data-card]')
    if (firstCard) {
      const rect = firstCard.getBoundingClientRect()
      // gap-4 is 16px
      setStep(Math.ceil(rect.width + 16))
    }

    let timer
    const start = () => {
      timer = setInterval(() => {
        const max = track.scrollWidth / 2 // half, because we duplicated
        container.scrollBy({ left: step, behavior: 'smooth' })
        // If we reached half of the track, jump back to start instantly
        if (container.scrollLeft + step + 5 >= max) {
          container.scrollTo({ left: 0, behavior: 'auto' })
        }
      }, 2000)
    }
    const stop = () => timer && clearInterval(timer)

    start()

    container.addEventListener('mouseenter', stop)
    container.addEventListener('mouseleave', start)
    window.addEventListener('resize', stop)
    window.addEventListener('resize', start)

    return () => {
      stop()
      container.removeEventListener('mouseenter', stop)
      container.removeEventListener('mouseleave', start)
      window.removeEventListener('resize', stop)
      window.removeEventListener('resize', start)
    }
  }, [step])

  return (
    <section
      aria-label="Technologies carousel"
      className="relative mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-sm backdrop-blur"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-block h-1 w-6 rounded bg-gradient-to-r from-indigo-500 to-purple-500" />
        <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Stack</p>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <div
          ref={trackRef}
          className="flex w-max snap-x snap-mandatory items-center gap-4"
        >
          {looped.map((it, i) => (
            <div
              key={it.name + i}
              data-card
              className="group snap-start"
            >
              <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-2 text-zinc-300 transition hover:scale-[1.04] hover:border-indigo-500/60 hover:shadow hover:shadow-indigo-900/30">
                <it.Icon className={'text-xl ' + it.color} aria-hidden />
                <span className="text-sm">{it.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}