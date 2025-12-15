const path = require('node:path')

/**
 * Next.js Configuration
 *
 * Environment Variables:
 * - SERVER_GITHUB_TOKEN: GitHub personal access token for API calls (server-side only)
 *   Set this in Vercel Dashboard: Settings > Environment Variables
 *   Available automatically in API routes via process.env.SERVER_GITHUB_TOKEN
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
