import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const GITHUB_USERNAME = 'PauloHSOliveira'

// Cache for 5 minutes (300 seconds) - contribution data changes more frequently
export const revalidate = 300

export async function GET(request: NextRequest) {
  const token = process.env.SERVER_GITHUB_TOKEN
  const { searchParams } = new URL(request.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    )
  }

  if (!from || !to) {
    return NextResponse.json(
      { error: 'Missing from or to parameters' },
      { status: 400 }
    )
  }

  try {
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
    `

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          userName: GITHUB_USERNAME,
          from,
          to,
        },
      }),
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data.data?.user?.contributionsCollection || null)
  } catch (error) {
    console.error('GitHub contributions API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    )
  }
}
