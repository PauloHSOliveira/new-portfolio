
import { GitHubStats, GitHubRepo, ContributionDay } from '../types';

export const GITHUB_USERNAME = 'PauloHSOliveira';
export const ORG_NAMES = ['CosmStack']; 

// NOTE: Sensitive tokens should never be hardcoded in client-side code. 
// For production, use a secure API proxy or GitHub OAuth.
// Redacting hardcoded token for security integrity.
const GITHUB_TOKEN = process.env.API_KEY || ""; 

/**
 * Fetch lifetime contribution stats and calculate the maximum streak across all years
 */
const fetchLifetimeContributionStats = async (username: string, createdAt: string): Promise<Partial<GitHubStats>> => {
  const startYear = new Date(createdAt).getFullYear();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const fetchYearStats = async (year: number) => {
    const from = `${year}-01-01T00:00:00Z`;
    const to = year === currentYear ? new Date().toISOString() : `${year}-12-31T23:59:59Z`;
    const query = `
      query($userName: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $userName) {
          contributionsCollection(from: $from, to: $to) {
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            contributionCalendar { 
              totalContributions 
              weeks { 
                contributionDays { 
                  contributionCount 
                  date 
                } 
              }
            }
          }
        }
      }
    `;
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { 
        'Authorization': GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '', 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ query, variables: { userName: username, from, to } }),
    });
    
    if (!response.ok) return null;
    const data = await response.json();
    return data.data?.user?.contributionsCollection;
  };

  const results = await Promise.all(years.map(fetchYearStats));
  let commits = 0, pull_requests = 0, issues = 0, reviews = 0, total_contributions = 0;
  let allDays: { date: string, count: number }[] = [];

  results.forEach(yearData => {
    if (!yearData) return;
    commits += yearData.totalCommitContributions || 0;
    pull_requests += yearData.totalPullRequestContributions || 0;
    issues += yearData.totalIssueContributions || 0;
    reviews += yearData.totalPullRequestReviewContributions || 0;
    total_contributions += yearData.contributionCalendar.totalContributions || 0;
    
    // Collect all days for streak calculation
    const days = yearData.contributionCalendar.weeks.flatMap((w: any) => 
      w.contributionDays.map((d: any) => ({
        date: d.date,
        count: d.contributionCount
      }))
    );
    allDays = allDays.concat(days);
  });

  // Sort days chronologically to ensure sequence
  allDays.sort((a, b) => a.date.localeCompare(b.date));

  // Calculate maximum streak in history
  let maxStreak = 0;
  let currentStreak = 0;
  allDays.forEach(day => {
    if (day.count > 0) {
      currentStreak++;
      if (currentStreak > maxStreak) maxStreak = currentStreak;
    } else {
      currentStreak = 0;
    }
  });

  return { commits, pull_requests, issues, reviews, total_contributions, streak: maxStreak };
};

export const fetchGitHubBaseStats = async (username: string): Promise<GitHubStats> => {
  const query = `
    query($userName: String!) {
      user(login: $userName) {
        name login bio location avatarUrl createdAt
        followers { totalCount }
        following { totalCount }
        repositories(first: 1, ownerAffiliations: [OWNER]) { totalCount }
        gists(first: 1) { totalCount }
      }
    }
  `;
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 
      'Authorization': GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '', 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ query, variables: { userName: username } }),
  });
  
  if (!response.ok) {
    // Return mock data for failed auth in dev/demo
    return {
      repos: 0, commits: 0, total_contributions: 0, followers: 0, following: 0,
      public_gists: 0, created_at: new Date().toISOString(), location: 'Offline',
      bio: '', avatar_url: '', pull_requests: 0, issues: 0, reviews: 0, streak: 0, top_languages: [],
    };
  }

  const data = await response.json();
  const user = data.data?.user;
  
  if (!user) throw new Error("GitHub user not found");

  return {
    repos: user.repositories.totalCount,
    commits: 0, total_contributions: 0,
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    public_gists: user.gists.totalCount,
    created_at: user.createdAt,
    location: user.location || 'Unknown',
    bio: user.bio || '',
    avatar_url: user.avatarUrl,
    pull_requests: 0, issues: 0, reviews: 0, streak: 0, top_languages: [],
  };
};

