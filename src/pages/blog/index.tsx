import { Layout } from '@/components'
import SearchInput from '@/components/inputs/SearchInput'
import { GetLayout } from '@/interfaces/global'
import { BlogGrid } from '@/modules/blog/components'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout>{page}</Layout>
}

function Blog() {
  return (
    <div className='w-full p-4 md:p-24'>
      <div className='mb-12'>
        <SearchInput />
      </div>
      <BlogGrid />
    </div>
  )
}

Blog.getLayout = getLayout

export default Blog
