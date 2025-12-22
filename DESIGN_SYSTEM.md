# Terminal Portfolio Design System

**Version:** 1.0  
**Last Updated:** December 2025  
**Aesthetic:** Terminal/CRT Retro Computing

---

## 🎨 Overview

This design system maintains the unique terminal/CRT aesthetic of the portfolio while providing a comprehensive set of utilities for consistent UI development.

### Core Principles

1. **Terminal Authenticity** - Maintain the retro computing terminal aesthetic
2. **Monospace Typography** - JetBrains Mono throughout for terminal feel
3. **Green Phosphor Glow** - Signature #00ff00 terminal green with glow effects
4. **Dark Background** - Deep blacks (#050505) with subtle grid patterns
5. **Minimalist UI** - Clean, focused interface elements
6. **Subtle Animations** - Terminal-appropriate motion (scan lines, flicker, glow)

---

## 🎯 UI Approach Decision

**Chosen Approach:** Custom Components from Scratch (Option A)

**Rationale:**
- Site already has a highly distinctive terminal aesthetic
- Custom terminal interface requires unique components
- No need for generic UI libraries that would dilute the unique identity
- Full control over every visual detail
- Components designed specifically for terminal/CRT theme

**Components Built:**
- Custom terminal window container
- Custom navigation with terminal prompt
- Custom sections with CRT effects
- Custom form elements with terminal styling
- Custom boot sequence animation

---

## 🎨 Color Palette

### Terminal Green (Primary)

The signature phosphor green that defines the terminal aesthetic.

```css
/* Default terminal green */
--terminal-green: #00ff00
Class: terminal-green, text-terminal-green, bg-terminal-green

/* Bright variant (hover states, highlights) */
--terminal-green-bright: #33ff33
Class: terminal-green-bright, text-terminal-green-bright

/* Dim variant (secondary elements) */
--terminal-green-dim: #00cc00
Class: terminal-green-dim, text-terminal-green-dim

/* Glow effect (shadows, overlays) */
--terminal-green-glow: rgba(0, 255, 0, 0.5)
Class: terminal-green-glow
```

**Usage:**
- Primary text and highlights
- Links and interactive elements
- Navigation indicators
- Selection backgrounds
- Glow effects and shadows
- Terminal prompts and cursors

### Background Colors

Deep blacks creating the CRT screen effect.

```css
/* Primary background */
--terminal-bg: #0a0a0a
Class: bg-terminal-bg

/* Darkest (body background) */
--terminal-bg-dark: #050505
Class: bg-terminal-bg-dark

/* Pure black (overlays) */
--terminal-bg-darker: #000000
Class: bg-terminal-bg-darker

/* Light variant (cards, panels) */
--terminal-bg-light: #0f0f0f
Class: bg-terminal-bg-light

/* Lighter variant (hover states) */
--terminal-bg-lighter: #1a1a1a
Class: bg-terminal-bg-lighter
```

**Usage:**
- Body background: `terminal-bg-dark`
- Terminal window: `terminal-bg`
- Code blocks: `terminal-bg-light`
- Hover states: `terminal-bg-lighter`

### Border Colors

Subtle borders for structure without disrupting the terminal aesthetic.

```css
/* Default border */
--terminal-border: #1a1a1a
Class: border-terminal-border

/* Light variant */
--terminal-border-light: #2a2a2a
Class: border-terminal-border-light

/* Bright variant */
--terminal-border-bright: #333333
Class: border-terminal-border-bright
```

### Text Colors

Hierarchy through grayscale with green accents.

```css
/* Primary text (white) */
--terminal-text-primary: #ffffff
Class: text-terminal-text-primary

/* Secondary text */
--terminal-text-secondary: #cccccc
Class: text-terminal-text-secondary

/* Tertiary text */
--terminal-text-tertiary: #888888
Class: text-terminal-text-tertiary

/* Dim text (meta info) */
--terminal-text-dim: #444444
Class: text-terminal-text-dim
```

**Text Hierarchy:**
1. Primary: Main content, headings
2. Secondary: Body text, descriptions
3. Tertiary: Labels, captions
4. Dim: Metadata, timestamps

---

## 📝 Typography

### Font Family

```css
font-family: 'JetBrains Mono', Consolas, Monaco, 'Courier New', monospace;
```

**Classes:**
- `font-mono` - Monospace font
- `font-display` - Display text (same as mono)
- `font-body` - Body text (same as mono)

### Font Sizes

Terminal-optimized sizes with proper line height and letter spacing.

```css
/* Extra Small */
terminal-xs: 0.65rem / 1rem / 0.05em
Class: text-terminal-xs

/* Small */
terminal-sm: 0.75rem / 1.25rem / 0.05em
Class: text-terminal-sm

/* Base */
terminal-base: 0.875rem / 1.5rem / 0.025em
Class: text-terminal-base

/* Large */
terminal-lg: 1rem / 1.75rem / 0.025em
Class: text-terminal-lg

/* Extra Large */
terminal-xl: 1.25rem / 2rem / 0.025em
Class: text-terminal-xl

/* 2X Large */
terminal-2xl: 1.5rem / 2.25rem / 0.025em
Class: text-terminal-2xl
```

**Usage Guidelines:**
- Headings: `terminal-2xl`, `terminal-xl`
- Body: `terminal-base`, `terminal-lg`
- UI elements: `terminal-sm`
- Meta info: `terminal-xs`

---

## 🎬 Animations

### Core Animations

```css
/* Fade In */
animate-fadeIn
Duration: 0.6s
Easing: cubic-bezier(0.16, 1, 0.3, 1)
Use: Page transitions, content reveal

/* Pulse Glow */
animate-pulse-glow
Duration: 2s infinite
Use: Interactive elements, highlights

/* Scan Line */
animate-scan-line
Duration: 8s linear infinite
Use: CRT screen effect overlay

/* Flicker */
animate-flicker
Duration: 0.15s infinite
Use: Subtle CRT flicker effect

/* Terminal Blink */
animate-terminal-blink
Duration: 1s step-end infinite
Use: Cursor blinking

/* Float */
animate-float
Duration: 3s ease-in-out infinite
Use: Floating elements, subtle movement

/* Glow */
animate-glow
Duration: 2s ease-in-out infinite alternate
Use: Glowing text, interactive elements

/* Slide In */
animate-slide-in
Duration: 0.4s
Use: Side panels, navigation

/* Slide Up */
animate-slide-up
Duration: 0.5s
Use: Modals, tooltips

/* Fade In Up */
animate-fade-in-up
Duration: 0.6s
Use: Content reveal from bottom

/* Scale In */
animate-scale-in
Duration: 0.3s
Use: Buttons, cards appearing

/* Terminal Glitch */
animate-terminal-glitch
Duration: 0.3s
Use: Error states, special effects
```

### Animation Usage Examples

```tsx
// Fade in content
<div className="animate-fadeIn">Content</div>

// Glowing button
<button className="animate-pulse-glow">Click me</button>

// Blinking cursor
<span className="animate-terminal-blink">_</span>

// Floating icon
<div className="animate-float">💾</div>

// Slide in panel
<aside className="animate-slide-in">Panel</aside>
```

---

## 📐 Spacing

### Spacing Scale

```css
terminal: 0.5rem (8px)
terminal-sm: 0.75rem (12px)
terminal-md: 1rem (16px)
terminal-lg: 1.5rem (24px)
terminal-xl: 2rem (32px)
```

**Usage:**
```tsx
<div className="p-terminal">Tight padding</div>
<div className="p-terminal-md">Standard padding</div>
<div className="p-terminal-lg">Spacious padding</div>
<div className="mt-terminal-xl">Large top margin</div>
```

---

## 🔲 Borders & Shadows

### Border Radius

```css
terminal: 2px
terminal-sm: 4px
terminal-md: 6px
terminal-lg: 8px
```

**Usage:**
- Buttons: `rounded-terminal-sm`
- Cards: `rounded-terminal-md`
- Panels: `rounded-terminal-lg`

### Box Shadows (Glow Effects)

```css
shadow-terminal: 0 0 20px rgba(0, 255, 0, 0.1)
shadow-terminal-md: 0 0 30px rgba(0, 255, 0, 0.2)
shadow-terminal-lg: 0 0 40px rgba(0, 255, 0, 0.3)
shadow-terminal-glow: 0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)
shadow-terminal-glow-strong: 0 0 30px rgba(0, 255, 0, 0.7), 0 0 60px rgba(0, 255, 0, 0.4)
```

**Usage:**
```tsx
// Subtle glow
<div className="shadow-terminal">Content</div>

// Strong glow (interactive)
<button className="shadow-terminal-glow-strong">Glowing Button</button>
```

---

## 🎨 Component Patterns

### Terminal Window

```tsx
<div className="
  bg-terminal-bg/95 
  backdrop-blur-terminal-md
  border border-terminal-border
  rounded-terminal-lg
  shadow-[0_0_50px_rgba(0,0,0,0.8)]
">
  {/* Content */}
</div>
```

### Terminal Header

```tsx
<header className="
  flex items-center justify-between
  px-terminal-lg py-terminal-md
  bg-terminal-bg-light
  border-b border-terminal-border
">
  {/* Header content */}
</header>
```

### Terminal Button

```tsx
<button className="
  px-terminal-lg py-terminal
  bg-terminal-bg-light
  border border-terminal-border
  rounded-terminal-sm
  text-terminal-green
  hover:bg-terminal-bg-lighter
  hover:shadow-terminal-glow
  transition-all duration-terminal
  uppercase tracking-wider
">
  Execute
</button>
```

### Terminal Card

```tsx
<div className="
  p-terminal-lg
  bg-terminal-bg-light/50
  border border-terminal-border
  rounded-terminal-md
  hover:border-terminal-border-bright
  transition-all duration-terminal-slow
">
  {/* Card content */}
</div>
```

### Terminal Input

```tsx
<input className="
  w-full
  px-terminal-md py-terminal
  bg-terminal-bg-darker
  border border-terminal-border
  rounded-terminal-sm
  text-terminal-text-primary
  placeholder:text-terminal-text-dim
  focus:border-terminal-green
  focus:shadow-terminal-glow
  transition-all duration-terminal
" />
```

### Terminal Link

```tsx
<a className="
  text-terminal-green
  hover:text-terminal-green-bright
  hover:bg-terminal-green/10
  transition-all duration-terminal
  underline
">
  Link Text
</a>
```

---

## ✨ Special Effects

### CRT Overlay

Already implemented in globals.css:

```tsx
<div className="crt-overlay" />
<div className="crt-flicker" />
```

### Selection Style

```css
::selection {
  background-color: var(--terminal-green);
  color: var(--terminal-bg);
}
```

### Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #050505;
}
::-webkit-scrollbar-thumb {
  background: #1a1a1a;
  border-radius: 2px;
  border: 2px solid #050505;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
```

---

## 🚀 Framer Motion Integration

### Installation

```bash
npm install framer-motion
```

### Usage Examples

```tsx
import { motion } from 'framer-motion'

// Fade in animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Terminal glitch effect
<motion.div
  animate={{
    x: [0, -2, 2, -2, 2, 0],
  }}
  transition={{
    duration: 0.3,
    repeat: Infinity,
    repeatDelay: 5,
  }}
>
  Glitching Text
</motion.div>

// Glow pulse
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="shadow-terminal-glow"
>
  Interactive Button
</motion.button>

// Scan line effect
<motion.div
  className="absolute inset-x-0 h-0.5 bg-terminal-green/30"
  animate={{
    y: ['0%', '100vh'],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: 'linear',
  }}
/>
```

---

## 📱 Responsive Design

### Breakpoints

Using Tailwind's default breakpoints:

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Responsive Patterns

```tsx
// Responsive padding
<div className="p-4 md:p-10 lg:p-12">

// Responsive text
<h1 className="text-terminal-lg md:text-terminal-xl lg:text-terminal-2xl">

// Hide on mobile
<div className="hidden xl:block">

// Stack on mobile, grid on desktop
<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
```

---

## ♿ Accessibility

### Semantic HTML

Always use semantic HTML elements:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `<h1>` through `<h6>` in proper hierarchy
- `<button>` for actions, `<a>` for navigation

### ARIA Labels

```tsx
// Screen reader only text
<h1 className="sr-only">Page Title</h1>

// ARIA hidden decorative elements
<div aria-hidden="true">...</div>

// ARIA labels for interactive elements
<button aria-label="Close menu">X</button>
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus states should be visible
- Use proper tab order

### Color Contrast

The terminal green (#00ff00) on dark backgrounds (#050505, #0a0a0a) provides excellent contrast ratios:
- Green on dark: 19.03:1 (WCAG AAA)
- White on dark: 21:1 (WCAG AAA)

---

## 📦 Component Library Structure

```
src/components/
├── ui/              # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   └── ...
├── layout/          # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── features/        # Feature-specific components
│   ├── Hero.tsx
│   ├── About.tsx
│   └── ...
└── blog/           # Blog-specific components
    ├── PostCard.tsx
    └── ...
```

---

## 🎯 Best Practices

### Component Structure

```tsx
// ✅ Good: Semantic, accessible, consistent
export function TerminalButton({ 
  children, 
  onClick,
  variant = 'default'
}: TerminalButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-terminal-lg py-terminal',
        'bg-terminal-bg-light border border-terminal-border',
        'rounded-terminal-sm text-terminal-green',
        'hover:bg-terminal-bg-lighter hover:shadow-terminal-glow',
        'transition-all duration-terminal',
        'uppercase tracking-wider',
        variant === 'primary' && 'bg-terminal-green text-terminal-bg'
      )}
    >
      {children}
    </button>
  )
}
```

### Using Design Tokens

```tsx
// ✅ Good: Use design tokens
<div className="p-terminal-lg text-terminal-green">

// ❌ Bad: Hard-coded values
<div className="p-6 text-[#00ff00]">
```

### Animation Guidelines

1. **Subtle by default** - Don't overuse animations
2. **Purposeful motion** - Every animation should have a reason
3. **Respect preferences** - Honor `prefers-reduced-motion`
4. **Performance** - Use `transform` and `opacity` for animations

```tsx
// Respect reduced motion preference
const shouldReduceMotion = useReducedMotion()

<motion.div
  animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
>
  Content
</motion.div>
```

---

## 📝 Summary

This design system maintains the unique terminal/CRT aesthetic while providing a comprehensive set of utilities for:

✅ Consistent color usage with terminal green (#00ff00)  
✅ Typography optimized for terminal display  
✅ Rich animation library for interactive elements  
✅ Spacing and sizing tokens for consistency  
✅ Component patterns for common UI elements  
✅ Accessibility and responsive design guidelines  
✅ Framer Motion integration for advanced animations

**Remember:** This is a living document. Update it as the design system evolves.
