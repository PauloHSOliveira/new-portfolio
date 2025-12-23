/**
 * Blog Page Error
 *
 * Error page for the blog listing route.
 */

'use client'

import { useEffect } from 'react'
import { ErrorState } from '@/components/ui/ErrorState'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Blog page error:', error)
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
            blog.terminal
          </span>
        </div>
      </div>

      <ErrorState
        type="api"
        title="Blog Loading Error"
        message="Failed to load blog posts. This might be due to a network issue or server error."
        showRetry={true}
        onRetry={reset}
        showHomeLink={true}
        className="mt-12"
      />
    </div>
  )
}
