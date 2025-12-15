'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30 * 60 * 1000, // 30 minutes - GitHub data doesn't change frequently
            gcTime: 60 * 60 * 1000, // 1 hour - garbage collection time (formerly cacheTime)
            refetchOnWindowFocus: false,
            refetchOnMount: false, // Use cached data if available
            structuralSharing: true, // Prevent unnecessary re-renders
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
