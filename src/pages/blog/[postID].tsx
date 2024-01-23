import React, { useCallback, useEffect, useState } from 'react'

import { collection, getDocs, query, where } from 'firebase/firestore'
import { useRouter } from 'next/router'

import { firestore } from '@/config/firebase'
import { BlogPost } from '@/types'

const postsCollectionRef = collection(firestore, 'posts')

const Post: React.FC = () => {
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)

  const postID = router.query.postID as string // Substitua `any` pelo tipo correto do seu objeto Post

  const getPost = useCallback(async () => {
    if (postID) {
      const q = query(postsCollectionRef, where('slug', '==', postID))
      const querySnapshot = await getDocs(q)

      if (querySnapshot.size > 0) {
        const postData = querySnapshot.docs[0].data() as BlogPost
        setPost(postData)
      } else {
        console.error(`Post with slug ${postID} not found`)
      }
    }
  }, [postID])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{`Published on ${post.date} by ${post.author}`}</p>

          {post.body}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Post
