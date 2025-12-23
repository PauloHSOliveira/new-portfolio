/**
 * Projects Page Loading State
 *
 * Skeleton layout for projects listing page.
 * Shows placeholders for project cards with image, title, and details.
 */

import {
  ImageSkeleton,
  LoadingSpinner,
  TextSkeleton,
} from '@/components/ui/Skeleton'

export default function ProjectsLoading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Page Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center justify-between">
          <TextSkeleton variant="heading" className="w-64" />
          <LoadingSpinner size="md" />
        </div>
        <TextSkeleton variant="paragraph" lines={2} className="max-w-3xl" />
      </div>

      {/* Filter/Sort Options */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex gap-2">
          {Array.from({ length: 4 }, (_, i) => `filter-option-${i}`).map(
            (key) => (
              <div
                key={key}
                className="h-10 w-24 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse"
              />
            )
          )}
        </div>
        <div className="h-10 w-32 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse" />
      </div>

      {/* Featured Project */}
      <div className="mb-12">
        <div className="border border-terminal-border rounded-terminal-md overflow-hidden bg-terminal-bg-light/50 p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ImageSkeleton aspectRatio="video" />
            <div className="space-y-4">
              <div className="h-6 w-32 bg-terminal-green/20 rounded-terminal-sm animate-pulse" />
              <TextSkeleton variant="heading" />
              <TextSkeleton variant="paragraph" lines={4} />
              <div className="flex gap-2">
                {Array.from({ length: 4 }, (_, i) => `featured-tech-${i}`).map(
                  (key) => (
                    <div
                      key={key}
                      className="h-6 w-16 bg-terminal-bg-light rounded-terminal-sm animate-pulse"
                    />
                  )
                )}
              </div>
              <div className="flex gap-3 pt-4">
                <div className="h-10 w-32 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse" />
                <div className="h-10 w-32 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => `project-skeleton-${i}`).map(
          (key, index) => (
            <article
              key={key}
              className="border border-terminal-border rounded-terminal-md overflow-hidden bg-terminal-bg-light/50"
            >
              {/* Project Image */}
              <ImageSkeleton aspectRatio="video" />

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Status Badge */}
                <div className="h-6 w-24 bg-terminal-green/20 rounded-terminal-sm animate-pulse" />

                {/* Title */}
                <TextSkeleton variant="heading" className="w-full h-6" />

                {/* Description */}
                <TextSkeleton variant="paragraph" lines={3} />

                {/* Tech Stack */}
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-terminal-bg-light rounded animate-pulse" />
                  <div className="flex flex-wrap gap-2">
                    {Array.from(
                      { length: 5 },
                      (_, j) => `tech-${index}-${j}`
                    ).map((techKey) => (
                      <div
                        key={techKey}
                        className="h-6 w-14 bg-terminal-bg-light rounded-terminal-sm animate-pulse"
                      />
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 pt-2">
                  <div className="flex items-center gap-1">
                    <div className="h-4 w-4 bg-terminal-bg-light rounded animate-pulse" />
                    <div className="h-4 w-8 bg-terminal-bg-light rounded animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-4 w-4 bg-terminal-bg-light rounded animate-pulse" />
                    <div className="h-4 w-8 bg-terminal-bg-light rounded animate-pulse" />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <div className="h-9 flex-1 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse" />
                  <div className="h-9 w-20 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse" />
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  )
}
