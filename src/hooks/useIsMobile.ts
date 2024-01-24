import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = typeof window !== 'undefined' && window.innerWidth <= 768
      setIsMobile(isMobileDevice)
    }

    // Initial check
    checkMobile()

    // Update when the window is resized
    window.addEventListener('resize', checkMobile)

    // Clean up the event listener
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return { isMobile }
}

export { useIsMobile }
