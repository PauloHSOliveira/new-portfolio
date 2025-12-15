import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'PauloHSOliveira'
const ORG_NAMES = ['CosmStack']

interface GitHubRepoNode {
  name: string
  nameWithOwner: string
  description: string | null
  url: string
  stargazerCount: number
  forks: { totalCount: number }
  primaryLanguage: { name: string } | null
  updatedAt: string
  createdAt: string
  pushedAt: string
  diskUsage: number | null
  isFork: boolean
  isPrivate: boolean
  repositoryTopics: { nodes: Array<{ topic: { name: string } }> }
  owner: { __typename: string; login: string }
}

export async function GET(_request: NextRequest) {
  const token = process.env.SERVER_GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 },
    )
  }

  try {
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
    `

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
      `

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: orgQuery,
          variables: { orgName, first: 20 },
        }),
        next: { revalidate: 600 }, // Cache for 10 minutes
      })

      if (!response.ok) return []
      const data = await response.json()
      return data.data?.organization?.repositories?.nodes || []
    }

    const userResponse = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: userReposQuery,
        variables: { userName: GITHUB_USERNAME, first: 100 },
      }),
      next: { revalidate: 600 }, // Cache for 10 minutes
    })

    const personalRepos = userResponse.ok
      ? (await userResponse.json()).data?.user?.repositories?.nodes || []
      : []

    const orgReposResults = await Promise.all(ORG_NAMES.map(fetchOrgRepos))
    const orgRepos = orgReposResults.flat()

    const allRawRepos = [...personalRepos, ...orgRepos]

    const repos = allRawRepos.map((repo: GitHubRepoNode) => ({
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
      topics: repo.repositoryTopics?.nodes.map((n) => n.topic.name) || [],
      owner_type: repo.owner.__typename,
    }))

    return NextResponse.json(repos)
  } catch (error) {
    console.error('GitHub repos API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 },
    )
  }
}
