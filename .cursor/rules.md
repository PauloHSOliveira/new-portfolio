# Cursor IDE Rules - Portfolio Refactoring Project

**Project Context:** Modern Next.js 15 Portfolio with Integrated Blog
**Stack:** Next.js 15 + React 19 + TypeScript (strict) + Tailwind CSS + shadcn/ui
**Focus:** Type safety, performance, accessibility, fintech-quality code

---

## 🎯 Core Principles

1. **Type Safety First** - TypeScript strict mode, no `any`, proper types always
2. **Performance Matters** - Optimize images, lazy load, monitor bundle size
3. **Accessibility Required** - WCAG 2.1 AA compliance, semantic HTML, ARIA when needed
4. **Security Conscious** - Validate all inputs, sanitize outputs, no secrets in code
5. **User Experience** - Fast loading, smooth animations, clear feedback

---

## 📝 TypeScript Rules

### Always Use Strict Mode
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

### Proper Type Definitions
✅ **GOOD:**
```typescript
interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}

function getUser(id: string): User | null {
  // ...
}
```

❌ **AVOID:**
```typescript
function getUser(id: any): any {
  // ...
}
```

### Use Type Inference When Obvious
✅ **GOOD:**
```typescript
const count = 0  // inferred as number
const users = getAllUsers()  // inferred from function return type
```

❌ **AVOID:**
```typescript
const count: number = 0  // unnecessary annotation
```

### Utility Types
```typescript
// Pick specific properties
type PostPreview = Pick<Post, 'title' | 'slug' | 'excerpt'>

// Omit properties
type UserWithoutPassword = Omit<User, 'password'>

// Make optional
type PartialPost = Partial<Post>

// Make required
type RequiredPost = Required<Post>
```

---

## ⚛️ React Component Rules

### Default to Server Components
✅ **GOOD:**
```typescript
// app/blog/page.tsx
export default async function BlogPage() {
  const posts = await getPosts()
  return <PostList posts={posts} />
}
```

### Use 'use client' Only When Needed
```typescript
// Only add 'use client' for:
// - useState, useEffect, other hooks
// - Browser APIs (window, document)
// - Event handlers
// - Third-party libraries that require client

'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Component Naming
✅ **GOOD:**
```typescript
// PascalCase for components
export function BlogPost() {}
export function PostCard() {}

// kebab-case for files
// blog-post.tsx
// post-card.tsx
```

### Props Interface
✅ **GOOD:**
```typescript
interface PostCardProps {
  post: Post
  showExcerpt?: boolean
  onLike?: (id: string) => void
}

export function PostCard({ post, showExcerpt = true, onLike }: PostCardProps) {
  // ...
}
```

### Compound Component Pattern
✅ **GOOD:**
```typescript
// Create flexible, composable components
// src/components/ui/Terminal.tsx

import { createContext, useContext, type ReactNode } from 'react'

interface TerminalContextType {
  variant?: 'default' | 'error' | 'success'
}

const TerminalContext = createContext<TerminalContextType>({})

function TerminalRoot({ children, variant = 'default', className }: {
  children: ReactNode
  variant?: 'default' | 'error' | 'success'
  className?: string
}) {
  return (
    <TerminalContext.Provider value={{ variant }}>
      <div className={`rounded-lg border ${className}`}>
        {children}
      </div>
    </TerminalContext.Provider>
  )
}

function TerminalHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-slate-900">
      {children}
    </div>
  )
}

function TerminalContent({ children }: { children: ReactNode }) {
  const { variant } = useContext(TerminalContext)
  return <div className={`p-4 ${variant === 'error' ? 'text-red-400' : ''}`}>{children}</div>
}

export const Terminal = {
  Root: TerminalRoot,
  Header: TerminalHeader,
  Content: TerminalContent,
}

// Usage:
<Terminal.Root variant="default">
  <Terminal.Header>bash</Terminal.Header>
  <Terminal.Content>
    <span>$ npm run dev</span>
  </Terminal.Content>
