# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-22

### Phase 1.4: Theme System - Dark/Light Mode Support

#### Added

- **next-themes** (`next-themes@0.4.6`)
  - Installed for complete theme management with persistence
  - Provides seamless dark/light mode switching
  - Automatic theme persistence across sessions using localStorage
  - SSR-safe with proper hydration handling

- **ThemeProvider** (`app/providers.tsx`)
  - Integrated `next-themes` ThemeProvider with QueryClientProvider
  - Configured with `attribute="class"` for Tailwind dark mode support
  - Default theme set to "dark" to match existing aesthetic
  - System theme detection disabled (`enableSystem={false}`)
  - Smooth transitions enabled for theme switching

- **ThemeToggle Component** (`src/components/layout/ThemeToggle.tsx`)
  - Fully accessible theme toggle button with ARIA labels
  - Sun icon for dark mode (clicking switches to light)
  - Moon icon for light mode (clicking switches to dark)
  - SSR-safe implementation with proper mounting detection
  - Smooth animations with hover effects (scale-110)
  - Terminal green color (#00ff00) for consistency
  - Zero layout shift during hydration with placeholder

- **Tailwind Dark Mode Configuration** (`tailwind.config.js`)
  - Added `darkMode: ['class']` for class-based theme switching
  - Enables conditional styling with `dark:` prefix
  - Works seamlessly with next-themes

- **CSS Variables for Theming** (`app/globals.css`)
  - Comprehensive CSS variable system for both themes
  - Added primitive color tokens for light mode design system
  - **Dark Mode (Default):**
    - Terminal green: `#00ff00` (bright CRT green)
    - Backgrounds: `#050505`, `#0a0a0a`, `#0f0f0f`, `#1a1a1a`
    - Text: `#ffffff`, `#cccccc`, `#888888`, `#444444`
    - Subtle grid and scanline effects
  - **Light Mode (.light) - Updated Color Palette:**
    - Primary accent: Teal color palette (`#21808d` teal-500, `#2da6b2` teal-400, `#1d7480` teal-600)
    - Backgrounds: Cream and gray (`#fcfcf9` cream-50, `#fffffe` cream-100, `#f5f5f5` gray-200)
    - Text: Charcoal and slate (`#1f2121` charcoal-700, `#626c71` slate-500, `#777c7c` gray-400)
    - Borders: Gray shades (`#a7a9a9` gray-300, `#777c7c` gray-400, `#626c71` slate-500)
    - Includes RGB versions for opacity control
    - Professional color system with excellent contrast ratios
  - All colors maintain excellent contrast ratios for accessibility
  - Body background and text colors use CSS variables for automatic theme switching

- **Theme Toggle in Header** (`app/components/TerminalHeader.tsx`)
  - Integrated ThemeToggle component in terminal header
  - Positioned on the right side of the header
  - Replaced empty `div` with theme toggle component
  - Maintains consistent spacing and alignment

#### Changed

- **biome.json**
  - Fixed schema version from 2.3.10 to 2.3.8 to match CLI version
  - Resolves configuration schema warning

- **Light Mode Color Palette** (`app/globals.css`)
  - Updated from simple gray/green palette to professional teal-based design system
  - Replaced basic hex colors with semantic color tokens
  - New palette includes:
    - Primitive color tokens (cream, gray, teal, charcoal, slate, red, orange)
    - RGB versions for opacity control
    - Semantic mappings to terminal variables
  - Maintains excellent contrast ratios for accessibility (WCAG AA compliant)
  - Professional appearance suitable for portfolio presentation

#### Success Criteria Met

- ✅ `next-themes` installed and configured
- ✅ ThemeProvider integrated in providers.tsx
- ✅ ThemeToggle component implemented with accessibility
- ✅ Dark mode support added to Tailwind config
- ✅ Theme colors configured with CSS variables
- ✅ Theme toggle added to navigation (terminal header)
- ✅ Theme switching works smoothly with transitions
- ✅ Dark/light mode applied correctly across all components
- ✅ Theme persists across page reloads via localStorage
- ✅ All components support both themes automatically
- ✅ Existing terminal green aesthetic preserved in dark mode
- ✅ Light mode provides excellent contrast and readability
- ✅ Zero TypeScript errors
- ✅ All linting checks pass

#### Technical Details

**Theme Persistence:**
- `next-themes` automatically persists theme preference to localStorage
- Key: `theme` 
- Value: `"dark"` or `"light"`
- Persists across browser sessions and page reloads

**Color Contrast:**
- Dark mode maintains original terminal aesthetic
- Light mode ensures WCAG AA compliance for contrast
- Green adjusted from `#00ff00` to `#00cc00` in light mode for readability
- Text colors carefully chosen for optimal legibility

**SSR Considerations:**
- ThemeToggle uses `mounted` state to prevent hydration mismatches
- Returns invisible placeholder during SSR with same dimensions
- Proper use of `useEffect` for client-side only operations

### Phase 1.3: Tailwind & Creative UI Setup - Enhanced Design System

#### Added

- **Framer Motion** (`framer-motion`)
  - Installed for advanced animations and transitions
  - Enables smooth, performant animations for interactive elements
  - Supports gesture-based interactions

- **Enhanced Tailwind Configuration** (`tailwind.config.js`)
  - Expanded color palette with semantic naming while preserving terminal aesthetic
    - Terminal green variants: `terminal-green`, `terminal-green-bright`, `terminal-green-dim`, `terminal-green-glow`
    - Background shades: `terminal-bg`, `terminal-bg-dark`, `terminal-bg-darker`, `terminal-bg-light`, `terminal-bg-lighter`
    - Border colors: `terminal-border`, `terminal-border-light`, `terminal-border-bright`
    - Text colors: `terminal-text-primary`, `terminal-text-secondary`, `terminal-text-tertiary`, `terminal-text-dim`
    - Semantic mappings: `primary`, `background`, `foreground`, `accent`, `muted`
  
  - Typography system
    - Extended font family definitions: `font-mono`, `font-display`, `font-body`
    - Terminal-optimized font sizes: `terminal-xs`, `terminal-sm`, `terminal-base`, `terminal-lg`, `terminal-xl`, `terminal-2xl`
    - Proper line height and letter spacing for terminal display
  
  - Rich animation library (12 new animations)
    - `animate-pulse-glow` - Pulsing glow effect for interactive elements
    - `animate-scan-line` - CRT scan line effect
    - `animate-flicker` - Subtle CRT flicker
    - `animate-terminal-blink` - Cursor blinking
    - `animate-float` - Floating motion
    - `animate-glow` - Text glow effect
    - `animate-slide-in` - Slide in from left
    - `animate-slide-up` - Slide up from bottom
    - `animate-fade-in-up` - Fade and slide up
    - `animate-scale-in` - Scale in effect
    - `animate-terminal-glitch` - Glitch effect
  
  - Spacing scale for consistent layouts
    - `terminal`, `terminal-sm`, `terminal-md`, `terminal-lg`, `terminal-xl`
  
  - Border radius tokens
    - `terminal`, `terminal-sm`, `terminal-md`, `terminal-lg`
  
  - Box shadows with terminal glow effects
    - `shadow-terminal`, `shadow-terminal-md`, `shadow-terminal-lg`
    - `shadow-terminal-glow`, `shadow-terminal-glow-strong`
  
  - Custom backdrop blur for glass effects
    - `backdrop-blur-terminal`, `backdrop-blur-terminal-md`, `backdrop-blur-terminal-lg`
  
  - Z-index scale for layering
    - `z-terminal-base`, `z-terminal-overlay`, `z-terminal-header`, `z-terminal-modal`, `z-terminal-tooltip`
  
  - Transition timings
    - `duration-terminal` (150ms), `duration-terminal-slow` (300ms)
    - `ease-terminal` - Custom cubic-bezier timing function

- **Enhanced CSS Variables** (`app/globals.css`)
  - Comprehensive CSS variable system for theming
  - Terminal color variables with multiple shades
  - Background, border, and text color tokens
  - Effect variables (grid, scanline, glow shadows)
  - Spacing tokens
  - Transition timing tokens
  - All variables follow `--terminal-*` naming convention

- **Design System Documentation** (`DESIGN_SYSTEM.md`)
  - Comprehensive 400+ line design system guide
  - Documents UI approach decision (Custom components from scratch)
  - Complete color palette documentation with usage guidelines
  - Typography system with font sizes and hierarchy
  - Animation library with 12+ animations and usage examples
  - Spacing, borders, and shadow tokens
  - Component patterns (buttons, cards, inputs, links)
  - Special effects (CRT overlay, selection styles, scrollbar)
  - Framer Motion integration examples
  - Responsive design patterns
  - Accessibility guidelines
  - Best practices for component structure

#### Changed

- **biome.json**
  - Updated schema version from 2.3.8 to 2.3.10

#### Decision: UI Approach

**Selected: Option A - Custom Components from Scratch (Most Unique)**

**Rationale:**
- Portfolio already has a highly distinctive terminal/CRT aesthetic
- Terminal green (#00ff00) with dark backgrounds creates unique identity
- Custom terminal interface requires bespoke components
- No generic UI libraries needed (would dilute unique design)
- Full creative control over every visual detail
- Components specifically designed for terminal theme

**Components Strategy:**
- Build custom terminal-themed components
- Leverage enhanced Tailwind utilities for consistency
- Use Framer Motion for advanced animations
- Maintain terminal aesthetic across all UI elements

#### Success Criteria Met

- ✅ UI approach chosen and documented (Custom components from scratch)
- ✅ Tailwind configuration has unique brand colors (terminal green palette extended)
- ✅ Custom animations defined (12 new terminal-specific animations)
- ✅ Custom CSS variables for theming (comprehensive token system)
- ✅ Framer Motion installed for animations
- ✅ Design system is documented (DESIGN_SYSTEM.md)
- ✅ Base components ready for customization (patterns documented)
- ✅ All existing colors and styles preserved
- ✅ Linting passes successfully

#### Notes

The enhanced design system maintains 100% backward compatibility with existing styles while providing:
1. Better semantic naming for colors and utilities
2. More animation options for interactive elements
3. Comprehensive documentation for consistency
4. Token system for easier theming and maintenance
5. Framer Motion for advanced animations

All existing terminal aesthetic is preserved:
- Terminal green (#00ff00) remains the primary color
- Dark backgrounds (#050505, #0a0a0a, #0f0f0f) unchanged
- Grid pattern background maintained
- CRT flicker effects preserved
- JetBrains Mono font continues throughout

### Phase 1.2: Development Tools Configuration - Verification and Documentation

#### Verified

All development tools are properly configured and working:

- ✅ **Biome Configuration** (`biome.json`)
  - Linter and formatter configuration verified
  - Successfully checked 29 files with no issues
  - Command `pnpm lint` working correctly
  - Rules configured: recommended rules, a11y warnings, security warnings

- ✅ **Turbo Configuration** (`turbo.json`)
  - Build optimization tasks configured
  - All required tasks present: build, dev, lint, lint:fix, format, type-check, start
  - Proper dependency management and caching configured

- ✅ **Environment Variables Template** (`.env.example`)
  - Comprehensive template with all required variables
  - Includes: GitHub API token, Resend email, PostHog, Sentry, site URL
  - Well-documented with comments and setup instructions

- ✅ **Git Ignore Configuration** (`.gitignore`)
  - Environment files properly excluded (`.env*.local`, `.env`)
  - Next.js, TypeScript, and build artifacts ignored
  - Turbo cache directory excluded

- ✅ **Type Checking** (`pnpm type-check`)
  - TypeScript compilation successful with zero errors
  - Strict mode enabled and functioning correctly

#### Changed

- **README.md**
  - Added Prerequisites section with Node.js and pnpm requirements
  - Enhanced Quick Start with environment setup instructions
  - Expanded Code Quality section with quality check commands
  - Added references to configuration files (biome.json, turbo.json)

#### Decision: Pre-commit Hooks (Husky)

**Not Added** - Pre-commit hooks with Husky were evaluated and deemed unnecessary for this project because:
- All linting and type-checking commands are already available and documented
- Developers can run `pnpm lint` and `pnpm type-check` before commits
- CI/CD pipeline can enforce quality checks
- Keeps the setup simpler for a personal portfolio project
- Marked as "optional" in the requirements

#### Success Criteria Met

- ✅ Linting commands work (`pnpm lint`)
- ✅ Type checking works (`pnpm type-check`)
- ✅ Environment template is comprehensive
- ✅ Setup process documented in README.md
- ✅ All development tools verified and functional

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

- **.env.example** - Environment variables template file with configuration for:
  - GitHub API token
  - Email service (Resend)
  - Analytics (PostHog, Sentry)
  - Site URL and other settings

- **src/__path-alias-test.tsx** - Path alias verification test file (can be removed in future phases)

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
5. Creating .env.example template for environment variables
6. Creating path alias test file to verify configuration

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
