import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'PauloHSOliveira'

// Cache for 10 minutes (600 seconds) - stats don't change frequently
export const revalidate = 600

export async function GET(_request: NextRequest) {
  const token = process.env.SERVER_GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    )
  }

  try {
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
    `

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: GITHUB_USERNAME },
      }),
      next: { revalidate: 600 }, // Cache for 10 minutes
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const data = await response.json()
    const user = data.data?.user

    if (!user) {
      return NextResponse.json(
        { error: 'GitHub user not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      repos: user.repositories.totalCount,
      commits: 0,
      total_contributions: 0,
      followers: user.followers.totalCount,
      following: user.following.totalCount,
      public_gists: user.gists.totalCount,
      created_at: user.createdAt,
      location: user.location || 'Unknown',
      bio: user.bio || '',
      avatar_url: user.avatarUrl,
      pull_requests: 0,
      issues: 0,
      reviews: 0,
      streak: 0,
      top_languages: [],
    })
  } catch (error) {
    console.error('GitHub stats API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub stats' },
      { status: 500 }
    )
  }
}
