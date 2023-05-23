import dynamic from 'next/dynamic'
import { GetLayout } from '@/interfaces/global'
import { Layout } from '@/components'
import { useEffect } from 'react'
import { useRedirect } from '@/hooks'
const DynamicCarousel = dynamic(() => import('@/components/ProjectCarousel'))

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout transparentHeader>{page}</Layout>
}

const Works = () => {
  const { redirectHome } = useRedirect()

  useEffect(() => {
    redirectHome()
  }, [redirectHome])

  return <DynamicCarousel />
}

Works.getLayout = getLayout

export default Works
