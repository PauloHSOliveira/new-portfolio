# GitHub Copilot Instructions - Portfolio Refactoring Project

**Project:** Modern Next.js 15 Portfolio with Integrated Blog  
**Context:** Fintech/Payments Engineer Portfolio  
**Stack:** Next.js 15 + React 19 + TypeScript (strict) + Tailwind + shadcn/ui  
**Priority:** Type Safety > Security > Performance > Features

---

## 🎯 Project Context

You are helping build a professional portfolio website for a Senior Full-Stack Engineer specializing in fintech and payment systems. The portfolio includes:

- **Homepage:** Showcasing skills, projects, and experience
- **Blog:** Technical writing platform with MDX support
- **Contact Form:** With email integration
- **Analytics:** User behavior tracking
- **Responsive Design:** Mobile-first, accessible
- **Dark Mode:** Full theme support

---

## 🛠️ Technology Stack

### Core
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.6+ (strict mode)
- **React:** 19.x (Server Components)
- **Package Manager:** pnpm

### UI & Styling
- **CSS:** Tailwind CSS 3.4+
- **Components:** shadcn/ui (copy-paste library)
- **Icons:** Lucide React
- **Theme:** next-themes

### State & Data
- **Client State:** Jotai (atomic state)
- **Server State:** TanStack Query
- **Forms:** React Hook Form + Zod validation

### Blog
- **Content:** MDX files in `content/blog/`
- **Processing:** next-mdx-remote + gray-matter
- **Syntax:** rehype-pretty-code + shiki
- **Utilities:** reading-time, remark, rehype

### Features
- **Email:** Resend + React Email
- **Analytics:** PostHog + Vercel Analytics
- **Monitoring:** Sentry (optional)

---

## 📋 Code Generation Guidelines

### Always Generate

1. **Type-Safe Code**
   - Use TypeScript strict mode
   - Define proper interfaces/types
   - No `any` types (use `unknown` if needed)
   - Infer types when obvious

2. **Server Components by Default**
   - Only add `'use client'` when necessary
   - Use async/await in server components
   - Fetch data directly in components

3. **Proper Error Handling**
   - Try-catch for async operations
   - Error boundaries for components
   - User-friendly error messages

4. **Accessible Components**
   - Semantic HTML
   - ARIA labels when needed
   - Keyboard navigation support
   - Focus management

5. **Performance Optimizations**
   - Use `next/image` for images
   - Lazy load heavy components
   - Suspense boundaries for async data

---

## 📝 Code Examples

### React Server Component
```typescript
// app/blog/page.tsx
import { getAllPosts } from '@/lib/blog/posts'
import { PostCard } from '@/components/blog/PostCard'

export default async function BlogPage() {
  const posts = await getAllPosts()
  
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
```

### React Client Component
```typescript
// src/components/ui/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
```

### Compound Component Pattern
```typescript
// src/components/ui/Terminal.tsx
'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Context for shared state
interface TerminalContextType {
  variant?: 'default' | 'error' | 'success'
}

const TerminalContext = createContext<TerminalContextType>({})

// Root component
function TerminalRoot({ 
  children, 
  variant = 'default', 
  className 
}: { 
  children: ReactNode
  variant?: 'default' | 'error' | 'success'
  className?: string 
}) {
  return (
    <TerminalContext.Provider value={{ variant }}>
      <div className={cn(
        'rounded-lg border font-mono text-sm overflow-hidden',
        'bg-slate-950 border-slate-800',
        className
      )}>
        {children}
      </div>
    </TerminalContext.Provider>
  )
}

// Sub-components
function TerminalHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      'flex items-center gap-2 px-4 py-3',
      'bg-slate-900 border-b border-slate-800',
      className
    )}>
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex-1 text-center text-slate-400">{children}</div>
    </div>
  )
}

function TerminalContent({ children, className }: { children: ReactNode; className?: string }) {
  const { variant } = useContext(TerminalContext)
  
  return (
    <div className={cn(
      'p-4 text-slate-100',
      variant === 'error' && 'text-red-400',
      variant === 'success' && 'text-green-400',
      className
    )}>
      {children}
    </div>
  )
}

function TerminalLine({ 
  children, 
  prompt = '$' 
}: { 
  children: ReactNode
  prompt?: string 
}) {
  return (
    <div className="flex gap-2">
      <span className="text-green-400">{prompt}</span>
      <span>{children}</span>
    </div>
  )
}

// Export as compound component
export const Terminal = {
  Root: TerminalRoot,
  Header: TerminalHeader,
  Content: TerminalContent,
  Line: TerminalLine,
}

// Usage Example:
function CodeExample() {
  return (
    <Terminal.Root variant="default">
      <Terminal.Header>bash</Terminal.Header>
      <Terminal.Content>
        <Terminal.Line>npm install next@latest</Terminal.Line>
        <Terminal.Line>npm run dev</Terminal.Line>
        <div className="text-slate-400 mt-2">✓ Ready in 1.2s</div>
      </Terminal.Content>
    </Terminal.Root>
  )
}
```

