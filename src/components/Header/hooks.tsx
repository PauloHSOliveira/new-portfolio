import { HeaderProps } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

const useHeader = ({ isBuilding, transparent, openMenu }: HeaderProps) => {
  const [hidden, setHidden] = useState(!isBuilding || !transparent)

  useEffect(() => {
    if (isBuilding || transparent) return
    let timeout: NodeJS.Timeout

    const handleScroll = () => {
      setHidden(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setHidden(false), 300)
    }

    const handleMouseMove = () => {
      setHidden(false)
      clearTimeout(timeout)
      timeout = setTimeout(() => setHidden(true), 3000)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [transparent, isBuilding])

  const renderMenu = useCallback(() => {
    if (isBuilding) return null

    return (
      <div className="hidden lg:flex lg:items-center lg:w-auto" id="menu">
        <ul className="flex flex-col lg:flex-row list-none gap-4">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/works" className="nav-link">
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }, [isBuilding])

  const renderOpenMenu = useCallback(() => {
    if (!openMenu) return null

    return (
      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        onClick={openMenu}
      />
    )
  }, [])

  return { hidden, renderMenu, renderOpenMenu }
}

export default useHeader
