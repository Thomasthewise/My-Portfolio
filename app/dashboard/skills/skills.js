// app/dashboard/skills/page.js
export default function SkillsPage() {
const demo = ['HTML', 'CSS', 'JavaScript']
return (
<div className="p-8 max-w-3xl mx-auto">
<h1 className="text-2xl font-semibold mb-4">Skills</h1>
<ul className="list-disc pl-6 space-y-1 text-zinc-300">
{demo.map((s, i) => (
<li key={i}>{s}</li>
))}
</ul>
</div>
)
}