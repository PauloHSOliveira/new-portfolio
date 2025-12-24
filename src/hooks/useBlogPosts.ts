/**
 * TanStack Query hook for fetching blog posts
 *
 * This hook provides a clean interface for fetching blog posts with
 * built-in caching, error handling, and loading states.
 *
 * Note: This is a placeholder implementation for future blog functionality.
 * The actual blog data fetching logic will be implemented when the blog
 * feature is fully developed.
 *
 * @example
 * ```tsx
 * function BlogList() {
 *   const { data: posts, isLoading, error } = useBlogPosts()
 *
 *   if (isLoading) return <div>Loading posts...</div>
 *   if (error) return <div>Error loading posts</div>
 *   if (!posts || posts.length === 0) return <div>No posts yet</div>
 *
 *   return (
 *     <ul>
 *       {posts.map(post => (
 *         <li key={post.slug}>{post.title}</li>
 *       ))}
 *     </ul>
 *   )
 * }
 * ```
 */
import { useQuery } from '@tanstack/react-query'

/**
 * Blog post interface
 * This defines the structure of a blog post
 */
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  readingTime?: number
  author?: string
  featured?: boolean
  content?: string
}

/**
 * Query keys for blog-related queries
 */
export const blogKeys = {
  all: ['blog'] as const,
  posts: () => [...blogKeys.all, 'posts'] as const,
  post: (slug: string) => [...blogKeys.all, 'post', slug] as const,
  tags: () => [...blogKeys.all, 'tags'] as const,
  featured: () => [...blogKeys.all, 'featured'] as const,
}

/**
 * Placeholder function to fetch blog posts
 * TODO: Implement actual blog post fetching logic
 *
 * @returns Promise resolving to array of blog posts
 */
async function fetchBlogPosts(): Promise<BlogPost[]> {
  // Placeholder implementation
  // In the future, this will fetch from your content management system,
  // markdown files, or API endpoint
  return []
}

/**
 * Custom hook to fetch all blog posts
 *
 * Features:
 * - Automatic caching with 10-minute stale time
 * - Retry logic for failed requests
 * - Loading and error states
 * - Type-safe response data
 *
 * @returns Query result with posts data, loading state, and error
 */
export function useBlogPosts() {
  return useQuery<BlogPost[], Error>({
    queryKey: blogKeys.posts(),
    queryFn: fetchBlogPosts,
    // Blog posts can be cached for shorter time as they update less frequently
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  })
}

/**
 * Custom hook to fetch a single blog post by slug
 *
 * @param slug - The unique identifier for the blog post
 * @returns Query result with post data, loading state, and error
 */
export function useBlogPost(slug: string) {
  return useQuery<BlogPost | null, Error>({
    queryKey: blogKeys.post(slug),
    queryFn: async () => {
      // TODO: Implement single post fetching
      // For now, return null
      return null
    },
    // Individual posts can be cached longer
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 60 * 60 * 1000, // 1 hour
    // Only fetch if slug is provided
    enabled: !!slug,
  })
}

/**
 * Custom hook to fetch featured blog posts
 *
 * @returns Query result with featured posts data
 */
export function useFeaturedPosts() {
  return useQuery<BlogPost[], Error>({
    queryKey: blogKeys.featured(),
    queryFn: async () => {
      // TODO: Implement featured posts fetching
      // For now, return empty array
      return []
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  })
}
