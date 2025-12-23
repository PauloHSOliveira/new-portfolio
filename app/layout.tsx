import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paulo Oliveira — Senior Software Engineer & Architect',
  description:
    'Senior Software Engineer and Founder with over 6 years of experience in Fintech, AI, and Distributed Systems.',
  keywords: [
    'Paulo Oliveira',
    'Senior Software Engineer',
    'System Architect',
    'Fintech',
    'Node.js',
    'TypeScript',
    'AI',
    'Distributed Systems',
    'Paglua',
    'Marcaai',
  ],
  authors: [{ name: 'Paulo Oliveira' }],
  creator: 'Paulo Oliveira',
  openGraph: {
    type: 'website',
    url: 'https://pholiveira.dev/',
    title: 'Paulo Oliveira | Senior Software Engineer & System Architect',
    description:
      'Senior Software Engineer specializing in high-scale Fintech and AI solutions. Founder of Paglua and Marcaai.',
    images: ['https://avatars.githubusercontent.com/u/41551694?v=4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paulo Oliveira | Senior Software Engineer & System Architect',
    description:
      'Senior Software Engineer specializing in high-scale Fintech and AI solutions. Founder of Paglua and Marcaai.',
    images: ['https://avatars.githubusercontent.com/u/41551694?v=4'],
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://avatars.githubusercontent.com/u/41551694?v=4&s=32"
        />
        <link
          rel="apple-touch-icon"
          href="https://avatars.githubusercontent.com/u/41551694?v=4&s=180"
        />
        <link rel="canonical" href="https://pholiveira.dev/" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css"
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Paulo Oliveira',
              jobTitle: 'Senior Software Engineer',
              url: 'https://pholiveira.dev/',
              sameAs: [
                'https://github.com/PauloHSOliveira',
                'https://linkedin.com/in/paulo-oliveira-ph',
                'https://twitter.com/pholiveira',
              ],
              knowsAbout: [
                'Software Engineering',
                'Fintech',
                'Distributed Systems',
                'Artificial Intelligence',
                'TypeScript',
                'Node.js',
                'System Architecture',
              ],
              description:
                'Senior Software Engineer with expertise in Fintech, AI, and Distributed Systems. Founder of Paglua and Marcaai.',
            }),
          }}
        />
        {/* Analytics Scripts Placeholder - Add PostHog, Google Analytics, or other analytics here */}
      </head>
      <body className={jetbrainsMono.className}>
        <div className="crt-overlay" aria-hidden="true"></div>
        <div className="crt-flicker" aria-hidden="true"></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
