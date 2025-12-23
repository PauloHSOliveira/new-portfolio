'use client'

import type React from 'react'

const About: React.FC = () => {
  return (
    <article className="space-y-12 text-base leading-relaxed max-w-4xl animate-fadeIn">
      <header className="border-l-4 border-[var(--terminal-green)] pl-8 py-4 bg-gradient-to-r from-[var(--terminal-green)]/5 to-transparent">
        <h1 className="text-5xl font-bold mb-2 uppercase tracking-tighter">
          Paulo Oliveira
        </h1>
        <p className="text-[var(--terminal-text-tertiary)] font-bold text-lg tracking-[0.2em] uppercase">
          Senior Software Engineer & System Architect
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            'L6_CLEARANCE',
            'FINTECH_CORE',
            'AI_ORCHESTRATOR',
            'FOUNDER_LEVEL',
          ].map((tag) => (
            <span
              key={tag}
              className="text-[10px] bg-[var(--terminal-green)] text-[var(--terminal-bg)] px-2 py-0.5 font-black tracking-widest rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-[var(--terminal-text-tertiary)] uppercase text-[10px] font-black tracking-[0.4em] border-b border-[var(--terminal-border)] pb-2 w-full">
            Current_Deployment:
          </h2>
          <ul className="list-none space-y-4 pl-1">
            {[
              {
                role: 'Senior Software Engineer',
                org: 'Popstand',
                focus: '15+ Enterprise Projects',
              },
              {
                role: 'Founder & Lead Architect',
                org: 'Paglua',
                focus: 'Fintech Infrastructure',
              },
              {
                role: 'Founder & Lead Architect',
                org: 'Marcaai',
                focus: 'AI Trademark Systems',
              },
            ].map((item, i) => (
              <li key={item.role} className="group cursor-default">
                <div className="flex items-center gap-4 text-[var(--terminal-text-primary)] group-hover:text-[var(--terminal-green)] transition-colors">
                  <span className="text-[var(--terminal-green)] text-[10px] font-black">{`0${i + 1}`}</span>
                  <span className="text-lg font-bold uppercase tracking-tight">
                    {item.role}
                  </span>
                </div>
                <div className="text-[var(--terminal-text-dim)] text-xs uppercase tracking-widest ml-7 font-bold">
                  {`@ ${item.org} // focus: ${item.focus}`}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-[var(--terminal-text-tertiary)] uppercase text-[10px] font-black tracking-[0.4em] border-b border-[var(--terminal-border)] pb-2 w-full">
            Strategic_Domains:
          </h2>
          <div className="grid grid-cols-1 gap-4 pl-1">
            {[
              'Distributed Systems Architecture',
              'High-Throughput Payment Rails',
              'Agentic AI & RAG Orchestration',
              'Cybersecurity Primitives',
              'Indie Product Strategy',
            ].map((exp, i) => (
              <div key={exp} className="flex items-center gap-4 group">
                <span className="text-[var(--terminal-border-light)] group-hover:text-[var(--terminal-green)] transition-colors font-mono font-black text-xs">
                  0{i + 4}
                </span>
                <span className="text-lg text-[var(--terminal-text-secondary)] group-hover:text-[var(--terminal-text-primary)] transition-colors">
                  {exp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] p-8 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-10">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-[var(--terminal-green)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
          </svg>
        </div>
        <h2 className="text-[var(--terminal-green)] uppercase text-[10px] font-black tracking-[0.4em]">
          Engineer_Manifesto:
        </h2>
        <p className="text-lg text-[var(--terminal-text-secondary)] leading-relaxed italic">
          "I specialize in the gray area where business logic meets
          high-concurrency architecture. Whether it's replacing legacy ledgers
          with sub-millisecond payment protocols or automating trademark law via
          AI agents, my goal is absolute precision and minimal liability code."
        </p>
      </section>

      <div className="pt-8 flex items-center gap-6">
        <button
          type="button"
          className="text-[var(--terminal-green)] font-black text-xs uppercase tracking-[0.3em] border border-[var(--terminal-green)]/30 px-6 py-3 hover:bg-[var(--terminal-green)] hover:text-[var(--terminal-bg)] transition-all"
        >
          {`> RUN_SYSTEM_DIAGNOSTICS.SH`}
        </button>
        <div className="h-[1px] bg-[var(--terminal-border)] flex-1"></div>
      </div>
    </article>
  )
}

export default About
