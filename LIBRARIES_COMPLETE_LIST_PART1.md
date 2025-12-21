# 📚 COMPLETE LIBRARIES LIST - Portfolio Refactoring

**Comprehensive Guide to All Recommended Libraries**  
**Version:** 2.0  
**Last Updated:** December 2025  
**Total Categories:** 16

---

## 📑 Table of Contents

1. [Framework & Core](#1-framework--core)
2. [UI Component Libraries](#2-ui-component-libraries)
3. [State Management](#3-state-management)
4. [Forms & Validation](#4-forms--validation)
5. [Email](#5-email)
6. [Database & ORM](#6-database--orm)
7. [Authentication](#7-authentication)
8. [Analytics & Monitoring](#8-analytics--monitoring)
9. [Testing](#9-testing)
10. [DevTools](#10-devtools)
11. [Performance](#11-performance)
12. [Utilities](#12-utilities)
13. [Internationalization](#13-internationalization)
14. [Component Specific](#14-component-specific)
15. [Design & Styling](#15-design--styling)
16. [Blog & CMS Solutions](#16-blog--cms-solutions-) ⭐
17. [Final Recommended Stack](#final-recommended-stack)

---

## 1. Framework & Core

### Next.js
- **Type:** React Framework
- **Install:** `pnpm add next@latest react@latest react-dom@latest`
- **Why:** Industry-standard React framework with excellent DX, performance, and SEO
- **When:** Always - this is the foundation
- **Alternatives:** Remix, Gatsby, Astro
- **Price:** Free (MIT License)
- **Docs:** https://nextjs.org/docs
- **Version:** 15.x (with App Router)

**Key Features:**
- App Router (React Server Components)
- File-based routing
- API routes
- Image optimization
- Built-in SEO support
- Edge runtime
- Middleware support

### React
- **Type:** UI Library
- **Install:** Included with Next.js
- **Why:** Most popular UI library, huge ecosystem, React 19 has server components
- **When:** Always - required by Next.js
- **Alternatives:** Vue, Svelte, Solid
- **Price:** Free (MIT License)
- **Docs:** https://react.dev
- **Version:** 19.x

### TypeScript
- **Type:** Programming Language
- **Install:** `pnpm add -D typescript @types/node @types/react @types/react-dom`
- **Why:** Type safety prevents bugs, better IDE support, self-documenting code
- **When:** Always - use strict mode
- **Alternatives:** JavaScript (not recommended for production)
- **Price:** Free (Apache 2.0)
- **Docs:** https://www.typescriptlang.org/docs/
- **Version:** 5.6+

**Recommended tsconfig.json:**
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve"
  }
}
```

---

## 2. UI Component Libraries

### shadcn/ui ⭐ RECOMMENDED
- **Type:** Copy-paste component library
- **Install:** `pnpx shadcn-ui@latest init`
- **Why:** Own your components, full customization, built on Radix UI, no package dependency
- **When:** Perfect for portfolio projects where you want control
- **Alternatives:** Material-UI, Chakra UI, Mantine
- **Price:** Free (MIT License)
- **Docs:** https://ui.shadcn.com

**Pros:**
- Components live in your codebase
- Full TypeScript support
- Accessible by default (Radix UI)
- Easy to customize
- No bundle bloat

**Cons:**
- Manual updates (copy new versions)
- Need to maintain components yourself

**Install Components:**
```bash
pnpx shadcn-ui@latest add button card input label textarea
pnpx shadcn-ui@latest add dropdown-menu dialog alert toast
pnpx shadcn-ui@latest add select checkbox radio-group
```

### Radix UI
- **Type:** Unstyled accessible components
- **Install:** Individual packages or via shadcn/ui
- **Why:** Accessibility-first, unstyled (full control), WAI-ARIA compliant
- **When:** When building custom components or using shadcn/ui (included)
- **Alternatives:** Headless UI, React Aria, Ariakit
- **Price:** Free (MIT License)
- **Docs:** https://www.radix-ui.com

### Lucide React
- **Type:** Icon library
- **Install:** `pnpm add lucide-react` (already installed)
- **Why:** Beautiful icons, tree-shakeable, TypeScript support
- **When:** For all icons in the project
- **Alternatives:** Heroicons, React Icons, Phosphor Icons
- **Price:** Free (ISC License)
- **Docs:** https://lucide.dev

**Usage:**
```typescript
import { Github, Twitter, Mail } from 'lucide-react'
```

---

## 3. State Management

### Jotai ⭐ RECOMMENDED
- **Type:** Atomic state management
- **Install:** `pnpm add jotai`
- **Why:** Simple API, atomic updates, excellent TypeScript support, minimal boilerplate
- **When:** Client-side global state (theme, UI state, filters)
- **Alternatives:** Zustand, Recoil, Valtio
- **Price:** Free (MIT License)
- **Docs:** https://jotai.org

**Pros:**
- Minimal API (atom, useAtom)
- Great TypeScript inference
- No Provider boilerplate (optional)
- Derived atoms
- Async support

**Cons:**
- Smaller ecosystem than Redux
- Learning curve for advanced features

**Example:**
```typescript
import { atom, useAtom } from 'jotai'

const themeAtom = atom('light')
const countAtom = atom(0)

function Component() {
  const [theme, setTheme] = useAtom(themeAtom)
}
```

### Zustand
- **Type:** Minimalist state management
- **Install:** `pnpm add zustand`
- **Why:** Simple store-based state, less boilerplate than Redux
- **When:** Alternative to Jotai if you prefer store-based patterns
- **Alternatives:** Jotai, Redux Toolkit, Valtio
- **Price:** Free (MIT License)
- **Docs:** https://zustand-demo.pmnd.rs

**Example:**
```typescript
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}))
```

### TanStack Query ⭐ ALREADY INSTALLED
- **Type:** Server state management
- **Install:** `pnpm add @tanstack/react-query` (already installed)
- **Why:** Caching, background updates, optimistic updates, automatic refetching
- **When:** Fetching data from APIs
- **Alternatives:** SWR, RTK Query, Apollo Client (GraphQL)
- **Price:** Free (MIT License)
- **Docs:** https://tanstack.com/query/latest

**Key Features:**
- Automatic caching
- Background refetching
- Optimistic updates
- Pagination support
- Infinite scroll
- DevTools

**Example:**
```typescript
import { useQuery } from '@tanstack/react-query'

function Component() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
}
```

---

## 4. Forms & Validation

### React Hook Form ⭐ RECOMMENDED
- **Type:** Form state management
- **Install:** `pnpm add react-hook-form`
- **Why:** Performant (minimal re-renders), great DX, TypeScript support
- **When:** All forms in the project
- **Alternatives:** Formik, React Final Form
- **Price:** Free (MIT License)
- **Docs:** https://react-hook-form.com

**Pros:**
- Minimal re-renders
- Built-in validation
- Async validation support
- Small bundle size (9KB)
- Controller for custom inputs

**Example:**
```typescript
import { useForm } from 'react-hook-form'

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: true })} />
    </form>
  )
}
```

### Zod ⭐ RECOMMENDED
- **Type:** Schema validation
- **Install:** `pnpm add zod @hookform/resolvers`
- **Why:** TypeScript-first, excellent type inference, composable schemas
- **When:** Validating all forms and API inputs
- **Alternatives:** Yup, Joi, Superstruct
- **Price:** Free (MIT License)
- **Docs:** https://zod.dev

**Pros:**
- TypeScript inference
- Runtime validation
- Composable schemas
- Error messages
- Transform data

**Example:**
```typescript
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
})

type FormData = z.infer<typeof schema> // { email: string, age: number }
```

---

## 5. Email

### Resend ⭐ RECOMMENDED
- **Type:** Email delivery API
- **Install:** `pnpm add resend`
- **Why:** Developer-first API, React Email support, generous free tier
- **When:** Sending transactional emails (contact form)
- **Alternatives:** SendGrid, Mailgun, Postmark
- **Price:** Free (100 emails/day), $20/mo (50k emails)
- **Docs:** https://resend.com/docs

**Pros:**
- Simple API
- React Email integration
- High deliverability
- Free tier sufficient for portfolio
- Webhook support

**Example:**
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'portfolio@yourdomain.com',
  to: 'user@example.com',
  subject: 'Contact Form',
  react: EmailTemplate({ name: 'John' })
})
```

### React Email
- **Type:** Email template components
- **Install:** `pnpm add react-email @react-email/components`
- **Why:** Write emails in React, preview locally, component-based
- **When:** Creating email templates
- **Alternatives:** MJML, handlebars templates
- **Price:** Free (MIT License)
- **Docs:** https://react.email

**Components:**
- Html, Head, Body
- Container, Section, Row, Column
- Text, Link, Button
- Image, Hr

**Example:**
```typescript
import { Html, Button } from '@react-email/components'

export function WelcomeEmail({ name }) {
  return (
    <Html>
      <Button href="https://example.com">
        Welcome {name}
      </Button>
    </Html>
  )
}
```

---

## 6. Database & ORM

### PostgreSQL
- **Type:** Relational Database
- **Install:** Via hosting service (Supabase, Neon, Railway)
- **Why:** Robust, scalable, open-source, excellent for structured data
- **When:** If you need database (optional for static portfolio)
- **Alternatives:** MySQL, SQLite, MongoDB
- **Price:** Free tier on Supabase/Neon, ~$10-25/mo for production
- **Docs:** https://www.postgresql.org/docs/

### Drizzle ORM ⭐ RECOMMENDED (if using DB)
- **Type:** TypeScript ORM
- **Install:** `pnpm add drizzle-orm postgres`
- **Why:** Type-safe, lightweight, SQL-like syntax, great DX
- **When:** If using PostgreSQL
- **Alternatives:** Prisma, TypeORM
- **Price:** Free (MIT License)
- **Docs:** https://orm.drizzle.team

**Drizzle vs Prisma:**

| Feature | Drizzle | Prisma |
|---------|---------|--------|
| Type Safety | ✅ Excellent | ✅ Excellent |
| Bundle Size | 🟢 Small (50KB) | 🔴 Large (600KB+) |
| Query Syntax | SQL-like | Custom DSL |
| Migrations | Manual/Push | Auto-generate |
| Edge Runtime | ✅ Yes | ❌ No |
| Learning Curve | Medium | Easy |

**Example (Drizzle):**
```typescript
import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content')
})

// Query
const allPosts = await db.select().from(posts)
```

---

## 7. Authentication

### Auth.js (NextAuth v5)
- **Type:** Authentication library
- **Install:** `pnpm add next-auth@beta`
- **Why:** Easy setup, multiple providers, session management
- **When:** If adding authentication (optional for portfolio)
- **Alternatives:** Clerk, Supabase Auth, Firebase Auth
- **Price:** Free (ISC License)
- **Docs:** https://authjs.dev

**Note:** Portfolio typically doesn't need auth. Consider only if adding:
- Protected admin section
- User comments
- Personalized content

---

## 8. Analytics & Monitoring

### PostHog ⭐ RECOMMENDED
- **Type:** Product analytics
- **Install:** `pnpm add posthog-js`
- **Why:** Privacy-friendly, feature flags, session recording, generous free tier
- **When:** Track user behavior, custom events
- **Alternatives:** Google Analytics, Plausible, Mixpanel
- **Price:** Free (1M events/mo), $0-100+/mo after
- **Docs:** https://posthog.com/docs

**Features:**
- Event tracking
- Session recording
- Feature flags
- A/B testing
- Funnels & retention
- Self-hostable

**Example:**
```typescript
import posthog from 'posthog-js'

posthog.init('YOUR_API_KEY', {
  api_host: 'https://app.posthog.com'
})

posthog.capture('blog_post_viewed', {
  post_slug: 'my-post'
})
```

### Vercel Analytics
- **Type:** Performance analytics
- **Install:** `pnpm add @vercel/analytics`
- **Why:** Zero-config, Web Vitals tracking, integrated with Vercel
- **When:** Monitoring Core Web Vitals
- **Alternatives:** Google PageSpeed Insights
- **Price:** Free on Vercel
- **Docs:** https://vercel.com/docs/analytics

**Example:**
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

### Sentry
- **Type:** Error tracking
- **Install:** `pnpm add @sentry/nextjs`
- **Why:** Real-time error tracking, performance monitoring, release tracking
- **When:** Production error monitoring
- **Alternatives:** Bugsnag, Rollbar, LogRocket
- **Price:** Free (5k errors/mo), $26+/mo after
- **Docs:** https://docs.sentry.io/platforms/javascript/guides/nextjs/

**Features:**
- Error tracking
- Performance monitoring
- Release tracking
- Breadcrumbs
- Source maps

---

## 9. Testing

### Vitest ⭐ RECOMMENDED
- **Type:** Unit testing framework
- **Install:** `pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom`
- **Why:** Fast (Vite-powered), Jest-compatible API, great DX
- **When:** Unit and integration tests
- **Alternatives:** Jest, Mocha + Chai
- **Price:** Free (MIT License)
- **Docs:** https://vitest.dev

**Example:**
```typescript
import { describe, it, expect } from 'vitest'

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3)
  })
})
```

### Testing Library
- **Type:** React component testing
- **Install:** Included with Vitest setup
- **Why:** Testing best practices, focus on user behavior
- **When:** Testing React components
- **Alternatives:** Enzyme (deprecated)
- **Price:** Free (MIT License)
- **Docs:** https://testing-library.com/react

### Playwright
- **Type:** E2E testing
- **Install:** `pnpm add -D @playwright/test`
- **Why:** Cross-browser, auto-wait, trace viewer, codegen
- **When:** End-to-end testing (optional)
- **Alternatives:** Cypress, Puppeteer
- **Price:** Free (Apache 2.0)
- **Docs:** https://playwright.dev

---

## 10. DevTools

### Biome ⭐ ALREADY CONFIGURED
- **Type:** Linter & Formatter
- **Install:** Already in project
- **Why:** Fast (Rust-based), all-in-one, replaces ESLint + Prettier
- **When:** Always - already setup
- **Alternatives:** ESLint + Prettier
- **Price:** Free (MIT License)
- **Docs:** https://biomejs.dev

**Features:**
- Linting
- Formatting
- Import sorting
- 100x faster than ESLint

### Turbo ⭐ ALREADY CONFIGURED
- **Type:** Build system
- **Install:** Already in project
- **Why:** Incremental builds, remote caching, faster builds
- **When:** Always - already setup
- **Alternatives:** Nx, Lerna
- **Price:** Free (MIT License)
- **Docs:** https://turbo.build

---

## 11. Performance

### next/image
- **Type:** Image optimization
- **Install:** Built into Next.js
- **Why:** Automatic optimization, lazy loading, WebP conversion
- **When:** All images
- **Alternatives:** Manual optimization
- **Price:** Free (built-in)
- **Docs:** https://nextjs.org/docs/api-reference/next/image

### @next/bundle-analyzer
- **Type:** Bundle size analysis
- **Install:** `pnpm add -D @next/bundle-analyzer`
- **Why:** Visualize bundle composition, find large dependencies
- **When:** Optimizing bundle size
- **Price:** Free (MIT License)

**Setup:**
```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(nextConfig)
```

---

## 12. Utilities

### clsx & tailwind-merge
- **Type:** Utility for class names
- **Install:** `pnpm add clsx tailwind-merge`
- **Why:** Conditional classes, merge Tailwind classes
- **When:** Building reusable components
- **Price:** Free (MIT License)

**Example:**
```typescript
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Usage:
<div className={cn('base-class', isActive && 'active-class')} />
```

### date-fns
- **Type:** Date utility library
- **Install:** `pnpm add date-fns`
- **Why:** Modular, TypeScript support, tree-shakeable, immutable
- **When:** Formatting dates, date calculations
- **Alternatives:** dayjs (smaller), Moment (deprecated)
- **Price:** Free (MIT License)
- **Docs:** https://date-fns.org

**Example:**
```typescript
import { format, formatDistance } from 'date-fns'

format(new Date(), 'MMMM d, yyyy')
// "January 15, 2024"

formatDistance(new Date(2024, 0, 1), new Date())
// "2 months ago"
```

### nanoid
- **Type:** Unique ID generator
- **Install:** `pnpm add nanoid`
- **Why:** Small (130 bytes), secure, URL-friendly
- **When:** Generating unique IDs
- **Alternatives:** UUID, shortid
- **Price:** Free (MIT License)

---

## 13. Internationalization

### next-intl
- **Type:** i18n for Next.js
- **Install:** `pnpm add next-intl`
- **Why:** Next.js App Router support, TypeScript, RSC support
- **When:** Multi-language support (optional)
- **Alternatives:** react-i18next, next-i18next
- **Price:** Free (MIT License)
- **Docs:** https://next-intl-docs.vercel.app

**Note:** Portfolio typically doesn't need i18n unless targeting multiple markets.

---

## 14. Component Specific

### next-themes
- **Type:** Theme management
- **Install:** `pnpm add next-themes`
- **Why:** Zero flash, system theme detection, persistence
- **When:** Dark/light mode toggle
- **Alternatives:** Manual implementation with localStorage
- **Price:** Free (MIT License)
- **Docs:** https://github.com/pacocoursey/next-themes

**Example:**
```typescript
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
```

### react-hot-toast
- **Type:** Toast notifications
- **Install:** `pnpm add react-hot-toast`
- **Why:** Lightweight, customizable, good DX
- **When:** Success/error notifications
- **Alternatives:** Sonner, react-toastify
- **Price:** Free (MIT License)

---

## 15. Design & Styling

### Tailwind CSS ⭐ ALREADY INSTALLED
- **Type:** Utility-first CSS framework
- **Install:** Already installed
- **Why:** Fast development, consistent design, small production bundle
- **When:** All styling
- **Alternatives:** CSS Modules, Styled Components, Emotion
- **Price:** Free (MIT License)
- **Docs:** https://tailwindcss.com

### @tailwindcss/typography
- **Type:** Prose styling
- **Install:** `pnpm add -D @tailwindcss/typography`
- **Why:** Beautiful default styles for markdown/blog content
- **When:** Blog posts, long-form content
- **Price:** Free (MIT License)

**Usage:**
```html
<article class="prose prose-slate dark:prose-invert">
  <!-- Blog content -->
</article>
```

---

