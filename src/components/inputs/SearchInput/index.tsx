import React from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

const SearchInput: React.FC = () => {
  return (
    <div className='input bg-black input-bordered w-full flex items-center gap-2'>
      <MagnifyingGlass size={24} />
      <input type='text' placeholder='Search Post' className='bg-transparent' />
    </div>
  )
}

export default SearchInput
