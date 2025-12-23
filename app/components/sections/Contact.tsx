'use client'

import { useQuery } from '@tanstack/react-query'
import { Check, Copy, ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'
import {
  fetchAllGitHubData,
  GITHUB_USERNAME,
} from '../../services/githubService'

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const { data: mainData, isLoading } = useQuery({
    queryKey: ['github-all-data'],
    queryFn: fetchAllGitHubData,
  })

  const stats = mainData?.stats

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@pholiveira.dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const conversationTopics = [
    'fintech & payment systems architecture',
    'system design & scalability consulting',
    'security & cryptography projects',
    'ai/ml integration & product strategy',
    'open source collaboration',
    'startup & indie hacking',
  ]

  return (
    <div className="space-y-12 animate-fadeIn max-w-4xl font-mono">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold uppercase tracking-tighter">
          Contact & Link_Sync
        </h1>
        <p className="text-[var(--terminal-text-dim)] text-sm uppercase tracking-widest font-bold">
          Priority channel for high-scale architectural collaboration.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <section className="space-y-6">
            <h2 className="text-[10px] uppercase font-black text-[var(--terminal-green)] tracking-[0.5em] flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--terminal-green)] rounded-full animate-pulse"></span>{' '}
              SYNC_TOPICS:
            </h2>
            <div className="space-y-3 pl-1">
              {conversationTopics.map((topic) => (
                <div key={topic} className="flex items-center gap-4 group">
                  <div className="w-4 flex justify-center shrink-0">
                    <span className="text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-green)] transition-colors text-[10px]">
                      ▶
                    </span>
                  </div>
                  <span className="text-[var(--terminal-text-secondary)] group-hover:text-[var(--terminal-text-primary)] transition-colors uppercase font-bold text-[11px] tracking-tight">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase font-black text-[var(--terminal-text-dim)] tracking-[0.5em]">
              DIRECT_ACCESS:
            </h2>
            <div className="space-y-4">
              <div className="group border border-[var(--terminal-border)] bg-[var(--terminal-bg-light)] p-4 flex items-center justify-between hover:border-[var(--terminal-green)]/50 transition-all">
                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-[var(--terminal-green)]" />
                  <span className="text-sm font-bold uppercase tracking-tight text-[var(--terminal-text-primary)]">
                    contato@pholiveira.dev
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[var(--terminal-text-dim)] hover:text-[var(--terminal-green)] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[var(--terminal-green)]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--terminal-border)] bg-[var(--terminal-bg-light)] p-4 flex items-center gap-3 hover:border-[var(--terminal-green)]/50 hover:bg-[var(--terminal-green)]/5 transition-all group"
                >
                  <Github className="w-4 h-4 text-[var(--terminal-green)]" />
                  <span className="text-[10px] font-black uppercase text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-text-primary)]">
                    GitHub
                  </span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://linkedin.com/in/paulo-oliveira-ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[var(--terminal-border)] bg-[var(--terminal-bg-light)] p-4 flex items-center gap-3 hover:border-[var(--terminal-green)]/50 hover:bg-[var(--terminal-green)]/5 transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[var(--terminal-green)]" />
                  <span className="text-[10px] font-black uppercase text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-text-primary)]">
                    LinkedIn
                  </span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <aside>
          {isLoading ? (
            <div className="h-full flex items-center justify-center text-[var(--terminal-text-dim)] border border-dashed border-[var(--terminal-border)] bg-[var(--terminal-bg-light)]/50 p-12">
              <span className="animate-pulse font-black text-xs uppercase tracking-[0.5em]">
                AUTH_SYNCHRONIZING...
              </span>
            </div>
          ) : (
            stats && (
              <section className="bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-10 space-y-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-3 text-[8px] text-[var(--terminal-text-dim)] font-black tracking-widest border-l border-b border-[var(--terminal-border)]">
                  L6_ARCH_CLEARANCE
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-[10px] uppercase font-black text-[var(--terminal-text-dim)] tracking-[0.6em]">
                    SYSTEM_PROFILE: AUTH_OK
                  </h2>
                  <div className="h-[1px] bg-[var(--terminal-border)] w-12 mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div className="text-center space-y-2">
                    <div className="text-[var(--terminal-green)] font-bold text-3xl tracking-tighter tabular-nums">
                      {stats.repos}+
                    </div>
                    <div className="text-[8px] text-[var(--terminal-text-dim)] uppercase tracking-[0.3em] font-black">
                      Repositories
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-[var(--terminal-green)] font-bold text-3xl tracking-tighter tabular-nums">
                      {stats.total_contributions.toLocaleString()}
                    </div>
                    <div className="text-[8px] text-[var(--terminal-text-dim)] uppercase tracking-[0.3em] font-black">
                      Commits_LTD
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-[var(--terminal-green)] font-bold text-3xl tracking-tighter tabular-nums">
                      37+
                    </div>
                    <div className="text-[8px] text-[var(--terminal-text-dim)] uppercase tracking-[0.3em] font-black">
                      Tech_Nodes
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-[var(--terminal-green)] font-bold text-3xl tracking-tighter tabular-nums">
                      6.5Y
                    </div>
                    <div className="text-[8px] text-[var(--terminal-text-dim)] uppercase tracking-[0.3em] font-black">
                      Exp_Payload
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--terminal-border)] text-center">
                  <div className="text-[9px] text-[var(--terminal-text-dim)] font-black uppercase tracking-widest animate-pulse">
                    {'STATUS: OPERATIONAL // SEEKING_COMPLEXITY'}
                  </div>
                </div>
              </section>
            )
          )}
        </aside>
      </div>

      <footer className="text-[var(--terminal-text-dim)] text-[10px] pt-12 border-t border-[var(--terminal-border)] flex justify-between items-center uppercase font-bold tracking-[0.3em]">
        <span>{'SYNC_TARGET: PAGLUA // MARCAAI // COSMSTACK'}</span>
        <span>
          NODE_ID: {GITHUB_USERNAME} {'// '}
          {new Date().toLocaleDateString()}
        </span>
      </footer>
    </div>
  )
}

export default Contact
