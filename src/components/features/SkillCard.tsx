/**
 * SkillCard Component
 *
 * Card variant designed for displaying skills with icons,
 * proficiency levels, and descriptions.
 */

'use client'

import { motion } from 'framer-motion'
import type { HTMLAttributes, ReactNode } from 'react'

export interface SkillCardProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  > {
  title: string
  description?: string
  icon: ReactNode
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category?: string
  technologies?: string[]
  className?: string
}

export function SkillCard({
  title,
  description,
  icon,
  level,
  category,
  technologies = [],
  className = '',
  ...props
}: SkillCardProps) {
  // Level indicator
  const levelConfig = {
    beginner: { dots: 1, label: 'Beginner' },
    intermediate: { dots: 2, label: 'Intermediate' },
    advanced: { dots: 3, label: 'Advanced' },
    expert: { dots: 4, label: 'Expert' },
  }

  const levelInfo = level ? levelConfig[level] : null

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03, y: -2 }}
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
        hover:shadow-terminal-glow
        transition-all
        duration-terminal-slow
        p-6
        h-full
        flex
        flex-col
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 right-4">
          <span className="text-terminal-text-dim text-terminal-xs font-mono uppercase tracking-wider">
            {category}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="mb-6 flex items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center border-2 border-terminal-border rounded-terminal-md bg-terminal-bg group-hover:border-terminal-green group-hover:shadow-terminal-glow transition-all duration-terminal-slow">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-terminal-lg font-bold text-terminal-green group-hover:text-terminal-green-bright transition-colors duration-terminal mb-3 text-center">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-terminal-text-secondary text-terminal-sm leading-relaxed mb-4 text-center flex-1">
          {description}
        </p>
      )}

      {/* Level Indicator */}
      {levelInfo && (
        <div className="mb-4 flex flex-col items-center gap-2">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={`level-${i}`}
                className={`
                  w-2 h-2 rounded-full
                  ${
                    i < levelInfo.dots
                      ? 'bg-terminal-green shadow-terminal-glow'
                      : 'bg-terminal-border'
                  }
                  transition-all duration-terminal
                `}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-terminal-text-dim text-terminal-xs font-mono uppercase tracking-wider">
            {levelInfo.label}
          </span>
        </div>
      )}

      {/* Technologies */}
      {technologies.length > 0 && (
        <div className="pt-4 border-t border-terminal-border">
          <div className="flex flex-wrap gap-1.5 justify-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 bg-terminal-bg border border-terminal-border rounded-terminal-sm text-terminal-text-tertiary text-terminal-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 bg-terminal-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-terminal-slow pointer-events-none rounded-terminal-md"
        aria-hidden="true"
      />
    </motion.article>
  )
}
