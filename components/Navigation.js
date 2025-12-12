'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hash, setHash] = useState('')

  // Only access window on client
  useEffect(() => {
    setHash(window.location.hash)
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const links = [
    { href: '#home', label: '// home' },
    { href: '#expertise', label: '// expertise' },
    { href: '#projects', label: '// work' },
    { href: '#contact', label: '// contact' }
  ]

  const baseLink = 'text-[11px] uppercase tracking-[0.35em] transition-colors hover:text-white'
  const active = 'text-indigo-400 font-medium'
  const idle = 'text-zinc-400'

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-white">
          Thomas<span className="text-indigo-500">.</span>
        </Link>

        <ul className="hidden items-center gap-6 sm:flex">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${baseLink} ${hash === link.href ? active : idle}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="sm:hidden rounded px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800/60"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="sm:hidden border-t border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <ul className="mx-auto max-w-5xl px-4 py-3 space-y-3">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block ${hash === link.href ? active : idle}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
