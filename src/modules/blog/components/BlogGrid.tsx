import React from 'react'

import BlogCard from './BlogCard'

// import { Container } from './styles';

const BlogGrid: React.FC = () => {
  return (
    <div className='w-full grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default BlogGrid
