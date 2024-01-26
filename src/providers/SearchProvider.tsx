// SearchContext.tsx
import React, { createContext, ReactElement, useContext, useState } from 'react'

import { useDebounce } from 'use-debounce'

// Defina a forma do seu contexto
interface SearchContextProps {
  searchValue: string
  setSearchValue: (value: string) => void
  debouncedSearchValue: string
}

// Crie o contexto
const SearchContext = createContext<SearchContextProps | undefined>(undefined)

// Provedor do Contexto
export const SearchProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')
  const [debouncedSearchValue] = useDebounce(searchValue, 500)

  const contextValue: SearchContextProps = {
    searchValue,
    setSearchValue,
    debouncedSearchValue,
  }

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
}

// Gancho personalizado para usar o contexto
export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch deve ser usado dentro de um SearchProvider')
  }
  return context
}
