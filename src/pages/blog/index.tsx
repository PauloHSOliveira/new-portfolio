import { GetLayout } from '@/interfaces/global'
import { Layout } from '@/components'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

function Blog() {
  return <div>hellow</div>
}

Blog.getLayout = getLayout

export default Blog
