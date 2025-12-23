/**
 * Button Component
 *
 * Terminal-themed button with multiple variants and states.
 * Supports loading states, icons, and custom styling.
 */

'use client'

import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  > {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-terminal-sm py-1 text-terminal-sm',
    md: 'px-terminal-lg py-terminal text-terminal-base',
    lg: 'px-terminal-xl py-terminal-md text-terminal-lg',
  }

  // Variant classes
  const variantClasses = {
    primary:
      'bg-terminal-green border-terminal-green text-terminal-bg hover:bg-terminal-green-bright hover:border-terminal-green-bright hover:shadow-terminal-glow',
    secondary:
      'bg-terminal-bg-light border-terminal-border text-terminal-green hover:bg-terminal-bg-lighter hover:border-terminal-border-bright hover:shadow-terminal',
    outline:
      'bg-transparent border-terminal-green text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green-bright hover:shadow-terminal-glow',
    ghost:
      'bg-transparent border-transparent text-terminal-green hover:bg-terminal-bg-light hover:border-terminal-border',
  }

  const isDisabled = disabled || isLoading

  return (
    <motion.button
      whileHover={!isDisabled ? { scale: 1.02 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      transition={{
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        inline-flex items-center justify-center gap-2
        border
        rounded-terminal-sm
        font-mono
        uppercase
        tracking-wider
        font-bold
        transition-all
        duration-terminal
        ease-terminal
        disabled:opacity-50
        disabled:cursor-not-allowed
        relative
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="animate-pulse-glow">...</span>
        </span>
      )}
      <span
        className={`flex items-center gap-2 ${isLoading ? 'opacity-0' : ''}`}
      >
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </span>
    </motion.button>
  )
}
