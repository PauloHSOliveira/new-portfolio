import ContactPage from '@/components/ContactPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return <ContactPage />
}
