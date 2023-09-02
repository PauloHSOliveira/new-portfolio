import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import profilePicture from '/public/static/me.webp'
import { HeaderProps } from '@/types'
import useHeader from './hooks'
import { memo } from 'react'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const Header = memo(({ openMenu, isBuilding, transparent }: HeaderProps) => {
  const { renderMenu, hidden, renderOpenMenu } = useHeader({
    isBuilding,
    transparent,
    openMenu,
  })

  return (
    <nav
      className={`${transparent ? 'bg-transparent' : 'bg-white'} ${
        ibm.className
      } fixed top-0 left-0 w-full ${
        hidden && !transparent ? 'transform -translate-y-full' : ''
      } transition-transform z-10 ${transparent ? 'text-white' : 'text-black'}`}
    >
      <div className="flex justify-between items-center px-4 py-3 md:px-8 lg:px-16 xl:px-24">
        <Link href="/" className="text-xl font-bold">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src={profilePicture}
              alt="Profile Picture"
              width={40}
              height={40}
              className="shadow-lg rounded-2xl"
            />
            PH Oliveira
          </div>
        </Link>
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        {renderOpenMenu()}
        {renderMenu()}
      </div>
    </nav>
  )
})

export { Header }
