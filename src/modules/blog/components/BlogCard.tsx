import React from 'react'

import { Clock, Eye, Heart } from '@phosphor-icons/react'

import { BlogPost } from '@/types'

const BlogCard: React.FC<BlogPost> = ({ title, description, timeToRead, views, likes, slug }) => {
  return (
    <a
      className='flex w-full items-center bg-white rounded-xl overflow-hidden shadow-lg border hover:cursor-pointer'
      href={`/blog/${slug}`}
    >
      <div className='p-6 w-full'>
        <h2 className='font-bold text-xl mb-2 text-black'>{title}</h2>
        <p className='text-gray-400'>{description}</p>

        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-1'>
            <Clock size={20} />
            <span className='text-gray-400'>{timeToRead} min</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <Heart size={20} color='red' />
              <span className='text-gray-500'>{likes}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Eye size={20} color='green' />
              <span className='text-gray-500'>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BlogCard
