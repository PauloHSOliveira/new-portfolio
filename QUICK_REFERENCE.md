# ⚡ QUICK REFERENCE - Coding Cheat Sheet

**For Active Development - Keep This Open While Coding**  
**Version:** 2.0

---

## 📑 Table of Contents

1. [Component Patterns](#component-patterns)
2. [State Management (Jotai)](#state-management-jotai)
3. [Server Actions](#server-actions)
4. [Forms with Validation](#forms-with-validation)
5. [Blog/MDX Patterns](#blogmdx-patterns)
6. [Email Templates](#email-templates)
7. [Analytics Events](#analytics-events)
8. [Testing Patterns](#testing-patterns)
9. [TypeScript Patterns](#typescript-patterns)
10. [Styling Patterns](#styling-patterns)
11. [Prompts for Cursor/Copilot](#prompts-for-cursoscopilot)
12. [Troubleshooting Quick Fixes](#troubleshooting-quick-fixes)
13. [Performance Checklist](#performance-checklist)

---

## 🎨 Component Patterns

### Standard Server Component

```typescript
// src/components/features/ProjectList.tsx
import { getProjects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export async function ProjectList() {
  const projects = await getProjects()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
```

### Standard Client Component

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

### Component with Loading State

```typescript
// src/components/features/GitHubStats.tsx
import { Suspense } from 'react'
import { GitHubStatsContent } from './GitHubStatsContent'
import { Skeleton } from '@/components/ui/skeleton'

export function GitHubStats() {
  return (
    <Suspense fallback={<GitHubStatsSkeleton />}>
      <GitHubStatsContent />
    </Suspense>
  )
}

function GitHubStatsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </div>
  )
}
```

### Component with Error Boundary

```typescript
// app/blog/error.tsx
'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Blog error:', error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
```

---

## 🔄 State Management (Jotai)

### Create Atom

```typescript
// src/stores/ui.ts
import { atom } from 'jotai'

// Simple atom
export const searchQueryAtom = atom('')

// Atom with default value
export const sidebarOpenAtom = atom(false)

// Derived atom (read-only)
export const filteredPostsAtom = atom((get) => {
  const query = get(searchQueryAtom)
  const posts = get(postsAtom)
  return posts.filter((post) => 
    post.title.toLowerCase().includes(query.toLowerCase())
  )
})

// Atom with async
export const githubDataAtom = atom(async () => {
  const response = await fetch('/api/github')
  return response.json()
})
```

### Use Atom in Component

```typescript
'use client'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { searchQueryAtom, sidebarOpenAtom } from '@/stores/ui'

export function SearchBar() {
  // Read and write
  const [query, setQuery] = useAtom(searchQueryAtom)
  
  // Read only
  const query = useAtomValue(searchQueryAtom)
  
  // Write only
  const setQuery = useSetAtom(searchQueryAtom)

  return (
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search posts..."
    />
  )
}
```

---

## ⚡ Server Actions

### Standard Server Action

```typescript
// src/actions/contact.ts
'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactEmail } from '@/emails/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContact(data: ContactFormData) {
  try {
    // Validate
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

### Action with Rate Limiting

```typescript
// src/actions/newsletter.ts
'use server'

import { headers } from 'next/headers'
import { rateLimit } from '@/lib/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
})

export async function subscribeNewsletter(email: string) {
  const headersList = headers()
  const ip = headersList.get('x-forwarded-for') ?? 'unknown'

  try {
    await limiter.check(5, ip) // 5 requests per minute
    
    // Process subscription
    // ...

    return { success: true }
  } catch {
    return { 
      success: false, 
      message: 'Rate limit exceeded. Try again later.' 
    }
  }
}
```

---

## 📝 Forms with Validation

### Standard Form with React Hook Form + Zod

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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    const result = await submitContact(data)
    
    if (result.success) {
      reset()
      // Show success message
    } else {
      // Show error message
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

---

## 📰 Blog/MDX Patterns

### Fetch All Posts

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
    .sort((a, b) => (a.date > b.date ? -1 : 1))

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

### Render MDX Content

```typescript
// src/lib/blog/mdx.ts
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const rehypePrettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: false,
}

export async function renderMDX(source: string) {
  return compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      },
    },
  })
}
```

### Blog Post Page

```typescript
// app/(content)/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog/posts'
import { renderMDX } from '@/lib/blog/mdx'
import { PostHeader } from '@/components/blog/PostHeader'
import { TableOfContents } from '@/components/blog/TableOfContents'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { content } = await renderMDX(post.content)

  return (
    <article className="container max-w-4xl py-12">
      <PostHeader post={post} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {content}
        </div>
        
        <aside className="hidden lg:block">
          <TableOfContents />
        </aside>
      </div>
    </article>
  )
}
```

### Blog Post Card Component

```typescript
// src/components/blog/PostCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Post } from '@/types/blog'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`}>
        {post.coverImage && (
          <div className="relative h-48 w-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <CardHeader>
          <h3 className="text-xl font-bold line-clamp-2">{post.title}</h3>
          <p className="text-sm text-muted-foreground">
            {format(new Date(post.date), 'MMMM d, yyyy')} • {post.readingTime}
          </p>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        
        <CardFooter className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Link>
    </Card>
  )
}
```

### MDX Post Example

```mdx
---
title: "Building Scalable Payment Systems with TypeScript"
date: "2024-01-15"
author: "Paulo Henrique"
excerpt: "Learn how to architect type-safe payment processing systems using TypeScript and modern best practices."
coverImage: "/images/blog/payment-systems.jpg"
tags: ["typescript", "fintech", "architecture"]
---

# Building Scalable Payment Systems

Payment systems require exceptional reliability and type safety. In this article, we'll explore...

## Architecture Overview

Here's how we structure our payment service:

```typescript
interface PaymentRequest {
  amount: number
  currency: string
  customerId: string
  paymentMethod: PaymentMethod
}

async function processPayment(request: PaymentRequest) {
  // Implementation
}
```

## Key Considerations

1. **Type Safety**: Use TypeScript strict mode
2. **Validation**: Validate all inputs with Zod
3. **Error Handling**: Comprehensive error boundaries

<CustomComponent prop="value" />
```

---

## 📧 Email Templates

### Simple Email Template

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
  marginBottom: '64px',
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
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

---

## 📊 Analytics Events

### PostHog Event Tracking

```typescript
// src/lib/analytics/posthog.ts
import posthog from 'posthog-js'

export function trackPageView(page: string) {
  posthog.capture('$pageview', { page })
}

export function trackBlogPostView(slug: string, title: string) {
  posthog.capture('blog_post_viewed', {
    post_slug: slug,
    post_title: title,
  })
}

export function trackContactFormSubmit(success: boolean) {
  posthog.capture('contact_form_submitted', {
    success,
  })
}

export function trackNewsletterSubscribe() {
  posthog.capture('newsletter_subscribed')
}

export function trackProjectView(projectId: string) {
  posthog.capture('project_viewed', {
    project_id: projectId,
  })
}
```

### Use in Component

```typescript
'use client'

import { useEffect } from 'react'
import { trackBlogPostView } from '@/lib/analytics/posthog'

export function BlogPostAnalytics({ slug, title }: { slug: string; title: string }) {
  useEffect(() => {
    trackBlogPostView(slug, title)
  }, [slug, title])

  return null
}
```

---

## 🧪 Testing Patterns

### Unit Test Example

```typescript
// src/lib/blog/__tests__/posts.test.ts
import { describe, it, expect } from 'vitest'
import { getAllPosts, getPostBySlug } from '../posts'

describe('Blog Posts', () => {
  it('should return all posts', () => {
    const posts = getAllPosts()
    expect(posts).toBeInstanceOf(Array)
    expect(posts.length).toBeGreaterThan(0)
  })

  it('should return post by slug', () => {
    const post = getPostBySlug('example-post')
    expect(post).toBeDefined()
    expect(post?.slug).toBe('example-post')
  })

  it('should return null for non-existent post', () => {
    const post = getPostBySlug('non-existent')
    expect(post).toBeNull()
  })

  it('should sort posts by date descending', () => {
    const posts = getAllPosts()
    for (let i = 0; i < posts.length - 1; i++) {
      expect(new Date(posts[i].date) >= new Date(posts[i + 1].date)).toBe(true)
    }
  })
})
```

### Component Test Example

```typescript
// src/components/blog/__tests__/PostCard.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PostCard } from '../PostCard'

describe('PostCard', () => {
  const mockPost = {
    slug: 'test-post',
    title: 'Test Post',
    date: '2024-01-15',
    author: 'Test Author',
    excerpt: 'Test excerpt',
    coverImage: '/test.jpg',
    tags: ['test', 'example'],
    readingTime: '5 min read',
  }

  it('should render post title', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Test Post')).toBeInTheDocument()
  })

  it('should render post excerpt', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Test excerpt')).toBeInTheDocument()
  })

  it('should render all tags', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('example')).toBeInTheDocument()
  })
})
```

---

## 🔷 TypeScript Patterns

### Type Definitions

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
  content: string
  readingTime?: string
}

export interface PostMetadata {
  slug: string
  title: string
  date: string
  tags: string[]
}

export type PostSortField = 'date' | 'title'
export type SortOrder = 'asc' | 'desc'
```

### Utility Types

```typescript
// src/types/common.ts

// Make all properties optional
export type Optional<T> = Partial<T>

// Pick specific properties
export type PostPreview = Pick<Post, 'slug' | 'title' | 'excerpt' | 'date'>

// Omit specific properties
export type PostWithoutContent = Omit<Post, 'content'>

// Make specific properties required
export type RequiredPost = Required<Pick<Post, 'slug' | 'title' | 'date'>>

// API Response wrapper
export type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string }

// Form state
export type FormState = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string }
```

---

## 🎨 Styling Patterns

### Utility Function for Class Names

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage:
<div className={cn(
  'base-classes',
  condition && 'conditional-class',
  'more-classes'
)} />
```

### Common Tailwind Patterns

```typescript
// Container
<div className="container mx-auto px-4">

// Centered content
<div className="flex items-center justify-center min-h-screen">

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">

// Dark mode
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">

// Hover effects
<button className="transition-all hover:scale-105 hover:shadow-lg">

// Focus states
<input className="focus:ring-2 focus:ring-blue-500 focus:outline-none">
```

---

## 🤖 Prompts for Cursor/Copilot

### Component Generation Prompts

```typescript
// Prompt: "Create a responsive hero section component following .cursor/rules.md"
// Prompt: "Add a blog post card with image, title, excerpt, and tags"
// Prompt: "Create a contact form with validation using React Hook Form and Zod"
// Prompt: "Build a theme toggle button with smooth animations"
```

### Refactoring Prompts

```typescript
// Prompt: "Refactor this component to use server components where possible"
// Prompt: "Add error handling to this async function"
// Prompt: "Make this component type-safe with proper TypeScript types"
// Prompt: "Extract this logic into a custom hook"
```

### Testing Prompts

```typescript
// Prompt: "Write unit tests for this utility function"
// Prompt: "Add component tests for all user interactions"
// Prompt: "Create test fixtures for blog post data"
```

---

## 🔧 Troubleshooting Quick Fixes

### Common Errors

```typescript
// Error: "Module not found"
// Fix: Check tsconfig.json paths configuration

// Error: "Cannot find module '@/components/ui/button'"
// Fix: pnpx shadcn-ui@latest add button

// Error: "Property 'X' does not exist"
// Fix: Add proper type definitions or use type assertion

// Error: "Hydration failed"
// Fix: Ensure server and client render the same HTML
// - Check for browser-only APIs in server components
// - Use useEffect for client-only logic
// - Suppress hydration warnings: <div suppressHydrationWarning>

// Error: "useState/useEffect used in Server Component"
// Fix: Add 'use client' directive at top of file
```

---

## ⚡ Performance Checklist

### Before Committing
- [ ] No console.log statements in production code
- [ ] All images using next/image
- [ ] No unused imports
- [ ] Type check passes: `pnpm type-check`
- [ ] Lint passes: `pnpm lint`

### Before Deploying
- [ ] Build succeeds: `pnpm build`
- [ ] Bundle size check
- [ ] Lighthouse audit > 90 all categories
- [ ] No TypeScript errors
- [ ] Environment variables configured

---

**Keep this open while coding for quick reference! 🚀**
