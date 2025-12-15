import type { ContributionDay, GitHubRepo, GitHubStats } from '../types'

interface ContributionWeek {
  contributionDays: Array<{
    date: string
    contributionCount: number
  }>
}

interface ContributionCalendar {
  totalContributions: number
  weeks: ContributionWeek[]
}

interface ContributionCollectionWithYear {
  totalCommitContributions: number
  totalIssueContributions: number
  totalPullRequestContributions: number
  totalPullRequestReviewContributions: number
  contributionCalendar: ContributionCalendar
  year?: number
}

export const GITHUB_USERNAME = 'PauloHSOliveira'
export const ORG_NAMES = ['CosmStack']

/**
 * Fetch lifetime contribution stats and calculate the maximum streak across all years
 * Also returns current year activity to avoid duplicate fetching
 */
const fetchLifetimeContributionStats = async (
  _username: string,
  createdAt: string
): Promise<{
  stats: Partial<GitHubStats>
  currentYearActivity: ContributionDay[]
}> => {
  const startYear = new Date(createdAt).getFullYear()
  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  )

  const fetchYearStats = async (year: number) => {
    const from = `${year}-01-01T00:00:00Z`
    const to =
      year === currentYear
        ? new Date().toISOString()
        : `${year}-12-31T23:59:59Z`

    const response = await fetch(
      `/api/github/contributions?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
    )

    if (!response.ok) return null
    const data = await response.json()
    return { ...data, year }
  }

  const results = await Promise.all(years.map(fetchYearStats))
  let commits = 0,
    pull_requests = 0,
    issues = 0,
    reviews = 0,
    total_contributions = 0
  let allDays: { date: string; count: number }[] = []
  let currentYearData: ContributionDay[] = []

  results.forEach((yearData: ContributionCollectionWithYear | null) => {
    if (!yearData) return
    commits += yearData.totalCommitContributions || 0
    pull_requests += yearData.totalPullRequestContributions || 0
    issues += yearData.totalIssueContributions || 0
    reviews += yearData.totalPullRequestReviewContributions || 0
    total_contributions +=
      yearData.contributionCalendar?.totalContributions || 0

    // Collect all days for streak calculation
    const days =
      yearData.contributionCalendar?.weeks?.flatMap((w: ContributionWeek) =>
        w.contributionDays.map((d) => ({
          date: d.date,
          count: d.contributionCount,
        }))
      ) || []
    allDays = allDays.concat(days)

    // Extract current year activity to avoid duplicate fetch
    if (yearData.year === currentYear && yearData.contributionCalendar?.weeks) {
      currentYearData = yearData.contributionCalendar.weeks.flatMap(
        (week: ContributionWeek) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            contributionCount: day.contributionCount,
            color:
              day.contributionCount === 0
                ? '#0d1117'
                : day.contributionCount < 5
                  ? '#0e4429'
                  : day.contributionCount < 10
                    ? '#006d32'
                    : day.contributionCount < 20
                      ? '#26a641'
                      : '#39d353',
          }))
      )
    }
  })

  // Sort days chronologically to ensure sequence
  allDays.sort((a, b) => a.date.localeCompare(b.date))

  // Calculate maximum streak in history
  let maxStreak = 0
  let currentStreak = 0
  allDays.forEach((day) => {
    if (day.count > 0) {
      currentStreak++
      if (currentStreak > maxStreak) maxStreak = currentStreak
    } else {
      currentStreak = 0
    }
  })

  return {
    stats: {
      commits,
      pull_requests,
      issues,
      reviews,
      total_contributions,
      streak: maxStreak,
    },
    currentYearActivity: currentYearData,
  }
}

export const fetchGitHubBaseStats = async (
  _username: string
): Promise<GitHubStats> => {
  const response = await fetch('/api/github/stats')

  if (!response.ok) {
    // Return mock data for failed auth in dev/demo
    return {
      repos: 0,
      commits: 0,
      total_contributions: 0,
      followers: 0,
      following: 0,
      public_gists: 0,
      created_at: new Date().toISOString(),
      location: 'Offline',
      bio: '',
      avatar_url: '',
      pull_requests: 0,
      issues: 0,
      reviews: 0,
      streak: 0,
      top_languages: [],
    }
  }

  const data = await response.json()
  return data as GitHubStats
}

export const fetchGitHubActivityForYear = async (
  _username: string,
  year: number
): Promise<ContributionDay[]> => {
  const from = `${year}-01-01T00:00:00Z`
  const to = `${year}-12-31T23:59:59Z`

  const response = await fetch(
    `/api/github/contributions?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
  )

  if (!response.ok) return []
  const data = await response.json()
  if (!data?.contributionCalendar) return []

  const weeks = data.contributionCalendar.weeks
  return weeks.flatMap((week: ContributionWeek) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      contributionCount: day.contributionCount,
      color:
        day.contributionCount === 0
          ? '#0d1117'
          : day.contributionCount < 5
            ? '#0e4429'
            : day.contributionCount < 10
              ? '#006d32'
              : day.contributionCount < 20
                ? '#26a641'
                : '#39d353',
    }))
  )
}

export const fetchAllGitHubData = async (): Promise<{
  stats: GitHubStats
  repos: GitHubRepo[]
  activity: ContributionDay[]
}> => {
  const baseStats = await fetchGitHubBaseStats(GITHUB_USERNAME)

  const [lifetimeData, repos] = await Promise.all([
    fetchLifetimeContributionStats(GITHUB_USERNAME, baseStats.created_at),
    fetchAllGitHubReposViaGraphQL(),
  ])

  return {
    stats: { ...baseStats, ...lifetimeData.stats } as GitHubStats,
    repos,
    activity: lifetimeData.currentYearActivity, // Reuse current year data from lifetime stats
  }
}

const fetchAllGitHubReposViaGraphQL = async (): Promise<GitHubRepo[]> => {
  const response = await fetch('/api/github/repos')

  if (!response.ok) return []

  const repos = await response.json()
  return repos as GitHubRepo[]
}

export const fetchGitHubStats = async (
  username: string
): Promise<GitHubStats> => await fetchGitHubBaseStats(username)

export const fetchRepoReadme = async (fullName: string): Promise<string> => {
  const response = await fetch(
    `/api/github/readme?fullName=${encodeURIComponent(fullName)}`
  )

  if (!response.ok) return 'No README available.'

  const data = await response.json()
  return data.content || 'No README available.'
}
