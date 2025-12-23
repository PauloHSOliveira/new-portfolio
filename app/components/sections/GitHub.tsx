'use client'

import { useQuery } from '@tanstack/react-query'
import {
  Activity,
  Box,
  ChevronLeft,
  ExternalLink,
  GitFork,
  History,
  Layers,
  Share2,
  Star,
  Terminal,
} from 'lucide-react'
import { marked } from 'marked'
import Image from 'next/image'
import type React from 'react'
import { useMemo, useState } from 'react'
import {
  fetchAllGitHubData,
  fetchGitHubActivityForYear,
  fetchRepoReadme,
  GITHUB_USERNAME,
} from '../../services/githubService'
import type { GitHubRepo } from '../../types'

const PINNED_NAMES = [
  'paglua',
  'ScaleCraft-Network',
  'clicksign-library',
  'social',
]

const TechIcon = ({
  name,
  className,
  color = '00ff00',
}: {
  name: string
  className?: string
  color?: string
}) => {
  const n = name.toLowerCase().trim()
  const mappings: Record<string, string> = {
    typescript: 'typescript',
    ts: 'typescript',
    javascript: 'javascript',
    js: 'javascript',
    html: 'html5',
    html5: 'html5',
    'node.js': 'nodedotjs',
    node: 'nodedotjs',
    react: 'react',
    'react.js': 'react',
    'next.js': 'nextdotjs',
    nextjs: 'nextdotjs',
    python: 'python',
    rust: 'rust',
    go: 'go',
    golang: 'go',
    mongodb: 'mongodb',
    postgresql: 'postgresql',
    docker: 'docker',
    kubernetes: 'kubernetes',
    aws: 'amazonaws',
    github: 'github',
    fastify: 'fastify',
    express: 'express',
    solidity: 'solidity',
    tailwind: 'tailwindcss',
    prisma: 'prisma',
    graphql: 'graphql',
    openai: 'openai',
    redis: 'redis',
    linux: 'linux',
    shell: 'gnubash',
    bash: 'gnubash',
  }
  const slug =
    mappings[n] ||
    n.replace(/\s+/g, '').replace(/[.#]/g, 'dot').replace(/[+]/g, 'plus')
  return (
    <div
      className={`${className} flex items-center justify-center shrink-0`}
      aria-hidden="true"
    >
      <Image
        src={`https://cdn.simpleicons.org/${slug}/${color}`}
        alt={`${name} icon`}
        width={24}
        height={24}
        unoptimized
        loading="lazy"
        className="w-full h-full object-contain"
        style={{ filter: 'drop-shadow(0 0 2px rgba(0,255,0,0.1))' }}
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.display = 'none'
        }}
      />
    </div>
  )
}

const TechBadge: React.FC<{ name: string; isTopic?: boolean }> = ({
  name,
  isTopic = false,
}) => (
  <div
    className={`flex items-center gap-2 px-2 py-0.5 border transition-all shrink-0 ${isTopic ? 'bg-[var(--terminal-bg)] border-[var(--terminal-border)]' : 'bg-[var(--terminal-bg-dark)] border-[var(--terminal-border)] group-hover:border-[var(--terminal-green)]/50'}`}
  >
    <TechIcon
      name={name}
      className="w-3 h-3"
      color={isTopic ? '444444' : '00ff00'}
    />
    <span
      className={`text-[8px] font-bold uppercase tracking-tight whitespace-nowrap ${isTopic ? 'text-[var(--terminal-text-dim)]' : 'text-[var(--terminal-text-secondary)] group-hover:text-[var(--terminal-green)]'}`}
    >
      {name}
    </span>
  </div>
)

