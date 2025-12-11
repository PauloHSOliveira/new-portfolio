# Next.js App Router Migration

This document describes the migration from Next.js 13 Pages Router to Next.js 14 App Router.

## Changes Made

### 1. Dependencies Updated
- Next.js: 13.3.4 → 14.2.18
- React: 18.2.0 (kept stable)
- TypeScript: 5.0.4 → 5.3.3
- Removed: million.js (not compatible with App Router)
- Updated all related dependencies to latest compatible versions

### 2. Configuration Changes

#### next.config.js
- Removed million.js compiler integration
- Kept Next.js core configuration (reactStrictMode, swcMinify)

#### tsconfig.json
- Changed `moduleResolution` from "node" to "bundler"
- Added Next.js plugin configuration
- Added `.next/types/**/*.ts` to include array

### 3. Directory Structure

#### Old Structure (Pages Router)
```
src/
  pages/
    _app.tsx
    _document.tsx
    index.tsx
    about/index.tsx
    works/index.tsx
    contact/index.tsx
    404.tsx
```

#### New Structure (App Router)
```
src/
  app/
    layout.tsx          # Root layout
    page.tsx            # Home page
    about/page.tsx      # About page
    works/page.tsx      # Works page
    contact/page.tsx    # Contact page
    not-found.tsx       # 404 page
    sitemap.ts          # Dynamic sitemap
    robots.ts           # Robots.txt
```

### 4. Component Changes

#### Client Components
Added `'use client'` directive to components that use:
- React hooks (useState, useEffect, useCallback, etc.)
- Browser APIs
- Event handlers
- Third-party libraries with client-side features

**Updated components:**
- `HomePage`
- `AboutPage`
- `ContactPage`
- `ContactForm`
- `ProjectCarousel`
- `ProjectsList`
- `TopHomePage`
- `ClientHeader` (wrapper)
- `ClientFooter` (wrapper)
- `ClientToastContainer` (wrapper)

#### Router Migration
- Updated all imports from `next/router` to `next/navigation`
- Changed `useRouter` usage to match App Router API
- Files updated:
  - `src/hooks/useRedirect.ts`
  - `src/components/Footer/hooks.ts`
  - `src/components/ProjectCarousel/hooks.tsx`
  - `src/components/TopHomePage/TopHomePage.tsx`

### 5. SEO Implementation

#### Metadata API
Replaced `next-seo` with Next.js 14 native Metadata API:
- Root layout metadata in `app/layout.tsx`
- Page-specific metadata in each `page.tsx`
- Dynamic sitemap generation in `app/sitemap.ts`
- Robots.txt configuration in `app/robots.ts`

#### SEO Features
- Title templates
- Open Graph metadata
- Robots directives
- Sitemap XML
- Canonical URLs (via metadata)

### 6. Layout System

#### Root Layout (`app/layout.tsx`)
- Handles global HTML structure
- Includes global styles and fonts
- Wraps all pages with Header and Footer
- Manages ToastContainer for notifications
- Defines default metadata

#### Page Layouts
- Each page can define its own metadata
- Simplified page components (no getLayout pattern needed)
- Server Components by default

### 7. Benefits Achieved

1. **Performance**
   - Server Components reduce JavaScript bundle size
   - Improved initial page load
   - Better streaming and suspense support

2. **SEO**
   - Native metadata API (no external library needed)
   - Better crawlability with Server Components
   - Automatic sitemap and robots.txt

3. **Developer Experience**
   - Simpler routing with file-system
   - Better TypeScript support
   - Clearer separation of client/server code

4. **Modern Features**
   - React Server Components
   - Streaming SSR
   - Improved caching strategies
   - Better error handling

### 8. Compatibility Notes

#### Font Loading
The project uses Google Fonts (IBM Plex Mono) via `next/font/google`. In restricted network environments where Google Fonts cannot be accessed, the build may fail. In production deployments with internet access, fonts will be automatically optimized and self-hosted.

#### Firebase Analytics
Firebase analytics initialization already handles SSR correctly with window checks, so no changes were needed.

### 9. Migration Verification

To verify the migration:

1. **Development**: `npm run dev`
   - Test all routes: `/`, `/about`, `/works`, `/contact`
   - Verify navigation works
   - Check that client interactions work (forms, menus, etc.)

2. **Build**: `npm run build`
   - Ensure build completes without errors
   - Check generated routes in `.next` directory

3. **Production**: `npm start`
   - Test production build locally
   - Verify SSR and client hydration

### 10. Remaining Original Pages

The old pages have been removed from the repository. A backup was temporarily created in `src/pages.old` but has been removed from git tracking.

## Next Steps

1. Test the application thoroughly in development mode
2. Run security scans (CodeQL)
3. Conduct accessibility audit
4. Deploy to staging environment
5. Monitor performance metrics
6. Deploy to production

## Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
