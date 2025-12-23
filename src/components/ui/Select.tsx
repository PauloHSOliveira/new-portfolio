/**
 * Select Component
 *
 * Terminal-themed select/dropdown with custom styling.
 * Supports error messages and helper text.
 */

'use client'

import type { SelectHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  placeholder?: string
  variant?: 'default' | 'filled'
  selectClassName?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      error,
      helperText,
      options,
      placeholder,
      variant = 'default',
      className = '',
      selectClassName = '',
      disabled,
      required,
      id,
      ...props
    },
    ref
  ) {
    const hasError = !!error
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

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
            htmlFor={selectId}
            className="text-terminal-sm text-terminal-text-secondary uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-terminal-green ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            className={`
              w-full
              px-terminal-md py-terminal
              pr-10
              ${variantClasses[variant]}
              border
              ${stateClasses}
              rounded-terminal-sm
              text-terminal-text-primary
              font-mono
              text-terminal-base
              transition-all
              duration-terminal
              outline-none
              appearance-none
              cursor-pointer
              disabled:opacity-50
              disabled:cursor-not-allowed
              ${selectClassName}
            `
              .trim()
              .replace(/\s+/g, ' ')}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="absolute right-terminal-md top-1/2 -translate-y-1/2 pointer-events-none text-terminal-green">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </div>
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
  }
)
