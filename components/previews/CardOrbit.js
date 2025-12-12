'use client'

export default function CardOrbit() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-700/40" />
      <div className="planet-dot" />
      <style jsx>{`
        .planet-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 10px;
          height: 10px;
          background: #8b5cf6;
          border-radius: 9999px;
          box-shadow: 0 0 18px rgba(139, 92, 246, 0.7);
          transform-origin: -56px 0;
          animation: orbit-card 8s linear infinite;
        }
        @keyframes orbit-card {
          from { transform: rotate(0deg) translateX(0) }
          to   { transform: rotate(360deg) translateX(0) }
        }
      `}</style>
    </div>
  )
}