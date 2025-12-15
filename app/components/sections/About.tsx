'use client'

import React from 'react'

const About: React.FC = () => {
  return (
    <article
      className="space-y-12 text-base leading-relaxed max-w-4xl animate-fadeIn"
      role="main"
    >
      <header className="border-l-4 border-[#00ff00] pl-8 py-4 bg-gradient-to-r from-[#00ff00]/5 to-transparent">
        <h1 className="text-5xl font-bold mb-2 uppercase tracking-tighter">
          Paulo Oliveira
        </h1>
        <p className="text-[#888] font-bold text-lg tracking-[0.2em] uppercase">
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
              className="text-[10px] bg-[#00ff00] text-[#0a0a0a] px-2 py-0.5 font-black tracking-widest rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-[#666] uppercase text-[10px] font-black tracking-[0.4em] border-b border-[#1a1a1a] pb-2 w-full">
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
              <li key={i} className="group cursor-default">
                <div className="flex items-center gap-4 text-white group-hover:text-[#00ff00] transition-colors">
                  <span className="text-[#00ff00] text-[10px] font-black">{`0${i + 1}`}</span>
                  <span className="text-lg font-bold uppercase tracking-tight">
                    {item.role}
                  </span>
                </div>
                <div className="text-[#444] text-xs uppercase tracking-widest ml-7 font-bold">
                  @ {item.org} // focus: {item.focus}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-[#666] uppercase text-[10px] font-black tracking-[0.4em] border-b border-[#1a1a1a] pb-2 w-full">
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
                <span className="text-[#222] group-hover:text-[#00ff00] transition-colors font-mono font-black text-xs">
                  0{i + 4}
                </span>
                <span className="text-lg text-[#aaa] group-hover:text-white transition-colors">
                  {exp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 bg-[#0a0a0a] border border-[#1a1a1a] p-8 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-10">
          <svg
            className="w-16 h-16 text-[#00ff00]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
          </svg>
        </div>
        <h2 className="text-[#00ff00] uppercase text-[10px] font-black tracking-[0.4em]">
          Engineer_Manifesto:
        </h2>
        <p className="text-lg text-[#ccc] leading-relaxed italic">
          "I specialize in the gray area where business logic meets
          high-concurrency architecture. Whether it's replacing legacy ledgers
          with sub-millisecond payment protocols or automating trademark law via
          AI agents, my goal is absolute precision and minimal liability code."
        </p>
      </section>

      <div className="pt-8 flex items-center gap-6">
        <button className="text-[#00ff00] font-black text-xs uppercase tracking-[0.3em] border border-[#00ff00]/30 px-6 py-3 hover:bg-[#00ff00] hover:text-[#0a0a0a] transition-all">
          {`> RUN_SYSTEM_DIAGNOSTICS.SH`}
        </button>
        <div className="h-[1px] bg-[#1a1a1a] flex-1"></div>
      </div>
    </article>
  )
}

export default About
