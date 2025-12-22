# Portfolio - Paulo H S Oliveira

A modern, full-stack portfolio website built with Next.js 16, React 19, and TypeScript, featuring an integrated professional blog.

## 🚀 Quick Start

**New to this project?** Start here: **[START_HERE.md](./START_HERE.md)**

### Prerequisites

- **Node.js** 20+ (recommended: use the version specified in `.nvmrc` - 20.17.0)
- **pnpm** 10.0.0+ (install with `npm install -g pnpm`)

### Development

```bash
# Install dependencies
pnpm install

# Setup environment variables (optional for basic development)
cp .env.example .env.local
# Edit .env.local with your API keys if needed

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Documentation

### Getting Started
- **[START_HERE.md](./START_HERE.md)** - Complete entry point and navigation guide
- **[HOW_TO_CREATE_ISSUES.md](./HOW_TO_CREATE_ISSUES.md)** - Guide for creating GitHub issues from the roadmap
- **[GITHUB_ISSUES_TO_CREATE.md](./GITHUB_ISSUES_TO_CREATE.md)** - 31 detailed issues for the refactor roadmap

### Planning & Roadmap
- **[RESUMO_EXECUTIVO.md](./RESUMO_EXECUTIVO.md)** - Executive overview (10 min read)
- **[PROMPT_REFATORACAO_PORTFOLIO.md](./PROMPT_REFATORACAO_PORTFOLIO.md)** - Complete technical roadmap (15 min read)
- **[README_REFACTORING.md](./README_REFACTORING.md)** - Implementation guide (12 min read)

### Reference
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Coding cheat sheet (keep open while coding)
- **[LIBRARIES_COMPLETE_LIST_PART1.md](./LIBRARIES_COMPLETE_LIST_PART1.md)** - All libraries and stack decisions
- **[INDEX.md](./INDEX.md)** - Complete navigation index

### AI Configuration
- **[.cursor/rules.md](./.cursor/rules.md)** - Cursor IDE rules
- **[.copilot/instructions.md](./.copilot/instructions.md)** - GitHub Copilot instructions

## 🛠️ Tech Stack

**Current Stack:**
- Next.js 16 with App Router
- React 19
- TypeScript 5.6+
- Tailwind CSS 3.4+
- Biome (linting & formatting)
- pnpm (package manager)

**Planned Additions:** See [PROMPT_REFATORACAO_PORTFOLIO.md](./PROMPT_REFATORACAO_PORTFOLIO.md) for complete stack details.

## 📋 Project Roadmap

This project follows a **6-phase refactoring plan** over 6 weeks:

1. **Phase 1: Foundation** (Week 1-2) - Setup, configuration, and layout
2. **Phase 2: UI Component Library** (Week 2) - Custom components and design system
3. **Phase 3: State & Forms** (Week 3) - State management and form handling
4. **Phase 4: Blog Implementation** ⭐ (Week 4) - MDX blog with full features
5. **Phase 5: Features & Integration** (Week 5) - Email, analytics, monitoring
6. **Phase 6: Testing & Quality** (Week 6) - Tests, performance, accessibility

**To create GitHub issues for this roadmap:** See [HOW_TO_CREATE_ISSUES.md](./HOW_TO_CREATE_ISSUES.md)

## 🎯 Features

### Current
- ✅ Next.js 16 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Biome linting and formatting

### Planned (See Roadmap)
- 🔲 Integrated MDX blog
- 🔲 Contact form with email integration
- 🔲 Analytics (PostHog + Vercel)
- 🔲 Dark/light theme
- 🔲 SEO optimization
- 🔲 Full test coverage

## 🧪 Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run Biome linter
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code with Biome
pnpm type-check   # Run TypeScript type checking
pnpm clean        # Clean build artifacts
```

### Code Quality

This project uses:
- **Biome** for linting and formatting (`biome.json`)
- **TypeScript** in strict mode with comprehensive type checking
- **Turbo** for build optimization (`turbo.json`)

Run quality checks before committing:
```bash
pnpm lint        # Check for linting issues
pnpm type-check  # Verify TypeScript types
pnpm format      # Format code automatically
```

## 📦 Project Structure

```
new-portfolio/
├── app/                    # Next.js App Router
├── src/                    # Source code (future)
│   ├── components/         # React components
│   ├── lib/               # Utilities
│   ├── hooks/             # Custom hooks
│   └── types/             # TypeScript types
├── content/               # MDX content (future)
├── public/                # Static assets
└── docs/                  # Documentation
```

**Note:** See [PROMPT_REFATORACAO_PORTFOLIO.md](./PROMPT_REFATORACAO_PORTFOLIO.md) for complete folder structure.

## 🚀 Deployment

This project is configured for deployment on [Vercel](https://vercel.com):

1. Connect repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

See [PROMPT_REFATORACAO_PORTFOLIO.md](./PROMPT_REFATORACAO_PORTFOLIO.md) - Deployment Checklist for details.

## 📖 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### This Project
- Start with [START_HERE.md](./START_HERE.md)
- Follow the [complete roadmap](./PROMPT_REFATORACAO_PORTFOLIO.md)
- Use [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) while coding

## 🤝 Contributing

This is a personal portfolio project. If you're interested in the structure and documentation approach:

1. Read [START_HERE.md](./START_HERE.md)
2. Review the [roadmap](./PROMPT_REFATORACAO_PORTFOLIO.md)
3. Check the [issues](./GITHUB_ISSUES_TO_CREATE.md) for the refactoring plan

## 📄 License

This is a personal portfolio project.

## 👤 Author

**Paulo H S Oliveira**
- GitHub: [@PauloHSOliveira](https://github.com/PauloHSOliveira)

---

**Ready to start?** Read [START_HERE.md](./START_HERE.md) for a complete guide! 🚀