</Terminal.Root>
```

❌ **AVOID:**
```typescript
// Don't create monolithic components with too many props
function Terminal({ 
  header, 
  content, 
  variant, 
  showHeader, 
  headerColor,
  // ... 20 more props
}) {
  // Hard to maintain and customize
}
```

---

## 🎨 Styling Rules

### Use Tailwind CSS Classes
✅ **GOOD:**
```typescript
<div className="flex items-center justify-between p-4 bg-white dark:bg-slate-900">
  <h1 className="text-2xl font-bold">Title</h1>
</div>
```

### Use cn() Utility for Conditional Classes
✅ **GOOD:**
```typescript
import { cn } from '@/lib/utils'

<button className={cn(
  'px-4 py-2 rounded',
  isActive && 'bg-blue-500 text-white',
  isDisabled && 'opacity-50 cursor-not-allowed'
)}>
  Button
</button>
```

### Responsive Design
```typescript
// Mobile-first approach
<div className="
  grid 
  grid-cols-1          // mobile
  md:grid-cols-2       // tablet
  lg:grid-cols-3       // desktop
  gap-4
">
```

### Dark Mode Support
```typescript
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
  Content
</div>
```

---

## 🗂️ State Management Rules

### Jotai for Client State
✅ **GOOD:**
```typescript
// src/stores/ui.ts
import { atom } from 'jotai'

export const sidebarOpenAtom = atom(false)
export const searchQueryAtom = atom('')

// In component
'use client'
import { useAtom } from 'jotai'
import { searchQueryAtom } from '@/stores/ui'

const [query, setQuery] = useAtom(searchQueryAtom)
```

### TanStack Query for Server State
✅ **GOOD:**
```typescript
import { useQuery } from '@tanstack/react-query'

function Component() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
}
```

---

## 📝 Forms & Validation Rules

### React Hook Form + Zod
✅ **GOOD:**
```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Name too short')
})

type FormData = z.infer<typeof schema>

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })
}
```

### Server Actions
✅ **GOOD:**
```typescript
// src/actions/contact.ts
'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
})

export async function submitContact(data: unknown) {
  try {
    const validated = schema.parse(data)
    // Process...
    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.errors }
    }
    return { success: false, message: 'Error occurred' }
  }
}
```

---

## 📰 Blog & MDX Rules

### MDX File Structure
```mdx
---
title: "My Blog Post"
date: "2024-01-15"
author: "Paulo Henrique"
excerpt: "Short description"
coverImage: "/images/blog/post.jpg"
tags: ["typescript", "nextjs"]
---

# My Blog Post

Content here...

## Section

More content...

```typescript
// Code with syntax highlighting
```
```

### Blog Post Fetching
✅ **GOOD:**
```typescript
// src/lib/blog/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  return fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        ...data,
        content
      } as Post
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
```

---

## 📧 Email Rules

### Email Templates with React Email
✅ **GOOD:**
```typescript
// src/emails/ContactEmail.tsx
import { Html, Body, Container, Text } from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Body>
        <Container>
          <Text>From: {name} ({email})</Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  )
}
```

---

## 📊 Analytics Rules

### PostHog Events
```typescript
import posthog from 'posthog-js'

// Track custom events
posthog.capture('blog_post_viewed', {
  post_slug: slug,
  post_title: title
})

// Identify users (if applicable)
posthog.identify(userId, {
  email: user.email,
  name: user.name
})
```

---

## ⚡ Performance Rules

### Image Optimization
✅ **GOOD:**
```typescript
import Image from 'next/image'

<Image
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-fold images
/>
```

❌ **AVOID:**
```typescript
<img src="/images/photo.jpg" alt="Description" />
```

### Code Splitting
✅ **GOOD:**
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <Skeleton />
})
```

### Lazy Loading
```typescript
import { Suspense } from 'react'

<Suspense fallback={<Loading />}>
  <AsyncComponent />
</Suspense>
```

---

## 🧪 Testing Rules

### Unit Tests
✅ **GOOD:**
```typescript
import { describe, it, expect } from 'vitest'
import { formatDate } from './date-utils'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2024-01-15')
    expect(formatDate(date)).toBe('January 15, 2024')
  })
})
```

### Component Tests
✅ **GOOD:**
```typescript
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'

it('renders post title', () => {
  render(<PostCard post={mockPost} />)
  expect(screen.getByText('Post Title')).toBeInTheDocument()
})
```

