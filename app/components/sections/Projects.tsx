'use client'

import hljs from 'highlight.js'
import {
  Activity,
  ArrowRight,
  ChevronLeft,
  Cpu,
  DollarSign,
  Eye,
  Lock,
  Terminal as TerminalIcon,
  User,
} from 'lucide-react'
import { marked } from 'marked'
import type React from 'react'
import { useEffect, useState } from 'react'
import { PERSONAL_PROJECTS } from '../../constants'
import type { Project } from '../../types'

marked.use({
  renderer: {
    code(
      tokenOrCode: string | { text: string; lang: string },
      lang?: string
    ): string {
      const codeStr =
        typeof tokenOrCode === 'string' ? tokenOrCode : tokenOrCode.text
      const language = typeof tokenOrCode === 'string' ? lang : tokenOrCode.lang
      const validLang =
        language && hljs.getLanguage(language) ? language : 'plaintext'
      const highlighted = hljs.highlight(codeStr, { language: validLang }).value
      return `<pre><code class="hljs language-${validLang}">${highlighted}</code></pre>\n`
    },
  },
})

const ProgressMeter = () => {
  return (
    <div className="space-y-4 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] p-5 font-mono">
      <div className="flex justify-between items-end mb-1">
        <div className="text-[10px] text-[var(--terminal-text-dim)] font-black uppercase tracking-[0.3em] flex items-center gap-2">
          <TerminalIcon
            size={12}
            className="text-[var(--terminal-green)]"
            aria-hidden="true"
          />{' '}
          SYSTEM_BUILD_PROGRESS
        </div>
        <div className="text-[16px] text-[var(--terminal-text-dim)] font-bold tabular-nums">
          0%
        </div>
      </div>
      <div className="h-2 w-full bg-[var(--terminal-bg-dark)] overflow-hidden flex p-[1px]">
        <div
          className="h-full bg-[var(--terminal-border-bright)] transition-all duration-100 ease-out"
          style={{ width: `0%` }}
          role="progressbar"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="flex justify-between text-[8px] text-[var(--terminal-text-dim)] font-black uppercase tracking-widest">
        <span>[0%]</span>
        <span className="text-[#ff3e3e]/40 flex items-center gap-1">
          <Lock size={8} aria-hidden="true" /> ACCESS_LOCKED_PENDING_REVIEW
        </span>
        <span>[100%]</span>
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (selectedProject) {
      const contentArea = document.querySelector('.flex-1')
      if (contentArea) contentArea.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [selectedProject])

  if (selectedProject) {
    return (
      <div className="space-y-8 animate-fadeIn font-mono relative z-20">
        <button
          type="button"
          onClick={() => setSelectedProject(null)}
          className="text-[var(--terminal-text-dim)] hover:text-[var(--terminal-green)] text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group transition-all font-bold"
          aria-label="Back to project grid"
        >
          <ChevronLeft
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            aria-hidden="true"
          />
          <span>BACK_TO_GRID</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <header className="border-b border-[var(--terminal-border)] pb-10 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] px-2 py-0.5 border border-[#ff3e3e]/40 text-[#ff3e3e] font-black uppercase tracking-widest flex items-center gap-1">
                    <Lock size={10} aria-hidden="true" /> LOCKED
                  </span>
                  <span className="text-[var(--terminal-text-dim)] text-[9px] font-black uppercase tracking-widest">
                    ENCRYPTED_ID: {selectedProject.slug}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[var(--terminal-green)] leading-none">
                  {selectedProject.name}
                </h1>
              </div>
            </header>

            <div
              className="article-content"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <ok>
              dangerouslySetInnerHTML={{
                __html: marked.parse(selectedProject.content) as string,
              }}
            />
          </div>

          <aside className="space-y-6">
            <ProgressMeter />

            {selectedProject.metrics && (
              <div className="bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-6 space-y-6">
                <div className="text-[10px] text-[var(--terminal-text-dim)] font-black uppercase tracking-[0.4em] border-b border-[var(--terminal-border)] pb-4">
                  SYSTEM_METRICS
                </div>
                <div className="grid grid-cols-2 gap-y-6">
                  <div className="space-y-1">
                    <div className="text-[var(--terminal-text-dim)] text-[8px] uppercase font-bold tracking-widest flex items-center gap-1">
                      <DollarSign className="w-2.5 h-2.5" aria-hidden="true" />{' '}
                      MRR
                    </div>
                    <div className="text-[var(--terminal-text-primary)] font-bold text-xs">
                      {selectedProject.metrics.mrr}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[var(--terminal-text-dim)] text-[8px] uppercase font-bold tracking-widest flex items-center gap-1">
                      <User className="w-2.5 h-2.5" aria-hidden="true" /> Users
                    </div>
                    <div className="text-[var(--terminal-text-primary)] font-bold text-xs">
                      {selectedProject.metrics.users}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[var(--terminal-text-dim)] text-[8px] uppercase font-bold tracking-widest flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5" aria-hidden="true" />{' '}
                      Uptime
                    </div>
                    <div className="text-[var(--terminal-text-primary)] font-bold text-xs">
                      {selectedProject.metrics.uptime}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[var(--terminal-text-dim)] text-[8px] uppercase font-bold tracking-widest flex items-center gap-1">
                      <Cpu className="w-2.5 h-2.5" aria-hidden="true" /> Version
                    </div>
                    <div className="text-[var(--terminal-text-primary)] font-bold text-xs">
                      {selectedProject.metrics.version}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12 animate-fadeIn font-mono relative z-20">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold uppercase tracking-tight">
          Project Matrix
        </h1>
        <p className="text-[var(--terminal-text-dim)] text-sm italic tracking-wide">
          High-impact development nodes and build logs.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PERSONAL_PROJECTS.map((project) => (
          <button
            type="button"
            key={project.slug}
            onClick={() => setSelectedProject(project)}
            className="text-left group bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-8 hover:border-[var(--terminal-green)] transition-all relative overflow-hidden flex flex-col justify-between h-full min-h-[240px]"
            aria-label={`Open project details for ${project.name}`}
          >
            <div
              className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-all duration-500"
              aria-hidden="true"
            >
              <Eye className="w-12 h-12 text-[var(--terminal-green)] blur-[2px] group-hover:blur-none transition-all" />
            </div>

            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-[8px] px-1.5 py-0.5 border border-[#ff3e3e]/40 text-[#ff3e3e] font-black uppercase tracking-widest flex items-center gap-1">
                  <Lock size={10} aria-hidden="true" /> LOCKED
                </span>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-[var(--terminal-green)] transition-colors uppercase tracking-tighter leading-none">
                {project.name}
              </h2>
              <p className="text-[var(--terminal-text-dim)] text-xs leading-relaxed line-clamp-2 pr-6">
                {project.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--terminal-border)] flex items-center justify-between relative z-10">
              <span className="text-[10px] text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-text-dim)] font-black uppercase tracking-widest transition-colors">
                ACCESS_ENCRYPTED_FILE
              </span>
              <ArrowRight
                className="w-4 h-4 text-[var(--terminal-border)] group-hover:text-[var(--terminal-green)] group-hover:translate-x-1 transition-all"
                aria-hidden="true"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Projects
