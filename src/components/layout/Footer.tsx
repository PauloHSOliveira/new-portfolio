'use client'

import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react'
import type React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PauloHSOliveira',
      icon: GithubLogo,
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/paulo-oliveira-ph',
      icon: LinkedinLogo,
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/pholiveira',
      icon: TwitterLogo,
      ariaLabel: 'Visit Twitter profile',
    },
    {
      name: 'Email',
      url: 'mailto:contact@pholiveira.dev',
      icon: Envelope,
      ariaLabel: 'Send an email',
    },
  ]

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="text-[11px] text-[var(--terminal-text-dim)] mt-auto uppercase tracking-wider font-bold border-t border-[var(--terminal-border)] pt-8">
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-[var(--terminal-text-dim)] hover:text-[var(--terminal-green)] transition-colors duration-200 hover:scale-110 transform"
              >
                <Icon size={20} weight="bold" />
              </a>
            )
          })}
        </div>

        {/* Navigation Links */}
        <nav
          className="flex justify-center gap-4 md:gap-6 flex-wrap"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--terminal-text-dim)] hover:text-[var(--terminal-text-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Newsletter Signup Placeholder */}
        <div className="flex justify-center">
          <div className="text-center opacity-50">
            <span className="text-[9px]">
              {'[NEWSLETTER_SIGNUP_PLACEHOLDER]'}
            </span>
          </div>
        </div>

        {/* Copyright and Status */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-center md:text-left">
            © {currentYear} Paulo Oliveira — L6 Software Engineer & Architect
          </span>
          <span
            aria-hidden="true"
            className="opacity-50 text-center md:text-right"
          >
            {'UTF-8 // [CONNECTED]'}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
