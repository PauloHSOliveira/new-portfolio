import { useRouter } from 'next/router'
import { useCallback } from 'react'

const useFooter = () => {
  const router = useRouter()

  const handleClick = useCallback(() => router.push('/contact'), [])
  return { handleClick }
}

export default useFooter
