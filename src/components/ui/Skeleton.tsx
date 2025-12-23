/**
 * Skeleton Components
 *
 * Loading placeholders that match the terminal aesthetic.
 * Provides skeleton variants for different content types.
 */

'use client'

import type { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

/**
 * Base Skeleton component with pulse animation
 */
export function Skeleton({ className = '', ...props }: SkeletonProps) {
  return (
    <div
      className={`
        animate-pulse
        bg-terminal-bg-light
        rounded-terminal-sm
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    />
  )
}

/**
 * Card Skeleton - Matches Card component layout
 */
export interface CardSkeletonProps {
  showHeader?: boolean
  showFooter?: boolean
  className?: string
}

export function CardSkeleton({
  showHeader = false,
  showFooter = false,
  className = '',
}: CardSkeletonProps) {
  return (
    <div
      className={`
        border border-terminal-border
        rounded-terminal-md
        overflow-hidden
        bg-terminal-bg-light/50
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {showHeader && (
        <div className="px-terminal-lg py-terminal-md border-b border-terminal-border bg-terminal-bg-light">
          <Skeleton className="h-6 w-1/3" />
        </div>
      )}

      <div className="p-terminal-lg space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>

      {showFooter && (
        <div className="px-terminal-lg py-terminal-md border-t border-terminal-border bg-terminal-bg-light/30">
          <Skeleton className="h-8 w-24" />
        </div>
      )}
    </div>
  )
}

/**
 * Text Skeleton - For headings and paragraphs
 */
export interface TextSkeletonProps {
  variant?: 'heading' | 'paragraph' | 'line'
  lines?: number
  className?: string
}

export function TextSkeleton({
  variant = 'paragraph',
  lines = 3,
  className = '',
}: TextSkeletonProps) {
  if (variant === 'heading') {
    return (
      <Skeleton
        className={`h-8 w-1/2 ${className}`}
        aria-label="Loading heading"
      />
    )
  }

  if (variant === 'line') {
    return (
      <Skeleton
        className={`h-4 w-full ${className}`}
        aria-label="Loading text"
      />
    )
  }

  return (
    <div className={`space-y-3 ${className}`} aria-label="Loading paragraph">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={`text-line-${i}`}
          className={`h-4 ${
            i === lines - 1 ? 'w-4/6' : i % 2 === 0 ? 'w-full' : 'w-5/6'
          }`}
        />
      ))}
    </div>
  )
}

/**
 * Image Skeleton - For image placeholders
 */
export interface ImageSkeletonProps {
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait'
  className?: string
}

export function ImageSkeleton({
  aspectRatio = 'video',
  className = '',
}: ImageSkeletonProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    portrait: 'aspect-[3/4]',
  }

  return (
    <Skeleton
      className={`
        ${aspectClasses[aspectRatio]}
        w-full
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      aria-label="Loading image"
    />
  )
}

/**
 * List Skeleton - For list items
 */
export interface ListSkeletonProps {
  items?: number
  showIcon?: boolean
  className?: string
}

export function ListSkeleton({
  items = 5,
  showIcon = false,
  className = '',
}: ListSkeletonProps) {
  return (
    <div className={`space-y-3 ${className}`} aria-label="Loading list">
      {Array.from({ length: items }).map((_, i) => (
        <div key={`list-item-${i}`} className="flex items-center gap-3">
          {showIcon && <Skeleton className="h-5 w-5 flex-shrink-0" />}
          <Skeleton className={`h-4 ${i % 2 === 0 ? 'w-5/6' : 'w-4/6'}`} />
        </div>
      ))}
    </div>
  )
}

/**
 * Loading Spinner - Optional animated spinner
 */
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({
  size = 'md',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  }

  return (
    <div
      className={`
        ${sizeClasses[size]}
        border-2
        border-terminal-border-light
        border-t-terminal-green
        rounded-full
        animate-spin
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
