# Integration Guide: Phase 2.2 Components

This guide explains how to integrate the new Phase 2.2 custom components into the existing portfolio application.

## 🎯 Quick Start

### Import Components

All components are available through the features index:

```tsx
import {
  Hero,
  Section,
  Container,
  ProjectCard,
  BlogCard,
  SkillCard,
  TestimonialCard,
} from '@/components/features'
```

### Basic Integration Example

Replace existing sections with new components for enhanced visuals and consistency.

## 🔄 Integration Examples

### Example 1: Enhance the Home Page Hero

**Before (existing structure):**
```tsx
// In app/page.tsx
<div className="terminal-header">
  <h1>Paulo Oliveira</h1>
  <p>Senior Software Engineer</p>
</div>
```

**After (with new Hero component):**
```tsx
import { Hero } from '@/components/features'

<Hero
  title="Paulo Oliveira"
  subtitle="Senior Software Engineer & System Architect"
  description="Building innovative solutions with 6+ years of experience in Fintech, AI, and Distributed Systems"
  primaryCTA={{
    label: 'View Projects',
    onClick: () => setCurrentSection('projects')
  }}
  secondaryCTA={{
    label: 'Get in Touch',
    onClick: () => setCurrentSection('contact')
  }}
/>
```

### Example 2: Update Projects Section

**Before (existing structure):**
```tsx
// In app/components/sections/Projects.tsx
<div className="project-list">
  {projects.map(project => (
    <div key={project.id} className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  ))}
</div>
```

**After (with ProjectCard):**
```tsx
import { Section, ProjectCard } from '@/components/features'
import { Database, Sparkles, Globe } from 'lucide-react'

<Section variant="filled" spacing="xl">
  <h2 className="text-terminal-2xl font-bold text-terminal-green mb-12">
    Featured Projects
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard
      title="Paglua"
      description="Next-generation fintech infrastructure"
      techStack={['Node.js', 'Go', 'PostgreSQL', 'Redis']}
      status="Production"
      icon={<Database size={24} className="text-terminal-green" />}
      githubUrl="https://github.com/..."
      liveUrl="https://paglua.com"
    />
    {/* More project cards */}
  </div>
</Section>
```

### Example 3: Update Skills Section

**Before:**
```tsx
// In app/components/sections/Skills.tsx
<div className="skills-grid">
  {skills.map(skill => (
    <div key={skill.name} className="skill-item">
      <h4>{skill.name}</h4>
      <div className="skill-level">{skill.level}</div>
    </div>
  ))}
</div>
```

**After (with SkillCard):**
```tsx
import { Section, SkillCard } from '@/components/features'
import { Code, Server, Database, Rocket } from 'lucide-react'

<Section variant="gradient" spacing="lg">
  <h2 className="text-terminal-2xl font-bold text-terminal-green mb-12">
    Technical Expertise
  </h2>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <SkillCard
      title="Backend Development"
      description="Server-side development and API design"
      icon={<Server size={32} className="text-terminal-green" />}
      level="expert"
      category="Development"
      technologies={['Node.js', 'Go', 'Python']}
    />
    {/* More skill cards */}
  </div>
</Section>
```

### Example 4: Add Blog Preview Section

**New section (with BlogCard):**
```tsx
import { Section, BlogCard } from '@/components/features'

<Section variant="bordered" spacing="lg">
  <h2 className="text-terminal-2xl font-bold text-terminal-green mb-12">
    Latest Writing
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <BlogCard
      title="Building Scalable Microservices"
      excerpt="Learn how to architect production-ready microservices..."
      date="2024-12-15"
      readTime="12 min read"
      tags={['Go', 'Architecture', 'DevOps']}
      imageUrl="/images/blog/microservices.jpg"
      href="/blog/scalable-microservices"
    />
    {/* More blog cards */}
  </div>
</Section>
```

### Example 5: Add Testimonials Section

**New section (with TestimonialCard):**
```tsx
import { Section, TestimonialCard } from '@/components/features'

<Section variant="default" spacing="xl">
  <h2 className="text-terminal-2xl font-bold text-terminal-green mb-12">
    Client Testimonials
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <TestimonialCard
      quote="Paulo delivered an exceptional platform that exceeded expectations."
      author="Sarah Johnson"
      authorTitle="CTO"
      authorCompany="FinTech Solutions"
      rating={5}
    />
    {/* More testimonials */}
  </div>
</Section>
```

