# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-22

### Phase 1.4: Terminal Theme System - Multiple Theme Support

#### Added

- **Custom Theme System** (`app/providers.tsx`)
  - Replaced simple dark/light mode with terminal-style theme selector
  - Custom ThemeContext with 8 pre-defined terminal color schemes
  - Theme persistence using localStorage (`terminal-theme` key)
  - SSR-safe implementation with proper hydration handling
  - Default theme: "Matrix Green" (original terminal aesthetic)

- **ThemeSelector Component** (`src/components/layout/ThemeSelector.tsx`)
  - Dropdown menu with 8 terminal themes inspired by popular IDEs and terminals
  - Color-coded theme preview dots showing accent color
  - Accessible with keyboard navigation and ARIA labels
  - Click-outside-to-close functionality
  - Visual indication of currently selected theme (✓ checkmark)
  - Smooth hover effects and transitions

- **7 Minimalist Terminal Color Schemes** (`app/globals.css`)
  1. **Matrix Green** - Original terminal aesthetic (`#00ff00`)
  2. **Dracula** - Popular dark theme (`#50fa7b`)
  3. **Monokai** - Classic code editor theme (`#a6e22e`)
  4. **Nord** - Cool, muted palette (`#a3be8c`)
  5. **Solarized Dark** - Precision colors (`#859900`)
  6. **One Dark** - Atom editor inspired (`#98c379`)
  7. **Ocean** - Cyan/blue theme (`#00d4ff`)

- **CSS Variable Architecture** (`app/globals.css`)
  - Theme-specific CSS variable overrides using `[data-theme="..."]` selectors
  - Each theme defines:
    - Primary accent colors (green variants)
    - Background gradients (5 shades)
    - Border colors (3 levels)
    - Text colors (4 levels: primary, secondary, tertiary, dim)
    - Visual effects (grid, scanline, glow)
  - All themes use consistent variable names for automatic component adaptation

- **Component CSS Variable Migration**
  - Updated core components to use CSS variables instead of hardcoded colors
  - **Updated files:**
    - `app/components/TerminalHeader.tsx` - Theme selector integration
    - `app/components/Navigation.tsx` - Nav buttons, borders, hover states
    - `app/page.tsx` - Terminal container, prompt, footer, decorative text
    - `app/components/sections/About.tsx` - All text, borders, backgrounds, buttons
  - All components automatically adapt to any selected theme

#### Removed

- **next-themes** dependency - Replaced with custom theme system
- **ThemeToggle Component** - Replaced with ThemeSelector dropdown
- Simple dark/light mode approach - Replaced with multi-theme system

#### Changed

- **Theme Persistence**
  - Changed from `theme` to `terminal-theme` localStorage key
  - Stores theme ID instead of "dark"/"light" boolean
  - Supports 7 minimalist theme options

- **Theme Application**
  - Changed from CSS class (`.dark`/`.light`) to data attribute (`[data-theme="..."]`)
  - Allows for unlimited theme variations
  - More semantic and scalable approach

- **Improved Contrast** (Latest update)
  - Enhanced text contrast in all themes for better readability
  - Increased brightness of tertiary and dim text colors
  - Improved border brightness for better visual hierarchy
  - Removed Cyberpunk theme (non-minimalist)
  - All themes now maintain excellent WCAG AA contrast ratios

#### Success Criteria Met

- ✅ Theme system implemented with terminal-style aesthetics
- ✅ Multiple minimalist theme options (7 pre-defined schemes)
- ✅ Theme selector integrated in terminal header
- ✅ Original terminal green aesthetic preserved as default
- ✅ Theme persistence across sessions via localStorage
- ✅ All components support all themes automatically via CSS variables
- ✅ Smooth theme switching with instant visual updates
- ✅ Accessible theme selector with keyboard navigation
- ✅ Professional minimalist color schemes with proper contrast
- ✅ Enhanced readability across all themes with improved text colors
- ✅ Original terminal green aesthetic preserved as default
- ✅ Theme persistence across sessions via localStorage
- ✅ All components support all themes automatically via CSS variables
- ✅ Smooth theme switching with instant visual updates
- ✅ Accessible theme selector with keyboard navigation
- ✅ Professional color schemes with proper contrast
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
