/**
 * UI Components Showcase
 *
 * Demonstrates all base UI components with various states and variants.
 * Use this page to test components in isolation and verify theme support.
 */

'use client'

import { Code, Database, Globe, Rocket, Server, Sparkles } from 'lucide-react'
import { useState } from 'react'
import {
  BlogCard,
  Container,
  Hero,
  ProjectCard,
  Section,
  SkillCard,
  TestimonialCard,
} from '@/components/features'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSkeleton,
  Checkbox,
  ImageSkeleton,
  Input,
  ListSkeleton,
  LoadingSpinner,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  TextSkeleton,
} from './index'

export function ComponentShowcase() {
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState('')

  const handleLoadingTest = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-terminal-bg-dark p-8 space-y-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-terminal-2xl text-terminal-green mb-8">
          Terminal UI Components Showcase
        </h1>

        {/* Buttons Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">Buttons</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Variants */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  States
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled</Button>
                  <Button isLoading={loading} onClick={handleLoadingTest}>
                    {loading ? 'Loading...' : 'Click to Load'}
                  </Button>
                </div>
              </div>

              {/* With Icons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  With Icons
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button leftIcon={<span>→</span>}>With Left Icon</Button>
                  <Button rightIcon={<span>←</span>}>With Right Icon</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <div className="mb-8">
          <h2 className="text-terminal-xl text-terminal-green mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card variant="default">
              <CardContent>
                <p className="text-terminal-text-secondary">Default Card</p>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent>
                <p className="text-terminal-text-secondary">Elevated Card</p>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <p className="text-terminal-text-secondary">Outlined Card</p>
              </CardContent>
            </Card>
            <Card variant="ghost">
              <CardContent>
                <p className="text-terminal-text-secondary">Ghost Card</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Card Example */}
        <Card className="mb-8" withGlow>
          <CardHeader>
            <h3 className="text-terminal-lg text-terminal-green">
              Card with Header and Footer
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-terminal-text-secondary">
              This is a card with a header, content area, and footer. It
              demonstrates the complete card component structure.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex gap-4">
              <Button size="sm" variant="outline">
                Cancel
              </Button>
              <Button size="sm" variant="primary">
                Confirm
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Form Inputs Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Form Inputs
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Input */}
              <Input
                label="Username"
                placeholder="Enter your username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="Choose a unique username"
              />

              {/* Input with Icons */}
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                leftIcon={<span>@</span>}
              />

              {/* Input with Error */}
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                error="Password must be at least 8 characters"
              />

              {/* Textarea */}
              <Textarea
                label="Message"
                placeholder="Enter your message here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                helperText="Max 500 characters"
                rows={4}
              />

              {/* Select */}
              <Select
                label="Select an option"
                placeholder="Choose one..."
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                  {
                    value: 'option4',
                    label: 'Option 4 (Disabled)',
                    disabled: true,
                  },
                ]}
              />
            </div>
          </CardContent>
        </Card>

        {/* Checkbox and Radio Section */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Checkbox & Radio
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Checkboxes */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Checkboxes
                </h3>
                <div className="space-y-4">
                  <Checkbox
                    label="Accept terms and conditions"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                  <Checkbox
                    label="Subscribe to newsletter"
                    description="Receive updates about new features and releases"
                  />
                  <Checkbox label="Disabled checkbox" disabled />
                  <Checkbox label="Disabled checked" disabled checked />
                </div>
              </div>

              {/* Radio Buttons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Radio Buttons
                </h3>
                <RadioGroup label="Select a plan">
                  <Radio
                    name="plan"
                    value="free"
                    label="Free"
                    description="Basic features for personal use"
                    checked={radioValue === 'free'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    name="plan"
                    value="pro"
                    label="Pro"
                    description="Advanced features for professionals"
                    checked={radioValue === 'pro'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    name="plan"
                    value="enterprise"
                    label="Enterprise"
                    description="Full suite for large teams"
                    checked={radioValue === 'enterprise'}
                    onChange={(e) => setRadioValue(e.target.value)}
                  />
                  <Radio
                    name="plan"
                    value="disabled"
                    label="Disabled option"
                    disabled
                  />
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complete Form Example */}
        <Card>
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Complete Form Example
            </h2>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <Input label="Full Name" placeholder="John Doe" required />
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                required
              />
              <Select
                label="Country"
                placeholder="Select your country"
                required
                options={[
                  { value: 'us', label: 'United States' },
                  { value: 'uk', label: 'United Kingdom' },
                  { value: 'ca', label: 'Canada' },
                  { value: 'au', label: 'Australia' },
                ]}
              />
              <Textarea
                label="Bio"
                placeholder="Tell us about yourself"
                rows={4}
              />
              <Checkbox label="I agree to the terms and conditions" required />
              <div className="flex gap-4">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Loading States Section */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-terminal-xl text-terminal-green">
              Loading States & Skeletons
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Loading Spinner */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Loading Spinner
                </h3>
                <div className="flex items-center gap-6">
                  <LoadingSpinner size="sm" />
                  <LoadingSpinner size="md" />
                  <LoadingSpinner size="lg" />
                </div>
              </div>

              {/* Text Skeletons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Text Skeletons
                </h3>
                <div className="space-y-4">
                  <TextSkeleton variant="heading" />
                  <TextSkeleton variant="paragraph" lines={3} />
                  <TextSkeleton variant="line" />
                </div>
              </div>

              {/* Image Skeletons */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Image Skeletons
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Square
                    </p>
                    <ImageSkeleton aspectRatio="square" />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Video
                    </p>
                    <ImageSkeleton aspectRatio="video" />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Wide
                    </p>
                    <ImageSkeleton aspectRatio="wide" />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Portrait
                    </p>
                    <ImageSkeleton aspectRatio="portrait" />
                  </div>
                </div>
              </div>

              {/* List Skeleton */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  List Skeleton
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Without Icons
                    </p>
                    <ListSkeleton items={4} />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      With Icons
                    </p>
                    <ListSkeleton items={4} showIcon />
                  </div>
                </div>
              </div>

              {/* Card Skeleton */}
              <div>
                <h3 className="text-terminal-sm text-terminal-text-secondary mb-4 uppercase">
                  Card Skeletons
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      Basic
                    </p>
                    <CardSkeleton />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      With Header
                    </p>
                    <CardSkeleton showHeader />
                  </div>
                  <div>
                    <p className="text-terminal-xs text-terminal-text-tertiary mb-2">
                      With Header & Footer
                    </p>
                    <CardSkeleton showHeader showFooter />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Components Section */}
        <div className="mt-16 pt-16 border-t border-terminal-border">
          <h1 className="text-terminal-2xl text-terminal-green mb-8">
            Feature Components Showcase
          </h1>

          {/* Hero Component */}
          <div className="mb-12">
            <h2 className="text-terminal-xl text-terminal-green mb-4">
              Hero Component
            </h2>
            <Hero
              title="Build. Ship. Scale."
              subtitle="Terminal Portfolio v2.3"
              description="Crafting innovative solutions with modern technologies. Specialized in distributed systems, AI integration, and high-performance architectures."
              primaryCTA={{
                label: 'View Projects',
                onClick: () => console.log('Primary CTA clicked'),
              }}
              secondaryCTA={{
                label: 'Get in Touch',
                onClick: () => console.log('Secondary CTA clicked'),
              }}
            >
              <div className="flex gap-4 justify-center text-terminal-text-dim text-terminal-sm flex-wrap">
                <span>6+ Years Experience</span>
                <span>•</span>
                <span>15+ Projects Delivered</span>
                <span>•</span>
                <span>100% Client Satisfaction</span>
              </div>
            </Hero>
          </div>

          {/* Section & Container Components */}
          <Section variant="bordered" spacing="lg" className="mb-12">
            <Container size="lg">
              <h2 className="text-terminal-xl text-terminal-green mb-4">
                Section & Container Components
              </h2>
              <p className="text-terminal-text-secondary">
                This content is wrapped in a Section (bordered variant) and
                Container (lg size) component. Sections provide consistent
                spacing and background variants, while Containers control
                max-width and centering.
              </p>
            </Container>
          </Section>

          {/* Project Cards */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-terminal-xl text-terminal-green">
                Project Cards
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Paglua"
                  description="Next-generation fintech infrastructure enabling seamless payment processing at scale."
                  techStack={['Node.js', 'Go', 'PostgreSQL', 'Redis']}
                  status="Production"
                  icon={<Database size={24} className="text-terminal-green" />}
                  githubUrl="https://github.com/example/paglua"
                  liveUrl="https://paglua.com"
                />

                <ProjectCard
                  title="Marcaai"
                  description="AI-powered trademark automation system for intellectual property management."
                  techStack={['Python', 'TensorFlow', 'FastAPI', 'React']}
                  status="Beta"
                  icon={<Sparkles size={24} className="text-terminal-green" />}
                  githubUrl="https://github.com/example/marcaai"
                />

                <ProjectCard
                  title="Portfolio V2"
                  description="Modern terminal-themed portfolio built with Next.js and unique animations."
                  techStack={['Next.js', 'TypeScript', 'Tailwind']}
                  status="Active"
                  icon={<Globe size={24} className="text-terminal-green" />}
                  githubUrl="https://github.com/PauloHSOliveira/new-portfolio"
                />
              </div>
            </CardContent>
          </Card>

          {/* Blog Cards */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-terminal-xl text-terminal-green">
                Blog Cards
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard
                  title="Building Scalable Systems"
                  excerpt="Learn how to design and implement distributed systems that scale efficiently."
                  author="Paulo Oliveira"
                  date="2024-01-15"
                  readTime="8 min read"
                  tags={['Architecture', 'Scalability', 'Systems']}
                  slug="/blog/building-scalable-systems"
                  imageUrl="https://placehold.co/600x400/0a0a0a/00ff00?text=Blog+Post"
                />

                <BlogCard
                  title="Modern DevOps Practices"
                  excerpt="Exploring CI/CD pipelines, containerization, and infrastructure as code."
                  author="Paulo Oliveira"
                  date="2024-01-10"
                  readTime="6 min read"
                  tags={['DevOps', 'Docker', 'CI/CD']}
                  slug="/blog/modern-devops"
                  imageUrl="https://placehold.co/600x400/0a0a0a/00ff00?text=DevOps"
                />

                <BlogCard
                  title="AI Integration Guide"
                  excerpt="Step-by-step guide to integrating AI models into production applications."
                  author="Paulo Oliveira"
                  date="2024-01-05"
                  readTime="10 min read"
                  tags={['AI', 'Machine Learning', 'Integration']}
                  slug="/blog/ai-integration"
                  imageUrl="https://placehold.co/600x400/0a0a0a/00ff00?text=AI+Guide"
                />
              </div>
            </CardContent>
          </Card>

          {/* Skill Cards */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-terminal-xl text-terminal-green">
                Skill Cards
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SkillCard
                  name="Node.js"
                  category="Backend"
                  level="Expert"
                  icon={<Server size={24} />}
                  description="Building high-performance APIs and microservices"
                />

                <SkillCard
                  name="React"
                  category="Frontend"
                  level="Advanced"
                  icon={<Code size={24} />}
                  description="Creating modern, responsive web applications"
                />

                <SkillCard
                  name="PostgreSQL"
                  category="Database"
                  level="Advanced"
                  icon={<Database size={24} />}
                  description="Database design and optimization"
                />

                <SkillCard
                  name="Docker"
                  category="DevOps"
                  level="Advanced"
                  icon={<Rocket size={24} />}
                  description="Containerization and orchestration"
                />
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Cards */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-terminal-xl text-terminal-green">
                Testimonial Cards
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TestimonialCard
                  quote="Paulo's expertise in distributed systems and fintech was instrumental in scaling our payment infrastructure. His technical leadership and problem-solving skills are exceptional."
                  author="Jane Smith"
                  authorTitle="CTO"
                  authorCompany="TechCorp"
                  authorImage="https://placehold.co/100x100/0a0a0a/00ff00?text=JS"
                  rating={5}
                />

                <TestimonialCard
                  quote="Working with Paulo on our AI integration project was a game-changer. His ability to translate complex requirements into elegant solutions is remarkable."
                  author="John Doe"
                  authorTitle="Product Manager"
                  authorCompany="InnovateLab"
                  rating={5}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
