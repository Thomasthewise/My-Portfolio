import Link from "next/link";

export default function SupabaseLayout({ children }) {
  return (
    <div className="min-h-screen bg-transparent">
      <nav className="p-4 border-b border-zinc-800">
        <Link href="/" className="text-indigo-400 hover:underline">
          Home
        </Link>
      </nav>

      <main>{children}</main>
    </div>
  );
}
