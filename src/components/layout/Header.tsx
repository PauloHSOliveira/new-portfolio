'use client'

import type React from 'react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import ThemeSelector from './ThemeSelector'

interface HeaderProps {
  className?: string
}

// Telemetry simulation parameters
const TELEMETRY_CONFIG = {
  CPU_MIN: 1,
  CPU_MAX: 6,
  RAM_MIN: 40,
  RAM_MAX: 50,
  UPDATE_INTERVAL_MS: 3000,
} as const

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [telemetry, setTelemetry] = useState({ cpu: 1.2, ram: 42 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        cpu: parseFloat(
          (
            Math.random() *
              (TELEMETRY_CONFIG.CPU_MAX - TELEMETRY_CONFIG.CPU_MIN) +
            TELEMETRY_CONFIG.CPU_MIN
          ).toFixed(1)
        ),
        ram: Math.floor(
          Math.random() *
            (TELEMETRY_CONFIG.RAM_MAX - TELEMETRY_CONFIG.RAM_MIN) +
            TELEMETRY_CONFIG.RAM_MIN
        ),
      })
    }, TELEMETRY_CONFIG.UPDATE_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <header
      className={cn(
        'flex items-center justify-between px-4 py-2',
        'bg-[var(--terminal-bg-lighter)] border-b border-[var(--terminal-border-bright)]',
        'rounded-t-lg',
        className
      )}
    >
      {/* Logo/Branding - Terminal window controls */}
      <div className="flex space-x-2">
        <div
          className="w-3 h-3 bg-[#ff5f56] rounded-full shadow-[0_0_5px_rgba(255,95,86,0.3)]"
          aria-hidden="true"
        />
        <div
          className="w-3 h-3 bg-[#ffbd2e] rounded-full shadow-[0_0_5px_rgba(255,189,46,0.3)]"
          aria-hidden="true"
        />
        <div
          className="w-3 h-3 bg-[#27c93f] rounded-full shadow-[0_0_5px_rgba(39,201,63,0.3)]"
          aria-hidden="true"
        />
      </div>

      {/* Terminal info and telemetry */}
      <div className="flex items-center gap-6 text-[9px] text-[var(--terminal-text-dim)] font-mono tracking-widest uppercase font-bold">
        <span className="hidden sm:block">
          paulo-oliveira-portfolio — bash — 80x24
        </span>
        <div className="flex gap-4 border-l border-[var(--terminal-border-bright)] pl-4">
          <span className="flex items-center gap-1">
            <span className="sr-only">CPU usage:</span>
            CPU:{' '}
            <span className="text-[var(--terminal-green)] tabular-nums">
              {telemetry.cpu}%
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span className="sr-only">Memory usage:</span>
            MEM:{' '}
            <span className="text-[var(--terminal-green)] tabular-nums">
              {telemetry.ram}MB
            </span>
          </span>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="flex items-center">
        <ThemeSelector />
      </div>
    </header>
  )
}

export default Header
