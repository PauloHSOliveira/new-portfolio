'use client'

import hljs from 'highlight.js'
import {
  ArrowRight,
  Bookmark,
  Calendar,
  ChevronLeft,
  Clock,
  Hash,
  Search,
  Tag,
} from 'lucide-react'
import { marked } from 'marked'
import type React from 'react'
import { useEffect, useMemo, useState } from 'react'
import type { Article } from '../../types'

const ARTICLES: Article[] = [
  {
    slug: 'about-paulo-oliveira',
    title: 'Protocol PH: A Senior Architect Narrative',
    desc: 'An introductory briefing on my trajectory as a Senior Software Engineer, focusing on high-scale Fintech and AI solutions.',
    date: '2025-02-24',
    readTime: '5 min',
    category: 'Engineering',
    tags: ['Career', 'Fintech', 'AI', 'Architecture'],
    content: `
# Protocol PH: Senior Systems Architect Narrative

My journey as a software engineer has been defined by a relentless pursuit of solving complex problems through minimalist and efficient architecture. With over 6 years of experience, I have specialized in building robust systems that bridge the gap between business logic and high-performance technology.

### The Fintech Frontier
A significant portion of my career has been dedicated to the Fintech domain. From building high-throughput ledgers to architecting cross-border payment protocols like **Paglua**, I focus on absolute data integrity and sub-millisecond precision.

### The AI Shift
Currently, I am heavily invested in the "Agentic" era of software. Through **Marcaai**, I am exploring how LLMs and Retrieval-Augmented Generation (RAG) can automate legacy industries like Intellectual Property law.

### Core Philosophy
1. **Security by Design**: Systems aren't "unbreakable"; they are resilient.
2. **Pragmatic Minimalism**: Code is a liability; every line must justify its existence.
3. **Continuous Reconnaissance**: Staying at the edge of emerging tech (Rust, AI, Web3) is not optional.

I am always open to discussing distributed systems, payment rails, or any challenge that requires deep architectural thinking.
    `,
  },
]

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

