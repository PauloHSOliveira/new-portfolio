/**
 * BlogCard Component
 *
 * Card variant designed for blog posts with image support,
 * metadata, and reading time.
 */

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import type { HTMLAttributes } from 'react'

export interface BlogCardProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  > {
  title: string
  excerpt: string
  date?: string
  readTime?: string
  tags?: string[]
  imageUrl?: string
  imageAlt?: string
  href?: string
  className?: string
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  tags = [],
  imageUrl,
  imageAlt,
  href,
  className = '',
  ...props
}: BlogCardProps) {
  const CardWrapper = href ? 'a' : 'article'
  const wrapperProps = href
    ? { href, rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      <CardWrapper
        className={`
          group
          block
          relative
          bg-terminal-bg-light/50
          border border-terminal-border
          rounded-terminal-md
          overflow-hidden
          hover:border-terminal-green/50
          hover:shadow-terminal-glow
          transition-all
          duration-terminal-slow
          h-full
          flex
          flex-col
        `
          .trim()
          .replace(/\s+/g, ' ')}
        {...wrapperProps}
        {...props}
      >
        {/* Image */}
        {imageUrl && (
          <div className="relative w-full h-48 bg-terminal-bg overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(var(--terminal-border)_1px,transparent_1px),linear-gradient(90deg,var(--terminal-border)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
            <img
              src={imageUrl}
              alt={imageAlt || title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-terminal-slow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg-light/80 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-terminal-green/10 border border-terminal-green/30 rounded-terminal-sm text-terminal-green text-terminal-xs font-mono uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-terminal-xl font-bold text-terminal-text-primary group-hover:text-terminal-green transition-colors duration-terminal mb-3 leading-tight">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-terminal-text-secondary text-terminal-base leading-relaxed mb-4 flex-1">
            {excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 pt-4 border-t border-terminal-border text-terminal-text-dim text-terminal-sm">
            {date && (
              <div className="flex items-center gap-1.5">
                <Calendar
                  size={14}
                  aria-hidden="true"
                />
                <time dateTime={date}>{date}</time>
              </div>
            )}
            {readTime && (
              <div className="flex items-center gap-1.5">
                <Clock
                  size={14}
                  aria-hidden="true"
                />
                <span>{readTime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hover Arrow */}
        {href && (
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-terminal">
            <div className="w-8 h-8 flex items-center justify-center bg-terminal-green rounded-terminal-sm">
              <ArrowRight
                size={16}
                className="text-terminal-bg"
                aria-hidden="true"
              />
            </div>
          </div>
        )}
      </CardWrapper>
    </motion.div>
  )
}
