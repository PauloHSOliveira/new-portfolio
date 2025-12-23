/**
 * Container Component
 *
 * Responsive container with max-width constraints and configurable padding.
 * Used for consistent content width across the application.
 */

'use client'

import type { HTMLAttributes, ReactNode } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  centered?: boolean
  className?: string
}

export function Container({
  children,
  size = 'lg',
  padding = 'md',
  centered = true,
  className = '',
  ...props
}: ContainerProps) {
  // Size classes for max-width
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'px-4 md:px-6',
    md: 'px-6 md:px-8',
    lg: 'px-8 md:px-12',
  }

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${paddingClasses[padding]}
        ${centered ? 'mx-auto' : ''}
        w-full
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </div>
  )
}
