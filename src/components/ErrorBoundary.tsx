/**
 * ErrorBoundary Component
 *
 * React Error Boundary to catch rendering errors in component trees.
 * Displays a terminal-themed error state when errors occur.
 */

'use client'

import { Component, type ErrorInfo, type ReactNode } from 'react'
import { ErrorState } from '@/components/ui/ErrorState'

interface ErrorBoundaryProps {
  children: ReactNode
  /**
   * Fallback UI to display when an error occurs
   */
  fallback?: ReactNode
  /**
   * Callback when an error is caught
   */
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  /**
   * Custom error message
   */
  errorMessage?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * ErrorBoundary catches React component errors and displays a fallback UI.
 *
 * Usage:
 * ```tsx
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo)

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error state
      return (
        <ErrorState
          type="generic"
          title="Rendering Error"
          message={
            this.props.errorMessage ||
            this.state.error?.message ||
            'An error occurred while rendering this component. Please try refreshing the page.'
          }
          showRetry={true}
          onRetry={this.handleReset}
          showHomeLink={true}
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
