/**
 * ErrorState Component
 *
 * Terminal-themed error display component with retry functionality.
 * Supports different error types: 404, 500, network, API errors.
 */

'use client'

import { AlertTriangle, Home, RefreshCw, WifiOff, XCircle } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

export interface ErrorStateProps {
  /**
   * Type of error to display
   */
  type?: '404' | '500' | 'network' | 'api' | 'generic'
  /**
   * Custom error title
   */
  title?: string
  /**
   * Custom error message
   */
  message?: string
  /**
   * Custom icon to display
   */
  icon?: ReactNode
  /**
   * Show retry button
   */
  showRetry?: boolean
  /**
   * Retry callback function
   */
  onRetry?: () => void
  /**
   * Show home link
   */
  showHomeLink?: boolean
  /**
   * Additional className
   */
  className?: string
}

const errorConfig = {
  '404': {
    icon: XCircle,
    title: '404 - Page Not Found',
    message:
      'The page you are looking for does not exist. It might have been moved or deleted.',
    iconColor: 'text-terminal-green',
  },
  '500': {
    icon: AlertTriangle,
    title: '500 - Server Error',
    message:
      'An unexpected error occurred on the server. Please try again later.',
    iconColor: 'text-terminal-green-dim',
  },
  network: {
    icon: WifiOff,
    title: 'Network Error',
    message:
      'Unable to connect to the server. Please check your internet connection and try again.',
    iconColor: 'text-terminal-green-dim',
  },
  api: {
    icon: AlertTriangle,
    title: 'API Error',
    message:
      'Failed to fetch data from the server. Please try again in a moment.',
    iconColor: 'text-terminal-green-dim',
  },
  generic: {
    icon: AlertTriangle,
    title: 'Something Went Wrong',
    message:
      'An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.',
    iconColor: 'text-terminal-green',
  },
}

export function ErrorState({
  type = 'generic',
  title,
  message,
  icon,
  showRetry = true,
  onRetry,
  showHomeLink = true,
  className = '',
}: ErrorStateProps) {
  const config = errorConfig[type]
  const IconComponent = icon || config.icon
  const errorTitle = title || config.title
  const errorMessage = message || config.message

  return (
    <div
      className={`
        flex min-h-[400px] flex-col items-center justify-center
        px-4 py-12 text-center
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {/* Error Icon */}
      <div
        className={`
          mb-6 flex h-24 w-24 items-center justify-center
          rounded-terminal-lg border-2 border-terminal-border
          bg-terminal-bg-light
          ${config.iconColor}
        `
          .trim()
          .replace(/\s+/g, ' ')}
      >
        {icon ? (
          icon
        ) : typeof IconComponent === 'function' ? (
          <IconComponent size={48} strokeWidth={1.5} />
        ) : (
          IconComponent
        )}
      </div>

      {/* Error Title */}
      <h1
        className="
          mb-4 text-terminal-xl font-bold text-terminal-green
          uppercase tracking-wider
        "
      >
        {errorTitle}
      </h1>

      {/* Error Message */}
      <p
        className="
          mb-8 max-w-md text-terminal-base text-terminal-text-secondary
          leading-relaxed
        "
      >
        {errorMessage}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {showRetry && onRetry && (
          <Button
            variant="primary"
            size="md"
            onClick={onRetry}
            leftIcon={<RefreshCw size={18} />}
            className="min-w-[140px]"
          >
            Try Again
          </Button>
        )}

        {showHomeLink && (
          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-2
              rounded-terminal-sm border-2 border-terminal-border
              bg-transparent px-terminal-lg py-terminal
              text-terminal-base text-terminal-text-primary
              transition-all duration-terminal
              hover:border-terminal-green hover:bg-terminal-bg-light
              hover:text-terminal-green hover:shadow-terminal
              min-w-[140px]
            "
          >
            <Home size={18} />
            Go Home
          </Link>
        )}
      </div>

      {/* Terminal-style error code */}
      <div
        className="
          mt-8 rounded-terminal-sm border border-terminal-border
          bg-terminal-bg-darker px-4 py-2
          font-mono text-terminal-sm text-terminal-text-dim
        "
      >
        <span className="text-terminal-green">[ERROR]</span>{' '}
        {type.toUpperCase()}
        _ERROR_CODE
      </div>
    </div>
  )
}

export default ErrorState
