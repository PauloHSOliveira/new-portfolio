'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider as JotaiProvider } from 'jotai'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme =
  | 'matrix'
  | 'dracula'
  | 'monokai'
  | 'nord'
  | 'solarized-dark'
  | 'one-dark'
  | 'ocean'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Stale time: 30 minutes - data is considered fresh for this duration
            staleTime: 30 * 60 * 1000,
            // Cache time (gcTime): 1 hour - unused data stays in cache
            gcTime: 60 * 60 * 1000,
            // Don't refetch on window focus to avoid unnecessary requests
            refetchOnWindowFocus: false,
            // Don't refetch on mount to use cached data when available
            refetchOnMount: false,
            // Enable structural sharing for performance optimization
            structuralSharing: true,
            // Retry failed requests up to 3 times with exponential backoff
            retry: 3,
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
          },
          mutations: {
            // Retry mutations once on failure
            retry: 1,
            retryDelay: 1000,
          },
        },
      })
  )

  const [theme, setThemeState] = useState<Theme>('matrix')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('terminal-theme') as Theme
    if (savedTheme) {
      setThemeState(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('terminal-theme', theme)
    }
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      </JotaiProvider>
      {/* React Query DevTools - only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
