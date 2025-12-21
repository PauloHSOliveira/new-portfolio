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

### 🎨 For Creative, Unique, Non-Generic Portfolio UI

**Key Principle:** Your portfolio needs a UNIQUE design system, not generic components.

### Recommended Approach for Creative UI

#### Option 1: Custom Components from Scratch ⭐ MOST UNIQUE
- **Type:** Build your own design system
- **Install:** Just Tailwind CSS + your creativity
- **Why:** Complete creative freedom, truly unique design, no constraints
- **When:** You want a portfolio that stands out, showcases design skills
- **Pros:**
  - 100% unique and creative
  - No generic look
  - Full control over every detail
  - Performance optimized (only what you need)
  - Portfolio showcase of your design skills
- **Cons:**
  - More time investment
  - Need to handle accessibility yourself
  - More code to maintain
- **Best For:** Creative portfolios, design-focused developers, unique brand

**Implementation:**
```bash
# Just install Tailwind and build everything custom
pnpm add tailwindcss autoprefixer postcss
```

#### Option 2: Headless UI Libraries ⭐ CREATIVE + ACCESSIBLE
- **Type:** Unstyled accessible components (you add all styling)
- **Libraries:**
  - **Radix UI** - https://www.radix-ui.com (recommended for accessibility)
  - **Headless UI** - https://headlessui.com (by Tailwind team)
  - **React Aria** - https://react-spectrum.adobe.com/react-aria/
  - **Ark UI** - https://ark-ui.com (newest, very flexible)
- **Why:** Accessibility handled, styling 100% yours, unique design possible
- **When:** Want creative design but need accessibility foundation
- **Pros:**
  - Fully customizable styling
  - Accessibility built-in (WCAG 2.1 AA)
  - No predefined look
  - Creative freedom with safety net
- **Cons:**
  - Need to design and style everything
  - More work than pre-styled libraries

**Example - Radix UI with Custom Styling:**
```bash
pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

```typescript
// Completely custom styled button with your unique design
import * as Dialog from '@radix-ui/react-dialog'

export function CustomDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="
        bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
        hover:from-purple-700 hover:via-pink-700 hover:to-red-700
        text-white font-bold py-4 px-8 rounded-2xl
        transform hover:scale-105 transition-all duration-300
        shadow-[0_0_30px_rgba(139,92,246,0.5)]
        hover:shadow-[0_0_50px_rgba(139,92,246,0.8)]
      ">
        Open Creative Dialog
      </Dialog.Trigger>
      {/* Your unique dialog design */}
    </Dialog.Root>
  )
}
```

#### Option 3: shadcn/ui as Starting Point (Heavy Customization Required)
- **Type:** Copy-paste component library
- **Install:** `pnpx shadcn-ui@latest init`
- **Why:** Quick start, but MUST be heavily customized for uniqueness
- **When:** Need speed but plan to customize extensively
- **⚠️ WARNING:** Out of the box shadcn/ui looks generic. You MUST customize:
  - Colors, typography, spacing
  - Animations and transitions
  - Border radius, shadows, effects
  - Layout and composition
  - Add unique design elements
- **Price:** Free (MIT License)
- **Docs:** https://ui.shadcn.com

**Customization Strategy:**
```typescript
// DON'T use default shadcn button
// DO customize heavily for your brand

// Before (generic):
<Button>Click me</Button>

// After (unique):
<Button className="
  bg-gradient-to-br from-cyan-500 to-blue-600
  hover:from-cyan-600 hover:to-blue-700
  text-white font-semibold px-6 py-3
  rounded-full
  shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-600/50
  transform hover:-translate-y-0.5 transition-all duration-200
  border-2 border-cyan-400/30
  backdrop-blur-sm
">
  Unique Design
