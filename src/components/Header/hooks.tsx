import { useCallback } from 'react'

import Link from 'next/link'

import { HeaderProps } from '@/types'

const useHeader = ({ isBuilding, openMenu }: HeaderProps) => {
  const renderMenu = useCallback(() => {
    if (isBuilding) return null

    return (
      <div className='hidden lg:flex lg:items-center lg:w-auto' id='menu'>
        <ul className='flex flex-col lg:flex-row list-none gap-4'>
          <li className='nav-item'>
            <Link href='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/works' className='nav-link'>
              Works
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/contact' className='nav-link'>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/blog' className='nav-link'>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    )
  }, [isBuilding])

  const renderOpenMenu = useCallback(() => {
    if (!openMenu) return null

    return <input type='checkbox' className='hidden' id='menu-toggle' onClick={openMenu} />
  }, [])

  return { renderMenu, renderOpenMenu }
}

export default useHeader
