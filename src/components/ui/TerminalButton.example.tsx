/**
 * Example Terminal Button Component
 *
 * Demonstrates usage of the enhanced design system with Framer Motion
 * This file serves as a reference for building custom terminal-themed components
 */

'use client'

import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface TerminalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  withGlow?: boolean
}

export function TerminalButton({
  children,
  variant = 'default',
  size = 'md',
  withGlow = false,
  className = '',
  ...props
}: TerminalButtonProps) {
  // Size classes
  const sizeClasses = {
    sm: 'px-terminal-sm py-1 text-terminal-sm',
    md: 'px-terminal-lg py-terminal text-terminal-base',
    lg: 'px-terminal-xl py-terminal-md text-terminal-lg',
  }

  // Variant classes
  const variantClasses = {
    default:
      'bg-terminal-bg-light border-terminal-border text-terminal-green hover:bg-terminal-bg-lighter hover:border-terminal-border-bright',
    primary:
      'bg-terminal-green border-terminal-green text-terminal-bg hover:bg-terminal-green-bright hover:border-terminal-green-bright',
    ghost:
      'bg-transparent border-transparent text-terminal-green hover:bg-terminal-bg-light hover:border-terminal-border',
  }

  // Glow classes
  const glowClasses = withGlow
    ? 'shadow-terminal-glow hover:shadow-terminal-glow-strong'
    : ''

  // Transition duration from design system (matches Tailwind's duration-terminal: 150ms)
  const TERMINAL_TRANSITION_DURATION = 0.15
  // Easing function from design system (matches Tailwind's ease-terminal)
  const TERMINAL_EASING = [0.16, 1, 0.3, 1] as const

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: TERMINAL_TRANSITION_DURATION,
        ease: TERMINAL_EASING,
      }}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${glowClasses}
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
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Usage Examples:
/*

// Default button
<TerminalButton onClick={() => console.log('clicked')}>
  Execute
</TerminalButton>

// Primary button with glow
<TerminalButton variant="primary" withGlow>
  Initialize
</TerminalButton>

// Ghost button
<TerminalButton variant="ghost" size="sm">
  Cancel
</TerminalButton>

// Large button with custom class
<TerminalButton size="lg" className="w-full">
  Full Width Action
</TerminalButton>

*/
