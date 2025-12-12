// components/SectionHeading.js
export default function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="mb-2 inline-flex items-center gap-2">
        <span className="inline-block h-1 w-6 rounded bg-gradient-to-r from-indigo-500 to-purple-500" />
        {kicker && <span className="text-xs uppercase tracking-widest text-zinc-400">{kicker}</span>}
      </div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>}
    </div>
  )
}