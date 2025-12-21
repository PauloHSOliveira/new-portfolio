# 🔧 README - Portfolio Refactoring Implementation Guide

**Practical Guide for Developers**  
**Version:** 2.0  
**Last Updated:** December 2025

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Setup Instructions](#setup-instructions)
3. [Development Workflow](#development-workflow)
4. [Troubleshooting](#troubleshooting)
5. [FAQ](#faq)
6. [Document Navigation Guide](#document-navigation-guide)
7. [Tips & Tricks](#tips--tricks)

---

## ⚡ Quick Start

### 1. Prerequisites Check
```bash
# Check Node.js version (need 18+)
node --version

# Check pnpm (install if needed)
pnpm --version
# If not installed:
npm install -g pnpm

# Check Git
git --version
```

### 2. Clone & Setup (5 minutes)
```bash
# Clone repository
git clone https://github.com/PauloHSOliveira/new-portfolio.git
cd new-portfolio

# Install dependencies
pnpm install

# Copy environment template
cp .env.example .env.local

# Start development server
pnpm dev
```

### 3. Verify Installation
```bash
# Open browser to http://localhost:3000
# You should see the portfolio homepage

# Run type check
pnpm type-check
# Should complete with no errors

# Run linter
pnpm lint
# Should complete with no errors
```

---

## 🛠️ Setup Instructions

### Step 1: Environment Setup

#### Create `.env.local`
```bash
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Your Portfolio"

# Analytics (Get from PostHog)
NEXT_PUBLIC_POSTHOG_KEY=phc_your_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Email (Get from Resend)
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=portfolio@yourdomain.com

# Error Tracking (Optional - Get from Sentry)
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn
SENTRY_AUTH_TOKEN=your_auth_token
```

#### Get API Keys

**PostHog (Free):**
1. Go to https://posthog.com
2. Sign up for free account
3. Create new project
4. Copy API key from Project Settings

**Resend (Free 100 emails/day):**
1. Go to https://resend.com
2. Sign up for account
3. Verify domain or use resend.dev for testing
4. Create API key from dashboard

**Sentry (Optional, Free 5k events/month):**
1. Go to https://sentry.io
2. Sign up for account
3. Create new project (Next.js)
4. Copy DSN from project settings

### Step 2: Choose Your UI Approach

**Important:** This portfolio needs a UNIQUE, creative design system.

#### Option A: Custom Components (Most Unique) ⭐
```bash
# Just Tailwind + your creativity
# No additional UI library needed
# Build every component with your unique style
```

#### Option B: Radix UI Headless (Creative + Accessible)
```bash
# Install headless components, style completely custom
pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select

# Add animation library
pnpm add framer-motion
```

#### Option C: shadcn/ui Starting Point (Heavy Customization Required)
```bash
# Initialize shadcn/ui (if using as base - NOT recommended for unique design)
pnpx shadcn-ui@latest init

# When prompted:
# ✔ Would you like to use TypeScript? Yes
# ✔ Which style would you like to use? Default (WILL customize heavily)
# ✔ Which color would you like to use as base color? Your brand color
# ✔ Where is your global CSS file? app/globals.css
# ✔ Would you like to use CSS variables for colors? Yes
# ✔ Where is your tailwind.config.js located? tailwind.config.js
# ✔ Configure the import alias for components? @/components
# ✔ Configure the import alias for utils? @/lib/utils

# Install essential components (starting point only)
pnpx shadcn-ui@latest add button card input label textarea

# ⚠️ CRITICAL: You MUST heavily customize these to avoid generic look
```

**Recommendation:** Option A or B for truly unique portfolio.

### Step 3: Install Additional Dependencies

```bash
# Animation (for unique interactions)
pnpm add framer-motion

# State Management
pnpm add jotai

# Forms & Validation
pnpm add react-hook-form zod @hookform/resolvers

# Blog & MDX
pnpm add next-mdx-remote gray-matter remark remark-gfm rehype-pretty-code shiki reading-time

# Email
pnpm add resend react-email @react-email/components

# Theme
pnpm add next-themes

# Analytics
pnpm add posthog-js @vercel/analytics

# Utilities
pnpm add clsx tailwind-merge date-fns

# Development
pnpm add -D @types/node @types/react @types/react-dom
```

### Step 4: Folder Structure Setup

```bash
# Create main directories
mkdir -p src/{components/{ui,layout,features,blog},lib/{blog,validation,email},hooks,stores,actions,types,config,styles}
mkdir -p content/blog
mkdir -p .cursor
mkdir -p .copilot

# Verify structure
tree -L 2 src
```

### Step 5: IDE Configuration

#### For Cursor IDE Users:
```bash
# Copy Cursor rules
cp .cursor/rules.md .cursor/rules.md

# Cursor will automatically detect and apply rules
# Verify by opening Cursor settings
```

#### For GitHub Copilot Users:
```bash
# Copy Copilot instructions
cp .copilot/instructions.md .copilot/instructions.md

# Or add to workspace settings (.vscode/settings.json):
# {
#   "github.copilot.advanced": {
#     "inlineSuggestCount": 3
#   }
# }
```

---

## 🔄 Development Workflow

### Daily Development

#### 1. Start Development Server
```bash
# Start Next.js dev server
pnpm dev

# Server will be available at:
# http://localhost:3000
```

#### 2. Code → Lint → Type Check → Test Loop

```bash
# While coding, run in separate terminal:

# Watch for type errors
pnpm type-check --watch

# Or run manually:
pnpm type-check
pnpm lint
```

#### 3. Before Committing

```bash
# Run full check
pnpm lint && pnpm type-check && pnpm build

# If errors, fix them:
pnpm lint:fix
```

### Adding a New Feature

#### Example: Adding a New Blog Component

```bash
# 1. Create component file
touch src/components/blog/AuthorBio.tsx

# 2. Write component (use patterns from QUICK_REFERENCE.md)

# 3. Type check
pnpm type-check

# 4. Test in browser

# 5. Commit
git add .
git commit -m "feat: add author bio component"
```

### Adding a New Blog Post

```bash
# 1. Create MDX file
touch content/blog/2024-01-15-my-new-post.mdx

# 2. Add frontmatter
# ---
# title: "My New Post"
# date: "2024-01-15"
# author: "Your Name"
# excerpt: "Short description"
# tags: ["nextjs", "typescript"]
# ---

# 3. Write content in MDX

# 4. Verify in browser at /blog/2024-01-15-my-new-post

# 5. Commit
git add content/blog/2024-01-15-my-new-post.mdx
git commit -m "content: add blog post about topic"
```

### Adding a New Library

**Before installing ANY library:**

1. Check `LIBRARIES_COMPLETE_LIST.md`
2. Review alternatives
3. Check bundle size at https://bundlephobia.com
4. Read "Why" and "When to use" sections

```bash
# Example: Adding a date library
# 1. Check LIBRARIES_COMPLETE_LIST.md → Utils section
# 2. Decision: date-fns (lightweight) vs dayjs (smaller) vs moment (deprecated)
# 3. Install chosen library
pnpm add date-fns

# 4. Verify bundle impact
pnpm build
# Check output for bundle sizes
```

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Issue 1: "Module not found" Error

**Problem:** Import paths not resolving
```
Error: Module not found: Can't resolve '@/components/ui/button'
```

**Solution:**
```bash
# Check tsconfig.json has correct paths
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

# Restart dev server
pnpm dev
```

#### Issue 2: TypeScript Errors After Install

**Problem:** New library causing type errors

**Solution:**
```bash
# Install type definitions
pnpm add -D @types/library-name

# Or if types not available, create declaration
# Create: src/types/library-name.d.ts
declare module 'library-name'

# Restart TS server in IDE
```

#### Issue 3: Tailwind Classes Not Working

**Problem:** Classes not applying styles

**Solution:**
```bash
# 1. Check tailwind.config.js content paths
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
}

# 2. Restart dev server
pnpm dev
```

#### Issue 4: MDX Not Rendering

**Problem:** Blog posts showing raw markdown

**Solution:**
```bash
# 1. Verify MDX packages installed
pnpm list next-mdx-remote gray-matter

# 2. Check next.config.js
module.exports = {
  experimental: {
    mdxRs: true,
  },
}

# 3. Verify file extension is .mdx not .md
```

#### Issue 5: Build Fails But Dev Works

**Problem:** `pnpm build` fails but `pnpm dev` works fine

**Solution:**
```bash
# Common causes:

# 1. Environment variables missing
# Check .env.local vs .env.production

# 2. Type errors in production code
pnpm type-check

# 3. Unused imports/variables
pnpm lint

# 4. Clear cache and rebuild
rm -rf .next
pnpm build
```

#### Issue 6: Images Not Loading

**Problem:** Images return 404 or optimization fails

**Solution:**
```bash
# 1. Verify images are in public/ directory
ls public/images

# 2. Check next.config.js image configuration
module.exports = {
  images: {
    domains: ['your-domain.com'],
  },
}

# 3. Use correct path (no /public prefix)
<Image src="/images/photo.jpg" />
# NOT: <Image src="/public/images/photo.jpg" />
```

#### Issue 7: Analytics Not Tracking

**Problem:** PostHog not recording events

**Solution:**
```bash
# 1. Verify API key in .env.local
echo $NEXT_PUBLIC_POSTHOG_KEY

# 2. Check browser console for errors
# Open DevTools → Console

# 3. Verify initialization in app/layout.tsx

# 4. Test with manual event
// In browser console:
posthog.capture('test_event')

# 5. Check PostHog dashboard after 5 minutes
```

#### Issue 8: Email Not Sending

**Problem:** Contact form submits but no email received

**Solution:**
```bash
# 1. Verify Resend API key
echo $RESEND_API_KEY

# 2. Check "from" email is verified in Resend
# Must match domain or use onboarding@resend.dev

# 3. Check server logs
# Look for error messages in terminal

# 4. Test with Resend dashboard
# Use "Test" feature to send test email

# 5. Check spam folder
```

### Performance Issues

#### Issue: Slow Build Time

**Solution:**
```bash
# 1. Analyze bundle
pnpm build
# Check output for large modules

# 2. Use bundle analyzer
pnpm add -D @next/bundle-analyzer
# Add to next.config.js

# 3. Implement code splitting
# Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'))

# 4. Check for duplicate dependencies
pnpm dedupe
```

#### Issue: Large Bundle Size

**Solution:**
```bash
# 1. Check bundle composition
ANALYZE=true pnpm build

# 2. Remove unused dependencies
pnpm prune

# 3. Use lighter alternatives
# Check LIBRARIES_COMPLETE_LIST.md for alternatives

# 4. Implement tree-shaking
# Ensure imports are specific:
import { Button } from '@/components/ui/button'
# NOT: import * as UI from '@/components/ui'
```

---

## ❓ FAQ

### General Questions

**Q: Do I need to follow all 6 phases?**
A: No. For MVP, do Phase 1 (Foundation) + Phase 4 (Blog). Add others as needed.

**Q: Can I use npm or yarn instead of pnpm?**
A: Yes, but pnpm is recommended for better disk usage and faster installs.

**Q: Is TypeScript strict mode required?**
A: Highly recommended for production. You can start relaxed and enable gradually.

**Q: Can I skip the blog feature?**
A: Yes, but it's a key differentiator. Consider implementing later if not now.

### Technology Choices

**Q: Should I use shadcn/ui, custom components, or Radix UI?**
A: For a UNIQUE, creative portfolio:
- **Best:** Custom components from scratch (most unique)
- **Good:** Radix UI headless + your styling (unique + accessible)
- **Acceptable:** shadcn/ui heavily customized (requires lots of work to avoid generic look)

Choose based on: time available, design skills, and how unique you want the portfolio.

**Q: What about icons - Lucide, Phosphor, or custom?**
A: For creative/unique portfolio:
- **Best:** Custom SVG icons designed specifically for your brand
- **Good:** Phosphor Icons (already installed!) with heavy styling/animations
- **Acceptable:** Lucide + extensive customization

Avoid using default icon styles - always add unique treatments (gradients, glows, animations).

**Q: Can I use Prisma instead of Drizzle?**
A: Yes. See `LIBRARIES_COMPLETE_LIST.md` → Database section for comparison.

**Q: Do I need PostHog? Can I use Google Analytics?**
A: PostHog is recommended for privacy and features, but you can use GA4 or Plausible.

**Q: Why Jotai over Redux or Zustand?**
A: Simpler API, better TypeScript support, atomic updates. See comparison in docs.

### Implementation Questions

**Q: How do I handle authentication?**
A: This portfolio is static (no auth). If needed, add Auth.js v5 (see LIBRARIES_COMPLETE_LIST.md).

**Q: Where do I put API keys?**
A: `.env.local` for development, Vercel dashboard for production. NEVER commit to Git.

**Q: How do I add more pages?**
A: Create file in `app/` directory. Next.js uses file-system routing.

**Q: Can I use JavaScript instead of TypeScript?**
A: Not recommended. TypeScript prevents bugs and improves DX significantly.

### Deployment Questions

**Q: Do I have to use Vercel?**
A: No, but highly recommended. You can deploy to Netlify, Cloudflare Pages, or any Node.js host.

**Q: How much does hosting cost?**
A: Vercel free tier is generous. Only pay if you need more (custom domains are $20/month for Pro).

**Q: How do I setup a custom domain?**
A: In Vercel dashboard: Settings → Domains → Add domain. Follow DNS instructions.

**Q: What about SSL certificates?**
A: Automatic with Vercel. No configuration needed.

---

## 🗺️ Document Navigation Guide

### When to Use Each Document

#### "I'm just starting"
→ Read `START_HERE.md` (5 min)
→ Read `RESUMO_EXECUTIVO.md` (10 min)
→ Follow this guide (README_REFACTORING.md) for setup

#### "I want to understand the architecture"
→ Read `PROMPT_REFATORACAO_PORTFOLIO.md` (15 min)
→ Review folder structure section
→ Check Phase 1 checklist

#### "I'm coding right now"
→ Keep `QUICK_REFERENCE.md` open in split pane
→ Reference component patterns as needed
→ Use code snippets directly

#### "I need to choose a library"
→ Open `LIBRARIES_COMPLETE_LIST.md`
→ Find category (e.g., State Management)
→ Read comparisons and recommendations

#### "I'm using Cursor IDE"
→ Setup `.cursor/rules.md`
→ Let Cursor reference rules automatically
→ Use Cmd+K for AI assistance with context

#### "I'm using GitHub Copilot"
→ Setup `.copilot/instructions.md`
→ Reference in code comments: `// See .copilot/instructions.md`
→ Get context-aware suggestions

#### "I need to find something specific"
→ Open `INDEX.md`
→ Search by topic or task
→ Navigate to relevant section

#### "Something is broken"
→ Check Troubleshooting section in this document
→ Search error in `INDEX.md`
→ Ask in GitHub Issues

### Reading Order Recommendations

**Minimum (30 minutes):**
1. START_HERE.md
2. This document (README_REFACTORING.md)
3. QUICK_REFERENCE.md (skim)

**Recommended (1 hour):**
1. START_HERE.md
2. RESUMO_EXECUTIVO.md
3. PROMPT_REFATORACAO_PORTFOLIO.md
4. This document (README_REFACTORING.md)
5. Bookmark QUICK_REFERENCE.md

**Complete (2 hours):**
1. All above
2. LIBRARIES_COMPLETE_LIST.md (skim for understanding)
3. INDEX.md (understand navigation)
4. Setup IDE-specific file (.cursor or .copilot)

---

## 💡 Tips & Tricks

### Development Tips

#### Tip 1: Use Keyboard Shortcuts
```bash
# Cursor/VS Code shortcuts
Cmd/Ctrl + P         # Quick file open
Cmd/Ctrl + Shift + P # Command palette
Cmd/Ctrl + B         # Toggle sidebar
Cmd/Ctrl + `         # Toggle terminal
```

#### Tip 2: Split Panes for Efficiency
- Left: Code editor
- Right: `QUICK_REFERENCE.md`
- Bottom: Terminal running `pnpm dev`

#### Tip 3: Use Git Effectively
```bash
# Make small, frequent commits
git add -p  # Stage interactively
git commit -m "feat: add component"

# Create feature branches
git checkout -b feature/blog-search

# Keep main branch clean
git pull origin main
git merge main
```

#### Tip 4: Hot Reload Issues
```bash
# If changes not reflecting:

# 1. Check file is saved
# 2. Hard refresh browser (Cmd/Ctrl + Shift + R)
# 3. Restart dev server
# 4. Clear .next cache
rm -rf .next
pnpm dev
```

#### Tip 5: Debugging Next.js
```typescript
// Add debugging in server components
console.log('Server:', data)

// Add debugging in client components
'use client'
console.log('Client:', data)

// Use Next.js built-in debugging
DEBUG=* pnpm dev
```

### Productivity Tips

#### Use AI Tools Effectively

**With Cursor:**
```typescript
// 1. Select code
// 2. Cmd+K
// 3. Prompt: "Add error handling to this function"

// For new components:
// 1. Cmd+K in empty file
// 2. "Create a blog post card component following .cursor/rules.md"
```

**With Copilot:**
```typescript
// Write detailed comments, get suggestions
// Example:
// Create a function that fetches all blog posts,
// filters by tag, and sorts by date descending
export function getPostsByTag(tag: string) {
  // Copilot will suggest implementation
}
```

#### Create Snippets for Repeated Code

In VS Code/Cursor, create snippets:
```json
// .vscode/snippets.json
{
  "Server Action": {
    "prefix": "sa",
    "body": [
      "'use server'",
      "",
      "export async function ${1:actionName}(data: ${2:DataType}) {",
      "  try {",
      "    $0",
      "    return { success: true }",
      "  } catch (error) {",
      "    return { success: false, error: error.message }",
      "  }",
      "}"
    ]
  }
}
```

#### Use AI for Documentation
```bash
# Generate JSDoc comments
# Select function → Cmd+K → "Add JSDoc"

/**
 * Fetches a blog post by slug
 * @param slug - The post slug
 * @returns Post object or null
 */
```

### Performance Tips

1. **Monitor Build Times**
   ```bash
   time pnpm build
   # Track over time, investigate spikes
   ```

2. **Use Lighthouse Early**
   - Test performance from Phase 1
   - Don't wait until the end
   - Fix issues incrementally

3. **Optimize Images Immediately**
   - Always use `next/image`
   - Generate WebP versions
   - Use appropriate sizes

4. **Code Split from Start**
   ```typescript
   // Heavy components
   const Chart = dynamic(() => import('./Chart'), {
     ssr: false,
     loading: () => <ChartSkeleton />
   })
   ```

---

## ✅ Final Checklist

### Before Starting Development
- [ ] Read START_HERE.md
- [ ] Read RESUMO_EXECUTIVO.md
- [ ] Complete all setup steps in this document
- [ ] Verify dev server runs
- [ ] IDE configured with rules
- [ ] Environment variables set

### Before Each Coding Session
- [ ] Pull latest changes: `git pull`
- [ ] Install any new dependencies: `pnpm install`
- [ ] Start dev server: `pnpm dev`
- [ ] Open QUICK_REFERENCE.md

### Before Committing
- [ ] Code linted: `pnpm lint`
- [ ] Types checked: `pnpm type-check`
- [ ] Manual test of changes
- [ ] Write clear commit message
- [ ] No console.logs in production code

### Before Deploying
- [ ] All tests pass
- [ ] Build succeeds: `pnpm build`
- [ ] Lighthouse score > 90
- [ ] Environment variables configured
- [ ] Analytics verified
- [ ] No TypeScript errors

---

## 🚀 Next Steps

1. **Complete Setup** (if not done)
   - Follow all steps in Setup Instructions section
   - Verify everything works

2. **Start Phase 1** (from PROMPT_REFATORACAO_PORTFOLIO.md)
   - Begin with Foundation checklist
   - Work through items one by one

3. **Use Resources**
   - Keep QUICK_REFERENCE.md handy
   - Reference LIBRARIES_COMPLETE_LIST.md when needed
   - Use IDE rules for consistency

4. **Track Progress**
   - Mark checklist items in PROMPT_REFATORACAO_PORTFOLIO.md
   - Commit frequently
   - Celebrate small wins!

---

## 📞 Getting Help

**Documentation:**
- Search in `INDEX.md` first
- Check `QUICK_REFERENCE.md` for patterns
- Review relevant phase in `PROMPT_REFATORACAO_PORTFOLIO.md`

**Technical Issues:**
- Check Troubleshooting section above
- Search GitHub Issues
- Ask in community forums

**AI Assistance:**
- Use Cursor with `.cursor/rules.md`
- Use Copilot with `.copilot/instructions.md`
- Provide context from documentation

---

**Happy coding! 🎉**

*For detailed technical roadmap, see `PROMPT_REFATORACAO_PORTFOLIO.md`*  
*For quick code patterns, see `QUICK_REFERENCE.md`*  
*For library choices, see `LIBRARIES_COMPLETE_LIST.md`*