const GitHub: React.FC = () => {
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | 'last12'>('last12')

  const { data: mainData, isLoading: isLoadingMain } = useQuery({
    queryKey: ['github-all-data'],
    queryFn: fetchAllGitHubData,
  })

  const { data: yearlyActivity, isLoading: isLoadingYearly } = useQuery({
    queryKey: ['github-activity', selectedYear],
    queryFn: () =>
      selectedYear === 'last12'
        ? Promise.resolve(mainData?.activity || [])
        : fetchGitHubActivityForYear(GITHUB_USERNAME, selectedYear as number),
    enabled: !!mainData || selectedYear !== 'last12',
  })

  const { data: readmeContent, isLoading: isLoadingReadme } = useQuery({
    queryKey: ['github-readme', selectedRepo?.full_name],
    queryFn: () => fetchRepoReadme(selectedRepo?.full_name || ''),
    enabled: !!selectedRepo,
  })

  const yearsAvailable = useMemo(() => {
    if (!mainData?.stats?.created_at) return []
    const startYear = new Date(mainData.stats.created_at).getFullYear()
    const currentYear = new Date().getFullYear()
    const years = []
    for (let y = currentYear; y >= startYear; y--) {
      years.push(y)
    }
    return years
  }, [mainData?.stats])

  const categorizedRepos = useMemo(() => {
    if (!mainData?.repos)
      return { personal: [], cosmstack: [], forked: [], pinned: [] }
    const publicRepos = mainData.repos.filter((r) => !r.isPrivate)

    const isCosmStack = (r: GitHubRepo) =>
      r.full_name.toLowerCase().startsWith('cosmstack/')
    const isPersonalOwner = (r: GitHubRepo) =>
      r.full_name.toLowerCase().startsWith('paulohsoliveira/')
    const isPinned = (repo: GitHubRepo) =>
      PINNED_NAMES.some(
        (pinned) => repo.name.toLowerCase() === pinned.toLowerCase()
      )

    const pinned = publicRepos.filter(isPinned)
    const personal = publicRepos.filter(
      (r) => isPersonalOwner(r) && !r.is_fork && !isPinned(r)
    )
    const cosmstack = publicRepos.filter(
      (r) => isCosmStack(r) && !r.is_fork && !isPinned(r)
    )
    const forked = publicRepos.filter((r) => r.is_fork)

    return { personal, cosmstack, forked, pinned }
  }, [mainData?.repos])

  const RepoCard: React.FC<{ repo: GitHubRepo; featured?: boolean }> = ({
    repo,
    featured = false,
  }) => (
    <button
      type="button"
      onClick={() => setSelectedRepo(repo)}
      aria-label={`View detailed statistics for repository ${repo.name}`}
      className={`text-left bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-5 transition-all group relative overflow-hidden h-full flex flex-col justify-between hover:border-[var(--terminal-green)] hover:bg-[var(--terminal-bg)] ${featured ? 'border-t-2 border-t-[var(--terminal-green)]/60 shadow-[0_4px_20px_var(--terminal-green-glow)]' : ''} z-10`}
    >
      <div
        className="flex justify-between items-start mb-3 relative z-20"
        aria-hidden="true"
      >
        <div className="text-[7px] font-black text-[var(--terminal-text-dim)] uppercase tracking-widest group-hover:text-[var(--terminal-green)]">
          NODE_{repo.is_fork ? 'FORK' : 'SOURCE'}
        </div>
        {featured && (
          <div className="flex items-center gap-1 px-1.5 py-0.5 bg-[var(--terminal-green)] text-[var(--terminal-bg)] text-[7px] font-black uppercase tracking-widest ml-auto">
            PINNED
          </div>
        )}
      </div>
      <div className="space-y-4 flex-grow relative z-20">
        <div className="text-lg font-bold text-[var(--terminal-green)] uppercase tracking-tight group-hover:translate-x-1 transition-transform truncate">
          {repo.name}
        </div>
        <p className="text-[10px] text-[var(--terminal-text-dim)] line-clamp-2 leading-relaxed min-h-[30px] overflow-hidden">
          {repo.description || 'System protocol description missing.'}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {repo.language && <TechBadge name={repo.language} />}
          {repo.topics.slice(0, 1).map((t) => (
            <TechBadge key={t} name={t} isTopic />
          ))}
        </div>
      </div>
      <div className="pt-4 border-t border-[var(--terminal-border)] mt-4 flex items-center justify-between text-[8px] text-[var(--terminal-text-dim)] font-bold uppercase relative z-20">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Star
              size={10}
              className="text-[var(--terminal-green)]"
              aria-hidden="true"
            />{' '}
            {repo.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork
              size={10}
              className="text-[var(--terminal-green)]"
              aria-hidden="true"
            />{' '}
            {repo.forks}
          </span>
        </div>
        <span className="text-[var(--terminal-text-dim)] group-hover:text-[var(--terminal-text-dim)] transition-colors font-mono">
          {new Date(repo.pushed_at).toLocaleDateString()}
        </span>
      </div>
    </button>
  )

  if (isLoadingMain)
    return (
      <div className="space-y-6 font-mono animate-pulse" aria-hidden="true">
        <div className="text-[var(--terminal-green)] text-xl flex items-center gap-3">
          <Activity size={24} className="animate-spin" /> [SYSTEM]
          SYNCING_EXTERNAL_NODES...
        </div>
        <div className="h-64 bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)]"></div>
      </div>
    )

  if (selectedRepo)
    return (
      <div className="space-y-8 animate-fadeIn font-mono relative z-20">
        <button
          type="button"
          onClick={() => setSelectedRepo(null)}
          className="text-[var(--terminal-text-dim)] hover:text-[var(--terminal-green)] text-sm font-bold uppercase tracking-widest flex items-center gap-2 group"
          aria-label="Return to repository matrix"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
            aria-hidden="true"
          />{' '}
          <span>BACK_TO_ARCHIVE</span>
        </button>
        <header className="border-b border-[var(--terminal-border)] pb-10 space-y-6">
          <div className="flex items-center gap-4">
            {selectedRepo.language && (
              <TechIcon
                name={selectedRepo.language}
                className="w-12 h-12"
                color="00ff00"
              />
            )}
            <h1 className="text-4xl font-bold text-[var(--terminal-green)] uppercase tracking-tighter">
              {selectedRepo.name}
            </h1>
          </div>
          <div className="flex gap-4">
            <a
              href={selectedRepo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--terminal-green)] text-[var(--terminal-bg)] font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--terminal-text-primary)] transition-all flex items-center gap-2"
              aria-label="Open source code on GitHub"
            >
              <ExternalLink size={14} aria-hidden="true" /> SOURCE_CODE
            </a>
          </div>
        </header>
        {isLoadingReadme ? (
          <div className="animate-pulse text-[var(--terminal-text-dim)]">
            DECRYPTING_README...
          </div>
        ) : (
          <div
            className="article-content"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <ok>
            dangerouslySetInnerHTML={{
              __html: marked.parse(
                readmeContent || 'No README found.'
              ) as string,
            }}
          />
        )}
      </div>
    )

  return (
    <div className="space-y-20 animate-fadeIn font-mono pb-20 relative z-20">
      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        aria-label="GitHub Statistics Summary"
      >
        {[
          {
            label: 'Total_Contributions',
            value: mainData?.stats?.total_contributions.toLocaleString(),
            color: 'text-[var(--terminal-green)]',
            icon: Activity,
          },
          {
            label: 'System_Commits',
            value: mainData?.stats?.commits.toLocaleString(),
            color: 'text-[var(--terminal-text-primary)]',
            icon: Terminal,
          },
          {
            label: 'PR_Success_Rate',
            value: mainData?.stats?.pull_requests.toLocaleString(),
            color: 'text-blue-400',
            icon: GitFork,
          },
          {
            label: 'Uptime_Streak',
            value: `${mainData?.stats?.streak} Days`,
            color: 'text-yellow-400',
            icon: History,
          },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-5 hover:border-[var(--terminal-green)]/50 transition-colors relative group overflow-hidden flex flex-col justify-between min-h-[140px] z-10"
          >
            <div
              className="absolute -right-2 -bottom-2 text-[var(--terminal-bg-dark)] group-hover:text-[var(--terminal-green)]/5 transition-colors pointer-events-none z-0"
              aria-hidden="true"
            >
              <card.icon size={80} strokeWidth={1} />
            </div>
            <div className="text-[9px] text-[var(--terminal-text-dim)] uppercase font-bold tracking-[0.1em] mb-2 relative z-20 leading-tight">
              {card.label}
            </div>
            <div
              className={`${card.color} text-2xl font-bold tracking-tighter relative z-20 mt-auto`}
            >
              {card.value}
            </div>
          </div>
        ))}
      </section>

      <section
        className="bg-[var(--terminal-bg-light)] border border-[var(--terminal-border)] p-6 md:p-8 space-y-8 relative overflow-visible z-30"
        aria-label="GitHub Contribution Heatmap"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[var(--terminal-border)] pb-4 relative z-40">
          <div className="space-y-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--terminal-green)] flex items-center gap-2">
              <Activity size={14} aria-hidden="true" /> CONTRIBUTION_MATRIX
            </h3>
            <p className="text-[8px] text-[var(--terminal-text-dim)] font-bold uppercase">
              {'ARCHIVE_READY // MODE: '}
              {selectedYear}
            </p>
          </div>
          <div
            className="flex items-center gap-4 bg-[var(--terminal-bg)] border border-[var(--terminal-border)] p-1.5 rounded-sm overflow-x-auto max-w-full"
            role="tablist"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedYear === 'last12'}
              onClick={() => setSelectedYear('last12')}
              className={`text-[8px] font-black px-2 py-1 ${selectedYear === 'last12' ? 'bg-[var(--terminal-green)] text-[var(--terminal-bg)]' : 'text-[var(--terminal-text-dim)]'}`}
            >
              L12M
            </button>
            {yearsAvailable.map((year) => (
              <button
                type="button"
                role="tab"
                aria-selected={selectedYear === year}
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`text-[8px] font-black px-2 py-1 ${selectedYear === year ? 'bg-[var(--terminal-green)] text-[var(--terminal-bg)]' : 'text-[var(--terminal-text-dim)]'}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`relative min-h-[100px] transition-opacity ${isLoadingYearly ? 'opacity-30' : 'opacity-100'} z-40`}
        >
          <div className="flex gap-[3px] overflow-x-auto pb-4 custom-scrollbar">
            {Array.from({ length: 53 }).map((_, weekIdx) => (
              <div key={weekIdx.toString()} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, dayIdx) => {
                  const day = yearlyActivity?.[weekIdx * 7 + dayIdx]
                  return (
                    <div
                      key={dayIdx.toString()}
                      className="w-[11px] h-[11px] rounded-[1px] relative cursor-crosshair group/tip hover:z-50"
                      style={{ backgroundColor: day?.color || '#111' }}
                    >
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[var(--terminal-green)] text-[var(--terminal-bg)] text-[8px] p-2 whitespace-nowrap opacity-0 group-hover/tip:opacity-100 pointer-events-none font-bold z-[100] border border-[var(--terminal-border)]"
                        role="tooltip"
                      >
                        {`${day?.contributionCount} commits // ${day?.date}`}
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pinned Repositories */}
      <section
        className="space-y-10 relative z-20"
        aria-label="Pinned Repositories"
      >
        <div className="flex items-center gap-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--terminal-green)] flex items-center gap-2">
            <Star className="w-4 h-4" aria-hidden="true" /> CORE_NODES
          </h3>
          <div className="h-[1px] bg-[var(--terminal-border)] flex-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {categorizedRepos.pinned.map((repo) => (
            <RepoCard key={repo.full_name} repo={repo} featured />
          ))}
        </div>
      </section>

      {/* Organization Repositories (CosmStack) */}
      {categorizedRepos.cosmstack.length > 0 && (
        <section
          className="space-y-10 relative z-20"
          aria-label="Organization Repositories"
        >
          <div className="flex items-center gap-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--terminal-text-primary)]/40 flex items-center gap-2">
              <Layers className="w-4 h-4" aria-hidden="true" />{' '}
              ORGANIZATION_INFRA
            </h3>
            <div className="h-[1px] bg-[var(--terminal-border)] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {categorizedRepos.cosmstack.map((repo) => (
              <RepoCard key={repo.full_name} repo={repo} />
            ))}
          </div>
        </section>
      )}

      {/* Personal Repositories */}
      {categorizedRepos.personal.length > 0 && (
        <section
          className="space-y-10 relative z-20"
          aria-label="Personal Repositories"
        >
          <div className="flex items-center gap-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--terminal-text-primary)]/40 flex items-center gap-2">
              <Box className="w-4 h-4" aria-hidden="true" /> PERSONAL_REGISTRY
            </h3>
            <div className="h-[1px] bg-[var(--terminal-border)] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {categorizedRepos.personal.map((repo) => (
              <RepoCard key={repo.full_name} repo={repo} />
            ))}
          </div>
        </section>
      )}

      {/* Forked Repositories */}
      {categorizedRepos.forked.length > 0 && (
        <section
          className="space-y-10 relative z-20"
          aria-label="Forked Repositories"
        >
          <div className="flex items-center gap-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-[var(--terminal-text-primary)]/40 flex items-center gap-2">
              <Share2 className="w-4 h-4" aria-hidden="true" /> EXTERNAL_FORKS
            </h3>
            <div className="h-[1px] bg-[var(--terminal-border)] flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 opacity-70 hover:opacity-100 transition-opacity">
            {categorizedRepos.forked.map((repo) => (
              <RepoCard key={repo.full_name} repo={repo} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default GitHub
