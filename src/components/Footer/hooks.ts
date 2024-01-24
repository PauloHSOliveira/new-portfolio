import { useCallback } from 'react'

import { useRouter } from 'next/router'

const useFooter = () => {
  const router = useRouter()

  const handleClick = useCallback(() => router.push('/contact'), [])
  return { handleClick }
}

export default useFooter
