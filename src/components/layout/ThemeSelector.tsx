'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/app/providers'

const themes = [
  { id: 'matrix', name: 'Matrix Green', color: '#00ff00' },
  { id: 'dracula', name: 'Dracula', color: '#50fa7b' },
  { id: 'monokai', name: 'Monokai', color: '#a6e22e' },
  { id: 'nord', name: 'Nord', color: '#a3be8c' },
  { id: 'solarized-dark', name: 'Solarized Dark', color: '#859900' },
  { id: 'one-dark', name: 'One Dark', color: '#98c379' },
  { id: 'cyberpunk', name: 'Cyberpunk', color: '#ff00ff' },
  { id: 'ocean', name: 'Ocean', color: '#00d4ff' },
] as const

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-theme-selector]')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  if (!mounted) {
    return (
      <div className="relative">
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center opacity-0"
          aria-label="Theme selector"
        >
          <span className="text-sm">○</span>
        </button>
      </div>
    )
  }

  const currentTheme = themes.find((t) => t.id === theme) || themes[0]

  return (
    <div className="relative" data-theme-selector>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-200"
        aria-label="Select theme"
        title={`Current: ${currentTheme.name}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
          style={{ color: currentTheme.color }}
          role="img"
          aria-label="Theme palette icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88a.75.75 0 00.22-.53v-.192a.75.75 0 01.75-.75h.526c.69 0 1.35.361 1.717.958l.75 1.217a.75.75 0 001.278-.783l-.75-1.217A3.75 3.75 0 0014.576 2.5h-.526A2.25 2.25 0 0011.8 4.75v.192c0 .398-.158.78-.439 1.061l-2.88 2.88z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[var(--terminal-bg-lighter)] border border-[var(--terminal-border-bright)] rounded-sm shadow-lg z-50 overflow-hidden">
          <div className="p-2 border-b border-[var(--terminal-border)] bg-[var(--terminal-bg-light)]">
            <span className="text-[10px] text-[var(--terminal-text-tertiary)] uppercase tracking-widest font-bold">
              Select Theme
            </span>
          </div>
          <div className="max-h-80 overflow-y-auto custom-scrollbar">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setTheme(t.id)
                  setIsOpen(false)
                }}
                className={`w-full px-3 py-2.5 text-left flex items-center gap-3 transition-colors ${
                  theme === t.id
                    ? 'bg-[var(--terminal-bg-light)] text-[var(--terminal-green)]'
                    : 'text-[var(--terminal-text-secondary)] hover:bg-[var(--terminal-bg-light)] hover:text-[var(--terminal-text-primary)]'
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    backgroundColor: t.color,
                    borderColor: t.color,
                    opacity: theme === t.id ? 1 : 0.6,
                  }}
                />
                <span className="text-sm font-mono">{t.name}</span>
                {theme === t.id && (
                  <span className="ml-auto text-[var(--terminal-green)] text-xs">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
