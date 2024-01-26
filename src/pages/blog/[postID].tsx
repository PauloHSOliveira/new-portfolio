/* eslint-disable no-console */
import { useMemo } from 'react'

import {
  dehydrate,
  DehydratedState,
  HydrationBoundary,
  QueryClient,
  useQuery,
} from '@tanstack/react-query'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { CopyBlock, dracula } from 'react-code-blocks'
import { RingLoader } from 'react-spinners'
import { toast } from 'react-toastify'

import { firestore } from '@/config/firebase'
import { BlogPost, ReturnPostDate } from '@/types'

const getPostByID = async (postID: string) => {
  try {
    const postsCollectionRef = collection(firestore, 'posts')
    const q = query(postsCollectionRef, where('slug', '==', postID))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      throw new Error(`No docs found for post with slug ${postID}`)
    }

    const postData = querySnapshot.docs[0].data() as BlogPost

    if (!postData) {
      throw new Error(`Post with slug ${postID} not found`)
    }

    const post: ReturnPostDate = {
      ...postData,
      date: postData.date.toDate().toISOString(),
      body: postData.body,
    }

    const source = await serialize(post.body)

    return { post, source }
  } catch (error) {
    console.error(error)
    toast.error('Error on get POST')
  }
}

const components = {
  p: (props: any) => <p {...props} className='text-black' />,
  h1: (props: any) => <h1 className='text-6xl text-black' {...props} />,
  h2: (props: any) => <h2 className='text-5xl text-black' {...props} />,
  h3: (props: any) => <h2 className='text-4xl text-black' {...props} />,
  h4: (props: any) => <h2 className='text-3xl text-black' {...props} />,
  h5: (props: any) => <h2 className='text-2xl text-black' {...props} />,
  h6: (props: any) => <h2 className='text-xl text-black' {...props} />,
  blockquote: (props: any) => <blockquote {...props} />,

  code: (props: any) => {
    const language = props?.className ? props?.className.split('-')[1] : ''
    return (
      <CopyBlock
        text={props.children}
        language={language}
        showLineNumbers={true}
        theme={dracula}
        wrapLongLines={true}
        copied={false}
        codeBlock={true}
      />
    )
  },
  img: (props: any) => <Image width={200} height={200} alt='post_image' {...props} />,
}

const Post = () => {
  const router = useRouter()

  const { postID } = router.query

  const { data, isLoading } = useQuery({
    queryKey: ['post', postID],
    queryFn: () => getPostByID(postID as string),
    gcTime: 60 * 60 * 4,
    refetchOnWindowFocus: true,
  })

  const { post: memoizedPost, source: memoizedSource } = useMemo(() => {
    return {
      post: data?.post,
      source: data?.source,
    }
  }, [data])

  if (isLoading) {
    return (
      <div className='w-full p-24 h-full'>
        <RingLoader size={24} color='#000000' />
      </div>
    )
  }

  if (!memoizedPost || !memoizedSource) {
    return (
      <div className='w-full p-24 h-full'>
        <h1 className='text-4xl text-black'>Something went wrong</h1>
      </div>
    )
  }

  return (
    <div className='w-full p-24 h-full'>
      {!isLoading && memoizedPost && memoizedSource ? (
        <div className='flex flex-col h-full w-full gap-4'>
          <h1 className='text-4xl text-black font-semibold'>{memoizedPost.title}</h1>
          <p className='text-gray-400 text-md'>{`Published on ${memoizedPost.date} by ${memoizedPost.author}`}</p>

          <MDXRemote {...memoizedSource} components={components} />
        </div>
      ) : (
        <div className='flex w-full  items-center justify-center'>
          <RingLoader size={48} color='#000000' />
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { params } = context
  const postID = params?.postID as string

  const queryClient = new QueryClient()
  console.log({ postID })
  await queryClient.prefetchQuery({
    queryKey: ['post', postID],
    queryFn: async () => await getPostByID(postID),
    staleTime: 1000 * 60 * 10,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function PostsRoute({ dehydratedState }: { dehydratedState: DehydratedState }) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Post />
    </HydrationBoundary>
  )
}
