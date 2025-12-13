// app/dashboard/projects/[slug]/page.js
export default function ProjectSlugPage({ params }) {
const { slug } = params
return (
<div className="p-8 max-w-3xl mx-auto">
<h1 className="text-2xl font-bold mb-2">Project: {slug}</h1>
<p className="text-zinc-400">This is a placeholder project page for <strong>{slug}</strong>. Replace with dynamic content later.</p>
</div>
)
}