'use client'

export default function PlanetLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* subtle radial glow at top */}
      <div className="absolute inset-0 bg-[radial-gradient(65%_40%_at_50%_0%,rgba(99,102,241,0.20),transparent_60%)]" />

      {/* Planet A (left/top) */}
      <div className="absolute left-[6%] top-[18%]">
        <div className="planet-orbit">
          <div className="h-28 w-28 rounded-full bg-gradient-to-br from-indigo-400 to-violet-700 shadow-[0_0_120px_rgba(99,102,241,.35)]" />
        </div>
      </div>

      {/* Planet B (right/top) */}
      <div className="absolute right-[8%] top-[30%]">
        <div className="float-slow" style={{ animationDelay: '1.2s' }}>
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 shadow-[0_0_80px_rgba(6,182,212,.35)]" />
        </div>
      </div>

      {/* Planet C (bottom/center-left) */}
      <div className="absolute left-[35%] bottom-[12%]">
        <div className="float-slow" style={{ animationDelay: '0.6s' }}>
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 shadow-[0_0_80px_rgba(236,72,153,.35)]" />
        </div>
      </div>
    </div>
  )
}