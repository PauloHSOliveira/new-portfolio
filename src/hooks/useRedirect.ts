import { useRouter } from 'next/router'
import { useCallback } from 'react'

const underConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true'

const useRedirect = () => {
  const router = useRouter()

  const redirectHome = useCallback(() => {
    if (underConstruction) router.push('/')
  }, [underConstruction])

  return { redirectHome, underConstruction }
}

export { useRedirect }
