import React from 'react'

import { map } from 'lodash'

import { BlogPost } from '@/types'

import BlogCard from './BlogCard'

type BlogPostsType = {
  posts: BlogPost[]
}

const BlogGrid: React.FC<BlogPostsType> = ({ posts }) => {
  return (
    <div className='w-full grid grid-cols-1 gap-8'>
      {map(posts, (post) => (
        <BlogCard key={post?.id} {...post} />
      ))}
    </div>
  )
}

export default BlogGrid
