# GitHub Issues to Create - Portfolio Refactor Roadmap

This document contains all the GitHub issues that need to be created based on the refactor roadmap in `PROMPT_REFATORACAO_PORTFOLIO.md`.

**Instructions:** Create each issue below in the GitHub repository using the provided title, labels, description, and checklist.

---

## Phase 1: Foundation (Week 1-2)

### Issue 1: Phase 1.1 - Project Initialization

**Title:** Phase 1.1: Project Initialization - Update to Next.js 15 and TypeScript Strict Mode

**Labels:** `phase-1`, `foundation`, `priority-high`, `setup`

**Description:**
Initialize the project foundation by updating core dependencies and establishing the project structure.

**Tasks:**
- [ ] Update to Next.js 15 (`pnpm add next@latest react@latest react-dom@latest`)
- [ ] Enable TypeScript strict mode in `tsconfig.json`
- [ ] Configure `next.config.js` for App Router
- [ ] Setup path aliases (`@/components`, `@/lib`, etc.) in `tsconfig.json`
- [ ] Create complete folder structure as per architecture:
  - [ ] `app/` directory with route groups
  - [ ] `src/components/` with subdirectories (ui, layout, features, blog)
  - [ ] `src/lib/` for utilities
  - [ ] `src/hooks/` for custom hooks
  - [ ] `src/stores/` for state management
  - [ ] `src/actions/` for server actions
  - [ ] `src/types/` for TypeScript types
  - [ ] `src/config/` for configuration
  - [ ] `content/` for MDX files

**Success Criteria:**
- Clean build with zero TypeScript errors
- All path aliases working correctly
- Folder structure matches documentation

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 1, Section 1.1

---

### Issue 2: Phase 1.2 - Development Tools Configuration

**Title:** Phase 1.2: Development Tools Configuration

**Labels:** `phase-1`, `foundation`, `priority-medium`, `devtools`

**Description:**
Setup and configure development tools for code quality and efficiency.

**Tasks:**
- [ ] Verify Biome configuration is working (`biome.json`)
- [ ] Setup pre-commit hooks with Husky (optional but recommended)
- [ ] Verify Turbo configuration (`turbo.json`)
- [ ] Create environment variables template (`.env.example`)
- [ ] Setup `.gitignore` for environment files
- [ ] Document setup process in `README.md`

**Success Criteria:**
- Linting commands work (`pnpm lint`)
- Type checking works (`pnpm type-check`)
- Environment template is comprehensive

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 1, Section 1.2

---

### Issue 3: Phase 1.3 - Tailwind & Creative UI Setup

**Title:** Phase 1.3: Tailwind & Creative UI Setup - Choose and Configure UI Approach

**Labels:** `phase-1`, `foundation`, `priority-high`, `ui-design`

**Description:**
Decide on and configure the UI component approach with custom branding and animations.

**Tasks:**
- [ ] Review UI approach options in `LIBRARIES_COMPLETE_LIST_PART1.md`
- [ ] **Decision:** Choose one approach:
  - Option A: Custom components from scratch (most unique)
  - Option B: Radix UI headless components + custom styling
  - Option C: shadcn/ui as base with heavy customization
- [ ] Configure Tailwind theme with unique brand identity:
  - [ ] Custom color palette
  - [ ] Custom fonts (display and body)
  - [ ] Custom animations (float, glow, etc.)
- [ ] Add custom CSS variables for theming
- [ ] Install Framer Motion for animations (`pnpm add framer-motion`)
- [ ] **If shadcn/ui:** Run `pnpx shadcn-ui@latest init`
- [ ] **If Radix UI:** Install core components (`pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu`)

**Success Criteria:**
- Tailwind configuration has unique brand colors
- Custom animations are defined
- UI approach is documented
- Base components are ready for customization

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 1, Section 1.3

---

### Issue 4: Phase 1.4 - Theme System Implementation

**Title:** Phase 1.4: Theme System - Dark/Light Mode Support

**Labels:** `phase-1`, `foundation`, `priority-medium`, `theming`

**Description:**
Implement a complete dark/light theme system using next-themes.

**Tasks:**
- [ ] Install `next-themes` (`pnpm add next-themes`)
- [ ] Create ThemeProvider in `app/providers.tsx`
- [ ] Implement ThemeToggle component in `src/components/layout/ThemeToggle.tsx`
- [ ] Add dark mode support to Tailwind config (`darkMode: ['class']`)
- [ ] Configure theme colors in CSS variables
- [ ] Test theme switching functionality
- [ ] Ensure theme persists across page reloads
- [ ] Add theme toggle to navigation

**Success Criteria:**
- Theme toggle works smoothly
- Dark/light mode applied correctly
- Theme persists across sessions
- All components support both themes

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 1, Section 1.4

---

### Issue 5: Phase 1.5 - Layout Components Creation

**Title:** Phase 1.5: Layout Components - Header, Footer, and Navigation

**Labels:** `phase-1`, `foundation`, `priority-high`, `components`

**Description:**
Create the core layout components that will be used across the site.

**Tasks:**
- [ ] Create root layout (`app/layout.tsx`):
  - [ ] HTML structure
  - [ ] Font configuration
  - [ ] Metadata API setup
  - [ ] Analytics scripts placeholder
- [ ] Create Header component (`src/components/layout/Header.tsx`):
  - [ ] Logo/branding
  - [ ] Navigation menu
  - [ ] Theme toggle integration
  - [ ] Mobile responsive design
- [ ] Create Footer component (`src/components/layout/Footer.tsx`):
  - [ ] Social links
  - [ ] Copyright notice
  - [ ] Additional navigation links
  - [ ] Newsletter signup (placeholder)
- [ ] Create Navigation component (`src/components/layout/Navigation.tsx`):
  - [ ] Active link highlighting
  - [ ] Mobile drawer/menu
  - [ ] Keyboard accessible navigation
  - [ ] Smooth transitions

**Success Criteria:**
- Layout is responsive on mobile/tablet/desktop
- Navigation is fully functional
- Theme toggle is accessible
- Header and footer display correctly

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 1, Section 1.5

