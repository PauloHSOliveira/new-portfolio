/**
 * Radio Component
 *
 * Terminal-themed radio button with custom styling and animations.
 * Supports labels, descriptions, and disabled states.
 */

'use client'

import { motion } from 'framer-motion'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { forwardRef, useId } from 'react'

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
  radioClassName?: string
}

export interface RadioGroupProps {
  children: ReactNode
  label?: string
  error?: string
  className?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    label,
    description,
    className = '',
    radioClassName = '',
    disabled,
    checked,
    ...props
  },
  ref
) {
  return (
    <label
      className={`
          inline-flex items-start gap-terminal-sm
          cursor-pointer
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      <div className="relative flex items-center justify-center">
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          checked={checked}
          className="sr-only peer"
          {...props}
        />
        <div
          className={`
              w-5 h-5
              border-2
              rounded-full
              bg-terminal-bg-darker
              border-terminal-border
              peer-checked:border-terminal-green
              peer-focus:border-terminal-green
              peer-focus:shadow-terminal-glow
              transition-all
              duration-terminal
              flex items-center justify-center
              ${radioClassName}
            `
            .trim()
            .replace(/\s+/g, ' ')}
        >
          {checked && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-2.5 h-2.5 rounded-full bg-terminal-green"
            />
          )}
        </div>
      </div>

      {(label || description) && (
        <div className="flex flex-col gap-0.5 pt-0.5">
          {label && (
            <span className="text-terminal-base text-terminal-text-primary font-mono">
              {label}
            </span>
          )}
          {description && (
            <span className="text-terminal-sm text-terminal-text-tertiary">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  )
})

export function RadioGroup({
  children,
  label,
  error,
  className = '',
}: RadioGroupProps) {
  const hasError = !!error
  const labelId = useId()

  return (
    <div
      className={`flex flex-col gap-terminal ${className}`}
      role="group"
      aria-labelledby={label ? labelId : undefined}
    >
      {label && (
        <span
          id={labelId}
          className="text-terminal-sm text-terminal-text-secondary uppercase tracking-wider"
        >
          {label}
        </span>
      )}

      <div className="flex flex-col gap-terminal-sm">{children}</div>

      {error && (
        <p className={`text-terminal-xs ${hasError ? 'text-red-500' : ''}`}>
          {error}
        </p>
      )}
    </div>
  )
}
