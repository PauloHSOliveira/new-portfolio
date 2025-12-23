/**
 * Checkbox Component
 *
 * Terminal-themed checkbox with custom styling and animations.
 * Supports labels, descriptions, and disabled states.
 */

'use client'

import { motion } from 'framer-motion'
import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
  checkboxClassName?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      label,
      description,
      className = '',
      checkboxClassName = '',
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
            type="checkbox"
            disabled={disabled}
            checked={checked}
            className="sr-only peer"
            {...props}
          />
          <div
            className={`
              w-5 h-5
              border-2
              rounded-terminal
              bg-terminal-bg-darker
              border-terminal-border
              peer-checked:bg-terminal-green
              peer-checked:border-terminal-green
              peer-focus:border-terminal-green
              peer-focus:shadow-terminal-glow
              transition-all
              duration-terminal
              flex items-center justify-center
              ${checkboxClassName}
            `
              .trim()
              .replace(/\s+/g, ' ')}
          >
            {checked && (
              <motion.svg
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 5L4.5 8.5L11 1"
                  stroke="#0a0a0a"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </motion.svg>
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
  }
)