---

## Phase 2: UI Component Library (Week 2)

### Issue 6: Phase 2.1 - Design Unique Components

**Title:** Phase 2.1: Design Unique Components - Visual Identity & Base Components

**Labels:** `phase-2`, `ui-components`, `priority-high`, `design`

**Description:**
Create or customize base UI components with a unique, memorable design system.

**Tasks:**
- [ ] Define visual identity:
  - [ ] Unique color palette (documented)
  - [ ] Typography system (display and body fonts)
  - [ ] Signature animations and transitions
  - [ ] Distinctive interaction patterns
- [ ] Create or customize base components in `src/components/ui/`:
  - [ ] Button (with variants: primary, secondary, outline, ghost)
  - [ ] Card (with unique styling)
  - [ ] Input (with validation states)
  - [ ] Textarea
  - [ ] Select/Dropdown
  - [ ] Checkbox
  - [ ] Radio buttons
- [ ] Add distinctive styling to each component:
  - [ ] Custom hover effects
  - [ ] Unique transitions
  - [ ] Brand-specific colors and effects
  - [ ] Loading states
- [ ] Test each component in isolation
- [ ] Verify dark mode support for all components
- [ ] Document component API and usage

**Success Criteria:**
- All base components are functional
- Design feels unique and memorable
- Components work in both light/dark themes
- Component library is documented

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 2, Section 2.1

---

### Issue 7: Phase 2.2 - Signature Custom Components

**Title:** Phase 2.2: Signature Custom Components - Hero, Section, and Card Variants

**Labels:** `phase-2`, `ui-components`, `priority-high`, `custom-components`

**Description:**
Create distinctive custom components that showcase your unique design style.

**Tasks:**
- [ ] Create Hero component (`src/components/features/Hero.tsx`):
  - [ ] Creative background (particles, patterns, or animations)
  - [ ] Unique CTA buttons with animations
  - [ ] Eye-catching entrance animation
  - [ ] Signature visual element
- [ ] Create Section wrapper component:
  - [ ] Consistent spacing system
  - [ ] Optional background variants
  - [ ] Centered content container
- [ ] Create Container component:
  - [ ] Max-width constraint
  - [ ] Responsive padding
  - [ ] Configurable sizes
- [ ] Create Card variants:
  - [ ] Project card with hover effects
  - [ ] Blog post card with image
  - [ ] Skill card with icon
  - [ ] Testimonial card (optional)
- [ ] Consider compound component pattern for complex UI:
  - [ ] Example: `Card.Root`, `Card.Header`, `Card.Content`, `Card.Footer`
  - [ ] Benefits: Clean API, flexible composition

**Success Criteria:**
- Hero component is visually impressive
- Card variants are distinctive and reusable
- Components use compound pattern where appropriate
- All components are responsive

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 2, Section 2.2

---

### Issue 8: Phase 2.3 - Loading States Implementation

**Title:** Phase 2.3: Loading States - Skeleton Components and Suspense

**Labels:** `phase-2`, `ui-components`, `priority-medium`, `loading-states`

**Description:**
Implement loading states and skeleton components for better UX.

**Tasks:**
- [ ] Create skeleton components in `src/components/ui/`:
  - [ ] Card skeleton
  - [ ] List skeleton
  - [ ] Text skeleton (heading, paragraph)
  - [ ] Image skeleton
- [ ] Implement `loading.tsx` files for route groups:
  - [ ] `app/(home)/loading.tsx`
  - [ ] `app/(content)/blog/loading.tsx`
  - [ ] `app/(content)/projects/loading.tsx`
- [ ] Add Suspense boundaries in layouts:
  - [ ] Wrap async components
  - [ ] Provide appropriate fallbacks
- [ ] Create LoadingSpinner component (optional)
- [ ] Test loading states with slow network throttling

**Success Criteria:**
- Skeleton components match actual content layout
- Loading states display smoothly
- Suspense boundaries prevent layout shift
- Loading experience feels polished

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 2, Section 2.3

---

### Issue 9: Phase 2.4 - Error Handling Implementation

**Title:** Phase 2.4: Error Handling - Error Boundaries and Error Pages

**Labels:** `phase-2`, `ui-components`, `priority-high`, `error-handling`

**Description:**
Implement comprehensive error handling with error boundaries and error pages.

**Tasks:**
- [ ] Create error boundary component in `src/components/ErrorBoundary.tsx`
- [ ] Implement `error.tsx` files for route groups:
  - [ ] `app/error.tsx` (global error page)
  - [ ] `app/(content)/blog/error.tsx`
  - [ ] `app/(content)/blog/[slug]/error.tsx`
- [ ] Create ErrorState component:
  - [ ] Error icon
  - [ ] Error message display
  - [ ] Retry button
  - [ ] Link to homepage
  - [ ] Support for different error types
- [ ] Create 404 Not Found page (`app/not-found.tsx`):
  - [ ] Friendly message
  - [ ] Navigation back to home
  - [ ] Search functionality (optional)
- [ ] Test error scenarios:
  - [ ] Network errors
  - [ ] 404 errors
  - [ ] Rendering errors
  - [ ] API errors

**Success Criteria:**
- Error boundaries catch and display errors
- Error pages are user-friendly
- Retry functionality works
- 404 page is helpful and on-brand

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 2, Section 2.4

---

## Phase 3: State & Forms (Week 3)

### Issue 10: Phase 3.1 - State Management Setup with Jotai

**Title:** Phase 3.1: State Management Setup - Jotai Implementation

**Labels:** `phase-3`, `state-management`, `priority-medium`, `jotai`

**Description:**
Setup Jotai for atomic client-side state management.

**Tasks:**
- [ ] Install Jotai (`pnpm add jotai`)
- [ ] Create atom files in `src/stores/`:
  - [ ] `src/stores/theme.ts`
  - [ ] `src/stores/ui.ts`
