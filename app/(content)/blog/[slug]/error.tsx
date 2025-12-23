/**
 * Blog Post Error
 *
 * Error page for individual blog post routes.
 */

'use client'

import { useEffect } from 'react'
import { ErrorState } from '@/components/ui/ErrorState'

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Blog post error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-terminal-bg-dark">
      {/* Terminal Header */}
      <div className="border-b border-terminal-border bg-terminal-bg px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-terminal-green" />
          <span className="ml-4 text-terminal-sm text-terminal-text-dim">
            blog/post.terminal
          </span>
        </div>
      </div>

      <ErrorState
        type="api"
        title="Blog Post Not Available"
        message="Unable to load this blog post. The post might not exist or there was an error fetching it."
        showRetry={true}
        onRetry={reset}
        showHomeLink={true}
        className="mt-12"
      />
    </div>
  )
}
