'use client'

import type React from 'react'
import { SKILL_GROUPS } from '../../constants'

const Skills: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      <header>
        <h1 className="text-2xl font-bold mb-2 uppercase tracking-tight">
          Development Skills
        </h1>
        <p className="text-[var(--terminal-text-dim)] text-sm italic tracking-wide">
          37+ technologies across 6 specialized domains
        </p>
      </header>

      <div className="space-y-10">
        {SKILL_GROUPS.map((group) => (
          <section key={group.category} className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] bg-[var(--terminal-border)] flex-1"></div>
              <h2 className="text-[10px] uppercase font-bold text-[var(--terminal-text-dim)] tracking-[0.4em] whitespace-nowrap bg-[var(--terminal-bg)] px-2">
                {group.category}
              </h2>
              <div className="h-[1px] bg-[var(--terminal-border)] flex-1"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {group.items.map((skill) => (
                <div
                  key={skill}
                  className="bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-3 text-[12px] font-medium text-center rounded-sm hover:border-[var(--terminal-green)] hover:text-[var(--terminal-green)] transition-all duration-200 hover:shadow-[0_0_15px_var(--terminal-green-glow)] cursor-default group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-2 text-[10px]">
                    ◢
                  </span>
                  {skill}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 p-4 bg-[var(--terminal-bg-light)] border-l-2 border-[var(--terminal-green)] text-[var(--terminal-text-dim)] text-xs leading-relaxed">
        <p>
          Advanced expertise in system architecture, payment gateways, and AI
          orchestration. Constantly evaluating new tools to solve complex
          business logic with minimalist and efficient code.
        </p>
      </div>
    </div>
  )
}

export default Skills