## 🎨 Styling Considerations

### Maintain Terminal Aesthetic

All components already use the terminal theme, but ensure consistency:

```tsx
// Good: Using design system tokens
<h2 className="text-terminal-2xl text-terminal-green">

// Avoid: Hard-coded values
<h2 className="text-5xl text-[#00ff00]">
```

### Responsive Spacing

Use the Section component's built-in spacing:

```tsx
// Mobile-friendly spacing
<Section spacing="lg">  // Adjusts automatically

// Custom spacing when needed
<Section spacing="none" className="py-8 md:py-16">
```

### Grid Layouts

Use Tailwind's responsive grid classes:

```tsx
// 1 column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

## 🔧 Customization Tips

### Extend Components

Add custom behavior while preserving styling:

```tsx
import { ProjectCard } from '@/components/features'

function CustomProjectCard({ onBookmark, ...props }) {
  return (
    <div className="relative">
      <ProjectCard {...props} />
      <button 
        onClick={onBookmark}
        className="absolute top-4 left-4 z-10"
      >
        Bookmark
      </button>
    </div>
  )
}
```

### Override Styles

Use className for custom styling:

```tsx
<Hero
  className="min-h-screen"  // Custom height
  title="Custom Hero"
/>

<Section
  className="border-x border-terminal-green"  // Custom borders
  variant="default"
>
```

## 📱 Responsive Best Practices

### Mobile-First Grid

Start with single column, expand on larger screens:

```tsx
<div className="
  grid 
  grid-cols-1           // Mobile: 1 column
  sm:grid-cols-2        // Small screens: 2 columns
  lg:grid-cols-3        // Large screens: 3 columns
  gap-4 sm:gap-6        // Responsive gap
">
```

### Hide/Show Content

Use Tailwind's responsive utilities:

```tsx
<div className="
  hidden              // Hidden on mobile
  lg:block            // Visible on large screens
">
  Desktop-only content
</div>
```

## ⚡ Performance Tips

### Lazy Load Images

For BlogCard images:

```tsx
<BlogCard
  imageUrl="/images/large-image.jpg"
  // Use loading="lazy" in the component or optimize images
/>
```

### Optimize Animations

Reduce motion for accessibility:

```tsx
// The components already respect prefers-reduced-motion
// But you can add additional checks:

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

<Hero 
  // Pass to component if needed for conditional rendering
/>
```

## 🧪 Testing Integration

### Visual Testing

Use the `FeaturesShowcase.tsx` for visual testing:

```bash
# Create a test route
# app/showcase/page.tsx
import FeaturesShowcase from '@/components/features/FeaturesShowcase'

export default function ShowcasePage() {
  return <FeaturesShowcase />
}
```

### Unit Testing

Example test for ProjectCard:

```tsx
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '@/components/features'

test('renders project card with title', () => {
  render(
    <ProjectCard
      title="Test Project"
      description="Test description"
    />
  )
  
  expect(screen.getByText('Test Project')).toBeInTheDocument()
})
```

## 🚀 Migration Checklist

- [ ] Install dependencies (already present: framer-motion, lucide-react)
- [ ] Import components in sections where needed
- [ ] Replace existing markup with new components
- [ ] Test responsive behavior on all screen sizes
- [ ] Verify terminal aesthetic is maintained
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Test animations and hover effects
- [ ] Optimize images if using BlogCard
- [ ] Update any affected tests
- [ ] Review performance metrics

## 📚 Additional Resources

- **Component API**: See `README.md` in features directory
- **Usage Examples**: Check `FeaturesShowcase.tsx`
- **Design System**: Refer to `/DESIGN_SYSTEM.md`
- **Changelog**: See `/CHANGELOG.md` for detailed changes

## 🎯 Next Steps

After integration:

1. **Visual Review**: Check all pages for consistent styling
2. **Performance Audit**: Run Lighthouse/PageSpeed tests
3. **Accessibility Check**: Use axe DevTools or similar
4. **User Testing**: Get feedback on new components
5. **Documentation**: Update any internal docs or wikis

---

**Remember:** These components are designed to enhance the existing portfolio while maintaining the unique terminal aesthetic. Feel free to customize them to fit your specific needs while keeping the core design principles intact.