- [ ] Setup Jotai provider in `app/providers.tsx` (if needed)
- [ ] Create example atoms:
  - [ ] `sidebarOpenAtom`
  - [ ] `searchQueryAtom`
  - [ ] `modalStateAtom`
- [ ] Create custom hooks for atoms:
  - [ ] `useThemeAtom`
  - [ ] `useUIState`
- [ ] Document atom patterns and best practices
- [ ] Add TypeScript types for all atoms

**Success Criteria:**
- Jotai is properly configured
- Atoms are type-safe
- State updates work correctly
- Patterns are documented

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 3, Section 3.1

---

### Issue 11: Phase 3.2 - Server State Setup with TanStack Query

**Title:** Phase 3.2: Server State - TanStack Query Configuration

**Labels:** `phase-3`, `state-management`, `priority-medium`, `tanstack-query`

**Description:**
Configure TanStack Query for server state management and caching.

**Tasks:**
- [ ] Verify TanStack Query is installed (already in package.json)
- [ ] Create QueryClientProvider in `app/providers.tsx`
- [ ] Configure default query options:
  - [ ] Stale time
  - [ ] Cache time
  - [ ] Retry logic
  - [ ] Refetch on window focus
- [ ] Setup React Query DevTools (development only)
- [ ] Create example query hooks in `src/hooks/`:
  - [ ] `useGitHubData.ts` (example)
  - [ ] `useBlogPosts.ts` (for later use)
- [ ] Document query patterns and best practices
- [ ] Add error handling for queries

**Success Criteria:**
- TanStack Query is properly configured
- DevTools available in development
- Query patterns are established
- Caching works as expected

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 3, Section 3.2

---

### Issue 12: Phase 3.3 - Form Setup with React Hook Form and Zod

**Title:** Phase 3.3: Form Setup - React Hook Form + Zod Validation

**Labels:** `phase-3`, `forms`, `priority-high`, `validation`

**Description:**
Setup form handling with React Hook Form and Zod schema validation.

**Tasks:**
- [ ] Install packages (`pnpm add react-hook-form zod @hookform/resolvers`)
- [ ] Create form components in `src/components/ui/`:
  - [ ] `FormField.tsx` (wrapper component)
  - [ ] `FormError.tsx` (error message display)
  - [ ] `FormSuccess.tsx` (success message display)
  - [ ] `FormLabel.tsx` (label component)
- [ ] Create validation schemas in `src/lib/validation/`:
  - [ ] `contact.ts` (contact form schema)
  - [ ] `newsletter.ts` (newsletter schema)
- [ ] Setup form utilities:
  - [ ] Error message formatting
  - [ ] Form state helpers
- [ ] Document form patterns and examples
- [ ] Create reusable form types

