'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const move = e => {
      // offset so the glow centers on the cursor
      el.style.transform = `translate(${e.clientX - 110}px, ${e.clientY - 110}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.25),transparent_60%)] blur-2xl"
      aria-hidden
    />
  )
}