# Feature Components Documentation

> **Phase 2.2:** Signature Custom Components - Hero, Section, and Card Variants

This directory contains distinctive custom components that showcase the unique terminal design style of the portfolio.

## 🎯 Overview

All components in this directory follow these principles:
- **Terminal Aesthetic**: Maintain the retro CRT/terminal visual identity
- **Smooth Animations**: Using Framer Motion for performant, eye-catching animations
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Type Safety**: Full TypeScript support with exported interfaces

## 📦 Components

### Layout Components

#### `Hero`
The signature hero component with creative animations and visual effects.

**Features:**
- Animated particle grid background
- Scanning line effect (CRT aesthetic)
- Floating particles with staggered animations
- Terminal icon with rotate entrance
- Staggered text animations
- Primary and secondary CTA buttons
- Customizable content slot

**Usage:**
```tsx
import { Hero } from '@/components/features'

<Hero
  title="Build. Ship. Scale."
  subtitle="Terminal Portfolio v2.2"
  description="Your awesome description here"
  primaryCTA={{
    label: 'Get Started',
    onClick: () => console.log('CTA clicked')
  }}
  secondaryCTA={{
    label: 'Learn More',
    onClick: () => {}
  }}
>
  <CustomContent />
</Hero>
```

#### `Section`
Flexible section wrapper for consistent page layouts.

**Features:**
- 4 background variants: `default`, `filled`, `bordered`, `gradient`
- 5 spacing options: `none`, `sm`, `md`, `lg`, `xl`
- 5 container sizes: `sm`, `md`, `lg`, `xl`, `full`
- Auto-centered content option
- Responsive padding

**Usage:**
```tsx
import { Section } from '@/components/features'

<Section variant="filled" spacing="lg" containerSize="lg">
  <YourContent />
</Section>
```

#### `Container`
Responsive container with max-width constraints.

**Features:**
- 5 size options: `sm` (3xl), `md` (4xl), `lg` (6xl), `xl` (7xl), `full`
- 4 padding levels: `none`, `sm`, `md`, `lg`
- Auto-centered option
- Full width with size constraints

**Usage:**
```tsx
import { Container } from '@/components/features'

<Container size="lg" padding="md">
  <Content />
</Container>
```

### Card Variants

#### `ProjectCard`
Showcase projects with tech stack and links.

**Features:**
- Tech stack badges
- Status indicator with pulse animation
- Optional icon display
- GitHub and live site links
- Hover effects (lift, glow, border, arrow)
- Responsive layout

**Usage:**
```tsx
import { ProjectCard } from '@/components/features'
import { Database } from 'lucide-react'

<ProjectCard
  title="My Awesome Project"
  description="A brief description of the project"
  techStack={['Node.js', 'React', 'PostgreSQL']}
  status="Production"
  icon={<Database size={24} className="text-terminal-green" />}
  githubUrl="https://github.com/user/repo"
  liveUrl="https://project.com"
/>
```

#### `BlogCard`
Display blog posts with images and metadata.

**Features:**
- Image support with overlay and zoom effect
- Tag display (max 3)
- Date and reading time
- Excerpt text
- Optional link wrapper
- Hover arrow indicator
- Full height flex layout

**Usage:**
```tsx
import { BlogCard } from '@/components/features'

<BlogCard
  title="My Blog Post"
  excerpt="A short preview of the post content..."
  date="2024-12-23"
  readTime="5 min read"
  tags={['React', 'TypeScript', 'Tutorial']}
  imageUrl="/images/blog-post.jpg"
  imageAlt="Blog post cover"
  href="/blog/my-post"
/>
```

#### `SkillCard`
Display technical skills with proficiency levels.

**Features:**
- Large icon with glow effect
- 4 proficiency levels with dot indicators
- Category badge
- Technologies list
- Center-aligned content
- Scale animation on hover
- Glow overlay effect

**Usage:**
```tsx
import { SkillCard } from '@/components/features'
import { Code } from 'lucide-react'

<SkillCard
  title="Frontend Development"
  description="Building modern user interfaces"
  icon={<Code size={32} className="text-terminal-green" />}
  level="expert"
  category="Development"
  technologies={['React', 'Next.js', 'TypeScript']}
/>
```

