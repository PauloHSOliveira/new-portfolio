# TanStack Query Configuration & Best Practices

This document outlines the TanStack Query (React Query) setup, configuration, and best practices for this portfolio project.

## Overview

TanStack Query is configured for efficient server state management with automatic caching, background refetching, and error handling.

## Configuration

### Provider Setup

The `QueryClientProvider` is configured in `app/providers.tsx` with the following defaults:

```tsx
new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 60 * 1000,        // 30 minutes
      gcTime: 60 * 60 * 1000,           // 1 hour
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      structuralSharing: true,
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      retry: 1,
      retryDelay: 1000,
    },
  },
})
```

### Configuration Explained

- **staleTime** (30 minutes): How long data is considered fresh. During this time, cached data is served without refetching.
- **gcTime** (1 hour): How long unused data stays in cache before garbage collection.
- **refetchOnWindowFocus** (false): Prevents automatic refetch when user returns to the tab.
- **refetchOnMount** (false): Uses cached data on component mount when available.
- **structuralSharing** (true): Optimizes re-renders by maintaining referential equality for unchanged data.
- **retry** (3 attempts): Automatically retries failed queries.
- **retryDelay**: Exponential backoff strategy (1s, 2s, 4s, capped at 30s).

## DevTools

React Query DevTools are available in development mode only. Press the React Query icon in the bottom corner to open the DevTools panel.

Features:
- Inspect all queries and their states
- View cached data
- Manually trigger refetches
- Monitor query performance

## Query Patterns

### Basic Query Hook

```tsx
import { useQuery } from '@tanstack/react-query'

function useUserData(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId, // Only run if userId exists
  })
}
```

### Using the Hook in Components

```tsx
function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error, refetch } = useUserData(userId)

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  if (!data) return null

  return <div>{data.name}</div>
}
```

### Query Key Factories

Organize query keys using factory functions for easier cache management:

```tsx
export const userKeys = {
  all: ['user'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: string) => [...userKeys.all, 'list', filters] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: string) => [...userKeys.all, 'detail', id] as const,
}
```

Benefits:
- Hierarchical cache invalidation
- Type-safe query keys
- Centralized key management

### Example: GitHub Data Hook

See `src/hooks/useGitHubData.ts` for a complete example:

```tsx
import { useGitHubData } from '@/hooks'

function GitHubStats() {
  const { data, isLoading, error } = useGitHubData()
  
  // Handle loading and error states...
  
  return (
    <div>
      <p>Repos: {data.stats.repos}</p>
      <p>Commits: {data.stats.commits}</p>
    </div>
  )
}
```

## Best Practices

### 1. Always Define Query Keys

Use descriptive, hierarchical query keys:

```tsx
// ✅ Good
queryKey: ['github', 'repos', userId]

// ❌ Bad
queryKey: ['data']
```

### 2. Handle Loading and Error States

Always provide feedback to users:

```tsx
function Component() {
  const { data, isLoading, error } = useMyQuery()

  if (isLoading) return <LoadingIndicator />
  if (error) return <ErrorMessage />
  if (!data) return null

  return <Content data={data} />
}
```

### 3. Use Enabled Option for Conditional Queries

Prevent queries from running until prerequisites are met:

```tsx
const { data } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  enabled: !!userId, // Only fetch if userId is truthy
})
```

### 4. Optimize with Stale Time

Adjust staleTime based on data freshness requirements:

```tsx
// Frequently changing data (user activity)
staleTime: 1 * 60 * 1000 // 1 minute

// Moderately changing data (blog posts)
staleTime: 10 * 60 * 1000 // 10 minutes

// Rarely changing data (static content)
staleTime: 60 * 60 * 1000 // 1 hour
```

### 5. Type Your Queries

Always provide type parameters for type safety:

```tsx
interface User {
  id: string
  name: string
}

const { data } = useQuery<User, Error>({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
})
// data is typed as User | undefined
```

### 6. Error Boundaries

Wrap components using queries in error boundaries:

```tsx
import { ErrorBoundary } from 'react-error-boundary'

<ErrorBoundary fallback={<ErrorFallback />}>
  <ComponentWithQueries />
</ErrorBoundary>
```

### 7. Prefetching Data

Prefetch data on hover or route changes:

```tsx
import { useQueryClient } from '@tanstack/react-query'

function RepoLink({ repoId }: { repoId: string }) {
  const queryClient = useQueryClient()

  const prefetchRepo = () => {
    queryClient.prefetchQuery({
      queryKey: ['repo', repoId],
      queryFn: () => fetchRepo(repoId),
    })
  }

  return (
    <a onMouseEnter={prefetchRepo} href={`/repo/${repoId}`}>
      View Repo
    </a>
  )
}
```

### 8. Manual Cache Updates

Update cache after mutations:

```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query'

function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      // Update the cache
      queryClient.setQueryData(['user', data.id], data)
    },
  })
}
```

### 9. Dependent Queries

Chain queries when one depends on another:

```tsx
const { data: user } = useQuery({
  queryKey: ['user'],
  queryFn: fetchUser,
})

const { data: posts } = useQuery({
  queryKey: ['posts', user?.id],
  queryFn: () => fetchUserPosts(user!.id),
  enabled: !!user, // Only run when user is loaded
})
```

### 10. Avoid Overusing Queries

Not everything needs to be a query. Use regular state for:
- UI-only state (modals, tooltips)
- Form inputs
- Derived data from existing queries

## Error Handling

### Global Error Handling

Configure default error behavior in the QueryClient:

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // Don't retry on 404s
        if (error.status === 404) return false
        return failureCount < 3
      },
    },
  },
})
```

### Per-Query Error Handling

Handle errors specific to individual queries:

```tsx
const { data, error } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  onError: (error) => {
    console.error('Failed to fetch data:', error)
    // Show toast notification
  },
})
```

## Caching Strategy

### Cache Invalidation

Invalidate queries when data becomes stale:

```tsx
import { useQueryClient } from '@tanstack/react-query'

function RefreshButton() {
  const queryClient = useQueryClient()

  const handleRefresh = () => {
    // Invalidate all github queries
    queryClient.invalidateQueries({ queryKey: ['github'] })
  }

  return <button onClick={handleRefresh}>Refresh</button>
}
```

### Cache Persistence

For advanced use cases, persist cache to localStorage:

```tsx
import { QueryClient } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

persistQueryClient({
  queryClient,
  persister,
})
```

## Testing

### Mock Queries in Tests

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })
}

test('renders data', async () => {
  const queryClient = createTestQueryClient()
  
  render(
    <QueryClientProvider client={queryClient}>
      <MyComponent />
    </QueryClientProvider>
  )
  
  // assertions...
})
```

## Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Query Examples](https://tanstack.com/query/latest/docs/react/examples/react/simple)
- [Query Keys Guide](https://tanstack.com/query/latest/docs/react/guides/query-keys)

## Troubleshooting

### Query Not Refetching

Check:
- `staleTime` - Data might still be fresh
- `enabled` - Query might be disabled
- `refetchOnMount` - Set to `true` if needed

### Memory Issues

- Reduce `gcTime` to clean up cache sooner
- Use `removeQueries` to manually clear cache
- Check for query key duplicates

### Performance Issues

- Use `select` to transform data and prevent re-renders
- Implement proper memoization
- Check DevTools for redundant queries
