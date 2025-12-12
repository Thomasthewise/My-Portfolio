/**
 * @fileoverview Root layout for the portfolio. Provides global metadata,
 * the top Navigation, the ReachOut footer section, and the copyright footer.
 * @component Layout
 */

import './globals.css'
import Navigation from '@/components/Navigation'
import ReachOut from '@/components/ReachOut'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Thomas • Portfolio',
    template: '%s • Thomas'
  },
  description:
    'I.T Programming student at UniCollege WestRand. Building software that works — for people.',
  openGraph: {
    title: 'Thomas • Portfolio',
    description:
      'I.T Programming student at UniCollege WestRand. Building software that works — for people.',
    url: siteUrl,
    siteName: 'Thomas • Portfolio',
    locale: 'en_ZA',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
}

/**
 * Root layout wraps every page with the global frame:
 * - Navigation at the top
 * - Page content in the middle
 * - "Reach Out" section and footer at the bottom
 *
 * Note: JSDoc uses Closure types, so keep this simple.
 * @param {{children: *}} props
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Use your CSS variables from globals.css */}
      <body className="min-h-screen font-sans bg-[var(--background)] text-[var(--foreground)]">
        {/* Accessibility: skip link for keyboard users */}
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        {/* Top navigation (sticky) */}
        <Navigation />

        {/* Main page content */}
        <div id="main">{children}</div>

        {/* Footer "Reach Out" section (contact card) */}
        <ReachOut />

        {/* Copyright footer */}
        <footer className="mx-auto max-w-4xl border-t border-zinc-200 p-4 text-center text-xs text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} Thomas • Cape Town (GMT+2)
        </footer>
      </body>
    </html>
  )
}