/**
 * Card Component
 *
 * Terminal-themed card with hover effects and optional header/footer.
 * Supports different variants and interactive states.
 */

'use client'

import { motion } from 'framer-motion'
import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  > {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost'
  withHover?: boolean
  withGlow?: boolean
  className?: string
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Card({
  children,
  variant = 'default',
  withHover = true,
  withGlow = false,
  className = '',
  ...props
}: CardProps) {
  const variantClasses = {
    default: 'bg-terminal-bg-light/50 border-terminal-border',
    elevated:
      'bg-terminal-bg-light border-terminal-border-light shadow-terminal-md',
    outlined: 'bg-transparent border-terminal-green/30',
    ghost: 'bg-transparent border-transparent',
  }

  const hoverClasses = withHover
    ? 'hover:border-terminal-border-bright hover:shadow-terminal transition-all duration-terminal-slow'
    : ''

  const glowClasses = withGlow ? 'shadow-terminal-glow' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        ${variantClasses[variant]}
        ${hoverClasses}
        ${glowClasses}
        border
        rounded-terminal-md
        overflow-hidden
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({
  children,
  className = '',
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={`
        px-terminal-lg py-terminal-md
        border-b border-terminal-border
        bg-terminal-bg-light
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

export function CardContent({
  children,
  className = '',
  ...props
}: CardContentProps) {
  return (
    <div
      className={`
        p-terminal-lg
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

export function CardFooter({
  children,
  className = '',
  ...props
}: CardFooterProps) {
  return (
    <div
      className={`
        px-terminal-lg py-terminal-md
        border-t border-terminal-border
        bg-terminal-bg-light/30
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