### Form with Validation
```typescript
// src/components/forms/ContactForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { submitContact } from '@/actions/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitContact(data)
    
    if (result.success) {
      reset()
      // Show success toast
    } else {
      // Show error toast
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Your message..."
          rows={5}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
```

### Server Action
```typescript
// src/actions/contact.ts
'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactEmail } from '@/emails/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContact(data: ContactFormData) {
  try {
    // Validate input
    const validated = contactSchema.parse(data)

    // Send email
    await resend.emails.send({
      from: 'portfolio@yourdomain.com',
      to: 'your-email@example.com',
      subject: `Contact from ${validated.name}`,
      react: ContactEmail(validated),
    })

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Validation error',
        errors: error.errors 
      }
    }

    return { 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    }
  }
}
```

### Email Template
```typescript
// src/emails/ContactEmail.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
} from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Section>
            <Text style={text}>
              <strong>From:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={text}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}
```

### Blog Post Utilities
```typescript
// src/lib/blog/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        tags: data.tags || [],
        content,
      } as Post
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return posts
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      tags: data.tags || [],
      content,
    } as Post
  } catch {
    return null
  }
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
}
```

### Jotai Atoms
```typescript
// src/stores/ui.ts
import { atom } from 'jotai'

export const sidebarOpenAtom = atom(false)
export const searchQueryAtom = atom('')
export const themeAtom = atom<'light' | 'dark'>('light')

// Derived atom
export const filteredPostsAtom = atom((get) => {
  const query = get(searchQueryAtom)
  const posts = get(postsAtom)
  
  if (!query) return posts
  
  return posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(query.toLowerCase())
  )
})
```

---

## 🚫 Avoid These Patterns

### ❌ Don't Use `any`
```typescript
// BAD
function processData(data: any) { }

// GOOD
interface Data {
  id: string
  value: number
}
function processData(data: Data) { }
```

### ❌ Don't Use Client Components Unnecessarily
```typescript
// BAD - doesn't need client
'use client'
export function StaticContent() {
  return <div>Static content</div>
}

// GOOD
export function StaticContent() {
  return <div>Static content</div>
}
```

### ❌ Don't Use `<img>` Tag
```typescript
// BAD
<img src="/photo.jpg" alt="Photo" />

// GOOD
import Image from 'next/image'
<Image src="/photo.jpg" alt="Photo" width={800} height={600} />
```

### ❌ Don't Hardcode Values
```typescript
// BAD
const apiKey = 'abc123'

// GOOD
const apiKey = process.env.API_KEY
```

### ❌ Don't Ignore Errors
```typescript
// BAD
async function fetchData() {
  const data = await fetch('/api/data')
  return data.json()
}

// GOOD
async function fetchData() {
  try {
    const response = await fetch('/api/data')
    if (!response.ok) throw new Error('Failed to fetch')
    return response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
```

---

## 🎯 When Generating Components

### Always Include:
1. **Proper TypeScript types** for props
2. **Error boundaries** for async components
3. **Loading states** with Suspense
4. **Accessibility attributes** (aria-label, role, etc.)
5. **Responsive classes** (mobile-first)
6. **Dark mode support** where applicable

### Component Template:
```typescript
// src/components/features/ExampleComponent.tsx
import { Suspense } from 'react'
import { ComponentSkeleton } from './ComponentSkeleton'

interface ExampleComponentProps {
  id: string
  title: string
  onAction?: () => void
}

export function ExampleComponent({ id, title, onAction }: ExampleComponentProps) {
  return (
    <Suspense fallback={<ComponentSkeleton />}>
      <ExampleComponentContent id={id} title={title} onAction={onAction} />
    </Suspense>
  )
}

async function ExampleComponentContent({ id, title, onAction }: ExampleComponentProps) {
  // Fetch data or perform async operations
  const data = await fetchData(id)
  
  return (
    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{data.content}</p>
      {onAction && (
        <button onClick={onAction} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Action
        </button>
      )}
    </div>
  )
}

function ComponentSkeleton() {
  return (
    <div className="p-4 bg-white dark:bg-slate-900 rounded-lg animate-pulse">
      <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-4" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
    </div>
  )
}
```

