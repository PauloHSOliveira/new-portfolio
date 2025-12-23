/**
 * Global Error Page
 *
 * Next.js error page that catches errors in the app directory.
 * Must be a Client Component.
 */

'use client'

import { useEffect } from 'react'
import { ErrorState } from '@/components/ui/ErrorState'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console
    console.error('Global error:', error)
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
            error.terminal
          </span>
        </div>
      </div>

      {/* Error Content */}
      <ErrorState
        type="500"
        title="Application Error"
        message={
          error.message ||
          'An unexpected error occurred. Our team has been notified and is working on a fix.'
        }
        showRetry={true}
        onRetry={reset}
        showHomeLink={true}
        className="mt-12"
      />

      {/* Error Details (Development Only) */}
      {process.env.NODE_ENV === 'development' && error.stack && (
        <div className="container mx-auto mt-8 max-w-4xl px-4">
          <details className="rounded-terminal-md border border-terminal-border bg-terminal-bg-darker p-4">
            <summary className="cursor-pointer text-terminal-base text-terminal-green font-semibold uppercase">
              Error Details (Development Only)
            </summary>
            <pre className="mt-4 overflow-x-auto text-terminal-sm text-terminal-text-secondary">
              {error.stack}
            </pre>
            {error.digest && (
              <p className="mt-2 text-terminal-sm text-terminal-text-dim">
                Error Digest: {error.digest}
              </p>
            )}
          </details>
        </div>
      )}
    </div>
  )
}