---

## ♿ Accessibility Rules

### Semantic HTML
✅ **GOOD:**
```typescript
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
</main>

<footer>
  <p>&copy; 2024</p>
</footer>
```

### ARIA Labels
```typescript
<button aria-label="Close modal" onClick={onClose}>
  <X className="h-4 w-4" />
</button>

<input
  type="search"
  aria-label="Search blog posts"
  placeholder="Search..."
/>
```

### Keyboard Navigation
```typescript
// Ensure all interactive elements are keyboard accessible
<button onClick={handleClick} onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick()
  }
}}>
  Action
</button>
```

---

## 🔐 Security Rules

### Environment Variables
✅ **GOOD:**
```typescript
// Public (accessible in browser)
NEXT_PUBLIC_POSTHOG_KEY=xxx

// Private (server-only)
RESEND_API_KEY=xxx
DATABASE_URL=xxx

// Never commit .env.local to git
```

### Input Validation
✅ **GOOD:**
```typescript
import { z } from 'zod'

const emailSchema = z.string().email()

function validateEmail(email: unknown) {
  try {
    return emailSchema.parse(email)
  } catch {
    throw new Error('Invalid email')
  }
}
```

### Sanitize Outputs
```typescript
// When rendering user content
import DOMPurify from 'isomorphic-dompurify'

const cleanHTML = DOMPurify.sanitize(userInput)
```

---

## 📦 File Organization Rules

### Folder Structure
```
src/
├── components/
│   ├── ui/           # shadcn components
│   ├── layout/       # Header, Footer, Nav
│   ├── features/     # Feature-specific
│   └── blog/         # Blog-specific
├── lib/
│   ├── blog/         # Blog utilities
│   ├── validation/   # Zod schemas
│   └── utils.ts      # General utilities
├── hooks/            # Custom hooks
├── stores/           # Jotai atoms
├── actions/          # Server actions
├── types/            # TypeScript types
└── config/           # Configuration
```

### Naming Conventions
- **Components:** PascalCase (`BlogPost.tsx`)
- **Utilities:** camelCase (`formatDate.ts`)
- **Types:** PascalCase (`Post`, `User`)
- **Constants:** SCREAMING_SNAKE_CASE (`API_URL`)
- **Hooks:** camelCase with `use` prefix (`useTheme`)

---

## ✅ Pre-Commit Checklist

Before committing code, ensure:
- [ ] No TypeScript errors: `pnpm type-check`
- [ ] Linting passes: `pnpm lint`
- [ ] Build succeeds: `pnpm build`
- [ ] No `console.log` statements (except intentional logging)
- [ ] No commented-out code
- [ ] No unused imports
- [ ] All images using `next/image`
- [ ] Proper error handling
- [ ] Accessibility considerations
- [ ] Tests passing (if applicable)

---

## 🚫 Common Mistakes to Avoid

❌ Using `any` type
❌ Client components when server components work
❌ `<img>` instead of `<Image>`
❌ Inline styles instead of Tailwind classes
❌ Missing error boundaries
❌ No loading states
❌ Hardcoded values instead of environment variables
❌ Missing TypeScript types
❌ No keyboard accessibility
❌ Unvalidated form inputs

---

## 💡 Pro Tips

1. **Use Cursor's AI effectively:**
   - Select code and ask "Add error handling"
   - Ask "Make this type-safe"
   - Request "Add accessibility attributes"

2. **Leverage Cursor's features:**
   - Cmd+K for inline editing
   - Cmd+L for chat
   - Reference this file in prompts

3. **Quick commands:**
   - Type `// TODO:` for future tasks
   - Use `@types` to reference type files
   - Use `@lib` to reference utilities

---

## 📚 Quick References

**Documentation:**
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com

**Internal Docs:**
- Full roadmap: `PROMPT_REFATORACAO_PORTFOLIO.md`
- Code patterns: `QUICK_REFERENCE.md`
- Library choices: `LIBRARIES_COMPLETE_LIST.md`
- Setup guide: `README_REFACTORING.md`

---

**Follow these rules for consistent, high-quality code! 🚀**
