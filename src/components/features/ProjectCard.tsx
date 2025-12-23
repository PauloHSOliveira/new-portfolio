/**
 * ProjectCard Component
 *
 * Card variant designed specifically for displaying project information
 * with tech stack, description, and hover effects.
 */

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import type { HTMLAttributes, ReactNode } from 'react'

export interface ProjectCardProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
  > {
  title: string
  description: string
  techStack?: string[]
  status?: string
  githubUrl?: string
  liveUrl?: string
  icon?: ReactNode
  className?: string
}

export function ProjectCard({
  title,
  description,
  techStack = [],
  status,
  githubUrl,
  liveUrl,
  icon,
  className = '',
  ...props
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
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
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      {/* Status Badge */}
      {status && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded-terminal-sm text-terminal-green text-terminal-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-terminal-green rounded-full animate-pulse-glow" />
            {status}
          </span>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 md:p-8">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-terminal-border rounded-terminal-sm bg-terminal-bg group-hover:border-terminal-green/50 transition-colors duration-terminal">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-terminal-xl font-bold text-terminal-green group-hover:text-terminal-green-bright transition-colors duration-terminal mb-2">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-terminal-text-secondary text-terminal-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-terminal-bg border border-terminal-border rounded-terminal-sm text-terminal-text-tertiary text-terminal-xs font-mono uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {(githubUrl || liveUrl) && (
          <div className="flex gap-4 pt-4 border-t border-terminal-border">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-terminal-green hover:text-terminal-green-bright text-terminal-sm font-bold uppercase tracking-wider transition-colors duration-terminal"
                aria-label={`View ${title} on GitHub`}
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-terminal-green hover:text-terminal-green-bright text-terminal-sm font-bold uppercase tracking-wider transition-colors duration-terminal"
                aria-label={`Visit ${title} live site`}
              >
                <ExternalLink size={16} />
                <span>Live</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Hover Effect Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-terminal">
        <ArrowRight
          size={20}
          className="text-terminal-green"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  )
}
