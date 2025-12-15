import { SkillGroup, Project } from './types'

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'languages',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Go',
      'Rust',
      'Solidity',
      'PHP',
      'C',
    ],
  },
  {
    category: 'frontend',
    items: [
      'Next.js',
      'React.js',
      'React Native',
      'HTML5',
      'CSS3',
      'Styled Components',
      'TailwindCSS',
      'React Query',
    ],
  },
  {
    category: 'backend & infrastructure',
    items: [
      'Node.js',
      'Express',
      'Fastify',
      'GraphQL',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'AWS',
    ],
  },
  {
    category: 'databases',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Algolia', 'Redis', 'Prisma'],
  },
  {
    category: 'tools & platforms',
    items: [
      'GitHub',
      'Figma',
      'Photoshop',
      'Storybook',
      'Cypress',
      'Next SEO',
      'Shopify',
      'WordPress',
    ],
  },
  {
    category: 'ai & emerging tech',
    items: [
      'OpenAI / ChatGPT',
      'LangChain',
      'LlamaIndex',
      'Web3 / Blockchain',
      'ElevenLabs',
      'Semantic Search',
    ],
  },
]

export const PERSONAL_PROJECTS: Project[] = [
  {
    slug: 'paglua',
    name: 'Paglua',
    description:
      'Cross-border Fintech protocol for national/international payments and stablecoin on/off ramp.',
    status: 'active development',
    metrics: {
      mrr: 'TBD',
      users: 'DEVELOPMENT',
      uptime: 'N/A',
      version: 'v0.1.0-dev',
    },
    content: `
# Paglua // Financial Infrastructure

[Project information will be added later]
    `,
  },
  {
    slug: 'marcaai',
    name: 'Marcaai',
    description:
      'Legal Tech platform automating intellectual property research in the trademark industry.',
    status: 'active development',
    metrics: {
      mrr: 'TBD',
      users: 'DEVELOPMENT',
      uptime: 'N/A',
      version: 'v0.0.1-dev',
    },
    content: `
# Marcaai // AI Trademark Intelligence

[Project information will be added later]
    `,
  },
  {
    slug: 'hubbistro',
    name: 'HubBistro',
    description:
      'All-in-one restaurant management app for hospitality operations.',
    status: 'archived',
    metrics: {
      mrr: 'EXITED',
      users: 'ARCHIVED',
      uptime: 'OFFLINE',
      version: 'v2.1.0',
    },
    content: `
# HubBistro // Legacy POS

Archived management node for hospitality operations.
    `,
  },
]
