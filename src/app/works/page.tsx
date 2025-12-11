import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Works',
}

export default function Works() {
  return <ProjectCarousel />
}
