/**
 * Section Component
 *
 * Flexible section wrapper with consistent spacing, optional backgrounds,
 * and centered content container.
 */

'use client'

import type { HTMLAttributes, ReactNode } from 'react'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  variant?: 'default' | 'filled' | 'bordered' | 'gradient'
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  centered?: boolean
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
}

export function Section({
  children,
  variant = 'default',
  spacing = 'lg',
  centered = true,
  containerSize = 'lg',
  className = '',
  ...props
}: SectionProps) {
  // Spacing classes
  const spacingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-28',
  }

  // Variant classes for background
  const variantClasses = {
    default: 'bg-transparent',
    filled: 'bg-terminal-bg-light/30',
    bordered:
      'bg-transparent border-y border-terminal-border',
    gradient:
      'bg-gradient-to-b from-transparent via-terminal-bg-light/20 to-transparent',
  }

  // Container size classes
  const containerClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  return (
    <section
      className={`
        ${spacingClasses[spacing]}
        ${variantClasses[variant]}
        relative
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      <div
        className={`
          ${containerClasses[containerSize]}
          ${centered ? 'mx-auto' : ''}
          px-6 md:px-8
        `
          .trim()
          .replace(/\s+/g, ' ')}
      >
        {children}
      </div>
    </section>
  )
}
