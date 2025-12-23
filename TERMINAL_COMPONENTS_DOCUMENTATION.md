# Terminal Components Documentation

**Version:** 2.0  
**Last Updated:** December 2024  
**Purpose:** Complete inventory of all terminal components requiring theme color application

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Component Inventory](#component-inventory)
3. [Component Details](#component-details)
4. [Theme Application Checklist](#theme-application-checklist)
5. [Migration Guide](#migration-guide)

---

## 🎯 Overview

This document provides a comprehensive list of all components, elements, tabs, cards, texts, and UI elements within the terminal interface that need to have theme colors applied. The goal is to ensure 100% theme coverage across all components.

### Current Status

- ✅ Theme system implemented
- ⚠️ Some components still use hardcoded colors
- 🔄 Migration in progress

---

## 📦 Component Inventory

### Core Layout Components

1. **TerminalHeader** (`app/components/TerminalHeader.tsx`)
2. **Navigation** (`app/components/Navigation.tsx`)
3. **BootSequence** (`app/components/BootSequence.tsx`)
4. **ThemeSelector** (`src/components/layout/ThemeSelector.tsx`)
5. **Main Container** (`app/page.tsx`)

### Section Components

6. **About** (`app/components/sections/About.tsx`)
7. **Skills** (`app/components/sections/Skills.tsx`)
8. **Projects** (`app/components/sections/Projects.tsx`)
9. **GitHub** (`app/components/sections/GitHub.tsx`)
10. **Contact** (`app/components/sections/Contact.tsx`)
11. **Writing** (`app/components/sections/Writing.tsx`)

---

## 🔍 Component Details

### 1. TerminalHeader Component

**File:** `app/components/TerminalHeader.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Container background | `bg-[var(--terminal-bg-lighter)]` | ✅ Already using |
| Border bottom | `border-[var(--terminal-border-bright)]` | ✅ Already using |
| Window controls (red) | `#ff5f56` | ⚠️ Keep (OS-specific) | N/A |
| Window controls (yellow) | `#ffbd2e` | ⚠️ Keep (OS-specific) | N/A |
| Window controls (green) | `#27c93f` | ⚠️ Keep (OS-specific) | N/A |
| Title text | `text-[var(--terminal-text-dim)]` | ✅ Already using |
| CPU/MEM labels | `text-[var(--terminal-text-dim)]` | ✅ Already using |
| CPU/MEM values | `text-[var(--terminal-green)]` | ✅ Already using |
| Border divider | `border-[var(--terminal-border-bright)]` | ✅ Already using |

**Status:** ✅ Fully themed

---

### 2. Navigation Component

**File:** `app/components/Navigation.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Container border | `border-[var(--terminal-border)]` | ✅ Already using |
| Active link text | `text-[var(--terminal-green)]` | ✅ Already using |
| Inactive link text | `text-[var(--terminal-text-dim)]` | ✅ Already using |
| Hover text | `text-[var(--terminal-text-primary)]` | ✅ Already using |

**Status:** ✅ Fully themed

---

### 3. BootSequence Component

**File:** `app/components/BootSequence.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Background | `bg-[#050505]` | `bg-[var(--terminal-bg-dark)]` | ❌ Needs update |
| Text color | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Cursor color | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Timestamp opacity | `opacity-30` | ✅ Keep (opacity) | N/A |

**Status:** ❌ Needs migration

**Required Changes:**
```tsx
// Line 45: Change background
className="fixed inset-0 bg-[var(--terminal-bg-dark)] z-[100] ..."

// Line 45: Change text color
className="... text-[var(--terminal-green)]"

// Line 66: Change cursor color
className="w-3 h-5 bg-[var(--terminal-green)] inline-block ..."
```

---

### 4. ThemeSelector Component

**File:** `src/components/layout/ThemeSelector.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Dropdown background | `bg-[var(--terminal-bg-lighter)]` | ✅ Already using |
| Dropdown border | `border-[var(--terminal-border-bright)]` | ✅ Already using |
| Header background | `bg-[var(--terminal-bg-light)]` | ✅ Already using |
| Header text | `text-[var(--terminal-text-tertiary)]` | ✅ Already using |
| Active item background | `bg-[var(--terminal-bg-light)]` | ✅ Already using |
| Active item text | `text-[var(--terminal-green)]` | ✅ Already using |
| Inactive item text | `text-[var(--terminal-text-secondary)]` | ✅ Already using |
| Hover background | `hover:bg-[var(--terminal-bg-light)]` | ✅ Already using |
| Hover text | `hover:text-[var(--terminal-text-primary)]` | ✅ Already using |
| Checkmark | `text-[var(--terminal-green)]` | ✅ Already using |

**Status:** ✅ Fully themed

---

### 5. Main Container (Page)

**File:** `app/page.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Background decor text | `text-[var(--terminal-border)]` | ✅ Already using |
| Terminal container bg | `bg-[var(--terminal-bg)]/95` | ✅ Already using |
| Terminal border | `border-[var(--terminal-border)]` | ✅ Already using |
| Prompt text | `text-[var(--terminal-green)]` | ✅ Already using |
| Cursor background | `bg-[var(--terminal-green)]` | ✅ Already using |
| Footer text | `text-[var(--terminal-text-dim)]` | ✅ Already using |
| Footer border | `border-[var(--terminal-border)]` | ✅ Already using |

**Status:** ✅ Fully themed

---

### 6. About Section

**File:** `app/components/sections/About.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Header border | `border-[var(--terminal-green)]` | ✅ Already using |
| Header gradient | `from-[var(--terminal-green)]/5` | ✅ Already using |
| Title text | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Subtitle text | `text-[var(--terminal-text-tertiary)]` | ✅ Already using |
| Tag background | `bg-[var(--terminal-green)]` | ✅ Already using |
| Tag text | `text-[var(--terminal-bg)]` | ✅ Already using |
| Section header text | `text-[var(--terminal-text-tertiary)]` | ✅ Already using |
| Section header border | `border-[var(--terminal-border)]` | ✅ Already using |
| List item number | `text-[var(--terminal-green)]` | ✅ Already using |
| List item text | `text-[var(--terminal-text-primary)]` | ✅ Already using |
| List item hover | `text-[var(--terminal-green)]` | ✅ Already using |
| Secondary text | `text-[var(--terminal-text-dim)]` | ✅ Already using |
| Card background | `bg-[var(--terminal-bg)]` | ✅ Already using |
| Card border | `border-[var(--terminal-border)]` | ✅ Already using |
| Card icon | `text-[var(--terminal-green)]` | ✅ Already using |
| Card header | `text-[var(--terminal-green)]` | ✅ Already using |
| Card text | `text-[var(--terminal-text-secondary)]` | ✅ Already using |
| Button border | `border-[var(--terminal-green)]/30` | ✅ Already using |
| Button text | `text-[var(--terminal-green)]` | ✅ Already using |
| Button hover bg | `hover:bg-[var(--terminal-green)]` | ✅ Already using |
| Button hover text | `hover:text-[var(--terminal-bg)]` | ✅ Already using |
| Divider | `bg-[var(--terminal-border)]` | ✅ Already using |

**Status:** ✅ Fully themed

---

### 7. Skills Section

**File:** `app/components/sections/Skills.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Header title | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Header subtitle | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Section divider | `bg-[#1a1a1a]` | `bg-[var(--terminal-border)]` | ❌ Needs update |
| Category header bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Category header text | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Skill card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Skill card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Skill card hover border | `hover:border-[#00ff00]` | `hover:border-[var(--terminal-green)]` | ❌ Needs update |
| Skill card hover text | `hover:text-[#00ff00]` | `hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Skill card shadow | `rgba(0,255,0,0.05)` | `var(--terminal-green-glow)` | ❌ Needs update |
| Info box bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Info box border | `border-[#00ff00]` | `border-[var(--terminal-green)]` | ❌ Needs update |
| Info box text | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |

**Status:** ❌ Needs migration

**Required Changes:**
- Replace all `#666` with `var(--terminal-text-dim)`
- Replace all `#1a1a1a` with `var(--terminal-border)`
- Replace all `#0a0a0a` with `var(--terminal-bg)`
- Replace all `#0f0f0f` with `var(--terminal-bg-light)`
- Replace all `#00ff00` with `var(--terminal-green)`
- Replace hardcoded rgba values with CSS variables

---

### 8. Projects Section

**File:** `app/components/sections/Projects.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Header title | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Header subtitle | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Back button text | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Back button hover | `hover:text-[#00ff00]` | `hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Lock badge bg | `border-[#ff3e3e]/40` | ⚠️ Keep (error color) | N/A |
| Lock badge text | `text-[#ff3e3e]` | ⚠️ Keep (error color) | N/A |
| Project title | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Progress meter bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Progress meter border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Progress meter text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Progress bar bg | `bg-[#111]` | `bg-[var(--terminal-bg-dark)]` | ❌ Needs update |
| Progress bar fill | `bg-[#333]` | `bg-[var(--terminal-border)]` | ❌ Needs update |
| Metrics card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Metrics card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Metrics label | `text-[#333]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Metrics value | `text-[#ffffff]` | `text-[var(--terminal-text-primary)]` | ❌ Needs update |
| Project card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Project card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Project card hover border | `hover:border-[#00ff00]` | `hover:border-[var(--terminal-green)]` | ❌ Needs update |
| Project card title | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Project card title hover | `group-hover:text-[#00ff00]` | `group-hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Project card description | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Project card footer border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Project card footer text | `text-[#222]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Project card arrow | `text-[#1a1a1a]` | `text-[var(--terminal-border)]` | ❌ Needs update |
| Project card arrow hover | `group-hover:text-[#00ff00]` | `group-hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Article content headings | Via `.article-content` | ✅ Already using |
| Article content text | Via `.article-content` | ✅ Already using |

**Status:** ❌ Needs migration

**Required Changes:**
- Replace all hardcoded hex colors with CSS variables
- Update all text colors to use theme variables
- Update all background colors to use theme variables
- Update all border colors to use theme variables

---

### 9. GitHub Section

**File:** `app/components/sections/GitHub.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Loading text | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Loading bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Loading border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Back button text | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Back button hover | `hover:text-[#00ff00]` | `hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Repo title | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Source button bg | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Source button text | `text-[#0a0a0a]` | `text-[var(--terminal-bg)]` | ❌ Needs update |
| Source button hover | `hover:bg-white` | `hover:bg-[var(--terminal-text-primary)]` | ❌ Needs update |
| Stats card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Stats card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Stats card hover border | `hover:border-[#00ff00]/50` | `hover:border-[var(--terminal-green)]/50` | ❌ Needs update |
| Stats card label | `text-[#555]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Stats card value | Various | `text-[var(--terminal-green)]` | ❌ Needs update |
| Heatmap container bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Heatmap container border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Heatmap header text | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Heatmap header subtitle | `text-[#333]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Tab container bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Tab container border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Active tab bg | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Active tab text | `text-[#0a0a0a]` | `text-[var(--terminal-bg)]` | ❌ Needs update |
| Inactive tab text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Tooltip bg | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Tooltip text | `text-[#0a0a0a]` | `text-[var(--terminal-bg)]` | ❌ Needs update |
| Tooltip border | `border-white/10` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Section header text | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Section divider | `bg-[#1a1a1a]` | `bg-[var(--terminal-border)]` | ❌ Needs update |
| Repo card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Repo card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Repo card hover border | `hover:border-[#00ff00]` | `hover:border-[var(--terminal-green)]` | ❌ Needs update |
| Repo card hover bg | `hover:bg-[#0c0c0c]` | `hover:bg-[var(--terminal-bg)]` | ❌ Needs update |
| Repo card title | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Repo card description | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Repo card footer border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Repo card footer text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Repo card date | `text-[#222]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Pinned badge bg | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Pinned badge text | `text-[#0a0a0a]` | `text-[var(--terminal-bg)]` | ❌ Needs update |
| Tech badge bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Tech badge border | `border-[#222]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Tech badge hover border | `group-hover:border-[#00ff00]/50` | `group-hover:border-[var(--terminal-green)]/50` | ❌ Needs update |
| Tech badge text | `text-[#aaa]` | `text-[var(--terminal-text-secondary)]` | ❌ Needs update |
| Tech badge hover text | `group-hover:text-[#00ff00]` | `group-hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Topic badge bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Topic badge border | `border-[#222]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Topic badge text | `text-[#555]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Star/Fork icon | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Featured border | `border-t-[#00ff00]/60` | `border-t-[var(--terminal-green)]/60` | ❌ Needs update |
| Featured shadow | `rgba(0,255,0,0.05)` | `var(--terminal-green-glow)` | ❌ Needs update |
| Organization header | `text-[#ffffff]/40` | `text-[var(--terminal-text-primary)]/40` | ❌ Needs update |
| Forked section opacity | `opacity-70` | ✅ Keep (opacity) | N/A |

**Status:** ❌ Needs migration

**Required Changes:**
- Replace ALL hardcoded hex colors with CSS variables
- Update all text, background, and border colors
- Update hover states to use theme variables
- Update icon colors to use theme variables

---

### 10. Contact Section

**File:** `app/components/sections/Contact.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Header title | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Header subtitle | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Section header | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Pulse dot | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Topic item text | `text-[#aaa]` | `text-[var(--terminal-text-secondary)]` | ❌ Needs update |
| Topic item hover | `group-hover:text-white` | `group-hover:text-[var(--terminal-text-primary)]` | ❌ Needs update |
| Topic indicator | `text-[#222]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Topic indicator hover | `group-hover:text-[#00ff00]` | `group-hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Direct access header | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Email card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Email card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Email card hover border | `hover:border-[#00ff00]/50` | `hover:border-[var(--terminal-green)]/50` | ❌ Needs update |
| Email icon | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Email text | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Copy button text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Copy button hover | `hover:text-[#00ff00]` | `hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Copy button check | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Social card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Social card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Social card hover border | `hover:border-[#00ff00]/50` | `hover:border-[var(--terminal-green)]/50` | ❌ Needs update |
| Social card hover bg | `hover:bg-[#00ff00]/5` | `hover:bg-[var(--terminal-green)]/5` | ❌ Needs update |
| Social icon | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Social text | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Social text hover | `group-hover:text-white` | `group-hover:text-[var(--terminal-text-primary)]` | ❌ Needs update |
| Profile card bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Profile card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Profile badge bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Profile badge border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Profile badge text | `text-[#222]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Profile header text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Profile divider | `bg-[#1a1a1a]` | `bg-[var(--terminal-border)]` | ❌ Needs update |
| Profile value | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Profile label | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Profile status text | `text-[#222]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Loading container bg | `bg-[#0f0f0f]/50` | `bg-[var(--terminal-bg-light)]/50` | ❌ Needs update |
| Loading container border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Loading text | `text-[#333]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Footer text | `text-[#1a1a1a]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Footer border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |

**Status:** ❌ Needs migration

**Required Changes:**
- Replace all hardcoded hex colors with CSS variables
- Update all text, background, and border colors
- Update hover states to use theme variables

---

### 11. Writing Section

**File:** `app/components/sections/Writing.tsx`

#### Elements Requiring Theme Colors:

| Element | Current Color | Should Use | Status |
|---------|--------------|------------|--------|
| Header title | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Header subtitle | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Back button text | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Back button hover | `hover:text-[#00ff00]` | `hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Category badge | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Article title | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Article meta text | `text-[#666]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article tag bg | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Article tag text | `text-[#333]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Search input bg | `bg-[#050505]` | `bg-[var(--terminal-bg-dark)]` | ❌ Needs update |
| Search input border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Search input focus border | `focus:border-[#00ff00]` | `focus:border-[var(--terminal-green)]` | ❌ Needs update |
| Search input text | `text-[#ffffff]` | `text-[var(--terminal-text-primary)]` | ❌ Needs update |
| Search input placeholder | `placeholder:text-[#333]` | `placeholder:text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Search icon | `text-[#333]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Search icon focus | `group-focus-within:text-[#00ff00]` | `group-focus-within:text-[var(--terminal-green)]` | ❌ Needs update |
| Filter label | `text-[#333]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Active tag bg | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Active tag border | `border-[#00ff00]` | `border-[var(--terminal-green)]` | ❌ Needs update |
| Active tag text | `text-[#0a0a0a]` | `text-[var(--terminal-bg)]` | ❌ Needs update |
| Inactive tag bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Inactive tag border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Inactive tag text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Inactive tag hover border | `hover:border-[#333]` | `hover:border-[var(--terminal-border-light)]` | ❌ Needs update |
| Inactive tag hover text | `hover:text-[#aaa]` | `hover:text-[var(--terminal-text-secondary)]` | ❌ Needs update |
| Article card bg | `bg-[#0a0a0a]` | `bg-[var(--terminal-bg)]` | ❌ Needs update |
| Article card border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Article card hover bg | `hover:bg-[#0f0f0f]` | `hover:bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Article card hover border | `hover:border-[#00ff00]` | `hover:border-[var(--terminal-green)]` | ❌ Needs update |
| Article card glow | `bg-[#00ff00] opacity-0 group-hover:opacity-[0.03]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Article category | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article category hover | `group-hover:text-[#00ff00]` | `group-hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Article hash icon | `text-[#1a1a1a]` | `text-[var(--terminal-border)]` | ❌ Needs update |
| Article hash icon hover | `group-hover:text-[#00ff00]` | `group-hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Article title | Default (white) | `text-[var(--terminal-text-primary)]` | ⚠️ Implicit |
| Article title hover | `group-hover:text-[#00ff00]` | `group-hover:text-[var(--terminal-green)]` | ❌ Needs update |
| Article description | `text-[#555]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article description hover | `group-hover:text-[#aaa]` | `group-hover:text-[var(--terminal-text-secondary)]` | ❌ Needs update |
| Article tag | `text-[#222]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article tag hover | `group-hover:text-[#444]` | `group-hover:text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article meta border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Article date | `text-[#333]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article date hover | `group-hover:text-[#666]` | `group-hover:text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article read time | `text-[#00ff00] opacity-40` | `text-[var(--terminal-green)] opacity-40` | ❌ Needs update |
| Article read time hover | `group-hover:opacity-100` | ✅ Keep (opacity) | N/A |
| Article open button bg | `bg-[#00ff00]` | `bg-[var(--terminal-green)]` | ❌ Needs update |
| Article open button text | `text-[#0a0a0a]` | `text-[var(--terminal-bg)]` | ❌ Needs update |
| Empty state bg | `bg-[#050505]` | `bg-[var(--terminal-bg-dark)]` | ❌ Needs update |
| Empty state border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Empty state text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Article content selection | `selection:bg-[#00ff00]` | `selection:bg-[var(--terminal-green)]` | ❌ Needs update |
| Article content selection text | `selection:text-[#0a0a0a]` | `selection:text-[var(--terminal-bg)]` | ❌ Needs update |
| Article footer bg | `bg-[#0f0f0f]` | `bg-[var(--terminal-bg-light)]` | ❌ Needs update |
| Article footer border | `border-[#1a1a1a]` | `border-[var(--terminal-border)]` | ❌ Needs update |
| Article footer text | `text-[#444]` | `text-[var(--terminal-text-dim)]` | ❌ Needs update |
| Close button border | `border-[#00ff00]/30` | `border-[var(--terminal-green)]/30` | ❌ Needs update |
| Close button text | `text-[#00ff00]` | `text-[var(--terminal-green)]` | ❌ Needs update |
| Close button hover bg | `hover:bg-[#00ff00]` | `hover:bg-[var(--terminal-green)]` | ❌ Needs update |
| Close button hover text | `hover:text-[#0a0a0a]` | `hover:text-[var(--terminal-bg)]` | ❌ Needs update |

**Status:** ❌ Needs migration

**Required Changes:**
- Replace ALL hardcoded hex colors with CSS variables
- Update all text, background, and border colors
- Update hover states to use theme variables
- Update focus states to use theme variables

---

## ✅ Theme Application Checklist

### Components Status

- [x] TerminalHeader - ✅ Fully themed
- [x] Navigation - ✅ Fully themed
- [ ] BootSequence - ❌ Needs migration
- [x] ThemeSelector - ✅ Fully themed
- [x] Main Container - ✅ Fully themed
- [x] About Section - ✅ Fully themed
- [ ] Skills Section - ❌ Needs migration
- [ ] Projects Section - ❌ Needs migration
- [ ] GitHub Section - ❌ Needs migration
- [ ] Contact Section - ❌ Needs migration
- [ ] Writing Section - ❌ Needs migration

### Global Styles Status

- [x] Article content styles (`.article-content`) - ✅ Already using CSS variables
- [x] Scrollbar styles - ⚠️ Partially themed (needs review)
- [x] Selection styles - ✅ Already using CSS variables
- [x] Body background - ✅ Already using CSS variables

---

## 🔄 Migration Guide

### Step 1: Identify Hardcoded Colors

Search for hardcoded hex colors in components:
```bash
# Find all hardcoded colors
grep -r "#[0-9a-fA-F]\{6\}" app/components/
```

### Step 2: Replace with CSS Variables

#### Pattern 1: Text Colors
```tsx
// Before
className="text-[#666]"

// After
className="text-[var(--terminal-text-dim)]"
```

#### Pattern 2: Background Colors
```tsx
// Before
className="bg-[#0f0f0f]"

// After
className="bg-[var(--terminal-bg-light)]"
```

#### Pattern 3: Border Colors
```tsx
// Before
className="border-[#1a1a1a]"

// After
className="border-[var(--terminal-border)]"
```

#### Pattern 4: Primary Green
```tsx
// Before
className="text-[#00ff00]"

// After
className="text-[var(--terminal-green)]"
```

### Step 3: Update Hover States

```tsx
// Before
className="hover:text-[#00ff00]"

// After
className="hover:text-[var(--terminal-green)]"
```

### Step 4: Update Opacity/Transparency

```tsx
// Before
className="border-[#00ff00]/30"

// After
className="border-[var(--terminal-green)]/30"
```

### Step 5: Test All Themes

After migration, test each component with all 7 themes:
1. Matrix Green (default)
2. Dracula
3. Monokai
4. Nord
5. Solarized Dark
6. One Dark
7. Ocean

---

## 📊 Color Mapping Reference

### Common Hardcoded Colors → CSS Variables

| Hardcoded | CSS Variable | Usage |
|-----------|--------------|-------|
| `#00ff00` | `var(--terminal-green)` | Primary accent |
| `#33ff33` | `var(--terminal-green-bright)` | Bright accent |
| `#00cc00` | `var(--terminal-green-dim)` | Dim accent |
| `#0a0a0a` | `var(--terminal-bg)` | Default background |
| `#050505` | `var(--terminal-bg-dark)` | Dark background |
| `#000000` | `var(--terminal-bg-darker)` | Darkest background |
| `#0f0f0f` | `var(--terminal-bg-light)` | Light background |
| `#1a1a1a` | `var(--terminal-bg-lighter)` | Lightest background |
| `#1a1a1a` | `var(--terminal-border)` | Default border |
| `#2a2a2a` | `var(--terminal-border-light)` | Light border |
| `#333333` | `var(--terminal-border-bright)` | Bright border |
| `#ffffff` | `var(--terminal-text-primary)` | Primary text |
| `#cccccc` / `#e0e0e0` | `var(--terminal-text-secondary)` | Secondary text |
| `#888888` / `#a0a0a0` | `var(--terminal-text-tertiary)` | Tertiary text |
| `#444444` / `#666666` | `var(--terminal-text-dim)` | Dim text |

---

## 🎯 Priority Order for Migration

1. **High Priority** (Most visible):
   - Skills Section
   - Projects Section
   - GitHub Section

2. **Medium Priority**:
   - Contact Section
   - Writing Section

3. **Low Priority** (Less visible):
   - BootSequence (only shown on initial load)

---

## 📝 Notes

1. **Error Colors**: Keep error colors (like `#ff3e3e` for locked badges) as hardcoded - they're semantic, not theme-dependent
2. **OS Colors**: Keep macOS window control colors (`#ff5f56`, `#ffbd2e`, `#27c93f`) as hardcoded
3. **Opacity**: Opacity values (like `opacity-40`) can remain as-is, only color values need migration
4. **Implicit Colors**: Some elements use default text color (white) - consider making explicit for clarity

---

**Last Updated:** December 2024  
**Next Review:** After migration completion

