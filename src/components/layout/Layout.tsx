import { FC, ReactNode, useCallback, useState } from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import { Header, Footer, MobileMenu } from '@/components'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = useCallback(() => setIsOpen((oldState) => !oldState), [])

  return (
    <>
      <Header openMenu={handleMenu} />
      <MobileMenu isOpen={isOpen} handleMenu={handleMenu} />
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
