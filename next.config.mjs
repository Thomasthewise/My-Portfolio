// next.config.mjs — Step 6: Next.js configuration
// This file sets "house rules" for your app:
// - which remote image domains are allowed (Next/Image needs this)
// - basic security headers
// - response compression

const SUPABASE_HOST = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : null

// Build the list of allowed image hosts
const remotePatterns = [
  // Placeholder images
  { protocol: 'https', hostname: 'images.unsplash.com' }
]

// Add Supabase storage host if you’ve set NEXT_PUBLIC_SUPABASE_URL
if (SUPABASE_HOST) {
  remotePatterns.push({
    protocol: 'https',
    hostname: SUPABASE_HOST,
    pathname: '/storage/v1/object/public/**'
  })
}

const nextConfig = {
  reactStrictMode: true,

  // Image optimization: only load from allowed hosts
  images: {
    remotePatterns,
    formats: ['image/avif', 'image/webp']
  },

  // Compress responses (smaller downloads)
  compress: true,

  // Send basic, safe security headers for every route
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent clickjacking (page inside iframes)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Don’t let the browser guess file types
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Reasonable referrer behavior for analytics without oversharing
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
          // Optional hardening later:
          // { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ]
  }
}

export default nextConfig