/**
 * Animation Examples
 * 
 * Demonstrates usage of the enhanced animation system
 * Both Tailwind CSS animations and Framer Motion examples
 */

'use client'

import { motion } from 'framer-motion'

// ============================================
// 1. Tailwind CSS Animation Examples
// ============================================

export function TailwindAnimationExamples() {
  return (
    <div className="space-y-terminal-lg p-terminal-xl bg-terminal-bg border border-terminal-border rounded-terminal-md">
      <h2 className="text-terminal-xl text-terminal-green mb-terminal-lg">
        Tailwind Animation Examples
      </h2>

      {/* Fade In */}
      <div className="animate-fadeIn">
        <p className="text-terminal-text-secondary">Fade In Animation</p>
      </div>

      {/* Pulse Glow */}
      <div className="animate-pulse-glow p-terminal bg-terminal-bg-light rounded-terminal">
        <p className="text-terminal-green">Pulse Glow Effect</p>
      </div>

      {/* Float */}
      <div className="animate-float inline-block">
        <span className="text-terminal-2xl">💾</span>
      </div>

      {/* Glow Text */}
      <div className="animate-glow text-terminal-green text-terminal-lg">
        Glowing Terminal Text
      </div>

      {/* Terminal Blink (Cursor) */}
      <div className="font-mono text-terminal-green">
        paulo@production:~${' '}
        <span className="animate-terminal-blink inline-block w-2 h-4 bg-terminal-green ml-1" />
      </div>

      {/* Slide In */}
      <div className="animate-slide-in p-terminal bg-terminal-bg-light rounded-terminal">
        <p className="text-terminal-text-secondary">Slide In From Left</p>
      </div>

      {/* Slide Up */}
      <div className="animate-slide-up p-terminal bg-terminal-bg-light rounded-terminal">
        <p className="text-terminal-text-secondary">Slide Up From Bottom</p>
      </div>

      {/* Scale In */}
      <div className="animate-scale-in p-terminal bg-terminal-bg-light rounded-terminal">
        <p className="text-terminal-text-secondary">Scale In Effect</p>
      </div>
    </div>
  )
}

// ============================================
// 2. Framer Motion Animation Examples
// ============================================

export function FramerMotionExamples() {
  return (
    <div className="space-y-terminal-lg p-terminal-xl bg-terminal-bg border border-terminal-border rounded-terminal-md">
      <h2 className="text-terminal-xl text-terminal-green mb-terminal-lg">
        Framer Motion Examples
      </h2>

      {/* Fade In Up */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="p-terminal bg-terminal-bg-light rounded-terminal"
      >
        <p className="text-terminal-text-secondary">
          Fade In Up with Framer Motion
        </p>
      </motion.div>

      {/* Hover Scale */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-terminal bg-terminal-bg-light rounded-terminal cursor-pointer"
      >
        <p className="text-terminal-green">Hover to Scale (Interactive)</p>
      </motion.div>

      {/* Stagger Children */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="space-y-terminal"
      >
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="p-terminal bg-terminal-bg-light rounded-terminal"
          >
            <p className="text-terminal-text-secondary">Item {item}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Continuous Animation (Scan Line) */}
      <div className="relative h-32 bg-terminal-bg-darker rounded-terminal overflow-hidden">
        <motion.div
          className="absolute inset-x-0 h-0.5 bg-terminal-green/30"
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-terminal-green">Scan Line Effect</p>
        </div>
      </div>

      {/* Terminal Glitch Effect */}
      <motion.div
        animate={{
          x: [0, -2, 2, -2, 2, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 5,
        }}
        className="p-terminal bg-terminal-bg-light rounded-terminal"
      >
        <p className="text-terminal-green">Glitch Effect (Periodic)</p>
      </motion.div>

      {/* Rotate and Glow */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        className="w-16 h-16 mx-auto bg-terminal-green/20 border border-terminal-green rounded-full flex items-center justify-center shadow-terminal-glow"
      >
        <span className="text-terminal-green text-2xl">⚡</span>
      </motion.div>

      {/* Layout Animation (Expand/Collapse) */}
      <motion.div layout className="bg-terminal-bg-light rounded-terminal">
        <motion.button
          onClick={() => {}}
          className="w-full p-terminal text-left text-terminal-green hover:bg-terminal-bg-lighter transition-colors duration-terminal"
        >
          Click to Expand (Layout Animation)
        </motion.button>
      </motion.div>
    </div>
  )
}

// ============================================
// 3. Combined Example - Terminal Window
// ============================================

export function TerminalWindowExample() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-terminal-bg/95 backdrop-blur-terminal-md border border-terminal-border rounded-terminal-lg shadow-terminal-glow overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-terminal-lg py-terminal-md bg-terminal-bg-light border-b border-terminal-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-terminal-xs text-terminal-text-dim uppercase tracking-wider">
          Terminal v2.0
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-terminal-xl space-y-terminal-md">
        {/* Prompt Line */}
        <div className="flex items-center">
          <span className="text-terminal-green font-mono">
            paulo@production:~$
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="ml-2 w-2 h-4 bg-terminal-green inline-block"
          />
        </div>

        {/* Command Output */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-terminal-text-secondary font-mono text-terminal-sm space-y-1"
        >
          <div>{'> Initializing design system...'}</div>
          <div className="text-terminal-green">{'✓ Tailwind configured'}</div>
          <div className="text-terminal-green">
            {'✓ Framer Motion installed'}
          </div>
          <div className="text-terminal-green">{'✓ Animations loaded'}</div>
          <div className="text-terminal-green">
            {'✓ Theme system active'}
          </div>
          <div className="mt-terminal-md text-terminal-green animate-pulse-glow">
            {'System ready.'}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Usage in a page:
/*
import { 
  TailwindAnimationExamples, 
  FramerMotionExamples, 
  TerminalWindowExample 
} from '@/components/examples/AnimationExamples'

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-terminal-bg-dark p-8 space-y-8">
      <TailwindAnimationExamples />
      <FramerMotionExamples />
      <TerminalWindowExample />
    </div>
  )
}
*/
