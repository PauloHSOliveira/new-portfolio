/**
 * Textarea Component
 *
 * Terminal-themed textarea field with validation states and auto-resize option.
 * Supports error messages and helper text.
 */

'use client'

import type { TextareaHTMLAttributes } from 'react'
import { forwardRef, useEffect, useId, useRef } from 'react'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'filled'
  autoResize?: boolean
  textareaClassName?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      label,
      error,
      helperText,
      variant = 'default',
      autoResize = false,
      className = '',
      textareaClassName = '',
      disabled,
      required,
      id,
      ...props
    },
    ref
  ) {
    const internalRef = useRef<HTMLTextAreaElement>(null)
    const textareaRef =
      (ref as React.RefObject<HTMLTextAreaElement>) || internalRef

    const generatedId = useId()
    const hasError = !!error
    const textareaId = id || generatedId

    const variantClasses = {
      default: 'bg-terminal-bg-darker',
      filled: 'bg-terminal-bg-light',
    }

    const stateClasses = hasError
      ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_20px_rgba(255,0,0,0.3)]'
      : 'border-terminal-border focus:border-terminal-green focus:shadow-terminal-glow'

    // Auto-resize functionality
    useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current
        const adjustHeight = () => {
          textarea.style.height = 'auto'
          textarea.style.height = `${textarea.scrollHeight}px`
        }

        adjustHeight()
        textarea.addEventListener('input', adjustHeight)

        return () => {
          textarea.removeEventListener('input', adjustHeight)
        }
      }
    }, [autoResize, textareaRef])

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-terminal-sm text-terminal-text-secondary uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-terminal-green ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={textareaRef}
          id={textareaId}
          disabled={disabled}
          required={required}
          className={`
            w-full
            px-terminal-md py-terminal
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
            resize-${autoResize ? 'none' : 'vertical'}
            disabled:opacity-50
            disabled:cursor-not-allowed
            min-h-[100px]
            ${textareaClassName}
          `
            .trim()
            .replace(/\s+/g, ' ')}
          {...props}
        />

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
