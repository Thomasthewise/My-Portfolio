// components/Hero.js
'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Button from './Button'

export default function Hero() {
  const cardRef = useRef(null)
  const reduceMotion = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduceMotion) return
    const el = cardRef.current
    if (!el) return

    const onMove = e => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const mx = (x / rect.width) - 0.5
      const my = (y / rect.height) - 0.5
      const rx = (-my) * 8
      const ry = (mx) * 10
      el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`
    }
    const onLeave = () => {
      el.style.transition = 'transform 300ms ease'
      el.style.transform = 'rotateX(0deg) rotateY(0deg)'
      setTimeout(() => { el.style.transition = '' }, 320)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [reduceMotion])

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.20),transparent_60%)]" />
      <div className="pointer-events-none absolute left-0 right-0 top-[-2px] mx-auto h-1 w-32 rounded bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 [background-size:200%] animate-[shine_6s_linear_infinite]" />

      <div
        ref={cardRef}
        className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-lg backdrop-blur will-change-transform"
      >
        <div className="mx-auto grid h-24 w-24 place-content-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-4xl font-bold text-white shadow-[0_0_80px_rgba(99,102,241,.35)]">
          T
        </div>

        <h1 className="mt-6 text-center text-3xl font-extrabold tracking-tight text-white">
          Hi, I’m Thomas.
        </h1>

        <p className="mt-2 text-center text-lg text-zinc-300">
          Building software that works — for people.
        </p>

        <p className="mt-3 text-center text-zinc-400">
          I design and develop software with a focus on efficiency, usability, and positive human impact.
        </p>

        <p className="mt-4 text-center text-sm text-zinc-400">
          I.T Programming student at UniCollege WestRand • Cape Town (GMT+2) • Open to remote
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button as="a" href="mailto:YOUR_EMAIL">
            Email me ↗
          </Button>

          <Button as="a" href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
            GitHub
          </Button>

          <Link href="/projects" className="rounded-md">
            <Button as="link">View Projects</Button>
          </Link>

          <Button as="a" href="/resume.pdf">Resume</Button>
        </div>
      </div>
    </section>
  )
}