export const fetchGitHubActivityForYear = async (username: string, year: number): Promise<ContributionDay[]> => {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;
  const query = `
    query($userName: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $userName) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar { weeks { contributionDays { contributionCount date } } }
        }
      }
    }
  `;
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 
      'Authorization': GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '', 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ query, variables: { userName: username, from, to } }),
  });
  
  if (!response.ok) return [];
  const data = await response.json();
  if (!data.data?.user) return [];
  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  return weeks.flatMap((week: any) => week.contributionDays.map((day: any) => ({
    date: day.date,
    contributionCount: day.contributionCount,
    color: day.contributionCount === 0 ? '#0d1117' : day.contributionCount < 5 ? '#0e4429' : day.contributionCount < 10 ? '#006d32' : day.contributionCount < 20 ? '#26a641' : '#39d353',
  })));
};

export const fetchAllGitHubData = async (): Promise<{ stats: GitHubStats; repos: GitHubRepo[]; activity: ContributionDay[] }> => {
  const baseStats = await fetchGitHubBaseStats(GITHUB_USERNAME);
  const today = new Date();
  
  const [lifetime, activity, repos] = await Promise.all([
    fetchLifetimeContributionStats(GITHUB_USERNAME, baseStats.created_at),
    fetchGitHubActivityForYear(GITHUB_USERNAME, today.getFullYear()),
    fetchAllGitHubReposViaGraphQL(GITHUB_USERNAME, ORG_NAMES),
  ]);

  return {
    stats: { ...baseStats, ...lifetime } as GitHubStats,
    repos,
    activity
  };
};

const fetchAllGitHubReposViaGraphQL = async (username: string, orgNames: string[]): Promise<GitHubRepo[]> => {
  const userReposQuery = `
    query($userName: String!, $first: Int!) {
      user(login: $userName) {
        repositories(first: $first, ownerAffiliations: [OWNER], orderBy: {field: PUSHED_AT, direction: DESC}) {
          nodes {
            name nameWithOwner description url stargazerCount
            forks { totalCount }
            primaryLanguage { name }
            updatedAt createdAt pushedAt diskUsage isFork isPrivate
            repositoryTopics(first: 10) { nodes { topic { name } } }
            owner { __typename login }
          }
        }
      }
    }
  `;

  const fetchOrgRepos = async (orgName: string) => {
    const orgQuery = `
      query($orgName: String!, $first: Int!) {
        organization(login: $orgName) {
          repositories(first: $first, orderBy: {field: PUSHED_AT, direction: DESC}) {
            nodes {
              name nameWithOwner description url stargazerCount
              forks { totalCount }
              primaryLanguage { name }
              updatedAt createdAt pushedAt diskUsage isFork isPrivate
              repositoryTopics(first: 10) { nodes { topic { name } } }
              owner { __typename login }
            }
          }
        }
      }
    `;
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { 
        'Authorization': GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '', 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ query: orgQuery, variables: { orgName, first: 20 } }),
    });
    
    if (!response.ok) return [];
    const data = await response.json();
    return data.data?.organization?.repositories?.nodes || [];
  };

  const userResponse = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 
      'Authorization': GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '', 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ query: userReposQuery, variables: { userName: username, first: 100 } }),
  });
  
  const personalRepos = userResponse.ok ? (await userResponse.json()).data?.user?.repositories?.nodes || [] : [];
  
  const orgReposResults = await Promise.all(orgNames.map(fetchOrgRepos));
  const orgRepos = orgReposResults.flat();

  const allRawRepos = [...personalRepos, ...orgRepos];

  return allRawRepos.map((repo: any) => ({
    name: repo.name,
    full_name: repo.nameWithOwner,
    description: repo.description || '',
    url: repo.url,
    stars: repo.stargazerCount,
    forks: repo.forks.totalCount,
    language: repo.primaryLanguage?.name || null,
    updated_at: repo.updatedAt,
    created_at: repo.createdAt,
    pushed_at: repo.pushedAt,
    size: repo.diskUsage || 0,
    is_fork: repo.isFork,
    isPrivate: repo.isPrivate,
    topics: repo.repositoryTopics?.nodes.map((n: any) => n.topic.name) || [],
    owner_type: repo.owner.__typename,
  }));
};

export const fetchGitHubStats = async (username: string): Promise<GitHubStats> => (await fetchGitHubBaseStats(username));
export const fetchRepoReadme = async (fullName: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/repos/${fullName}/readme`, {
    headers: { 
      'Authorization': GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '', 
      'Accept': 'application/vnd.github.v3.raw' 
    },
  });
  return response.ok ? await response.text() : 'No README available.';
};
