import { FC, memo } from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import { Header, Footer, MobileMenu } from '@/components'
import { LayoutProps } from '@/types'
import useLayout from './hooks'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const Layout: FC<LayoutProps> = memo(
  ({ children, transparentHeader, containFooterInMobile = true }) => {
    const { handleMenu, underConstruction, isMobile, isOpen } = useLayout()

    return (
      <>
        <Header
          openMenu={handleMenu}
          isBuilding={!!underConstruction}
          transparent={transparentHeader}
        />
        {!underConstruction && (
          <MobileMenu isOpen={isOpen} handleMenu={handleMenu} />
        )}
        <main
          className={`flex min-h-screen flex-col items-center justify-center ${ibm.className} bg-neutral`}
        >
          {children}
        </main>
        {!underConstruction && containFooterInMobile && !isMobile && <Footer />}
      </>
    )
  }
)

export { Layout }
