/**
 * Feature Components Showcase
 *
 * Demonstrates how to use the new signature custom components:
 * Hero, Section, Container, ProjectCard, BlogCard, SkillCard, and TestimonialCard
 *
 * This file can be used as:
 * 1. A reference for component usage
 * 2. A testing ground for visual verification
 * 3. Documentation for the component library
 */

'use client'

import { Code, Database, Globe, Rocket, Server, Sparkles } from 'lucide-react'
import {
  BlogCard,
  Container,
  Hero,
  ProjectCard,
  Section,
  SkillCard,
  TestimonialCard,
} from '@/components/features'

export default function FeaturesShowcase() {
  return (
    <div className="min-h-screen bg-terminal-bg">
      {/* Hero Section Example */}
      <Hero
        title="Build. Ship. Scale."
        subtitle="Terminal Portfolio v2.2"
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
        <div className="flex gap-4 justify-center text-terminal-text-dim text-terminal-sm">
          <span>6+ Years Experience</span>
          <span>•</span>
          <span>15+ Projects Delivered</span>
          <span>•</span>
          <span>100% Client Satisfaction</span>
        </div>
      </Hero>

      {/* Section with Projects */}
      <Section variant="filled" spacing="xl" containerSize="xl">
        <Container size="lg">
          <h2 className="text-terminal-2xl font-bold text-terminal-green mb-4 uppercase tracking-wider">
            Featured Projects
          </h2>
          <p className="text-terminal-text-secondary text-terminal-lg mb-12">
            A selection of recent work showcasing technical expertise and
            problem-solving skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Paglua"
              description="Next-generation fintech infrastructure enabling seamless payment processing and financial operations at scale."
              techStack={['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker']}
              status="Production"
              icon={<Database size={24} className="text-terminal-green" />}
              githubUrl="https://github.com/example/paglua"
              liveUrl="https://paglua.com"
            />

            <ProjectCard
              title="Marcaai"
              description="AI-powered trademark automation system that streamlines intellectual property registration and management."
              techStack={['Python', 'TensorFlow', 'FastAPI', 'React', 'AWS']}
              status="Beta"
              icon={<Sparkles size={24} className="text-terminal-green" />}
              githubUrl="https://github.com/example/marcaai"
            />

            <ProjectCard
              title="Portfolio V2"
              description="Modern terminal-themed portfolio built with Next.js, featuring unique design and smooth animations."
              techStack={['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion']}
              status="Active"
              icon={<Globe size={24} className="text-terminal-green" />}
              githubUrl="https://github.com/PauloHSOliveira/new-portfolio"
              liveUrl="https://portfolio.example.com"
            />
          </div>
        </Container>
      </Section>

      {/* Section with Blog Posts */}
      <Section variant="bordered" spacing="lg">
        <h2 className="text-terminal-2xl font-bold text-terminal-green mb-4 uppercase tracking-wider">
          Latest Writing
        </h2>
        <p className="text-terminal-text-secondary text-terminal-lg mb-12">
          Technical deep-dives, tutorials, and thoughts on software engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            title="Building Scalable Microservices with Go"
            excerpt="Learn how to architect and deploy production-ready microservices using Go, Docker, and Kubernetes for maximum reliability."
            date="2024-12-15"
            readTime="12 min read"
            tags={['Go', 'Architecture', 'DevOps']}
            imageUrl="https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop"
            imageAlt="Microservices architecture diagram"
            href="/blog/scalable-microservices-go"
          />

          <BlogCard
            title="AI Integration Patterns for Modern Apps"
            excerpt="Explore practical patterns for integrating AI capabilities into your applications without breaking the bank or your infrastructure."
            date="2024-12-10"
            readTime="15 min read"
            tags={['AI', 'Integration', 'Patterns']}
            imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
            imageAlt="AI neural network visualization"
            href="/blog/ai-integration-patterns"
          />

          <BlogCard
            title="Terminal UI Design Philosophy"
            excerpt="Why terminal aesthetics are making a comeback and how to implement them effectively in modern web applications."
            date="2024-12-05"
            readTime="8 min read"
            tags={['Design', 'UI/UX', 'Frontend']}
            imageUrl="https://images.unsplash.com/photo-1629654291663-b91ad427698f?w=400&h=300&fit=crop"
            imageAlt="Terminal interface screenshot"
            href="/blog/terminal-ui-design"
          />
        </div>
      </Section>

      {/* Section with Skills */}
      <Section variant="gradient" spacing="xl">
        <h2 className="text-terminal-2xl font-bold text-terminal-green mb-4 uppercase tracking-wider">
          Technical Expertise
        </h2>
        <p className="text-terminal-text-secondary text-terminal-lg mb-12">
          Core competencies and technology stack.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <SkillCard
            title="Backend"
            description="Server-side development and API design"
            icon={<Server size={32} className="text-terminal-green" />}
            level="expert"
            category="Development"
            technologies={['Node.js', 'Go', 'Python']}
          />

          <SkillCard
            title="Frontend"
            description="Modern UI development and frameworks"
            icon={<Code size={32} className="text-terminal-green" />}
            level="advanced"
            category="Development"
            technologies={['React', 'Next.js', 'TypeScript']}
          />

          <SkillCard
            title="Database"
            description="Data modeling and optimization"
            icon={<Database size={32} className="text-terminal-green" />}
            level="expert"
            category="Infrastructure"
            technologies={['PostgreSQL', 'Redis', 'MongoDB']}
          />

          <SkillCard
            title="DevOps"
            description="CI/CD and cloud infrastructure"
            icon={<Rocket size={32} className="text-terminal-green" />}
            level="advanced"
            category="Operations"
            technologies={['Docker', 'K8s', 'AWS']}
          />
        </div>
      </Section>

      {/* Section with Testimonials */}
      <Section variant="default" spacing="lg">
        <h2 className="text-terminal-2xl font-bold text-terminal-green mb-4 uppercase tracking-wider">
          Client Testimonials
        </h2>
        <p className="text-terminal-text-secondary text-terminal-lg mb-12">
          What people say about working together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Paulo delivered an exceptional fintech platform that exceeded all our expectations. His technical expertise and attention to detail are unmatched."
            author="Sarah Johnson"
            authorTitle="CTO"
            authorCompany="FinTech Solutions"
            rating={5}
          />

          <TestimonialCard
            quote="Working with Paulo was a game-changer for our AI project. He not only solved complex technical challenges but also provided strategic insights that shaped our product roadmap."
            author="Michael Chen"
            authorTitle="Product Manager"
            authorCompany="AI Innovations Inc"
            rating={5}
          />

          <TestimonialCard
            quote="Incredible work on our distributed system architecture. Paulo's solutions are elegant, scalable, and production-ready. Highly recommended for any serious technical challenge."
            author="David Rodriguez"
            authorTitle="Engineering Lead"
            authorCompany="Tech Ventures"
            rating={5}
          />
        </div>
      </Section>

      {/* Footer Section */}
      <Section variant="filled" spacing="md">
        <Container size="lg">
          <div className="text-center text-terminal-text-dim text-terminal-sm">
            <p>
              This showcase demonstrates all Phase 2.2 signature custom
              components.
            </p>
            <p className="mt-2">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
