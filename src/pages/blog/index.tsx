import { RingLoader } from 'react-spinners'

import { Layout } from '@/components'
import useAlgoliaSearch from '@/hooks/useAlgoliaSearch'
import { GetLayout } from '@/interfaces/global'
import { BlogGrid } from '@/modules/blog/components'
import { useSearch } from '@/providers/SearchProvider'
import { BlogPost } from '@/types'

const getLayout: GetLayout = (page: JSX.Element) => {
  return <Layout containSearch={true}>{page}</Layout>
}

function Blog() {
  const { debouncedSearchValue } = useSearch()

  const { hits, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage, isLoading } =
    useAlgoliaSearch<BlogPost>({
      indexName: 'posts',
      pageParam: 0,
      hitsPerPage: 10,
      query: debouncedSearchValue,
    })

  if (isLoading) {
    return (
      <Layout containSearch={true}>
        <RingLoader color='#000' loading={true} size={100} />
      </Layout>
    )
  }

  return (
    <div className='w-full  mt-48 p-4  md:p-24 md:mt-24 '>
      <BlogGrid posts={hits || []} />

      {hasNextPage && (
        <button onClick={() => fetchNextPage()} className='mt-12 btn w-full h-12'>
          {isFetching || isFetchingNextPage ? <RingLoader size={24} color='#fff' /> : 'Load More'}
        </button>
      )}
    </div>
  )
}

Blog.getLayout = getLayout

export default Blog
