/**
 * TanStack Query hook for fetching GitHub data
 *
 * This hook provides a clean interface for fetching GitHub statistics,
 * repositories, and activity data with built-in caching, error handling,
 * and loading states.
 *
 * @example
 * ```tsx
 * function GitHubStats() {
 *   const { data, isLoading, error } = useGitHubData()
 *
 *   if (isLoading) return <div>Loading...</div>
 *   if (error) return <div>Error: {error.message}</div>
 *   if (!data) return null
 *
 *   return (
 *     <div>
 *       <h2>Stats</h2>
 *       <p>Repos: {data.stats.repos}</p>
 *       <p>Commits: {data.stats.commits}</p>
 *     </div>
 *   )
 * }
 * ```
 */
import { useQuery } from '@tanstack/react-query'
import { fetchAllGitHubData } from '@/app/services/githubService'
import type { ContributionDay, GitHubRepo, GitHubStats } from '@/app/types'

/**
 * Query key for GitHub data
 * Using an array allows for hierarchical caching and invalidation
 */
export const GITHUB_DATA_QUERY_KEY = ['github', 'all-data'] as const

/**
 * Response type for GitHub data query
 */
export interface GitHubDataResponse {
  stats: GitHubStats
  repos: GitHubRepo[]
  activity: ContributionDay[]
}

/**
 * Custom hook to fetch all GitHub data (stats, repos, and activity)
 *
 * Features:
 * - Automatic caching with 30-minute stale time
 * - Retry logic for failed requests (3 retries with exponential backoff)
 * - Loading and error states
 * - Type-safe response data
 *
 * @returns Query result with data, loading state, and error
 */
export function useGitHubData() {
  return useQuery<GitHubDataResponse, Error>({
    queryKey: GITHUB_DATA_QUERY_KEY,
    queryFn: fetchAllGitHubData,
    // Override defaults for GitHub data if needed
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })
}

/**
 * Query key factory for GitHub-related queries
 * This pattern makes it easy to invalidate or refetch related queries
 */
export const githubKeys = {
  all: ['github'] as const,
  data: () => [...githubKeys.all, 'all-data'] as const,
  stats: () => [...githubKeys.all, 'stats'] as const,
  repos: () => [...githubKeys.all, 'repos'] as const,
  activity: (year?: number) =>
    year
      ? ([...githubKeys.all, 'activity', year] as const)
      : ([...githubKeys.all, 'activity'] as const),
  readme: (fullName: string) =>
    [...githubKeys.all, 'readme', fullName] as const,
}
