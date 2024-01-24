import { useCallback } from 'react'

import { useRouter } from 'next/router'

const underConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true'

const useRedirect = () => {
  const router = useRouter()

  const redirectHome = useCallback(() => {
    if (underConstruction) router.push('/')
  }, [underConstruction])

  return { redirectHome, underConstruction }
}

export { useRedirect }
