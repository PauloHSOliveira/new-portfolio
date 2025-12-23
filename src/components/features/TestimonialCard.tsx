/**
 * TestimonialCard Component
 *
 * Card variant designed for displaying testimonials and recommendations
 * with author information and ratings.
 */

'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import type { HTMLAttributes } from 'react'

export interface TestimonialCardProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  > {
  quote: string
  author: string
  authorTitle?: string
  authorCompany?: string
  authorImage?: string
  rating?: 1 | 2 | 3 | 4 | 5
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  authorTitle,
  authorCompany,
  authorImage,
  rating,
  className = '',
  ...props
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        bg-terminal-bg-light/50
        border border-terminal-border
        rounded-terminal-md
        overflow-hidden
        hover:border-terminal-green/50
        hover:shadow-terminal
        transition-all
        duration-terminal-slow
        p-6 md:p-8
        h-full
        flex
        flex-col
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      {/* Quote Icon */}
      <div className="mb-4 flex items-center justify-between">
        <Quote
          size={32}
          className="text-terminal-green/30"
          aria-hidden="true"
        />
        {/* Rating */}
        {rating && (
          <div
            className="flex gap-1"
            role="img"
            aria-label={`Rating: ${rating} out of 5`}
          >
            {[...Array(5)].map((_, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: Static array with fixed count
                key={`star-${i}`}
                className={`
                  w-1.5 h-1.5 rounded-full
                  ${i < rating ? 'bg-terminal-green' : 'bg-terminal-border'}
                `}
                aria-hidden="true"
              />
            ))}
          </div>
        )}
      </div>

      {/* Quote Text */}
      <blockquote className="text-terminal-text-secondary text-terminal-base leading-relaxed mb-6 flex-1 italic">
        "{quote}"
      </blockquote>

      {/* Author Information */}
      <div className="flex items-center gap-4 pt-4 border-t border-terminal-border">
        {/* Author Image */}
        {authorImage ? (
          <img
            src={authorImage}
            alt={author}
            className="w-12 h-12 rounded-terminal-sm border border-terminal-border object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-terminal-sm border border-terminal-border bg-terminal-bg flex items-center justify-center">
            <span className="text-terminal-green font-bold text-terminal-lg">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Author Details */}
        <div className="flex-1 min-w-0">
          <div className="text-terminal-text-primary text-terminal-base font-bold">
            {author}
          </div>
          {(authorTitle || authorCompany) && (
            <div className="text-terminal-text-tertiary text-terminal-sm">
              {authorTitle}
              {authorTitle && authorCompany && ' • '}
              {authorCompany}
            </div>
          )}
        </div>
      </div>

      {/* Subtle Glow on Hover */}
      <div
        className="absolute inset-0 bg-terminal-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-terminal-slow pointer-events-none rounded-terminal-md"
        aria-hidden="true"
      />
    </motion.article>
  )
}
