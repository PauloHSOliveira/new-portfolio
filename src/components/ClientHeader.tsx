'use client'

import { Header } from './Header'
import { useState } from 'react'
import { MobileMenu } from './MobileMenu'

export function ClientHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header openMenu={handleMenu} isBuilding={false} transparent={false} />
      <MobileMenu isOpen={isOpen} handleMenu={handleMenu} />
    </>
  )
}