**Example Schema:**
```typescript
// src/lib/validation/contact.ts
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

**Success Criteria:**
- React Hook Form is working
- Zod validation is integrated
- Form components are reusable
- Error messages display correctly

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 3, Section 3.3

---

### Issue 13: Phase 3.4 - Contact Form Implementation

**Title:** Phase 3.4: Contact Form - Complete Implementation with Validation

**Labels:** `phase-3`, `forms`, `priority-high`, `feature`

**Description:**
Implement a fully functional contact form with validation and server action.

**Tasks:**
- [ ] Create ContactForm component (`src/components/features/Contact.tsx`):
  - [ ] Name field
  - [ ] Email field
  - [ ] Message textarea
  - [ ] Form validation with Zod
  - [ ] Submit button with loading state
  - [ ] Success/error message display
- [ ] Create server action (`src/actions/contact.ts`):
  - [ ] Validate form data with Zod
  - [ ] Placeholder for email sending (implement in Phase 5)
  - [ ] Return success/error response
  - [ ] Add rate limiting (optional)
- [ ] Add form to Contact section:
  - [ ] Create contact page or section
  - [ ] Integrate ContactForm component
- [ ] Style form to match design system
- [ ] Test form validation:
  - [ ] Empty fields
  - [ ] Invalid email
  - [ ] Short message
  - [ ] Successful submission

**Success Criteria:**
- Form validates input correctly
- Error messages are clear and helpful
- Loading states work properly
- Server action handles submission
- Form is accessible and keyboard-friendly

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 3, Section 3.4

---

## Phase 4: Blog Implementation (Week 4) ⭐

### Issue 14: Phase 4.1 - MDX Setup and Configuration

**Title:** Phase 4.1: MDX Setup - Configure MDX Processing Pipeline

**Labels:** `phase-4`, `blog`, `priority-high`, `mdx`

**Description:**
Setup complete MDX processing pipeline with syntax highlighting and plugins.

**Tasks:**
- [ ] Install MDX packages:
  ```bash
  pnpm add next-mdx-remote gray-matter remark remark-gfm rehype-pretty-code shiki reading-time
  ```
- [ ] Configure MDX in `next.config.js`:
  - [ ] Enable `experimental.mdxRs: true`
- [ ] Create MDX utilities (`src/lib/blog/mdx.ts`):
  - [ ] `compileMDX()` function
  - [ ] Remark plugins configuration
  - [ ] Rehype plugins configuration
- [ ] Setup syntax highlighting:
  - [ ] Choose Shiki theme
  - [ ] Configure language support
  - [ ] Test code block rendering
- [ ] Create MDX styles (`src/styles/mdx.css`):
  - [ ] Typography styles
  - [ ] Code block styles
  - [ ] Table styles
  - [ ] Blockquote styles
- [ ] Install and configure Tailwind Typography:
  ```bash
  pnpm add -D @tailwindcss/typography
  ```
- [ ] Test MDX rendering with sample content

**Success Criteria:**
- MDX files compile correctly
- Syntax highlighting works
- All markdown features supported (GFM)
- Styles are applied correctly

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 4, Section 4.1

---

### Issue 15: Phase 4.2 - Blog Data Layer Implementation

**Title:** Phase 4.2: Blog Data Layer - Post Schema and Fetching Utilities

**Labels:** `phase-4`, `blog`, `priority-high`, `data-layer`

**Description:**
Create the data layer for blog posts including types, schemas, and fetching utilities.

**Tasks:**
- [ ] Define post schema (`src/types/blog.ts`):
  ```typescript
  export interface Post {
    slug: string
    title: string
    date: string
    author: string
    excerpt: string
    coverImage: string
    tags: string[]
    readingTime: string
    content: string
  }
  ```
- [ ] Create post fetching utilities (`src/lib/blog/posts.ts`):
  - [ ] `getAllPosts()` - get all posts sorted by date
  - [ ] `getPostBySlug()` - get single post
  - [ ] `getPostsByTag()` - filter posts by tag
  - [ ] `getAllTags()` - get all unique tags
  - [ ] `getFeaturedPosts()` - get featured posts
- [ ] Create search utility (`src/lib/blog/search.ts`):
  - [ ] Client-side search function
  - [ ] Search by title, excerpt, and content
- [ ] Create related posts utility (`src/lib/blog/related.ts`):
  - [ ] Find related posts by tags
  - [ ] Find related posts by date proximity
- [ ] Create sample blog posts in `content/blog/`:
  - [ ] At least 3 technical articles
  - [ ] Include frontmatter (title, date, excerpt, tags, etc.)
  - [ ] Add cover images to `public/images/blog/`

**Success Criteria:**
- All utility functions work correctly
- Sample posts are properly formatted
- Post fetching is type-safe
- Related posts algorithm works

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 4, Section 4.2

---

### Issue 16: Phase 4.3 - Blog Pages Implementation

**Title:** Phase 4.3: Blog Pages - Index, Post, and Tag Pages

**Labels:** `phase-4`, `blog`, `priority-high`, `pages`

**Description:**
Create all blog pages including index, individual posts, and tag filtering.

**Tasks:**
- [ ] Create blog index page (`app/(content)/blog/page.tsx`):
  - [ ] Display all posts in grid/list
  - [ ] Add search bar
  - [ ] Add tag filter
  - [ ] Implement pagination (optional)
  - [ ] Show post count
  - [ ] Featured posts section (optional)
- [ ] Create individual post page (`app/(content)/blog/[slug]/page.tsx`):
  - [ ] Generate static params for all posts
  - [ ] Implement `generateMetadata()` for SEO
  - [ ] Render post header
  - [ ] Render MDX content
  - [ ] Add table of contents
  - [ ] Add share buttons
  - [ ] Show related posts
  - [ ] Add prev/next navigation
- [ ] Create tag page (`app/(content)/blog/tags/[tag]/page.tsx`):
  - [ ] Generate static params for all tags
  - [ ] Filter posts by tag
  - [ ] Display tag name and count
  - [ ] List all posts with that tag
- [ ] Create blog layout (`app/(content)/layout.tsx`):
  - [ ] Shared layout for blog section
  - [ ] Sidebar (optional)
- [ ] Create OpenGraph image (`app/(content)/blog/[slug]/opengraph-image.tsx`):
  - [ ] Dynamic OG image generation

**Success Criteria:**
- All pages render correctly
- Navigation between pages works
- Tag filtering is functional
- Static generation works
- SEO metadata is complete

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 4, Section 4.3

---

### Issue 17: Phase 4.4 - Blog Components Implementation

**Title:** Phase 4.4: Blog Components - PostCard, PostHeader, TOC, and More

**Labels:** `phase-4`, `blog`, `priority-high`, `components`

**Description:**
Create all blog-specific components for displaying and interacting with blog content.

**Tasks:**
- [ ] PostCard component (`src/components/blog/PostCard.tsx`):
  - [ ] Cover image with next/image
  - [ ] Title and excerpt
  - [ ] Date and reading time
  - [ ] Tags list
  - [ ] Hover effects
- [ ] PostList component (`src/components/blog/PostList.tsx`):
  - [ ] Grid or list layout
  - [ ] Empty state
  - [ ] Loading state
- [ ] PostHeader component (`src/components/blog/PostHeader.tsx`):
  - [ ] Title
  - [ ] Author info
  - [ ] Publication date
  - [ ] Reading time
  - [ ] Tags
  - [ ] Cover image
- [ ] TableOfContents component (`src/components/blog/TableOfContents.tsx`):
  - [ ] Extract headings from MDX
  - [ ] Sticky positioning
  - [ ] Active heading highlight
  - [ ] Smooth scroll to section
  - [ ] Mobile-friendly collapsible
- [ ] CodeBlock component (`src/components/blog/CodeBlock.tsx`):
  - [ ] Syntax highlighting
  - [ ] Copy to clipboard button
  - [ ] Line numbers (optional)
  - [ ] Language label
  - [ ] File name display (optional)
- [ ] ShareButtons component (`src/components/blog/ShareButtons.tsx`):
  - [ ] Twitter/X share
  - [ ] LinkedIn share
  - [ ] Copy link button
  - [ ] Email share (optional)
- [ ] RelatedPosts component (`src/components/blog/RelatedPosts.tsx`):
  - [ ] Show 3 related posts
  - [ ] Use related posts utility
  - [ ] Card layout
- [ ] ReadingTime component (`src/components/blog/ReadingTime.tsx`):
  - [ ] Calculate reading time
  - [ ] Display icon and time

**Success Criteria:**
- All components are functional
- Components are reusable
- TypeScript types are complete
- Components match design system
- Accessibility is maintained

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 4, Section 4.4

---

### Issue 18: Phase 4.5 - Blog Features Implementation

**Title:** Phase 4.5: Blog Features - Search, Tags, RSS Feed, and Sitemap

**Labels:** `phase-4`, `blog`, `priority-medium`, `features`

**Description:**
Implement additional blog features to enhance functionality and discoverability.

**Tasks:**
- [ ] Implement reading time calculation:
  - [ ] Use reading-time package
  - [ ] Add to post metadata
  - [ ] Display in post card and header
- [ ] Implement search functionality:
  - [ ] Client-side search filter
  - [ ] Search bar component
  - [ ] Search by title and excerpt
  - [ ] Debounced input
  - [ ] Show search results count
- [ ] Implement tag filtering:
  - [ ] Tag cloud/list component
  - [ ] Filter posts by selected tag
  - [ ] Multi-tag selection (optional)
  - [ ] Tag count display
- [ ] Generate RSS feed:
  - [ ] Install feed package (`pnpm add feed`)
  - [ ] Create RSS route (`app/feed.xml/route.ts`)
  - [ ] Include all posts
  - [ ] Add RSS link to footer
- [ ] Generate sitemap:
  - [ ] Install next-sitemap (`pnpm add -D next-sitemap`)
  - [ ] Configure `next-sitemap.config.js`
  - [ ] Include all blog posts
  - [ ] Include all static pages
- [ ] Add blog pagination (optional):
  - [ ] Page size configuration
  - [ ] Pagination controls
  - [ ] URL parameters

**Success Criteria:**
- Search works smoothly
- Tag filtering is functional
- RSS feed validates
- Sitemap is generated correctly
- Reading time is accurate

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 4, Section 4.5

---

### Issue 19: Phase 4.6 - Blog SEO Optimization

**Title:** Phase 4.6: Blog SEO Optimization - Metadata, Schema, and Images

**Labels:** `phase-4`, `blog`, `priority-high`, `seo`

**Description:**
Optimize blog for search engines with complete metadata, structured data, and image optimization.

**Tasks:**
- [ ] Generate metadata for each post:
  - [ ] Implement `generateMetadata()` in post page
  - [ ] Include title, description, keywords
  - [ ] OpenGraph tags
  - [ ] Twitter card tags
  - [ ] Canonical URL
- [ ] Add JSON-LD structured data:
  - [ ] BlogPosting schema
  - [ ] Author schema
  - [ ] BreadcrumbList schema
  - [ ] Add to post page
- [ ] Optimize images:
  - [ ] Use next/image for all blog images
  - [ ] Generate multiple sizes
  - [ ] Use WebP format
  - [ ] Add descriptive alt text
  - [ ] Lazy load images
- [ ] Add canonical URLs:
  - [ ] Prevent duplicate content
  - [ ] Add to metadata
- [ ] Create OG image generator:
  - [ ] Dynamic OG images for posts
  - [ ] Include post title and metadata
  - [ ] Use Vercel OG or custom solution
- [ ] Implement internal linking:
  - [ ] Link related posts
  - [ ] Link to tag pages
  - [ ] Breadcrumb navigation
- [ ] Add meta robots tags:
  - [ ] Index/noindex control
  - [ ] Follow/nofollow control

**Success Criteria:**
- All posts have complete metadata
- Structured data validates
- Images are optimized
- OG images generate correctly
- SEO audit passes

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 4, Section 4.6

---

## Phase 5: Features & Integration (Week 5)

### Issue 20: Phase 5.1 - Email Integration with Resend

**Title:** Phase 5.1: Email Integration - Resend and React Email

**Labels:** `phase-5`, `integration`, `priority-high`, `email`

**Description:**
Integrate email sending functionality using Resend and React Email for contact form.

**Tasks:**
- [ ] Create Resend account (free tier)
- [ ] Get Resend API key
- [ ] Add API key to `.env.local` and `.env.example`
- [ ] Install packages:
  ```bash
  pnpm add resend react-email @react-email/components
  ```
- [ ] Create email templates in `src/emails/`:
  - [ ] `ContactEmail.tsx` - Contact form submission
  - [ ] `WelcomeEmail.tsx` - Newsletter welcome (optional)
- [ ] Create Resend client (`src/lib/email/resend.ts`):
  - [ ] Initialize Resend
  - [ ] Export client
- [ ] Update contact server action (`src/actions/contact.ts`):
  - [ ] Integrate Resend
  - [ ] Send email on form submission
  - [ ] Handle errors
  - [ ] Return success/error response
- [ ] Test email sending:
  - [ ] Submit contact form
  - [ ] Verify email received
  - [ ] Test error handling
- [ ] Configure email domain (optional):
  - [ ] Add custom domain to Resend
  - [ ] Verify domain

**Success Criteria:**
- Contact form sends emails successfully
- Email templates render correctly
- Error handling works
- Rate limiting prevents abuse

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 5, Section 5.1

---

### Issue 21: Phase 5.2 - Analytics Setup with PostHog

**Title:** Phase 5.2: Analytics Setup - PostHog Integration

**Labels:** `phase-5`, `integration`, `priority-medium`, `analytics`

**Description:**
Setup PostHog for product analytics and user behavior tracking.

**Tasks:**
- [ ] Create PostHog account (free tier)
- [ ] Get PostHog API key and host URL
- [ ] Add credentials to `.env.local` and `.env.example`:
  - `NEXT_PUBLIC_POSTHOG_KEY`
  - `NEXT_PUBLIC_POSTHOG_HOST`
- [ ] Install PostHog:
  ```bash
  pnpm add posthog-js
  ```
- [ ] Create PostHog utility (`src/lib/analytics/posthog.ts`):
  - [ ] Initialize PostHog
  - [ ] Export tracking functions
  - [ ] Handle client-side only
- [ ] Add PostHog to root layout:
  - [ ] Initialize in providers
  - [ ] Add pageview tracking
- [ ] Create custom events:
  - [ ] Blog post viewed
  - [ ] Contact form submitted
  - [ ] Project clicked
  - [ ] Tag clicked
  - [ ] Search performed
- [ ] Create analytics hooks (`src/hooks/useAnalytics.ts`):
  - [ ] `trackEvent()` wrapper
  - [ ] Type-safe event tracking
- [ ] Test analytics:
  - [ ] Verify events in PostHog dashboard
  - [ ] Test page views
  - [ ] Test custom events

**Success Criteria:**
- PostHog tracking works
- Custom events are captured
- Analytics respect privacy
- Events are properly typed

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 5, Section 5.2

---

### Issue 22: Phase 5.3 - Analytics Setup with Vercel

**Title:** Phase 5.3: Analytics Setup - Vercel Analytics Integration

**Labels:** `phase-5`, `integration`, `priority-medium`, `analytics`

**Description:**
Setup Vercel Analytics for web vitals and performance monitoring.

**Tasks:**
- [ ] Install Vercel Analytics:
  ```bash
  pnpm add @vercel/analytics
  ```
- [ ] Add to root layout (`app/layout.tsx`):
  ```typescript
  import { Analytics } from '@vercel/analytics/react'
  ```
- [ ] Add Analytics component to layout
- [ ] Install Vercel Speed Insights (optional):
  ```bash
  pnpm add @vercel/speed-insights
  ```
- [ ] Add SpeedInsights component to layout
- [ ] Configure analytics (if needed):
  - [ ] Set sample rate
  - [ ] Configure tracking
- [ ] Test analytics:
  - [ ] Deploy to Vercel
  - [ ] Verify data in Vercel dashboard
  - [ ] Check web vitals

**Success Criteria:**
- Vercel Analytics is active
- Web vitals are tracked
- Performance data is visible in dashboard
- Speed Insights works (if installed)

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 5, Section 5.3

---

### Issue 23: Phase 5.4 - Error Tracking with Sentry (Optional)

**Title:** Phase 5.4: Error Tracking - Sentry Integration (Optional)

**Labels:** `phase-5`, `integration`, `priority-low`, `error-tracking`, `optional`

**Description:**
Setup Sentry for error tracking and monitoring (optional but recommended for production).

**Tasks:**
- [ ] Create Sentry account (free tier)
- [ ] Get Sentry DSN
- [ ] Add to `.env.local` and `.env.example`:
  - `SENTRY_DSN`
  - `NEXT_PUBLIC_SENTRY_DSN`
- [ ] Install Sentry:
  ```bash
  pnpm add @sentry/nextjs
  ```
- [ ] Initialize Sentry:
  ```bash
  pnpx @sentry/wizard@latest -i nextjs
  ```
- [ ] Configure Sentry files:
  - [ ] `sentry.client.config.ts`
  - [ ] `sentry.server.config.ts`
  - [ ] `sentry.edge.config.ts`
- [ ] Update error boundaries to report to Sentry
- [ ] Configure source maps upload
- [ ] Test error tracking:
  - [ ] Trigger test error
  - [ ] Verify in Sentry dashboard
- [ ] Configure error filtering:
  - [ ] Ignore known errors
  - [ ] Set up alerts

**Success Criteria:**
- Sentry captures errors
- Source maps uploaded correctly
- Error boundaries report to Sentry
- Alerts are configured

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 5, Section 5.4

---

### Issue 24: Phase 5.5 - Additional Features Implementation

**Title:** Phase 5.5: Additional Features - Newsletter, Projects, and GitHub Stats

**Labels:** `phase-5`, `features`, `priority-medium`, `enhancement`

**Description:**
Implement additional portfolio features including newsletter, projects showcase, and GitHub integration.

**Tasks:**
- [ ] Newsletter subscription (optional):
  - [ ] Create newsletter form component
  - [ ] Add server action
  - [ ] Integrate with email service
  - [ ] Add to footer
- [ ] Projects showcase page:
  - [ ] Create projects page (`app/(content)/projects/page.tsx`)
  - [ ] Create project card component
  - [ ] Add project data (MDX or JSON)
  - [ ] Individual project pages
  - [ ] Filter by technology
- [ ] GitHub stats integration (optional):
  - [ ] Fetch GitHub data
  - [ ] Display contribution graph
  - [ ] Show repository stats
  - [ ] Add to about section
- [ ] Scroll progress indicator:
  - [ ] Create progress bar component
  - [ ] Track scroll position
  - [ ] Add to blog posts
- [ ] View counter for blog posts (optional):
  - [ ] Setup view tracking
  - [ ] Display view count
  - [ ] Store in database or API
- [ ] Back to top button:
  - [ ] Create floating button
  - [ ] Smooth scroll to top
  - [ ] Show/hide on scroll

**Success Criteria:**
- Newsletter form works (if implemented)
- Projects page is complete
- Additional features enhance UX
- All features are responsive

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 5, Section 5.5

---

## Phase 6: Testing & Quality (Week 6)

### Issue 25: Phase 6.1 - Testing Setup with Vitest

**Title:** Phase 6.1: Testing Setup - Vitest and Testing Library

**Labels:** `phase-6`, `testing`, `priority-high`, `setup`

**Description:**
Setup testing infrastructure with Vitest and React Testing Library.

**Tasks:**
- [ ] Install Vitest and testing libraries:
  ```bash
  pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react
  ```
- [ ] Create Vitest config (`vitest.config.ts`):
  - [ ] Configure jsdom environment
  - [ ] Setup test globals
  - [ ] Configure path aliases
  - [ ] Add React plugin
- [ ] Create test setup file (`src/test/setup.ts`):
  - [ ] Import @testing-library/jest-dom
  - [ ] Setup custom matchers
  - [ ] Mock global objects
- [ ] Add test scripts to `package.json`:
  - [ ] `test` - Run all tests
  - [ ] `test:watch` - Watch mode
  - [ ] `test:coverage` - Coverage report
  - [ ] `test:ui` - Vitest UI
- [ ] Create test utilities (`src/test/utils.tsx`):
  - [ ] Custom render function
  - [ ] Test wrappers (providers)
  - [ ] Mock data generators
- [ ] Write example test to verify setup
- [ ] Configure coverage thresholds

**Success Criteria:**
- Vitest runs successfully
- Tests can import components
- Test utilities work correctly
- Coverage reports generate

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 6, Section 6.1

---

### Issue 26: Phase 6.2 - Unit Tests Implementation

**Title:** Phase 6.2: Unit Tests - Utility Functions and Blog Logic

**Labels:** `phase-6`, `testing`, `priority-medium`, `unit-tests`

**Description:**
Write unit tests for utility functions and blog logic.

**Tasks:**
- [ ] Test utility functions:
  - [ ] Date formatting (`src/lib/utils.ts`)
  - [ ] String manipulation
  - [ ] CN (className) utility
  - [ ] URL helpers
- [ ] Test validation schemas:
  - [ ] Contact form schema
  - [ ] Newsletter schema
  - [ ] Valid and invalid inputs
- [ ] Test blog utilities:
  - [ ] `getAllPosts()` - verify sorting
  - [ ] `getPostBySlug()` - find specific post
  - [ ] `getPostsByTag()` - filter by tag
  - [ ] `getAllTags()` - unique tags
  - [ ] Search algorithm
  - [ ] Related posts logic
- [ ] Test reading time calculation
- [ ] Test MDX processing (if feasible)
- [ ] Aim for >80% coverage on utilities

**Success Criteria:**
- All utility functions tested
- Blog utilities have comprehensive tests
- Edge cases are covered
- Coverage > 80% for utilities

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 6, Section 6.2

---

### Issue 27: Phase 6.3 - Component Tests Implementation

**Title:** Phase 6.3: Component Tests - UI and Blog Components

**Labels:** `phase-6`, `testing`, `priority-medium`, `component-tests`

**Description:**
Write component tests for UI components and blog components.

**Tasks:**
- [ ] Test UI components:
  - [ ] Button variants and states
  - [ ] Card rendering
  - [ ] Input validation states
  - [ ] Form field components
  - [ ] Loading skeletons
  - [ ] Error states
- [ ] Test blog components:
  - [ ] PostCard displays correctly
  - [ ] PostList renders multiple posts
  - [ ] PostHeader shows metadata
  - [ ] TableOfContents extracts headings
  - [ ] ShareButtons generate correct URLs
  - [ ] RelatedPosts shows related content
- [ ] Test layout components:
  - [ ] Header navigation
  - [ ] Footer links
  - [ ] ThemeToggle switches theme
- [ ] Test form submission:
  - [ ] ContactForm validation
  - [ ] Form error messages
  - [ ] Submit handler called
- [ ] Test user interactions:
  - [ ] Click events
  - [ ] Form input
  - [ ] Navigation
- [ ] Aim for >70% overall coverage

**Success Criteria:**
- Key components have tests
- User interactions are tested
- Accessibility is tested
- Coverage > 70% overall

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 6, Section 6.3

---

### Issue 28: Phase 6.4 - E2E Tests with Playwright (Optional)

**Title:** Phase 6.4: E2E Tests - Playwright Integration (Optional)

**Labels:** `phase-6`, `testing`, `priority-low`, `e2e`, `optional`

**Description:**
Setup and write end-to-end tests with Playwright for critical user flows.

**Tasks:**
- [ ] Install Playwright:
  ```bash
  pnpm add -D @playwright/test
  pnpx playwright install
  ```
- [ ] Configure Playwright (`playwright.config.ts`):
  - [ ] Set base URL
  - [ ] Configure browsers
  - [ ] Setup test directories
  - [ ] Configure screenshots/videos
- [ ] Write critical path tests:
  - [ ] Homepage loads correctly
  - [ ] Navigation works
  - [ ] Blog index displays posts
  - [ ] Individual blog post opens
  - [ ] Contact form submission
  - [ ] Search functionality
  - [ ] Tag filtering
  - [ ] Theme toggle
- [ ] Test responsive layouts:
  - [ ] Mobile viewport
  - [ ] Tablet viewport
  - [ ] Desktop viewport
- [ ] Add E2E scripts to `package.json`:
  - [ ] `test:e2e` - Run E2E tests
  - [ ] `test:e2e:ui` - Playwright UI
- [ ] Setup CI for E2E tests (optional)

**Success Criteria:**
- Critical user flows tested
- Tests pass consistently
- Playwright UI works
- Tests run in CI (if configured)

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 6, Section 6.4

---

### Issue 29: Phase 6.5 - Performance Optimization

**Title:** Phase 6.5: Performance Optimization - Lighthouse, Images, and Bundle

**Labels:** `phase-6`, `performance`, `priority-high`, `optimization`

**Description:**
Optimize application performance for speed and efficiency.

**Tasks:**
- [ ] Run Lighthouse audit:
  - [ ] Test homepage
  - [ ] Test blog index
  - [ ] Test individual post
  - [ ] Document baseline scores
- [ ] Optimize images:
  - [ ] Use next/image everywhere
  - [ ] Generate multiple sizes
  - [ ] Use WebP format
  - [ ] Add blur placeholders
  - [ ] Lazy load below fold
  - [ ] Optimize alt text
- [ ] Implement code splitting:
  - [ ] Dynamic imports for heavy components
  - [ ] Route-based splitting (automatic)
  - [ ] Lazy load modals and dialogs
- [ ] Bundle analysis:
  - [ ] Install bundle analyzer:
    ```bash
    pnpm add -D @next/bundle-analyzer
    ```
  - [ ] Analyze bundle size
  - [ ] Identify large dependencies
  - [ ] Remove unused code
- [ ] Font optimization:
  - [ ] Use next/font
  - [ ] Preload critical fonts
  - [ ] Font display: swap
  - [ ] Subset fonts if possible
- [ ] Implement caching strategy:
  - [ ] Static generation for blog posts
  - [ ] ISR for dynamic content (if needed)
  - [ ] Configure cache headers
- [ ] Optimize third-party scripts:
  - [ ] Load analytics asynchronously
  - [ ] Defer non-critical scripts
- [ ] Target metrics:
  - [ ] Lighthouse Performance > 90
  - [ ] FCP < 1.5s
  - [ ] LCP < 2.5s
  - [ ] CLS < 0.1
  - [ ] Bundle < 500KB

**Success Criteria:**
- Lighthouse score > 90 (all categories)
- Images optimized
- Bundle size < 500KB
- Web Vitals pass

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 6, Section 6.5

---

### Issue 30: Phase 6.6 - Accessibility Audit

**Title:** Phase 6.6: Accessibility Audit - WCAG 2.1 AA Compliance

**Labels:** `phase-6`, `accessibility`, `priority-high`, `audit`

**Description:**
Conduct comprehensive accessibility audit and fix all issues to meet WCAG 2.1 AA standards.

**Tasks:**
- [ ] Install accessibility tools:
  - [ ] axe DevTools browser extension
  - [ ] Lighthouse accessibility audit
  - [ ] WAVE extension
- [ ] Run axe DevTools on all pages:
  - [ ] Homepage
  - [ ] Blog index
  - [ ] Blog post
  - [ ] Contact page
  - [ ] Projects page
- [ ] Fix ARIA issues:
  - [ ] Add missing ARIA labels
  - [ ] Fix invalid ARIA attributes
  - [ ] Ensure proper ARIA roles
- [ ] Test keyboard navigation:
  - [ ] Tab through all interactive elements
  - [ ] Test focus indicators
  - [ ] Test keyboard shortcuts
  - [ ] Ensure skip links work
  - [ ] Test modal/dialog keyboard traps
- [ ] Test with screen reader:
  - [ ] NVDA (Windows) or VoiceOver (Mac)
  - [ ] Verify all content is announced
  - [ ] Test form labels
  - [ ] Test alt text
- [ ] Verify color contrast:
  - [ ] Use contrast checker tool
  - [ ] Test both light and dark themes
  - [ ] Ensure 4.5:1 for text
  - [ ] Ensure 3:1 for UI components
- [ ] Test focus management:
  - [ ] Focus visible on all elements
  - [ ] Focus order is logical
  - [ ] Focus trapped in modals
  - [ ] Focus restored on close
- [ ] Add accessibility features:
  - [ ] Skip to main content link
  - [ ] Landmark regions
  - [ ] Heading hierarchy
  - [ ] Alt text for images
- [ ] Target: Lighthouse Accessibility score 100

**Success Criteria:**
- Zero accessibility violations
- Lighthouse accessibility score 100
- Keyboard navigation works perfectly
- Screen reader friendly
- WCAG 2.1 AA compliant

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 6, Section 6.6

---

### Issue 31: Phase 6.7 - SEO Audit and Optimization

**Title:** Phase 6.7: SEO Audit - Complete SEO Checklist

**Labels:** `phase-6`, `seo`, `priority-high`, `audit`

**Description:**
Conduct comprehensive SEO audit and ensure all best practices are implemented.

**Tasks:**
- [ ] Verify meta tags on all pages:
  - [ ] Title tags (unique, descriptive)
  - [ ] Meta descriptions
  - [ ] OpenGraph tags
  - [ ] Twitter card tags
  - [ ] Canonical URLs
  - [ ] Viewport meta tag
- [ ] Check robots.txt:
  - [ ] Create if missing
  - [ ] Allow/disallow correct paths
  - [ ] Reference sitemap
- [ ] Validate sitemap.xml:
  - [ ] All pages included
  - [ ] URLs are absolute
  - [ ] Valid XML format
  - [ ] Submit to Google Search Console
- [ ] Test structured data:
  - [ ] Use Google Rich Results Test
  - [ ] Validate JSON-LD
  - [ ] Test BlogPosting schema
  - [ ] Test BreadcrumbList schema
- [ ] Check internal linking:
  - [ ] No broken links
  - [ ] Related posts linked
  - [ ] Breadcrumb navigation
  - [ ] Footer navigation
- [ ] Mobile-friendly test:
  - [ ] Use Google Mobile-Friendly Test
  - [ ] Verify responsive design
  - [ ] Test touch targets
- [ ] Test page speed:
  - [ ] Use PageSpeed Insights
  - [ ] Test on mobile and desktop
  - [ ] Address recommendations
- [ ] Verify heading hierarchy:
  - [ ] Single H1 per page
  - [ ] Logical H2-H6 structure
  - [ ] No skipped levels
- [ ] Optimize URLs:
  - [ ] Clean, readable URLs
  - [ ] Include keywords
  - [ ] Use hyphens, not underscores
- [ ] Check image optimization:
  - [ ] All images have alt text
  - [ ] File sizes optimized
  - [ ] Responsive images
- [ ] Test social sharing:
  - [ ] Preview on Twitter
  - [ ] Preview on LinkedIn
  - [ ] Preview on Facebook
- [ ] Target: Lighthouse SEO score > 95

**Success Criteria:**
- Lighthouse SEO score > 95
- All meta tags present
- Structured data validates
- Sitemap and robots.txt correct
- Mobile-friendly
- Internal linking complete

**Reference:** `PROMPT_REFATORACAO_PORTFOLIO.md` - Phase 6, Section 6.7

---

## Summary

**Total Issues:** 31 issues across 6 phases

**Phase Breakdown:**
- Phase 1 (Foundation): 5 issues
- Phase 2 (UI Components): 4 issues
- Phase 3 (State & Forms): 4 issues
- Phase 4 (Blog): 6 issues
- Phase 5 (Features & Integration): 5 issues
- Phase 6 (Testing & Quality): 7 issues

**Priority Distribution:**
- High Priority: 17 issues
- Medium Priority: 11 issues
- Low Priority: 3 issues (optional features)

**Labels to Create:**
- `phase-1`, `phase-2`, `phase-3`, `phase-4`, `phase-5`, `phase-6`
- `foundation`, `ui-components`, `state-management`, `forms`, `blog`, `integration`, `testing`, `performance`, `accessibility`, `seo`
- `priority-high`, `priority-medium`, `priority-low`
- `setup`, `devtools`, `ui-design`, `theming`, `components`, `optional`
- `mdx`, `data-layer`, `pages`, `features`, `email`, `analytics`, `error-tracking`
- `unit-tests`, `component-tests`, `e2e`, `optimization`, `audit`

**Next Steps:**
1. Create the labels in GitHub repository
2. Create each issue using the title, labels, and description above
3. Optionally create milestones for each phase
4. Link related issues using GitHub's linking syntax
5. Assign issues as work begins

**Estimated Timeline:**
- Full implementation: 6 weeks
- MVP (Phase 1 + 4): 2 weeks
- Per phase: 5-7 days each
