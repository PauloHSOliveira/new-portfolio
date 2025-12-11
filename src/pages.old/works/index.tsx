import { GetLayout } from '@/interfaces/global'
import { Layout } from '@/components'
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel'

const getLayout: GetLayout = (page: JSX.Element) => {
  return (
    <Layout transparentHeader containFooterInMobile={false}>
      {page}
    </Layout>
  )
}

const Works = () => {
  return <ProjectCarousel />
}

Works.getLayout = getLayout

export default Works
