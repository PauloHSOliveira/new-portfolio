import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ClientHeader } from '@/components/ClientHeader'
import { ClientFooter } from '@/components/ClientFooter'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: {
    default: 'PH Oliveira DEV | Software Engineer & Fullstack Developer',
    template: '%s | Portfólio',
  },
  description:
    'Hi, I am Paulo Oliveira, a passionate software engineer, designer, and business strategist based in Brazil. With experience in front-end and back-end development, UI/UX design, and digital advertising including Facebook and Google Ads.',
  openGraph: {
    siteName: 'PH Oliveira',
    title: 'PH Oliveira DEV | Software Engineer & Fullstack Developer',
    description:
      'Hi, I am Paulo Oliveira, a passionate software engineer, designer, and business strategist based in Brazil.',
    type: 'website',
    images: [
      {
        url: '/static/developer.webp',
        alt: 'PH Oliveira DEV',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <ClientHeader />
        <main className="flex min-h-screen flex-col items-center justify-center bg-neutral">
          {children}
        </main>
        <ClientFooter />
        <ToastContainer position="top-right" />
      </body>
    </html>
  )
}
