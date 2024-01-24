import { collection, getDocs, query, where } from 'firebase/firestore'
// eslint-disable-next-line import/named
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { CopyBlock, dracula } from 'react-code-blocks'

import { firestore } from '@/config/firebase'
import { BlogPost } from '@/types'

const components = {
  h1: (props: any) => <h1 className='text-3xl text-black' {...props} />,
  h2: (props: any) => <h2 className='text-2xl text-black' {...props} />,
  p: (props: any) => <p {...props} />,
  code: (props: any) => {
    const language = props.className.split('-')[1]
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
}

const Post: React.FC<{
  post: BlogPost
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
}> = ({ post, source }) => (
  <div className='w-full p-24 h-full'>
    {post ? (
      <div className='flex flex-col h-full w-full gap-4'>
        <h1 className='text-4xl text-black font-semibold'>{post.title}</h1>
        <p className='text-gray-400 text-md'>{`Published on ${post.date} by ${post.author}`}</p>

        <MDXRemote {...source} components={components} />
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
)

export async function getServerSideProps(context: any) {
  const { params } = context
  const postID = params?.postID as string

  const postsCollectionRef = collection(firestore, 'posts')
  const q = query(postsCollectionRef, where('slug', '==', postID))
  const querySnapshot = await getDocs(q)

  let post = null

  if (querySnapshot.size > 0) {
    const postData = querySnapshot.docs[0].data() as BlogPost
    post = {
      ...postData,
      body: postData.body || '', // Ensure body is a string to avoid serialization issues
    }
  } else {
    console.error(`Post with slug ${postID} not found`)
  }

  if (!post) {
    return {
      notFound: true,
    }
  }

  const source = await serialize(post.body)

  return {
    props: {
      post: {
        ...post,
        date: '10/11/2023',
      },
      source,
    },
  }
}

export default Post