---

## 🔐 Security Practices

### Always Validate Inputs
```typescript
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18).max(120)
})

// Validate
const result = schema.safeParse(input)
if (!result.success) {
  // Handle validation errors
}
```

### Never Expose Secrets
```typescript
// Environment variables
// Public (client-side)
NEXT_PUBLIC_API_URL=https://api.example.com

// Private (server-only)
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...

// Usage
const publicKey = process.env.NEXT_PUBLIC_POSTHOG_KEY  // ✅ OK in client
const privateKey = process.env.RESEND_API_KEY  // ⚠️  Server-only
```

### Sanitize User Input
```typescript
// When rendering user-generated content
import DOMPurify from 'isomorphic-dompurify'

const cleanHTML = DOMPurify.sanitize(userInput)
```

---

## 📊 Analytics Integration

### Track Events
```typescript
import posthog from 'posthog-js'

// Page view (automatic in most cases)
posthog.capture('$pageview')

// Custom events
posthog.capture('blog_post_viewed', {
  post_slug: slug,
  post_title: title,
  reading_time: readingTime
})

posthog.capture('contact_form_submitted', {
  success: true
})

posthog.capture('project_viewed', {
  project_id: id,
  project_name: name
})
```

---

## 🧪 Testing

### Unit Test Template
```typescript
import { describe, it, expect } from 'vitest'
import { formatDate, calculateReadingTime } from './utils'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2024-01-15')
    expect(formatDate(date)).toBe('January 15, 2024')
  })

  it('handles invalid dates', () => {
    expect(() => formatDate(null)).toThrow()
  })
})

describe('calculateReadingTime', () => {
  it('calculates reading time for text', () => {
    const text = 'word '.repeat(200) // 200 words
    expect(calculateReadingTime(text)).toBe('1 min read')
  })
})
```

### Component Test Template
```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('validates email format', async () => {
    render(<ContactForm />)
    const emailInput = screen.getByLabelText('Email')
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.blur(emailInput)
    
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    const mockSubmit = vi.fn()
    render(<ContactForm onSubmit={mockSubmit} />)
    
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello World!' } })
    
    fireEvent.click(screen.getByText('Send Message'))
    
    expect(mockSubmit).toHaveBeenCalled()
  })
})
```

---

## ♿ Accessibility Guidelines

### Semantic HTML
```typescript
// Use appropriate elements
<nav>  // Navigation
<main>  // Main content
<article>  // Independent content
<section>  // Thematic grouping
<aside>  // Sidebar content
<footer>  // Footer
```

### ARIA Attributes
```typescript
<button aria-label="Close dialog" onClick={onClose}>
  <X />
</button>

<input
  aria-label="Search posts"
  aria-describedby="search-help"
  type="search"
/>
<p id="search-help">Enter keywords to search blog posts</p>
```

### Keyboard Navigation
```typescript
function InteractiveComponent() {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleAction()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleAction}
      onKeyDown={handleKeyDown}
    >
      Interactive element
    </div>
  )
}
```

---

## 🎨 Styling Guidelines

### Use Tailwind CSS
```typescript
<div className="
  container
  mx-auto
  px-4
  py-12
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6
">
```

### Responsive Design (Mobile-First)
```typescript
<div className="
  text-sm         // mobile (default)
  md:text-base    // tablet
  lg:text-lg      // desktop
">
```

### Dark Mode Support
```typescript
<div className="
  bg-white
  dark:bg-slate-900
  text-slate-900
  dark:text-white
">
```

---

## 📚 Reference Documentation

**Internal:**
- Full roadmap: `PROMPT_REFATORACAO_PORTFOLIO.md`
- Quick reference: `QUICK_REFERENCE.md`
- Library catalog: `LIBRARIES_COMPLETE_LIST.md`
- Setup guide: `README_REFACTORING.md`

**External:**
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com

---

## 💡 Copilot Tips

When generating code:
1. **Reference these instructions** in comments
2. **Ask for complete examples** with types and error handling
3. **Request accessibility** features explicitly
4. **Specify dark mode** support when needed
5. **Ask for tests** alongside implementation

Example prompts:
```typescript
// Generate a contact form component following .copilot/instructions.md
// with validation, error handling, and accessibility

// Create a blog post card component with image, title, excerpt,
// tags, reading time, and dark mode support

// Add a server action to submit contact form with email sending
// using Resend and React Email
```

---

**Follow these instructions for consistent, production-ready code! 🚀**
