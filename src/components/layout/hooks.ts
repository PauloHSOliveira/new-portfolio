import { useCallback, useState } from 'react'

import { useIsMobile, useRedirect } from '@/hooks'

const useLayout = () => {
  const { underConstruction } = useRedirect()
  const { isMobile } = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = useCallback(() => setIsOpen((oldState) => !oldState), [])

  return { underConstruction, isMobile, isOpen, handleMenu }
}

export default useLayout
