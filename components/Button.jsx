'use client'

import Link from 'next/link'
import React from 'react'

export default function Button({
  as = 'button',      // 'button', 'link', or 'external'
  href,               // URL for link/external
  children,
  className = '',
  onClick,
  ...rest
}) {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-colors ' +
    className

  if (as === 'link') {
    // internal Next.js Link
    if (!href) href = '#' // fallback
    return (
      <Link href={href} className={baseClass} {...rest}>
        {children}
      </Link>
    )
  }

  if (as === 'external') {
    // external <a> link
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={baseClass}
        {...rest}
      >
        {children}
      </a>
    )
  }

  // default: regular button
  return (
    <button className={baseClass} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
