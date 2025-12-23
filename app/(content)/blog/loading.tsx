/**
 * Blog Page Loading State
 *
 * Skeleton layout for blog listing page.
 * Shows placeholders for blog post cards and filters.
 */

import { LoadingSpinner, TextSkeleton } from '@/components/ui/Skeleton'

export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Page Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center justify-between">
          <TextSkeleton variant="heading" className="w-48" />
          <LoadingSpinner size="md" />
        </div>
        <TextSkeleton variant="paragraph" lines={2} className="max-w-2xl" />
      </div>

      {/* Filters/Tags Skeleton */}
      <div className="mb-8 flex flex-wrap gap-2">
        {Array.from({ length: 5 }, (_, i) => `filter-skeleton-${i}`).map(
          (key) => (
            <div
              key={key}
              className="h-8 w-20 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse"
            />
          ),
        )}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }, (_, i) => `blog-post-skeleton-${i}`).map(
          (key, index) => (
            <article key={key} className="space-y-4">
              {/* Image Placeholder */}
              <div className="aspect-video w-full bg-terminal-bg-light border border-terminal-border rounded-terminal-md animate-pulse" />

              {/* Card Content */}
              <div className="space-y-3">
                {/* Meta */}
                <div className="flex items-center gap-2">
                  <div className="h-3 w-24 bg-terminal-bg-light rounded animate-pulse" />
                  <div className="h-3 w-16 bg-terminal-bg-light rounded animate-pulse" />
                </div>

                {/* Title */}
                <TextSkeleton variant="heading" className="w-full h-6" />

                {/* Excerpt */}
                <TextSkeleton variant="paragraph" lines={3} />

                {/* Tags */}
                <div className="flex gap-2">
                  {Array.from(
                    { length: 3 },
                    (_, j) => `tag-skeleton-${index}-${j}`,
                  ).map((tagKey) => (
                    <div
                      key={tagKey}
                      className="h-6 w-16 bg-terminal-bg-light rounded-terminal-sm animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </article>
          ),
        )}
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-12 flex justify-center gap-2">
        {Array.from(
          { length: 5 },
          (_, i) => `pagination-skeleton-${i}`,
        ).map((key) => (
          <div
            key={key}
            className="h-10 w-10 bg-terminal-bg-light border border-terminal-border rounded-terminal-sm animate-pulse"
          />
        ))}
      </div>
    </div>
  )
}
