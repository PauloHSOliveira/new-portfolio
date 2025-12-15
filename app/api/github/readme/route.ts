import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Cache READMEs for 10 minutes (600 seconds)
export const revalidate = 600

export async function GET(request: NextRequest) {
  const token = process.env.SERVER_GITHUB_TOKEN
  const { searchParams } = new URL(request.url)
  const fullName = searchParams.get('fullName')

  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 },
    )
  }

  if (!fullName) {
    return NextResponse.json(
      { error: 'Missing fullName parameter' },
      { status: 400 },
    )
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${fullName}/readme`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3.raw',
        },
        next: { revalidate: 600 }, // Cache for 10 minutes
      },
    )

    if (!response.ok) {
      return NextResponse.json(
        { content: 'No README available.' },
        { status: 200 },
      )
    }

    const content = await response.text()
    return NextResponse.json({ content })
  } catch (error) {
    console.error('GitHub readme API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch README' },
      { status: 500 },
    )
  }
}