</Button>
```

**Pros:**
- Quick start with accessible components
- Easy to copy and modify
- TypeScript support
- Components in your codebase (full control)

**Cons:**
- Default look is generic (MUST customize)
- Starting from common base (harder to be truly unique)
- May look like other portfolios if not customized

### Radix UI
- **Type:** Unstyled accessible components
- **Install:** Individual packages or via shadcn/ui
- **Why:** Accessibility-first, unstyled (full control), WAI-ARIA compliant
- **When:** When building custom components or using shadcn/ui (included)
- **Alternatives:** Headless UI, React Aria, Ariakit
- **Price:** Free (MIT License)
- **Docs:** https://www.radix-ui.com

### Icons - Creative & Unique Options

#### Option 1: Custom SVG Icons ⭐ MOST UNIQUE
- **Type:** Hand-crafted or custom-designed icons
- **Why:** Completely unique to your brand, no one else has them
- **When:** Want truly unique portfolio that showcases design skills
- **Tools:**
  - Figma/Sketch - Design custom icons
  - SVG Optimizer (SVGO) - Optimize SVGs
  - React SVGR - Convert SVGs to React components
- **Price:** Free (your time)

**Implementation:**
```typescript
// Your custom icon as React component
export function CustomCodeIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Your unique icon design */}
      <path 
        d="M8 6L4 12L8 18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M16 6L20 12L16 18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  )
}
```

**Pros:**
- 100% unique
- Perfect brand alignment
- Lightweight (only icons you need)
- Complete creative control

**Cons:**
- Time to design
- Need design skills or hire designer

#### Option 2: Phosphor Icons ⭐ UNIQUE STYLE
- **Type:** Icon library with distinctive aesthetic
- **Install:** `pnpm add @phosphor-icons/react` (already installed!)
- **Why:** Distinctive style, multiple weights, feels less generic than Lucide
- **Alternatives:** Lucide React, Heroicons, React Icons
- **Price:** Free (MIT License)
- **Docs:** https://phosphoricons.com
- **Weights:** Thin, Light, Regular, Bold, Fill, Duotone

**Usage:**
```typescript
import { CodeBlock, Lightning, Sparkle } from '@phosphor-icons/react'

<CodeBlock size={32} weight="duotone" className="text-purple-500" />
<Lightning size={48} weight="bold" className="text-yellow-500" />
<Sparkle size={24} weight="fill" className="text-pink-500" />
```

**Why Phosphor over Lucide for Creative Portfolio:**
- More stylistic variations (6 weights vs 1)
- Duotone style option (unique two-tone look)
- Less commonly used (less generic feel)
- Bold artistic expression options

#### Option 3: Animated Icons
- **Type:** Icons with custom animations
- **Libraries:**
  - **Lottie** - https://lottiefiles.com (JSON animations)
  - **Framer Motion** - Animate SVG icons
  - **GSAP** - Advanced SVG animations
- **Why:** Dynamic, eye-catching, memorable
- **When:** Want to make strong impression

**Example - Animated Icon:**
```typescript
import { motion } from 'framer-motion'

export function AnimatedCodeIcon() {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Your animated icon */}
    </motion.svg>
  )
}
```

#### Option 4: Icon Combos for Unique Look
- **Mix multiple libraries** for distinctive feel
- **Customize existing icons** heavily with Tailwind
- **Add effects:** gradients, glows, shadows, animations

**Creative Icon Styling:**
```typescript
import { Github } from '@phosphor-icons/react'

// Transform generic icon into unique design
<Github 
  size={48} 
  weight="duotone"
  className="
    text-transparent 
    bg-gradient-to-br from-purple-400 to-pink-600 
    bg-clip-text
    drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]
    hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]
    transition-all duration-300
    hover:scale-110
  " 
/>
```

#### Comparison: Icon Libraries for Creative Portfolio

| Library | Uniqueness | Customization | Animations | Best For |
|---------|-----------|---------------|------------|----------|
| **Custom SVG** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Truly unique brand |
| **Phosphor Icons** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Distinctive style |
| **Lucide React** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Clean, modern (generic) |
| **Heroicons** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Tailwind ecosystem |
| **React Icons** | ⭐⭐ | ⭐⭐ | ⭐ | Need many icon sets |

**Recommendation for Creative Portfolio:**
1. **Best:** Custom SVG icons (most unique)
2. **Good:** Phosphor Icons with heavy customization
3. **Acceptable:** Lucide + extensive styling & animations

**Make ANY Icon Library Unique:**
```typescript
// Transform generic icon into signature style
const iconStyles = {
  // Your brand's icon treatment
  neon: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]",
  gradient: "text-transparent bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text",
  glow: "text-yellow-400 filter drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]",
  holographic: "text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text animate-pulse",
}
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

