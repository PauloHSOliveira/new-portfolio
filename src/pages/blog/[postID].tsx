import React, { useMemo } from 'react'

import { useRouter } from 'next/router'

const Post: React.FC = () => {
  const router = useRouter()

  const postID = useMemo(() => router.query.postID, [router.query.postID])

  return <div>{postID}</div>
}

export default Post
