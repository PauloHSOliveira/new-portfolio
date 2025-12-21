# 🗺️ PORTFOLIO REFACTORING - Complete Technical Roadmap

**Version:** 2.0  
**Last Updated:** December 2025  
**Timeline:** 6 weeks (full implementation)  
**Target:** Modern Full-Stack Portfolio with Integrated Blog

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture & Folder Structure](#architecture--folder-structure)
4. [Phase 1: Foundation (Week 1-2)](#phase-1-foundation-week-1-2)
5. [Phase 2: UI Component Library (Week 2)](#phase-2-ui-component-library-week-2)
6. [Phase 3: State & Forms (Week 3)](#phase-3-state--forms-week-3)
7. [Phase 4: Blog Implementation (Week 4)](#phase-4-blog-implementation-week-4)
8. [Phase 5: Features & Integration (Week 5)](#phase-5-features--integration-week-5)
9. [Phase 6: Testing & Quality (Week 6)](#phase-6-testing--quality-week-6)
10. [Configuration Files](#configuration-files)
11. [Environment Variables](#environment-variables)
12. [Metrics & KPIs](#metrics--kpis)
13. [Best Practices](#best-practices)
14. [Deployment Checklist](#deployment-checklist)

---

## 🎯 Project Overview

### Vision
Create a **professional, performant, and type-safe portfolio** website that showcases technical expertise in fintech/payments while providing a platform for technical writing through an integrated blog.

### Goals
- ✅ Modern Next.js 15 + React 19 + TypeScript stack
- ✅ Integrated blog with MDX support
- ✅ 90+ Lighthouse score across all metrics
- ✅ Full type safety (TypeScript strict mode)
- ✅ Production-grade analytics and monitoring
- ✅ Responsive and accessible design
- ✅ Email contact form integration
- ✅ SEO optimized for blog content

### Non-Goals
- ❌ Complex CMS admin interface (use filesystem/Git)
- ❌ User authentication system (static portfolio)
- ❌ E-commerce features
- ❌ Social media platform features
- ❌ Real-time collaboration

---

## 🛠️ Technology Stack

### Core Framework
```typescript
Next.js 15.x         // React framework with App Router
React 19.x           // UI library with server components
TypeScript 5.6+      // Type safety (strict mode)
Node.js 18+          // Runtime
pnpm                 // Package manager
```

### UI & Styling
```typescript
Tailwind CSS 3.4+    // Utility-first CSS
shadcn/ui            // Component library (copy-paste)
Radix UI             // Accessible primitives
Lucide React         // Icons
next-themes          // Theme management
```

### State Management
```typescript
Jotai                // Atomic client state
TanStack Query 5.x   // Server state & caching
```

### Forms & Validation
```typescript
React Hook Form 7.x  // Form state
Zod 3.x              // Schema validation
```

### Blog & Content
```typescript
MDX                  // Markdown + JSX
next-mdx-remote      // Dynamic MDX rendering
gray-matter          // Frontmatter parsing
remark               // Markdown processing
remark-gfm           // GitHub flavored markdown
rehype-pretty-code   // Code highlighting
shiki                // Syntax highlighter
reading-time         // Reading time estimation
```

### Email
```typescript
Resend               // Email delivery API
React Email          // Email templates
```

### Analytics & Monitoring
```typescript
PostHog              // Product analytics
Vercel Analytics     // Performance metrics
Sentry               // Error tracking
```

### Testing
```typescript
Vitest               // Unit/integration tests
@testing-library/react  // Component testing
Playwright           // E2E tests (optional)
```

### DevTools
```typescript
Biome                // Linter & formatter
TypeScript           // Type checking
Turbo                // Build optimization
```

---

## 🏗️ Architecture & Folder Structure

### Complete Folder Structure

```
new-portfolio/
├── app/                          # Next.js App Router
│   ├── (home)/                   # Home route group
│   │   ├── page.tsx              # Homepage
│   │   └── layout.tsx            # Home layout
│   │
│   ├── (content)/                # Content route group
│   │   ├── layout.tsx            # Content layout
│   │   │
│   │   ├── blog/                 # Blog section
│   │   │   ├── page.tsx          # Blog index (list)
│   │   │   ├── [slug]/           # Dynamic blog post
│   │   │   │   ├── page.tsx      # Post page
│   │   │   │   └── opengraph-image.tsx  # OG image
│   │   │   └── tags/             # Tags index
│   │   │       └── [tag]/        # Posts by tag
│   │   │           └── page.tsx
│   │   │
│   │   └── projects/             # Projects section
│   │       ├── page.tsx          # Projects list
│   │       └── [slug]/           # Project detail
│   │           └── page.tsx
│   │
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form endpoint
│   │   │   └── route.ts
│   │   ├── subscribe/            # Newsletter subscription
│   │   │   └── route.ts
│   │   └── og/                   # OG image generation
│   │       └── route.tsx
│   │
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── providers.tsx             # Context providers
│   └── not-found.tsx             # 404 page
│
├── src/                          # Source code
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── features/             # Feature components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── blog/                 # Blog-specific components
│   │       ├── PostCard.tsx
│   │       ├── PostList.tsx
│   │       ├── PostHeader.tsx
│   │       ├── TableOfContents.tsx
│   │       ├── CodeBlock.tsx
│   │       ├── ReadingTime.tsx
│   │       ├── ShareButtons.tsx
│   │       └── RelatedPosts.tsx
│   │
│   ├── lib/                      # Utilities & config
│   │   ├── utils.ts              # General utilities
│   │   ├── cn.ts                 # Class name utility
│   │   │
│   │   ├── blog/                 # Blog utilities
│   │   │   ├── mdx.ts            # MDX processing
│   │   │   ├── posts.ts          # Post fetching
│   │   │   ├── search.ts         # Post search
│   │   │   └── related.ts        # Related posts
│   │   │
│   │   ├── validation/           # Zod schemas
│   │   │   ├── contact.ts
│   │   │   └── newsletter.ts
│   │   │
│   │   └── email/                # Email utilities
│   │       └── resend.ts         # Resend client
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useTheme.ts
│   │   ├── useMediaQuery.ts
│   │   └── useScrollPosition.ts
│   │
│   ├── stores/                   # Jotai atoms
│   │   ├── theme.ts
│   │   └── ui.ts
│   │
│   ├── actions/                  # Server actions
│   │   ├── contact.ts
│   │   └── newsletter.ts
│   │
│   ├── types/                    # TypeScript types
│   │   ├── blog.ts
│   │   ├── project.ts
│   │   └── common.ts
│   │
│   ├── config/                   # Configuration
│   │   ├── site.ts               # Site metadata
│   │   └── nav.ts                # Navigation config
│   │
│   └── styles/                   # Additional styles
│       └── mdx.css               # MDX-specific styles
│
├── content/                      # Content (MDX files)
│   ├── blog/                     # Blog posts
│   │   ├── 2024-01-15-nextjs-app-router.mdx
│   │   ├── 2024-01-22-typescript-patterns.mdx
│   │   └── ...
│   │
│   └── projects/                 # Project descriptions
│       ├── paglua.mdx
│       └── ...
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── blog/                 # Blog post images
│   │   └── projects/             # Project images
│   ├── icons/
│   └── favicon.ico
│
├── .cursor/                      # Cursor IDE config
│   └── rules.md                  # Cursor rules
│
├── .copilot/                     # Copilot config
│   └── instructions.md           # Copilot instructions
│
├── .github/                      # GitHub config
│   └── workflows/
│       └── ci.yml                # CI/CD pipeline
│
├── next.config.js                # Next.js config
├── tailwind.config.js            # Tailwind config
├── tsconfig.json                 # TypeScript config
├── biome.json                    # Biome config
├── package.json                  # Dependencies
├── .env.example                  # Environment template
├── .env.local                    # Local environment (gitignored)
└── README.md                     # Project readme
```

---

## 📅 Phase 1: Foundation (Week 1-2)

**Duration:** 2 weeks | **Effort:** 15-20 hours

### Objectives
- Setup Next.js 15 with TypeScript strict mode
- Implement folder structure
- Configure development tools
- Create basic layout system

### Checklist

#### 1.1 Project Initialization
- [ ] Update to Next.js 15
  ```bash
  pnpm add next@latest react@latest react-dom@latest
  ```
- [ ] Enable TypeScript strict mode in `tsconfig.json`
- [ ] Configure `next.config.js` for App Router
- [ ] Setup path aliases (`@/components`, `@/lib`, etc.)
- [ ] Create folder structure as per architecture

#### 1.2 Development Tools
- [ ] Verify Biome configuration (already setup)
- [ ] Add pre-commit hooks (Husky - optional)
- [ ] Configure Turbo (already setup)
- [ ] Setup environment variables template

#### 1.3 Tailwind & UI Setup
- [ ] Install Tailwind CSS (already installed)
- [ ] Initialize shadcn/ui
  ```bash
  pnpx shadcn-ui@latest init
  ```
- [ ] Configure Tailwind theme (colors, fonts, spacing)
- [ ] Add custom CSS variables for theming
- [ ] Install base shadcn components
  ```bash
  pnpx shadcn-ui@latest add button card input label
  ```

#### 1.4 Theme System
- [ ] Install `next-themes`
  ```bash
  pnpm add next-themes
  ```
- [ ] Create ThemeProvider in `app/providers.tsx`
- [ ] Implement ThemeToggle component
- [ ] Add dark mode support to Tailwind config

#### 1.5 Layout Components
- [ ] Create root layout (`app/layout.tsx`)
  - HTML structure
  - Font configuration
  - Metadata API
  - Analytics scripts
- [ ] Create Header component
  - Logo/branding
  - Navigation menu
  - Theme toggle
  - Mobile responsive
- [ ] Create Footer component
  - Social links
  - Copyright
  - Additional navigation
- [ ] Create Navigation component
  - Active link highlighting
  - Mobile drawer
  - Keyboard accessible

### Success Criteria
- ✅ Clean build with zero TypeScript errors
- ✅ Dark/light theme toggle working
- ✅ Responsive layout on mobile/tablet/desktop
- ✅ Navigation functional
- ✅ Tailwind classes working

---

## 📅 Phase 2: UI Component Library (Week 2)

**Duration:** 3-4 days | **Effort:** 8-12 hours

### Objectives
- Build core UI component library
- Implement design system
- Create reusable patterns

### Checklist

#### 2.1 shadcn/ui Components
- [ ] Install essential components
  ```bash
  pnpx shadcn-ui@latest add button card input label \
    textarea select checkbox radio-group \
    dropdown-menu dialog alert toast \
    separator skeleton badge
  ```
- [ ] Test each component in isolation
- [ ] Verify dark mode support

#### 2.2 Custom Components
- [ ] Create `Hero` component
  - Gradient background
  - CTA buttons
  - Animation on load
- [ ] Create `Section` wrapper component
  - Consistent spacing
  - Optional background
  - Centered content
- [ ] Create `Container` component
  - Max-width constraint
  - Responsive padding
- [ ] Create `Card` variants
  - Project card
  - Blog post card
  - Skill card

#### 2.3 Loading States
- [ ] Create skeleton components
  - Card skeleton
  - List skeleton
  - Text skeleton
- [ ] Implement loading.tsx for route groups
- [ ] Add Suspense boundaries

#### 2.4 Error Handling
- [ ] Create error boundary component
- [ ] Implement error.tsx for route groups
- [ ] Create ErrorState component
  - Error message
  - Retry button
  - Home link

### Success Criteria
- ✅ All shadcn components installed and styled
- ✅ Custom components documented
- ✅ Loading states working
- ✅ Error boundaries catching errors

---

## 📅 Phase 3: State & Forms (Week 3)

**Duration:** 5-7 days | **Effort:** 10-15 hours

### Objectives
- Setup state management
- Implement form handling
- Add validation

### Checklist

#### 3.1 State Management Setup
- [ ] Install Jotai
  ```bash
  pnpm add jotai
  ```
- [ ] Create atom files in `src/stores/`
- [ ] Setup provider in `app/providers.tsx`
- [ ] Create example atoms
  ```typescript
  // src/stores/ui.ts
  export const sidebarOpenAtom = atom(false)
  export const searchQueryAtom = atom('')
  ```

#### 3.2 Server State (TanStack Query)
- [ ] Already installed - configure
- [ ] Create QueryClientProvider
- [ ] Setup devtools (development only)
- [ ] Create query hooks
  ```typescript
  // Example: useGitHubData.ts
  export function useGitHubData() {
    return useQuery({
      queryKey: ['github'],
      queryFn: fetchGitHubData,
    })
  }
  ```

#### 3.3 Form Setup
- [ ] Install React Hook Form + Zod
  ```bash
  pnpm add react-hook-form zod @hookform/resolvers
  ```
- [ ] Create form components
  - FormField wrapper
  - FormError component
  - FormSuccess component
- [ ] Create validation schemas
  ```typescript
  // src/lib/validation/contact.ts
  export const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
  })
  ```

#### 3.4 Contact Form
- [ ] Create ContactForm component
  - Name, email, message fields
  - Form validation
  - Submit handling
  - Loading state
  - Success/error messages
- [ ] Create server action
  ```typescript
  // src/actions/contact.ts
  export async function submitContact(data: ContactFormData) {
    // Validation
    // Email sending (Phase 5)
    // Return success/error
  }
  ```
- [ ] Add rate limiting (optional)

### Success Criteria
- ✅ State management working
- ✅ Contact form validates input
- ✅ Form submission handling implemented
- ✅ Type-safe schemas

---

## 📅 Phase 4: Blog Implementation (Week 4) ⭐

**Duration:** 5-7 days | **Effort:** 15-20 hours

### Objectives
- Setup MDX processing
- Create blog pages
- Implement blog features
- SEO optimization

### Checklist

#### 4.1 MDX Setup
- [ ] Install MDX packages
  ```bash
  pnpm add next-mdx-remote gray-matter \
    remark remark-gfm rehype-pretty-code shiki \
    reading-time
  ```
- [ ] Configure MDX in Next.js
- [ ] Create MDX utilities
  ```typescript
  // src/lib/blog/mdx.ts
  export async function compileMDX(source: string) {
    // Compile MDX with plugins
  }
  ```
- [ ] Setup syntax highlighting theme

#### 4.2 Blog Data Layer
- [ ] Define post schema
  ```typescript
  // src/types/blog.ts
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
- [ ] Create post fetching utilities
  ```typescript
  // src/lib/blog/posts.ts
  export function getAllPosts(): Post[]
  export function getPostBySlug(slug: string): Post
  export function getPostsByTag(tag: string): Post[]
  ```
- [ ] Create sample blog posts (3-5)

#### 4.3 Blog Pages
- [ ] Create blog index page (`app/(content)/blog/page.tsx`)
  - List all posts
  - Search bar
  - Filter by tag
  - Pagination (optional)
- [ ] Create individual post page (`app/(content)/blog/[slug]/page.tsx`)
  - Post header (title, date, author, reading time)
  - MDX content rendering
  - Table of contents
  - Share buttons
  - Related posts
- [ ] Create tag page (`app/(content)/blog/tags/[tag]/page.tsx`)
  - Posts filtered by tag

#### 4.4 Blog Components
- [ ] PostCard component
  ```typescript
  // Displays post preview
  - Cover image
  - Title
  - Excerpt
  - Date
  - Reading time
  - Tags
  ```
- [ ] PostHeader component
  ```typescript
  // Post page header
  - Title
  - Author
  - Date
  - Reading time
  - Tags
  ```
- [ ] TableOfContents component
  ```typescript
  // Sticky TOC
  - Extract headings from MDX
  - Active heading highlight
  - Smooth scroll
  ```
- [ ] CodeBlock component
  ```typescript
  // Enhanced code display
  - Syntax highlighting
  - Copy button
  - Line numbers (optional)
  - Language label
  ```
- [ ] ShareButtons component
  ```typescript
  // Social sharing
  - Twitter/X
  - LinkedIn
  - Copy link
  ```
- [ ] RelatedPosts component
  ```typescript
  // Show 3 related posts
  - By tags
  - By date
  ```

#### 4.5 Blog Features
- [ ] Reading time calculation
- [ ] Search functionality (client-side filter)
- [ ] Tag filtering
- [ ] RSS feed generation
  ```bash
  pnpm add feed
  ```
  ```typescript
  // app/feed.xml/route.ts
  export async function GET() {
    const feed = new Feed(...)
    // Add posts
    return new Response(feed.rss2())
  }
  ```
- [ ] Sitemap generation
  ```bash
  pnpm add next-sitemap
  ```

#### 4.6 SEO Optimization
- [ ] Generate metadata for each post
  ```typescript
  export async function generateMetadata({ params }): Metadata {
    const post = getPostBySlug(params.slug)
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
      },
    }
  }
  ```
- [ ] Add JSON-LD structured data
- [ ] Optimize images with next/image
- [ ] Add canonical URLs

### Success Criteria
- ✅ MDX posts render correctly
- ✅ Syntax highlighting works
- ✅ Blog index shows all posts
- ✅ Individual post pages working
- ✅ Search/filter functional
- ✅ RSS feed generated
- ✅ SEO meta tags present

---

## 📅 Phase 5: Features & Integration (Week 5)

**Duration:** 5-7 days | **Effort:** 10-15 hours

### Objectives
- Integrate email service
- Setup analytics
- Add additional features

### Checklist

#### 5.1 Email Integration
- [ ] Create Resend account (free tier)
- [ ] Get API key
- [ ] Install packages
  ```bash
  pnpm add resend react-email @react-email/components
  ```
- [ ] Create email templates
  ```typescript
  // src/emails/ContactEmail.tsx
  import { Html, Body, Container, Text } from '@react-email/components'
  
  export function ContactEmail({ name, email, message }) {
    return (
      <Html>
        <Body>
          <Container>
            <Text>New contact from: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Message: {message}</Text>
          </Container>
        </Body>
      </Html>
    )
  }
  ```
- [ ] Update contact server action
  ```typescript
  // src/actions/contact.ts
  import { Resend } from 'resend'
  
  export async function submitContact(data: ContactFormData) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'portfolio@yourdomain.com',
      to: 'your-email@example.com',
      subject: 'New Contact Form Submission',
      react: ContactEmail(data),
    })
  }
  ```
- [ ] Test email sending

#### 5.2 Analytics Setup - PostHog
- [ ] Create PostHog account (free tier)
- [ ] Get API key
- [ ] Install PostHog
  ```bash
  pnpm add posthog-js
  ```
- [ ] Initialize PostHog
  ```typescript
  // src/lib/analytics/posthog.ts
  import posthog from 'posthog-js'
  
  export function initPostHog() {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      })
    }
  }
  ```
- [ ] Add to root layout
- [ ] Create custom events
  ```typescript
  // Track blog post views
  posthog.capture('blog_post_viewed', {
    post_slug: slug,
    post_title: title,
  })
  ```

#### 5.3 Analytics Setup - Vercel
- [ ] Install Vercel Analytics
  ```bash
  pnpm add @vercel/analytics
  ```
- [ ] Add to root layout
  ```typescript
  import { Analytics } from '@vercel/analytics/react'
  
  export default function RootLayout({ children }) {
    return (
      <html>
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    )
  }
  ```

#### 5.4 Error Tracking - Sentry (Optional)
- [ ] Create Sentry account
- [ ] Install Sentry
  ```bash
  pnpm add @sentry/nextjs
  ```
- [ ] Initialize Sentry
  ```bash
  pnpx @sentry/wizard@latest -i nextjs
  ```
- [ ] Configure error boundaries to report to Sentry

#### 5.5 Additional Features
- [ ] Add newsletter subscription (optional)
- [ ] Create projects showcase page
- [ ] Add GitHub stats integration
- [ ] Implement scroll progress indicator
- [ ] Add view counter for blog posts (optional)

### Success Criteria
- ✅ Contact form sends emails
- ✅ PostHog tracking events
- ✅ Vercel Analytics active
- ✅ Error tracking configured (if using Sentry)

---

## 📅 Phase 6: Testing & Quality (Week 6)

**Duration:** 5-7 days | **Effort:** 10-15 hours

### Objectives
- Add test coverage
- Performance optimization
- Accessibility audit

### Checklist

#### 6.1 Testing Setup
- [ ] Install Vitest
  ```bash
  pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
  ```
- [ ] Configure Vitest
  ```typescript
  // vitest.config.ts
  import { defineConfig } from 'vitest/config'
  import react from '@vitejs/plugin-react'
  
  export default defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
    },
  })
  ```
- [ ] Add test scripts to package.json

#### 6.2 Unit Tests
- [ ] Test utility functions
  - Date formatting
  - String manipulation
  - Validation schemas
- [ ] Test blog utilities
  - Post fetching
  - Search algorithm
  - Related posts logic

#### 6.3 Component Tests
- [ ] Test UI components
  - Button variants
  - Card rendering
  - Form validation
- [ ] Test blog components
  - PostCard
  - PostList
  - TableOfContents
- [ ] Test form submission

#### 6.4 E2E Tests (Optional)
- [ ] Install Playwright
  ```bash
  pnpm add -D @playwright/test
  ```
- [ ] Configure Playwright
- [ ] Write critical path tests
  - Homepage loads
  - Navigation works
  - Contact form submits
  - Blog post opens

#### 6.5 Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize images
  - Use next/image everywhere
  - Generate multiple sizes
  - Use WebP format
- [ ] Code splitting
  - Dynamic imports for heavy components
  - Route-based splitting (automatic)
- [ ] Bundle analysis
  ```bash
  pnpm add -D @next/bundle-analyzer
  ```
- [ ] Font optimization
  - Use next/font
  - Preload critical fonts
- [ ] Caching strategy
  - Static generation for blog posts
  - ISR for dynamic content (if needed)

#### 6.6 Accessibility Audit
- [ ] Run axe DevTools
- [ ] Fix ARIA issues
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Color contrast verification
- [ ] Focus management

#### 6.7 SEO Audit
- [ ] Verify all meta tags
- [ ] Check robots.txt
- [ ] Validate sitemap.xml
- [ ] Test structured data
- [ ] Check internal linking
- [ ] Mobile-friendly test

### Success Criteria
- ✅ Test coverage > 70%
- ✅ All tests passing
- ✅ Lighthouse score > 90 (all categories)
- ✅ No accessibility violations
- ✅ Bundle size < 500KB

---

## ⚙️ Configuration Files

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable bundle analyzer in production
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      )
      return config
    },
  }),
  experimental: {
    mdxRs: true,
  },
}

module.exports = nextConfig
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@/app/*": ["./app/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Add shadcn/ui colors
      },
      typography: {
        DEFAULT: {
          css: {
            // Customize prose styles for blog
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

---

## 🔐 Environment Variables

### .env.example
```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Email
RESEND_API_KEY=re_your_api_key

# Error Tracking (Optional)
SENTRY_DSN=your_sentry_dsn
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn

# Database (Optional)
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# Development
NODE_ENV=development
```

---

## 📊 Metrics & KPIs

### Performance Metrics
| Metric | Target | Critical |
|--------|--------|----------|
| Lighthouse Performance | > 90 | > 80 |
| First Contentful Paint | < 1.5s | < 2.5s |
| Largest Contentful Paint | < 2.5s | < 4.0s |
| Time to Interactive | < 3.5s | < 5.0s |
| Cumulative Layout Shift | < 0.1 | < 0.25 |
| First Input Delay | < 100ms | < 300ms |

### Quality Metrics
| Metric | Target |
|--------|--------|
| TypeScript Coverage | 100% |
| Test Coverage | > 70% |
| Bundle Size (initial) | < 500KB |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | > 95 |

### User Metrics (PostHog)
- Page views per session
- Average time on page
- Bounce rate (target < 60%)
- Blog post engagement
- Contact form conversion rate

---

## ✅ Best Practices

### TypeScript
- Always use strict mode
- Avoid `any` - use `unknown` or proper types
- Use type inference when possible
- Create reusable types in `src/types/`
- Document complex types with JSDoc

### React
- Use server components by default
- Add 'use client' only when needed
- Keep components small and focused
- Use composition over inheritance
- Implement proper error boundaries

### Performance
- Use next/image for all images
- Implement code splitting
- Lazy load heavy components
- Use Suspense boundaries
- Optimize bundle size regularly

### Accessibility
- Use semantic HTML
- Add ARIA labels when needed
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast ratios

### SEO
- Generate metadata for all pages
- Use proper heading hierarchy
- Add structured data
- Create sitemap and robots.txt
- Optimize images with alt text

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] Zero TypeScript errors
- [ ] Lighthouse score > 90 (all categories)
- [ ] Environment variables configured
- [ ] Analytics verified in development
- [ ] Error tracking tested

### Vercel Deployment
- [ ] Connect GitHub repository to Vercel
- [ ] Configure environment variables in Vercel
- [ ] Set build command: `pnpm build`
- [ ] Set output directory: `.next`
- [ ] Enable automatic deployments
- [ ] Configure custom domain
- [ ] Setup SSL certificate (automatic)

### Post-Deployment
- [ ] Verify site loads correctly
- [ ] Test contact form submission
- [ ] Verify analytics tracking
- [ ] Check error monitoring
- [ ] Test all blog posts
- [ ] Verify RSS feed
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor performance metrics

---

## 🎯 Summary

This roadmap provides a **complete, step-by-step guide** to refactoring your portfolio with an integrated blog. Follow each phase in order, complete the checklists, and verify success criteria before moving forward.

**Key Takeaways:**
1. Start with Phase 1 (Foundation) - don't skip
2. Phase 4 (Blog) is the priority feature
3. Use TypeScript strict mode throughout
4. Test as you go, don't wait until the end
5. Monitor metrics from day one
6. Reference other docs for detailed patterns

**Next Steps:**
1. Read `README_REFACTORING.md` for setup instructions
2. Reference `QUICK_REFERENCE.md` while coding
3. Use `.cursor/rules.md` or `.copilot/instructions.md` for AI assistance

**Good luck! 🚀**
