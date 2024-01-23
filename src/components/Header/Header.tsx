import { IBM_Plex_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

// eslint-disable-next-line import/no-unresolved
import profilePicture from '/public/static/me.webp'

import { HeaderProps } from '@/types'

import { memo } from 'react'

import useHeader from './hooks'
import SearchInput from '../inputs/SearchInput'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const Header = memo(({ openMenu, isBuilding, transparent, containSearch }: HeaderProps) => {
  const { renderMenu, renderOpenMenu } = useHeader({
    isBuilding,
    transparent,
    openMenu,
  })

  return (
    <nav
      className={`${transparent ? 'bg-transparent' : 'bg-white'} ${
        ibm.className
      } fixed top-0 left-0 w-full z-10 ${transparent ? 'text-white' : 'text-black'}`}
    >
      <div className='flex justify-between items-center px-4 py-3 md:px-8 lg:px-16 xl:px-24'>
        <Link href='/' className='text-xl font-bold'>
          <div className='flex gap-2 items-center justify-center'>
            <Image
              src={profilePicture}
              alt='Profile Picture'
              width={40}
              height={40}
              className='shadow-lg rounded-2xl'
            />
            PH Oliveira
          </div>
        </Link>
        <label htmlFor='menu-toggle' className='cursor-pointer lg:hidden'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
        {renderOpenMenu()}
        {renderMenu()}
      </div>
      {containSearch && (
        <div className='p-6'>
          <SearchInput />
        </div>
      )}
    </nav>
  )
})

export { Header }
