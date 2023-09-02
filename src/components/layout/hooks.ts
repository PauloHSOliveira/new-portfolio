import { useIsMobile, useRedirect } from '@/hooks'
import { useCallback, useState } from 'react'

const useLayout = () => {
  const { underConstruction } = useRedirect()
  const { isMobile } = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = useCallback(() => setIsOpen((oldState) => !oldState), [])

  return { underConstruction, isMobile, isOpen, handleMenu }
}

export default useLayout
