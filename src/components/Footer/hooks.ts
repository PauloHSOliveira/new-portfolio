import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

const useFooter = () => {
  const router = useRouter()

  const handleClick = useCallback(() => router.push('/contact'), [router])
  return { handleClick }
}

export default useFooter
