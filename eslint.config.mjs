// eslint.config.mjs — simple, beginner-friendly setup
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintConfigPrettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  // 1) Ignore generated folders
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },

  // 2) Next.js recommended rules (Core Web Vitals, React, etc.)
  ...compat.extends('next/core-web-vitals'),

  // 3) Gentle rules for beginners
  {
    rules: {
      'no-console': 'warn', // allow console but warn
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },

  // 4) Prettier LAST to turn off conflicting formatting rules
  eslintConfigPrettier,
]

export default eslintConfig
