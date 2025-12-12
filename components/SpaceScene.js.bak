'use client'
import { useEffect, useRef } from 'react'

export default function SpaceScene() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })
    let w, h, dpr
    let stars = []
    let meteors = []
    let mx = 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.width = Math.floor(window.innerWidth * dpr)
      h = canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      initStars()
    }

    function initStars() {
      const density = (window.innerWidth * window.innerHeight) / 8000 // higher = more stars
      const count = Math.max(120, Math.min(800, Math.floor(density)))
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 * dpr + 0.2,
        a: Math.random() * 0.6 + 0.4,        // alpha
        tw: Math.random() * Math.PI * 2,     // twinkle phase
        vy: (Math.random() * 0.15 + 0.05) * dpr
      }))
    }

    let lastMeteor = 0
    function loop(ts) {
      rafRef.current = requestAnimationFrame(loop)
      ctx.clearRect(0, 0, w, h)

      // draw stars
      for (const s of stars) {
        // parallax drift (tiny) based on mouse x
        const drift = (mx * dpr) * 0.00003 * s.r
        s.x += drift
        s.y += s.vy
        s.tw += 0.02

        // twinkle
        const alpha = s.a * (0.6 + 0.4 * Math.sin(s.tw))
        ctx.globalAlpha = alpha
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()

        // recycle star
        if (s.y > h + 5) { s.y = -5; s.x = Math.random() * w }
        if (s.x < -5) s.x = w + 5
        if (s.x > w + 5) s.x = -5
      }

      // shooting stars occasionally
      if (!reduceMotion && ts - lastMeteor > 2500 + Math.random() * 3000) {
        lastMeteor = ts
        const startX = Math.random() < 0.5 ? -50 : w + 50
        const startY = Math.random() * (h * 0.5)
        const speed = (Math.random() * 5 + 4) * dpr
        const angle = startX < 0
          ? Math.PI * (Math.random() * 0.2 + 0.75)
          : Math.PI * (Math.random() * 0.2 + 1.05)
        meteors.push({ x: startX, y: startY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1 })
      }

      // draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i]
        ctx.globalAlpha = m.life
        ctx.strokeStyle = 'rgba(180,200,255,0.9)'
        ctx.lineWidth = 2 * dpr
        ctx.beginPath()
        ctx.moveTo(m.x, m.y)
        ctx.lineTo(m.x - m.vx * 0.2, m.y - m.vy * 0.2) // tail
        ctx.stroke()
        m.x += m.vx
        m.y += m.vy
        m.life -= 0.012
        if (m.life <= 0 || m.x < -120 || m.x > w + 120 || m.y > h + 120) {
          meteors.splice(i, 1)
        }
      }

      ctx.globalAlpha = 1
    }

    resize()
    window.addEventListener('resize', resize)
    const onMove = e => { mx = e.clientX - window.innerWidth / 2 }
    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
    />
  )
}