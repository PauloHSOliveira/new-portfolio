'use client'

import type React from 'react'
import type { Section } from '../types'

interface NavigationProps {
  currentSection: Section
  onSectionChange: (section: Section) => void
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  onSectionChange,
}) => {
  const links: { id: Section; label: string }[] = [
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'github', label: 'github' },
    { id: 'writing', label: 'writing' },
    { id: 'contact', label: 'contact' },
  ]

  return (
    <nav className="flex flex-wrap gap-6 md:gap-10 mb-10 border-b border-[var(--terminal-border)] pb-6">
      {links.map((link) => (
        <button
          type="button"
          key={link.id}
          onClick={() => onSectionChange(link.id)}
          className={`text-base transition-all duration-200 uppercase tracking-widest ${
            currentSection === link.id
              ? 'text-[var(--terminal-green)] font-bold scale-105'
              : 'text-[var(--terminal-text-dim)] hover:text-[var(--terminal-text-primary)]'
          }`}
        >
          {link.id === currentSection ? `> ${link.label}` : link.label}
        </button>
      ))}
    </nav>
  )
}

export default Navigation
