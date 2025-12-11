import AboutPage from '@/components/AboutPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return <AboutPage />
}
