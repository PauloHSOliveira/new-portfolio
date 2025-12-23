/**
 * Input Component
 *
 * Terminal-themed input field with validation states and icons.
 * Supports error messages and helper text.
 */

'use client'

import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: 'default' | 'filled'
  inputClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    variant = 'default',
    className = '',
    inputClassName = '',
    disabled,
    required,
    id,
    ...props
  },
  ref
) {
  const hasError = !!error
  const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`

  const variantClasses = {
    default: 'bg-terminal-bg-darker',
    filled: 'bg-terminal-bg-light',
  }

  const stateClasses = hasError
    ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(255,0,0,0.3)]'
    : 'border-terminal-border focus:border-terminal-green focus:shadow-terminal-glow'

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-terminal-sm text-terminal-text-secondary uppercase tracking-wider"
        >
          {label}
          {required && <span className="text-terminal-green ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-terminal-md top-1/2 -translate-y-1/2 text-terminal-text-tertiary">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          required={required}
          className={`
              w-full
              px-terminal-md py-terminal
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${variantClasses[variant]}
              border
              ${stateClasses}
              rounded-terminal-sm
              text-terminal-text-primary
              font-mono
              text-terminal-base
              placeholder:text-terminal-text-dim
              transition-all
              duration-terminal
              outline-none
              disabled:opacity-50
              disabled:cursor-not-allowed
              ${inputClassName}
            `
            .trim()
            .replace(/\s+/g, ' ')}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-terminal-md top-1/2 -translate-y-1/2 text-terminal-text-tertiary">
            {rightIcon}
          </div>
        )}
      </div>

      {(error || helperText) && (
        <p
          className={`
              text-terminal-xs
              ${hasError ? 'text-red-500' : 'text-terminal-text-tertiary'}
            `}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
})