#### `TestimonialCard`
Show client testimonials and recommendations.

**Features:**
- Quote icon and rating display
- Author information with optional image
- Image fallback with initials
- Author title and company
- Subtle glow on hover
- Blockquote styling

**Usage:**
```tsx
import { TestimonialCard } from '@/components/features'

<TestimonialCard
  quote="Working with Paulo was amazing! Highly recommended."
  author="John Doe"
  authorTitle="CTO"
  authorCompany="Tech Company"
  authorImage="/images/john.jpg"
  rating={5}
/>
```

## 🎨 Design System Integration

All components use tokens from the design system:

**Colors:**
- `terminal-green` - Primary color
- `terminal-bg` - Background colors
- `terminal-border` - Border colors
- `terminal-text-*` - Text hierarchy

**Spacing:**
- `terminal`, `terminal-sm`, `terminal-md`, `terminal-lg`, `terminal-xl`

**Typography:**
- `text-terminal-xs` through `text-terminal-2xl`

**Shadows:**
- `shadow-terminal`, `shadow-terminal-glow`, `shadow-terminal-glow-strong`

**Animations:**
- `duration-terminal` (150ms)
- `duration-terminal-slow` (300ms)

## 🚀 Animation System

All components use Framer Motion for smooth animations:

**Common Patterns:**
- `initial={{ opacity: 0, y: 20 }}` - Fade in from bottom
- `animate={{ opacity: 1, y: 0 }}` - Animate to visible state
- `whileHover={{ scale: 1.02 }}` - Scale on hover
- `transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}` - Custom easing

## ♿ Accessibility

All components follow accessibility best practices:

- **Semantic HTML**: Proper use of `<section>`, `<article>`, `<header>`, etc.
- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Proper tab order and focus states
- **Alt Text**: Images have descriptive alt attributes
- **Color Contrast**: WCAG AA compliance

## 📱 Responsive Design

All components are mobile-first and responsive:

- **Breakpoints**: Using Tailwind's default breakpoints (sm, md, lg, xl, 2xl)
- **Flexible Layouts**: Grid and flex layouts adapt to screen size
- **Responsive Typography**: Text sizes adjust for readability
- **Touch Targets**: Minimum 44x44px for mobile interactions

## 🧩 Compound Component Pattern

The existing `Card` component uses the compound pattern:
```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui'

<Card variant="elevated">
  <CardHeader>Header Content</CardHeader>
  <CardContent>Main Content</CardContent>
  <CardFooter>Footer Content</CardFooter>
</Card>
```

This pattern provides:
- **Clean API**: Intuitive component structure
- **Flexible Composition**: Mix and match sub-components
- **Type Safety**: Full TypeScript support

## 📊 Examples

See `FeaturesShowcase.tsx` for complete usage examples of all components in action.

## 🔧 Customization

All components accept a `className` prop for additional styling:

```tsx
<Hero
  className="custom-class"
  title="Custom Styled Hero"
/>
```

Components also spread additional props for flexibility:

```tsx
<Section
  id="custom-section"
  data-testid="test-section"
  onClick={() => {}}
>
  Content
</Section>
```

## 📝 TypeScript

All components have exported TypeScript interfaces:

```tsx
import type { HeroProps, SectionProps, ProjectCardProps } from '@/components/features'
```

## 🎯 Success Criteria

Phase 2.2 Components meet all requirements:

- ✅ Hero component is visually impressive
- ✅ Card variants are distinctive and reusable
- ✅ Components use compound pattern where appropriate
- ✅ All components are responsive
- ✅ Terminal aesthetic preserved
- ✅ Smooth animations throughout
- ✅ Fully accessible
- ✅ Type-safe with TypeScript

## 🚧 Future Enhancements

Potential improvements for future phases:
- Add more card variants (team member card, service card)
- Implement grid system component
- Add modal/dialog component
- Create form layout components
- Add timeline component
- Implement tabs component

---

**Built with:** Next.js, TypeScript, Tailwind CSS, Framer Motion
**Phase:** 2.2 - Signature Custom Components
**Status:** ✅ Complete
