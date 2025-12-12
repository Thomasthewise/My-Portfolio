'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFlask,
  SiVercel,
  SiSupabase,
  SiOpenai
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

function cx(...parts) {
  return parts.filter(Boolean).join(' ')
}

// Custom VS Code icon
const VSCodeIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 128 128"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M128 64L64 0 0 64 64 128 128 64zM26.7 64L64 26.7l37.3 37.3L64 101.3 26.7 64z"/>
  </svg>
)

/**
 * Cosmic splash intro with twinkling tech icons.
 * Props:
 * duration (ms): how long to show (default 5000)
 * once: 'session' | 'always' | 'local' (default 'session')
 */
export default function SplashScreen({ duration = 5000, once = 'session' }) {
  const [show, setShow] = useState(false)
  const [fade, setFade] = useState(false)
  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    try {
      if (once === 'session' && sessionStorage.getItem('introSeen') === '1') return
      if (once === 'local' && localStorage.getItem('introSeen') === '1') return
    } catch {}

    setShow(true)
    const t1 = setTimeout(() => setFade(true), Math.max(0, duration - 600))
    const t2 = setTimeout(() => {
      setShow(false)
      try {
        if (once === 'session') sessionStorage.setItem('introSeen', '1')
        if (once === 'local') localStorage.setItem('introSeen', '1')
      } catch {}
    }, duration)

    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [duration, once, reduceMotion])

  if (!show) return null

  const icons = [
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
    { name: 'Git', Icon: SiGit, color: 'text-orange-500' },
    { name: 'GitHub', Icon: SiGithub, color: 'text-zinc-200' },
    { name: 'Vercel', Icon: SiVercel, color: 'text-white' },
    { name: 'Supabase', Icon: SiSupabase, color: 'text-emerald-500' },
    { name: 'AWS', Icon: FaAws, color: 'text-orange-400' },
    { name: 'OpenAI', Icon: SiOpenai, color: 'text-emerald-400' },
    { name: 'VS Code', Icon: VSCodeIcon, color: 'text-blue-600' }
  ]

  return (
    <div
      className={cx(
        'fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950',
        fade && 'fade-out'
      )}
      role="dialog"
      aria-label="Loading portfolio"
    >
      {/* background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(65% 40% at 50% 0%, rgba(99,102,241,0.20), transparent 60%)'
        }}
        aria-hidden
      />

      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.9]"
        style={{
          background:
            'radial-gradient(60% 50% at 10% 10%, rgba(255,255,255,.06), transparent 60%), radial-gradient(60% 50% at 90% 20%, rgba(255,255,255,.05), transparent 60%)'
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-2xl px-6">
        <h1 className="mb-6 text-center text-xl font-semibold text-white">
          Initializing Thomas’s stack…
        </h1>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {icons.map((it, i) => (
            <div
              key={it.name + i}
              className={cx(
                'flex h-20 items-center justify-center rounded-xl',
                'border border-zinc-800 bg-zinc-900/60 shadow-sm',
                i % 3 === 0 ? 'twinkle-1' : i % 3 === 1 ? 'twinkle-2' : 'twinkle-3'
              )}
              style={{ animationDelay: `${(i % 5) * 120}ms` }}
              aria-hidden
            >
              <it.Icon className={'text-2xl ' + it.color} />
            </div>
          ))}
        </div>

        <p className="pointer-events-none mt-4 text-center text-xs text-zinc-400">
          Loading assets • Preparing stars • Warming up planets
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => { setFade(true); setTimeout(() => setShow(false), 300) }}
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-800/60"
          >
            Skip intro
          </button>
        </div>
      </div>
    </div>
  )
}
