# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-22

### Phase 1.1: Project Initialization - Update to Next.js 15 and TypeScript Strict Mode

#### Added

##### Folder Structure
Created complete folder structure as per architecture requirements:

- **src/components/** - React components directory
  - `ui/` - Reusable, generic UI components (buttons, cards, inputs, etc.)
  - `layout/` - Header, Footer, Navigation, and other layout components
  - `features/` - Hero, About, Skills, Projects, Contact, and other feature components
  - `blog/` - PostCard, PostList, PostHeader, TableOfContents, CodeBlock, etc.

- **src/lib/** - Utilities and configuration
  - `blog/` - Blog-specific utilities (MDX processing, post fetching, search, etc.)
  - `validation/` - Zod schemas for validation
  - `email/` - Email utilities

- **src/hooks/** - Custom React hooks (useTheme, useMediaQuery, useScrollPosition, etc.)

- **src/stores/** - Jotai atoms for global state management

- **src/actions/** - Server-side actions (contact forms, newsletter, etc.)

- **src/types/** - Shared TypeScript type definitions (blog, projects, common types)

- **src/config/** - Configuration files (site metadata, navigation config, etc.)

- **src/styles/** - Additional stylesheets (MDX-specific styles, etc.)

- **content/** - Content directory for MDX files
  - `blog/` - Blog posts in MDX format
  - `projects/` - Project descriptions in MDX format

- **app/** - Next.js App Router directory structure
  - `(home)/` - Home route group
  - `(content)/` - Content route group
    - `blog/` - Blog section
      - `[slug]/` - Dynamic blog post routes
      - `tags/[tag]/` - Posts by tag
    - `projects/` - Projects section
      - `[slug]/` - Dynamic project routes
  - `api/` - API routes
    - `contact/` - Contact form endpoint
    - `subscribe/` - Newsletter subscription endpoint
    - `og/` - OpenGraph image generation endpoint

#### Changed

##### Configuration Files

- **tsconfig.json**
  - ✅ TypeScript strict mode already enabled
  - ✅ Added path aliases for new folder structure:
    - `@/components/*` → `./src/components/*`
    - `@/lib/*` → `./src/lib/*`
    - `@/hooks/*` → `./src/hooks/*`
    - `@/stores/*` → `./src/stores/*`
    - `@/actions/*` → `./src/actions/*`
    - `@/types/*` → `./src/types/*`
    - `@/config/*` → `./src/config/*`
    - `@/styles/*` → `./src/styles/*`

- **next.config.js**
  - ✅ App Router support already configured
  - ✅ React Strict Mode already enabled
  - ✅ Added documentation about App Router usage
  - Updated comments to clarify App Router is enabled by default with Next.js 15+

##### Dependencies

- **Next.js**: Already at version 16.0.10 (exceeds requirement of 15.x)
- **React**: Already at version 19.2.3 (exceeds requirement of latest)
- **React DOM**: Already at version 19.0.0 (exceeds requirement of latest)
- **TypeScript**: Already at version 5.9.3 (latest)

Note: No dependency updates were needed as the project already uses versions newer than required.

#### Verified

- ✅ Clean TypeScript compilation with zero errors
- ✅ All path aliases properly configured
- ✅ Folder structure matches documentation requirements
- ✅ TypeScript strict mode enabled and working
- ✅ Next.js App Router configuration verified

#### Success Criteria Met

- ✅ Clean build with zero TypeScript errors
- ✅ All path aliases working correctly
- ✅ Folder structure matches documentation

### Notes

The project was already using:
- Next.js 16 (newer than the required Next.js 15)
- React 19 (latest version)
- TypeScript with strict mode enabled

The main changes were:
1. Creating the complete folder structure as per architecture requirements
2. Adding path aliases to tsconfig.json for the new src/ directory structure
3. Documenting the App Router configuration in next.config.js
4. Creating this CHANGELOG.md to document all changes

### Future Phases

The following phases are planned as per the PROMPT_REFATORACAO_PORTFOLIO.md:
- Phase 1.2: Development Tools
- Phase 1.3: Tailwind & Creative UI Setup
- Phase 1.4: Theme System
- Phase 1.5: Layout Components
- Phase 2: UI Component Library
- Phase 3: State & Forms
- Phase 4: Blog Implementation
- Phase 5: Features & Integration
- Phase 6: Testing & Quality
