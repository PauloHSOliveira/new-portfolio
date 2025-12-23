/**
 * Home Page Loading State
 *
 * Skeleton layout for the home page while content loads.
 * Matches the main layout structure with terminal aesthetic.
 */

import {
  CardSkeleton,
  ListSkeleton,
  LoadingSpinner,
  TextSkeleton,
} from '@/components/ui/Skeleton'

export default function HomeLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-10 overflow-hidden relative">
      <section
        className="w-full max-w-7xl h-[90vh] bg-[var(--terminal-bg)]/95 backdrop-blur-md border border-[var(--terminal-border)] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative"
        aria-label="Loading Terminal Interface"
      >
        {/* Terminal Header Skeleton */}
        <div className="flex items-center justify-between border-b border-[var(--terminal-border)] bg-[var(--terminal-bg-light)] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-terminal-border-light animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-terminal-border-light animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-terminal-border-light animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LoadingSpinner size="sm" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth custom-scrollbar relative">
          {/* Prompt Skeleton */}
          <div className="mb-8">
            <TextSkeleton variant="line" className="w-48" />
          </div>

          {/* Navigation Skeleton */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-24 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* Main Content Skeleton */}
          <main className="mt-10 mb-16 space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <TextSkeleton variant="heading" />
              <TextSkeleton variant="paragraph" lines={4} />
            </div>

            {/* Content Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CardSkeleton showHeader />
              <CardSkeleton showHeader />
              <CardSkeleton showHeader />
            </div>

            {/* List Section */}
            <div className="space-y-4">
              <TextSkeleton variant="heading" className="w-1/3" />
              <ListSkeleton items={6} showIcon />
            </div>
          </main>

          {/* Footer Skeleton */}
          <div className="border-t border-[var(--terminal-border)] pt-6 mt-8">
            <div className="flex justify-between items-center">
              <TextSkeleton variant="line" className="w-32" />
              <div className="flex gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-5 w-5 bg-terminal-bg-light rounded-full animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
