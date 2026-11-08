import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css'
      }
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'www.giuntipsy.com'
      }
    ]
  }
}

export default nextConfig
