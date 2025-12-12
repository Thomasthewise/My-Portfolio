export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/95 p-6 text-center">
        <h1 className="text-xl font-semibold text-white">Project not found</h1>
        <p className="mt-2 text-zinc-400">
          The cosmos couldn’t locate that project. Try the projects list.
        </p>
        <a href="/projects" className="mt-4 inline-block text-indigo-300 hover:underline">
          Back to Projects
        </a>
      </div>
    </main>
  )
}