const Writing: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  useEffect(() => {
    if (selectedArticle) {
      const contentArea = document.querySelector('.flex-1')
      if (contentArea) {
        contentArea.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [selectedArticle])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    ARTICLES.forEach((art) => {
      art.tags.forEach((tag) => {
        tags.add(tag)
      })
    })
    return Array.from(tags).sort()
  }, [])

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesSearch =
        !searchQuery.trim() ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.desc.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTag = !activeTag || art.tags.includes(activeTag)
      return matchesSearch && matchesTag
    })
  }, [searchQuery, activeTag])

  if (selectedArticle) {
    return (
      <div className="space-y-8 animate-fadeIn">
        <button
          type="button"
          onClick={() => setSelectedArticle(null)}
          className="text-[var(--terminal-text-dim)] hover:text-[var(--terminal-green)] text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group transition-all font-bold"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Archive</span>
        </button>

        <article className="space-y-8 max-w-4xl">
          <header className="space-y-6 border-b border-[var(--terminal-border)] pb-10">
            <div className="flex items-center gap-4 text-[var(--terminal-green)] text-[10px] font-black uppercase tracking-[0.4em]">
              <Bookmark className="w-4 h-4" /> {selectedArticle.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--terminal-green)] leading-tight">
              {selectedArticle.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[10px] text-[var(--terminal-text-dim)] uppercase tracking-[0.2em] font-bold">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}
              </span>
              <div className="flex gap-2">
                {selectedArticle.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[var(--terminal-text-dim)] border border-[var(--terminal-border)] px-2 py-0.5 rounded-sm"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div
            className="article-content text-[15px] leading-relaxed text-[var(--terminal-text-secondary)] font-mono selection:bg-[var(--terminal-green)] selection:text-[var(--terminal-bg)]"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <ok>
            dangerouslySetInnerHTML={{
              __html: marked.parse(selectedArticle.content) as string,
            }}
          />

          <footer className="pt-12 mt-12 border-t border-[var(--terminal-border)] flex flex-col gap-6">
            <div className="bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-6 text-[11px] text-[var(--terminal-text-dim)] italic leading-relaxed uppercase tracking-wider space-y-2">
              <p>
                SYSTEM_NOTICE: This document is an MDX-synthesized technical
                report.
              </p>
              <p>ENCRYPTION: AES-256-GCM verified.</p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="text-[var(--terminal-green)] text-[10px] uppercase font-bold tracking-widest border border-[var(--terminal-green)]/30 w-fit px-6 py-3 hover:bg-[var(--terminal-green)] hover:text-[var(--terminal-bg)] transition-all flex items-center gap-2 group"
            >
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />{' '}
              Close Document & Exit
            </button>
          </footer>
        </article>
      </div>
    )
  }

  return (
    <div className="space-y-12 animate-fadeIn">
      <header className="flex flex-col gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold uppercase tracking-tight">
            Technical Writing
          </h1>
          <p className="text-[var(--terminal-text-dim)] text-sm italic tracking-wide">
            Deep dives into architecture, security primitives, and AI
            orchestration.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Search Bar */}
          <div className="relative flex-1 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--terminal-text-dim)] group-focus-within:text-[var(--terminal-green)] transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="grep keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--terminal-bg-dark)] border border-[var(--terminal-border)] focus:border-[var(--terminal-green)] py-4 pl-12 pr-4 text-[11px] font-mono text-[var(--terminal-text-primary)] outline-none transition-all placeholder:text-[var(--terminal-text-dim)] rounded-sm"
            />
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-2 items-center max-w-md">
            <div className="text-[var(--terminal-text-dim)] text-[9px] font-bold uppercase tracking-widest mr-2 flex items-center gap-1">
              <Tag className="w-3 h-3" /> Filters:
            </div>
            {allTags.map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`text-[9px] px-2 py-1 uppercase font-bold tracking-tighter border transition-all ${
                  activeTag === tag
                    ? 'bg-[var(--terminal-green)] border-[var(--terminal-green)] text-[var(--terminal-bg)]'
                    : 'bg-[var(--terminal-bg)] border-[var(--terminal-border)] text-[var(--terminal-text-dim)] hover:border-[var(--terminal-border-light)] hover:text-[var(--terminal-text-secondary)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((art) => (
            <button
              type="button"
              key={art.slug}
              onClick={() => setSelectedArticle(art)}
              className="w-full text-left group border border-[var(--terminal-border)] bg-[var(--terminal-bg)] hover:bg-[var(--terminal-bg-light)] hover:border-[var(--terminal-green)] p-8 transition-all duration-300 rounded-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--terminal-green)] opacity-0 group-hover:opacity-[0.03] blur-3xl -mr-24 -mt-24 transition-opacity"></div>

              <div className="flex-1 space-y-4 min-w-0">
                <div className="flex items-center gap-3 text-[9px] font-black text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-green)] uppercase tracking-[0.3em]">
                  <Bookmark className="w-3 h-3" /> {art.category}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <Hash className="w-4 h-4 text-[var(--terminal-border)] group-hover:text-[var(--terminal-green)] transition-colors flex-shrink-0" />
                    <h2 className="text-lg md:text-xl font-bold group-hover:text-[var(--terminal-green)] uppercase transition-colors truncate tracking-tight">
                      {art.title}
                    </h2>
                  </div>
                  <p className="text-[var(--terminal-text-dim)] text-[12px] group-hover:text-[var(--terminal-text-secondary)] transition-colors leading-relaxed line-clamp-2 md:pl-7 overflow-hidden">
                    {art.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:pl-7">
                  {art.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[8px] text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-text-dim)] uppercase font-bold"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-8 flex-shrink-0 text-[10px] font-bold uppercase tracking-widest border-t md:border-t-0 md:border-l border-[var(--terminal-border)] pt-6 md:pt-0 md:pl-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-text-dim)]">
                    <Calendar className="w-3.5 h-3.5" /> {art.date}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--terminal-green)] opacity-40 group-hover:opacity-100 transition-opacity">
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </div>
                </div>
                <div className="bg-[var(--terminal-green)] text-[var(--terminal-bg)] px-4 py-2 text-[10px] font-black group-hover:scale-110 transition-transform flex items-center gap-2">
                  OPEN <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="py-24 text-center border border-dashed border-[var(--terminal-border)] rounded-sm bg-[var(--terminal-bg-dark)]">
            <p className="text-[var(--terminal-text-dim)] text-[10px] uppercase tracking-[0.5em]">
              No documents matching current filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Writing
