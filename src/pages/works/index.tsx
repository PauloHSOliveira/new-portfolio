import { GetLayout } from '@/interfaces/global'
import { Layout, DynamicCarousel } from '@/components'

const getLayout: GetLayout = (page: JSX.Element) => {
  return (
    <Layout transparentHeader containFooterInMobile={false}>
      {page}
    </Layout>
  )
}

const Works = () => {
  return <DynamicCarousel />
}

Works.getLayout = getLayout

export default Works
