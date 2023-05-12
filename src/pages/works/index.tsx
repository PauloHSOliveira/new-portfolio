import dynamic from 'next/dynamic'
import { GetLayout } from '@/interfaces/global'
import { Layout } from '@/components'
const DynamicCarousel = dynamic(() => import('@/components/ProjectCarousel'))

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

const Works = () => {
  return <DynamicCarousel />
}

Works.getLayout = getLayout

export default Works
