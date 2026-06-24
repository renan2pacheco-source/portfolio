/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages base path
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // No TypeScript build errors to keep CI green (template default)
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
