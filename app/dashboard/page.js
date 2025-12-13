// app/dashboard/projects/page.js
import Link from 'next/link'


export default function ProjectsIndex() {
// Minimal static list: later you can replace with a client component that fetches Supabase
const sample = [
{ id: 1, title: 'Sample Project', slug: 'sample-project' },
{ id: 2, title: 'Another Project', slug: 'another-project' }
]


return (
<div className="p-8 max-w-4xl mx-auto">
<h1 className="text-2xl font-semibold mb-4">Projects</h1>
<ul className="space-y-3">
{sample.map(p => (
<li key={p.id} className="border rounded p-3">
<h3 className="font-semibold">{p.title}</h3>
<Link href={`/dashboard/projects/${p.slug}`} className="text-sm text-indigo-500 hover:underline">Open</Link>
</li>
))}
</ul>
</div>
)
}