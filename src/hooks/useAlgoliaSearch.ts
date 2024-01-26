import { useMemo } from 'react'

import { Hit } from '@algolia/client-search'
import { useInfiniteQuery } from '@tanstack/react-query'

import { algoliaClient } from '@/config/algolia'

export type FacetFilters = string | Array<string | string[]> | undefined

type SearchOptions = {
  indexName: string
  query: string
  pageParam: number
  hitsPerPage: number
  facetFilters?: FacetFilters
}

export async function search<TData>({
  indexName,
  query,
  pageParam = 0,
  hitsPerPage = 10,
  facetFilters = [],
}: SearchOptions): Promise<{
  hits: Hit<TData>[]
  nextPage: number | undefined
}> {
  const index = algoliaClient.initIndex(indexName)

  const { hits, page, nbPages } = await index.search<TData>(query, {
    page: pageParam,
    hitsPerPage,
    facetFilters,
    cacheable: false,
  })

  const nextPage = page + 1 < nbPages ? page + 1 : undefined

  return { hits, nextPage }
}

const useAlgoliaSearch = <T>({ indexName, facetFilters, query, hitsPerPage }: SearchOptions) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [indexName, facetFilters, query, hitsPerPage],
    queryFn: ({ pageParam }) =>
      search<T>({ indexName, facetFilters, pageParam, hitsPerPage, query }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })

  const hits = useMemo(() => data?.pages.map((page) => page.hits).flat(), [data?.pages])

  return {
    hits,
    isFetchingNextPage,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,
    isLoading,
  }
}

export default useAlgoliaSearch
