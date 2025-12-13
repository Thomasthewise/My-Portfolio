import './globals.css'
import Navigation from '@/components/Navigation'
import ReachOut from '@/components/ReachOut'

export const metadata = {
  title: 'Thomas Matla | Developer Portfolio',
  description:
    'Personal portfolio of Thomas Matla, showcasing projects, skills, and a full-stack dashboard built with Next.js and Supabase.',
  keywords: [
    'Thomas Matla',
    'Software Developer',
    'Next.js Portfolio',
    'Supabase',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Thomas Matla' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans bg-[var(--background)] text-[var(--foreground)]">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        <Navigation />

        <div id="main">{children}</div>

        <ReachOut />

        <footer className="mx-auto max-w-4xl border-t border-zinc-200 p-4 text-center text-xs text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} Thomas • Cape Town (GMT+2)
        </footer>
      </body>
    </html>
  )
}
