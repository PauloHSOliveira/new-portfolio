'use client'

import { useEffect, useState } from 'react'
import BootSequence from './components/BootSequence'
import Navigation from './components/Navigation'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import GitHub from './components/sections/GitHub'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Writing from './components/sections/Writing'
import TerminalHeader from './components/TerminalHeader'
import type { Section } from './types'

export default function Home() {
  const [isBooting, setIsBooting] = useState(true)
  const [currentSection, setCurrentSection] = useState<Section>('about')
  const prompt = 'paulo@production:~$ '
  const [typedPrompt, setTypedPrompt] = useState('')

  // Dynamic SEO: Update Title and Meta Description on section change
  useEffect(() => {
    if (isBooting) return

    const baseTitle = 'Paulo Oliveira — Senior Software Engineer & Architect'
    const sectionTitles: Record<Section, string> = {
      about: 'About the Architect',
      skills: 'Full-Stack Tech Stack',
      projects: 'Ventures & Prototypes',
      github: 'Open Source Activity',
      writing: 'Technical Narratives',
      contact: 'Collaborate & Sync',
    }

    const sectionDescriptions: Record<Section, string> = {
      about:
        'Senior Software Engineer and Founder with over 6 years of experience in Fintech, AI, and Distributed Systems.',
      skills:
        "Analysis of Paulo Oliveira's technological expertise: Node.js, Go, Rust, TypeScript, and AI Orchestration.",
      projects:
        'Portfolio featuring Paglua (Fintech Infrastructure) and Marcaai (AI Trademark Automation).',
      github:
        'Global contribution metrics and open-source system repositories on GitHub.',
      writing:
        'In-depth technical deep-dives on system design, performance, and engineering leadership.',
      contact:
        'Direct secure channel for architectural consulting and technical leadership opportunities.',
    }

    document.title = `${sectionTitles[currentSection]} | ${baseTitle}`

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', sectionDescriptions[currentSection])
    }
  }, [currentSection, isBooting])

  // Handle hash changes for internal navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Section
      if (
        [
          'about',
          'skills',
          'projects',
          'writing',
          'github',
          'contact',
        ].includes(hash)
      ) {
        setCurrentSection(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Sync state to hash
  const handleSectionChange = (section: Section) => {
    window.location.hash = section
    setCurrentSection(section)
  }

  // Typing animation for the prompt
  useEffect(() => {
    if (!isBooting) {
      let i = 0
      const interval = setInterval(() => {
        setTypedPrompt(prompt.substring(0, i))
        i++
        if (i > prompt.length) clearInterval(interval)
      }, 40)
      return () => clearInterval(interval)
    }
  }, [isBooting])

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'writing':
        return <Writing />
      case 'github':
        return <GitHub />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  if (isBooting) {
    return <BootSequence onComplete={() => setIsBooting(false)} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-10 overflow-hidden relative">
      <header className="sr-only">
        <h1>Paulo Oliveira Portfolio - Senior Software Engineer & Architect</h1>
      </header>

      {/* Background Decor */}
      <div
        className="absolute top-10 left-10 text-[10px] text-[#1a1a1a] font-mono pointer-events-none select-none uppercase tracking-[0.5em] hidden xl:block"
        aria-hidden="true"
      >
        {'system_architecture_v2.5 // PHOLIVEIRA'}
      </div>
      <div
        className="absolute bottom-10 right-10 text-[10px] text-[#1a1a1a] font-mono pointer-events-none select-none uppercase tracking-[0.5em] hidden xl:block"
        aria-hidden="true"
      >
        {'node_status: operational // latency: 12ms'}
      </div>

      <section
        className="w-full max-w-7xl h-[90vh] bg-[#0a0a0a]/95 backdrop-blur-md border border-[#1a1a1a] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col animate-fadeIn overflow-hidden relative"
        aria-label="Terminal Interface"
      >
        <TerminalHeader />

        <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth custom-scrollbar relative">
          {/* Subtle vignette for focus */}
          <div
            className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]"
            aria-hidden="true"
          ></div>

          {/* Mock prompt at top */}
          <div
            className="mb-8 font-mono text-[#00ff00] text-lg font-bold"
            aria-hidden="true"
          >
            {typedPrompt}
            <span className="w-3 h-5 bg-[#00ff00] inline-block animate-pulse ml-1 align-middle"></span>
          </div>

          <Navigation
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
          />

          <main className="mt-10 mb-16 relative z-10" id="main-content">
            {renderSection()}
          </main>

          <footer className="text-[11px] text-[#444] mt-auto uppercase tracking-wider font-bold border-t border-[#1a1a1a] pt-8 flex justify-between items-center">
            <span>
              © 2025 Paulo Oliveira — L6 Software Engineer & Architect
            </span>
            <span
              aria-hidden="true"
              className="opacity-50"
            >
              {'UTF-8 // [CONNECTED]'}
            </span>
          </footer>
        </div>
      </section>
    </div>
  )
}
