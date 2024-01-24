import { FC, memo } from 'react'

import { IBM_Plex_Mono } from 'next/font/google'

import { Footer, Header, MobileMenu } from '@/components'
import type { LayoutProps } from '@/types'

import useLayout from './hooks'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const Layout: FC<LayoutProps> = memo(
  ({ children, transparentHeader, containFooterInMobile = true, containSearch }) => {
    const { handleMenu, underConstruction, isMobile, isOpen } = useLayout()

    return (
      <>
        <Header
          openMenu={handleMenu}
          isBuilding={!!underConstruction}
          transparent={transparentHeader}
          containSearch={containSearch}
        />
        {!underConstruction && <MobileMenu isOpen={isOpen} handleMenu={handleMenu} />}
        <main className={`flex min-h-screen flex-col items-center ${ibm.className} bg-neutral`}>
          {children}
        </main>
        {!underConstruction && containFooterInMobile && !isMobile && <Footer />}
      </>
    )
  },
)

export { Layout }
