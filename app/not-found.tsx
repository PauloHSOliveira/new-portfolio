/**
 * 404 Not Found Page
 *
 * Custom 404 page with terminal aesthetic and helpful navigation.
 */

import { FileQuestion } from 'lucide-react'
import Link from 'next/link'
import { ErrorState } from '@/components/ui/ErrorState'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-terminal-bg-dark">
      {/* Terminal Header */}
      <div className="border-b border-terminal-border bg-terminal-bg px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-terminal-green" />
          <span className="ml-4 text-terminal-sm text-terminal-text-dim">
            404.terminal
          </span>
        </div>
      </div>

      {/* 404 Content */}
      <ErrorState
        type="404"
        icon={<FileQuestion size={48} strokeWidth={1.5} />}
        showRetry={false}
        showHomeLink={true}
        className="mt-12"
      />

      {/* Helpful Links Section */}
      <div className="container mx-auto mt-8 max-w-2xl px-4 pb-12">
        <div className="rounded-terminal-md border border-terminal-border bg-terminal-bg-light p-6">
          <h2 className="mb-4 text-terminal-lg font-semibold text-terminal-green uppercase">
            Quick Links
          </h2>

          <div className="space-y-3">
            <Link
              href="/"
              className="block rounded-terminal-sm border border-terminal-border bg-terminal-bg px-4 py-3 text-terminal-base text-terminal-text-primary transition-all hover:border-terminal-green hover:bg-terminal-bg-lighter hover:text-terminal-green"
            >
              <span className="text-terminal-green">{'>'}</span> Home - Main
              portfolio page
            </Link>

            <Link
              href="/#projects"
              className="block rounded-terminal-sm border border-terminal-border bg-terminal-bg px-4 py-3 text-terminal-base text-terminal-text-primary transition-all hover:border-terminal-green hover:bg-terminal-bg-lighter hover:text-terminal-green"
            >
              <span className="text-terminal-green">{'>'}</span> Projects - View
              my work
            </Link>

            <Link
              href="/#github"
              className="block rounded-terminal-sm border border-terminal-border bg-terminal-bg px-4 py-3 text-terminal-base text-terminal-text-primary transition-all hover:border-terminal-green hover:bg-terminal-bg-lighter hover:text-terminal-green"
            >
              <span className="text-terminal-green">{'>'}</span> GitHub - Check
              my contributions
            </Link>

            <Link
              href="/#contact"
              className="block rounded-terminal-sm border border-terminal-border bg-terminal-bg px-4 py-3 text-terminal-base text-terminal-text-primary transition-all hover:border-terminal-green hover:bg-terminal-bg-lighter hover:text-terminal-green"
            >
              <span className="text-terminal-green">{'>'}</span> Contact - Get
              in touch
            </Link>
          </div>
        </div>

        {/* Terminal Command Hint */}
        <div className="mt-6 rounded-terminal-sm border border-terminal-border bg-terminal-bg-darker px-4 py-3">
          <p className="text-terminal-sm text-terminal-text-dim">
            <span className="text-terminal-green">Tip:</span> Use the navigation
            menu above or try one of the quick links to find what you're looking
            for.
          </p>
        </div>
      </div>
    </div>
  )
}
