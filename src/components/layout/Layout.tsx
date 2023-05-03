import { FC, ReactNode } from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import { Header, Footer } from '@/components'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-center ${ibm.className} bg-neutral`}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export { Layout }
