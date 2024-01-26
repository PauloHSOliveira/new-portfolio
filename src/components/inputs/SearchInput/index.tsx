import React from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { useSearch } from '@/providers/SearchProvider'

const SearchInput: React.FC = () => {
  const { setSearchValue } = useSearch()
  return (
    <div className='input bg-black input-bordered w-full flex items-center gap-2'>
      <MagnifyingGlass size={24} color='white' />
      <input
        type='text'
        placeholder='Search Post'
        className='bg-transparent text-white w-full'
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
