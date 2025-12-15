'use client'

import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  fetchAllGitHubData,
  GITHUB_USERNAME,
} from '../../services/githubService'
import { Copy, Check, ExternalLink, Mail, Github, Linkedin } from 'lucide-react'

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
        <p className="text-[#666] text-sm uppercase tracking-widest font-bold">
          Priority channel for high-scale architectural collaboration.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <section className="space-y-6">
            <h2 className="text-[10px] uppercase font-black text-[#00ff00] tracking-[0.5em] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse"></span>{' '}
              SYNC_TOPICS:
            </h2>
            <div className="space-y-3 pl-1">
              {conversationTopics.map((topic) => (
                <div key={topic} className="flex items-center gap-4 group">
                  <div className="w-4 flex justify-center shrink-0">
                    <span className="text-[#222] group-hover:text-[#00ff00] transition-colors text-[10px]">
                      ▶
                    </span>
                  </div>
                  <span className="text-[#aaa] group-hover:text-white transition-colors uppercase font-bold text-[11px] tracking-tight">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-[10px] uppercase font-black text-[#666] tracking-[0.5em]">
              DIRECT_ACCESS:
            </h2>
            <div className="space-y-4">
              <div className="group border border-[#1a1a1a] bg-[#0f0f0f] p-4 flex items-center justify-between hover:border-[#00ff00]/50 transition-all">
                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-[#00ff00]" />
                  <span className="text-sm font-bold uppercase tracking-tight text-white">
                    contato@pholiveira.dev
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-[#444] hover:text-[#00ff00] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#00ff00]" />
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
                  className="border border-[#1a1a1a] bg-[#0f0f0f] p-4 flex items-center gap-3 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all group"
                >
                  <Github className="w-4 h-4 text-[#00ff00]" />
                  <span className="text-[10px] font-black uppercase text-[#666] group-hover:text-white">
                    GitHub
                  </span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://linkedin.com/in/paulo-oliveira-ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1a1a1a] bg-[#0f0f0f] p-4 flex items-center gap-3 hover:border-[#00ff00]/50 hover:bg-[#00ff00]/5 transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[#00ff00]" />
                  <span className="text-[10px] font-black uppercase text-[#666] group-hover:text-white">
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
            <div className="h-full flex items-center justify-center text-[#333] border border-dashed border-[#1a1a1a] bg-[#0f0f0f]/50 p-12">
              <span className="animate-pulse font-black text-xs uppercase tracking-[0.5em]">
                AUTH_SYNCHRONIZING...
              </span>
            </div>
          ) : (
            stats && (
              <section className="bg-[#0f0f0f] border border-[#1a1a1a] p-10 space-y-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-3 text-[8px] text-[#222] font-black tracking-widest border-l border-b border-[#1a1a1a]">
                  L6_ARCH_CLEARANCE
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-[10px] uppercase font-black text-[#444] tracking-[0.6em]">
                    SYSTEM_PROFILE: AUTH_OK
                  </h2>
                  <div className="h-[1px] bg-[#1a1a1a] w-12 mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div className="text-center space-y-2">
                    <div className="text-[#00ff00] font-bold text-3xl tracking-tighter tabular-nums">
                      {stats.repos}+
                    </div>
                    <div className="text-[8px] text-[#444] uppercase tracking-[0.3em] font-black">
                      Repositories
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-[#00ff00] font-bold text-3xl tracking-tighter tabular-nums">
                      {stats.total_contributions.toLocaleString()}
                    </div>
                    <div className="text-[8px] text-[#444] uppercase tracking-[0.3em] font-black">
                      Commits_LTD
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-[#00ff00] font-bold text-3xl tracking-tighter tabular-nums">
                      37+
                    </div>
                    <div className="text-[8px] text-[#444] uppercase tracking-[0.3em] font-black">
                      Tech_Nodes
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-[#00ff00] font-bold text-3xl tracking-tighter tabular-nums">
                      6.5Y
                    </div>
                    <div className="text-[8px] text-[#444] uppercase tracking-[0.3em] font-black">
                      Exp_Payload
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1a1a1a] text-center">
                  <div className="text-[9px] text-[#222] font-black uppercase tracking-widest animate-pulse">
                    STATUS: OPERATIONAL // SEEKING_COMPLEXITY
                  </div>
                </div>
              </section>
            )
          )}
        </aside>
      </div>

      <footer className="text-[#1a1a1a] text-[10px] pt-12 border-t border-[#1a1a1a] flex justify-between items-center uppercase font-bold tracking-[0.3em]">
        <span>SYNC_TARGET: PAGLUA // MARCAAI // COSMSTACK</span>
        <span>
          NODE_ID: {GITHUB_USERNAME} // {new Date().toLocaleDateString()}
        </span>
      </footer>
    </div>
  )
}

export default Contact
