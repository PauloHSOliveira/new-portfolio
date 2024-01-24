import { Layout } from '@/components'
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel'
import { GetLayout } from '@/interfaces/global'

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
