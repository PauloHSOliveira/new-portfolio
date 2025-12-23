/**
 * Hero Component
 *
 * Signature hero component with creative terminal-themed background,
 * eye-catching animations, and unique CTA buttons.
 */

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from '../ui/Button'

export interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    onClick: () => void
  }
  secondaryCTA?: {
    label: string
    onClick: () => void
  }
  children?: ReactNode
  className?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  children,
  className = '',
}: HeroProps) {
  return (
    <section
      className={`
        relative
        min-h-[600px]
        flex
        items-center
        justify-center
        overflow-hidden
        py-terminal-xl
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {/* Animated Background - Particle Grid */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(var(--terminal-border)_1px,transparent_1px),linear-gradient(90deg,var(--terminal-border)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Animated Scan Line */}
      <motion.div
        className="absolute inset-x-0 h-0.5 bg-terminal-green/30 pointer-events-none"
        animate={{
          y: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        aria-hidden="true"
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: Static array with fixed positions
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-terminal-green rounded-full opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal Icon - Signature Visual Element */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          }}
          className="inline-flex items-center justify-center w-20 h-20 mb-8 border-2 border-terminal-green rounded-terminal-md bg-terminal-bg-light shadow-terminal-glow"
        >
          <Terminal
            size={40}
            className="text-terminal-green"
            aria-hidden="true"
          />
        </motion.div>

        {/* Subtitle */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4,
            }}
            className="text-terminal-text-tertiary uppercase tracking-[0.3em] text-terminal-sm font-bold mb-4"
          >
            {subtitle}
          </motion.div>
        )}

        {/* Title with Glow Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5,
          }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-terminal-green leading-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.7,
            }}
            className="text-terminal-text-secondary text-terminal-lg md:text-terminal-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.9,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <Button
                variant="primary"
                size="lg"
                onClick={primaryCTA.onClick}
                rightIcon={<ArrowRight size={20} />}
                className="min-w-[200px]"
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant="outline"
                size="lg"
                onClick={secondaryCTA.onClick}
                className="min-w-[200px]"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        )}

        {/* Custom Children */}
        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 1.1,
            }}
            className="mt-12"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Corner Decorations */}
      <div
        className="absolute top-4 left-4 text-terminal-border text-terminal-xs font-mono opacity-50 hidden lg:block"
        aria-hidden="true"
      >
        {'> HERO_COMPONENT_v2.2'}
      </div>
      <div
        className="absolute bottom-4 right-4 text-terminal-border text-terminal-xs font-mono opacity-50 hidden lg:block"
        aria-hidden="true"
      >
        {'STATUS: OPERATIONAL'}
      </div>
    </section>
  )
}
