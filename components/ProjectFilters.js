'use client'

import React from 'react'

export default function ProjectFilters({ options, current, onChange }) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {options.map(option => (
        <button
          key={option.key}
          onClick={() => onChange(option.key)}
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            current === option.key
              ? 'bg-indigo-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
          }`}
        >
          {option.label} ({option.count})
        </button>
      ))}
    </div>
  )
}
