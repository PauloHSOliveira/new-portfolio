import React from 'react'

import { Clock, Eye } from '@phosphor-icons/react'

const BlogCard: React.FC = () => {
  return (
    <a className='w-full bg-white rounded-xl overflow-hidden shadow-lg hover:cursor-pointer'>
      <div className='relative' style={{ paddingBottom: '50%' }}>
        <img
          className='absolute top-0 left-0 w-full h-full object-cover object-center'
          src='https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          alt='Car'
        />
      </div>
      <div className='p-6'>
        <h2 className='font-bold text-xl mb-2'>Life Hack</h2>
        <p className='text-gray-700'>How to park your car in your garage?</p>

        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center'>
            <Clock />
            <span className='text-gray-500'>10 min read</span>
          </div>
          <div className='flex items-center'>
            <Eye />
            <span className='text-gray-500'>500 views</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BlogCard
