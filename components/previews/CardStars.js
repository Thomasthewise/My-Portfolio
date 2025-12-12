'use client'
import { useEffect, useRef } from 'react'

export default function CardStars() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let w, h, raf
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function size() {
      const rect = c.getBoundingClientRect()
      w = (c.width = Math.floor(rect.width * dpr))
      h = (c.height = Math.floor(rect.height * dpr))
      c.style.width = rect.width + 'px'
      c.style.height = rect.height + 'px'
    }

    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 * dpr + 0.2,
      tw: Math.random() * Math.PI * 2
    }))

    function draw() {
      raf = requestAnimationFrame(draw)
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.tw += 0.06
        const alpha = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.tw))
        ctx.globalAlpha = alpha
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    size()
    draw()
    const ro = new ResizeObserver(size)
    ro.observe(c)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={ref} className="h-full w-full" aria-hidden />
}