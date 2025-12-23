'use client'

import { List, X } from '@phosphor-icons/react'
import type React from 'react'
import { useEffect, useState } from 'react'
import type { Section } from '@/app/types'

interface NavigationProps {
  currentSection: Section
  onSectionChange: (section: Section) => void
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onSectionChange,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const links: { id: Section; label: string; ariaLabel: string }[] = [
    { id: 'about', label: 'about', ariaLabel: 'Navigate to About section' },
    { id: 'skills', label: 'skills', ariaLabel: 'Navigate to Skills section' },
    {
      id: 'projects',
      label: 'projects',
      ariaLabel: 'Navigate to Projects section',
    },
    { id: 'github', label: 'github', ariaLabel: 'Navigate to GitHub section' },
    {
      id: 'writing',
      label: 'writing',
      ariaLabel: 'Navigate to Writing section',
    },
    {
      id: 'contact',
      label: 'contact',
      ariaLabel: 'Navigate to Contact section',
    },
  ]

  // Close mobile menu when section changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: Need to close menu when section changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [currentSection])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (section: Section) => {
    onSectionChange(section)
  }

  const handleKeyDown = (e: React.KeyboardEvent, section: Section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSectionChange(section)
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex flex-wrap gap-6 md:gap-10 mb-10 border-b border-[var(--terminal-border)] pb-6 ${className}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <button
            type="button"
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            onKeyDown={(e) => handleKeyDown(e, link.id)}
            aria-label={link.ariaLabel}
            aria-current={currentSection === link.id ? 'page' : undefined}
            className={`text-base transition-all duration-200 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[var(--terminal-green)] focus:ring-offset-2 focus:ring-offset-[var(--terminal-bg)] rounded px-2 py-1 ${
              currentSection === link.id
                ? 'text-[var(--terminal-green)] font-bold scale-105'
                : 'text-[var(--terminal-text-dim)] hover:text-[var(--terminal-text-primary)]'
            }`}
          >
            {link.id === currentSection ? `> ${link.label}` : link.label}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="flex items-center gap-2 text-[var(--terminal-text-primary)] hover:text-[var(--terminal-green)] transition-colors duration-200 mb-6 px-4 py-2 border border-[var(--terminal-border)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--terminal-green)] focus:ring-offset-2 focus:ring-offset-[var(--terminal-bg)]"
        >
          {isMobileMenuOpen ? (
            <>
              <X size={20} weight="bold" />
              <span className="text-sm uppercase tracking-widest">Close</span>
            </>
          ) : (
            <>
              <List size={20} weight="bold" />
              <span className="text-sm uppercase tracking-widest">Menu</span>
            </>
          )}
        </button>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fadeIn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <nav
              id="mobile-menu"
              className="fixed top-0 left-0 w-full max-w-sm h-full bg-[var(--terminal-bg)] border-r border-[var(--terminal-border-bright)] z-50 p-6 overflow-y-auto animate-slide-in"
              aria-label="Mobile navigation"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-[var(--terminal-text-dim)] hover:text-[var(--terminal-green)] transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-[var(--terminal-green)] rounded"
              >
                <X size={24} weight="bold" />
              </button>

              {/* Menu Title */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[var(--terminal-green)] uppercase tracking-widest">
                  Navigation
                </h2>
                <div className="h-px bg-[var(--terminal-border-bright)] mt-4" />
              </div>

              {/* Menu Items */}
              <ul className="space-y-4">
                {links.map((link, index) => (
                  <li key={link.id} className={`menu-item-${index}`}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.id)}
                      onKeyDown={(e) => handleKeyDown(e, link.id)}
                      aria-label={link.ariaLabel}
                      aria-current={
                        currentSection === link.id ? 'page' : undefined
                      }
                      className={`w-full text-left px-4 py-3 rounded border transition-all duration-200 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[var(--terminal-green)] focus:ring-offset-2 focus:ring-offset-[var(--terminal-bg)] ${
                        currentSection === link.id
                          ? 'text-[var(--terminal-green)] font-bold border-[var(--terminal-green)] bg-[var(--terminal-bg-lighter)]'
                          : 'text-[var(--terminal-text-dim)] border-[var(--terminal-border)] hover:text-[var(--terminal-text-primary)] hover:border-[var(--terminal-border-bright)] hover:bg-[var(--terminal-bg-light)]'
                      }`}
                    >
                      {link.id === currentSection
                        ? `> ${link.label}`
                        : link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  )
}

export default Navigation
