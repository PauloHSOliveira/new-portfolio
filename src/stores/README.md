# Jotai State Management

This directory contains Jotai atoms for managing application state in a type-safe, atomic manner.

## Overview

Jotai is a primitive and flexible state management library for React. It uses atoms as the building blocks of state, making it easy to create, compose, and manage state across your application.

## Directory Structure

```
src/stores/
├── theme.ts          # Theme-related atoms
├── ui.ts             # UI state atoms (sidebar, modal, search, etc.)
└── README.md         # This file
```

## Usage Examples

### Using Theme Atoms

```tsx
import { useThemeAtom } from '@/hooks/useThemeAtom'

function ThemeSwitcher() {
  const { theme, setTheme, isTransitioning } = useThemeAtom()
  
  return (
    <select 
      value={theme} 
      onChange={(e) => setTheme(e.target.value as Theme)}
      disabled={isTransitioning}
    >
      <option value="matrix">Matrix</option>
      <option value="dracula">Dracula</option>
      <option value="monokai">Monokai</option>
    </select>
  )
}
```

### Using UI State Atoms

```tsx
import { useSidebar, useModal, useSearch } from '@/hooks/useUIState'

function Sidebar() {
  const { isOpen, toggle, close } = useSidebar()
  
  return (
    <aside className={isOpen ? 'open' : 'closed'}>
      <button onClick={toggle}>Toggle Sidebar</button>
      {/* Sidebar content */}
    </aside>
  )
}

function SearchBar() {
  const { query, setQuery, clear } = useSearch()
  
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  )
}

function ContactButton() {
  const { openModal } = useModal()
  
  return (
    <button onClick={() => openModal('contact')}>
      Contact Me
    </button>
  )
}
```

## Atom Patterns and Best Practices

### 1. Atom Organization

- **Separate by domain**: Keep related atoms together (theme, ui, etc.)
- **Export types**: Always export TypeScript types for atom values
- **Document atoms**: Add JSDoc comments explaining purpose and usage

### 2. Atom Types

#### Basic Atoms
Simple state containers:
```typescript
import { atom } from 'jotai'

export const countAtom = atom<number>(0)
```

#### Derived Atoms
Atoms that compute values from other atoms:
```typescript
export const doubleCountAtom = atom((get) => {
  const count = get(countAtom)
  return count * 2
})
```

#### Atoms with Storage
Atoms that persist to localStorage:
```typescript
import { atomWithStorage } from 'jotai/utils'

export const userPreferenceAtom = atomWithStorage<string>(
  'user-preference',
  'default-value'
)
```

### 3. Custom Hooks Pattern

Always create custom hooks to wrap atoms:

```typescript
// ✅ Good: Provides a clean API
export function useCounter() {
  const [count, setCount] = useAtom(countAtom)
  
  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, [setCount])
  
  return { count, increment }
}

// ❌ Avoid: Exposing atoms directly in components
// Components should use hooks, not import atoms directly
```

### 4. Performance Optimization

#### Read-only Access
Use `useAtomValue` when you only need to read:
```typescript
export function useThemeValue() {
  return useAtomValue(themeAtom) // No re-render on setter change
}
```

#### Write-only Access
Use `useSetAtom` when you only need to write:
```typescript
export function useSetTheme() {
  return useSetAtom(themeAtom) // Component doesn't re-render on value change
}
```

### 5. TypeScript Best Practices

Always provide explicit types:
```typescript
// ✅ Good: Explicit typing
export const userAtom = atom<User | null>(null)

// ❌ Avoid: Implicit typing
export const userAtom = atom(null) // Type is unknown
```

Use type exports for reusability:
```typescript
export type Theme = 'dark' | 'light'
export const themeAtom = atom<Theme>('dark')
```

### 6. Async Atoms

For async operations:
```typescript
export const userDataAtom = atom(async () => {
  const response = await fetch('/api/user')
  return response.json()
})
```

### 7. Atom Families

For dynamic atoms (e.g., per-item state):
```typescript
import { atomFamily } from 'jotai/utils'

export const itemAtomFamily = atomFamily((id: string) =>
  atom({ id, loading: false })
)
```

## Common Patterns

### Modal Management
```typescript
const { openModal, closeModal, modalType } = useModal()

// Open modal with data
openModal('contact', { email: 'user@example.com' })

// Close modal
closeModal()
```

### Loading States
```typescript
const { isLoading, startLoading, stopLoading } = useLoading()

async function fetchData() {
  startLoading()
  try {
    await api.getData()
  } finally {
    stopLoading()
  }
}
```

### Notifications
```typescript
const { showNotification } = useNotification()

showNotification('Success!', 'success')
showNotification('Error occurred', 'error')
```

## Testing Atoms

Atoms are easy to test in isolation:

```typescript
import { createStore } from 'jotai'
import { countAtom } from '@/stores/ui'

test('counter atom', () => {
  const store = createStore()
  
  expect(store.get(countAtom)).toBe(0)
  
  store.set(countAtom, 5)
  expect(store.get(countAtom)).toBe(5)
})
```

## Migration from Context API

If migrating from Context:

1. Replace Context with atoms
2. Replace `useContext` with custom hooks
3. Remove Provider components (Jotai Provider handles all atoms)
4. Enjoy better performance and less boilerplate!

### Current State: Dual Theme Management

**Note:** The portfolio currently has two theme management systems:
1. **Legacy:** `app/providers.tsx` uses React Context API with localStorage
2. **New:** `src/stores/theme.ts` uses Jotai atoms with localStorage

**Future Migration Path:**
- The new Jotai theme atoms (`themeAtom`) provide the same functionality as the legacy Context
- To complete migration, components should switch from `useTheme()` (Context) to `useThemeAtom()` (Jotai)
- Once all components migrate, the Context-based theme management in `providers.tsx` can be removed
- The `Theme` type should be imported from `@/stores/theme` to maintain single source of truth

## Resources

- [Jotai Documentation](https://jotai.org)
- [Jotai Utils](https://jotai.org/docs/utilities/storage)
- [Jotai DevTools](https://jotai.org/docs/tools/devtools)

## Troubleshooting

### Atom not persisting to localStorage
- Check that you're using `atomWithStorage` from `jotai/utils`
- Verify the storage key is unique
- Ensure localStorage is available (SSR considerations)

### Component not re-rendering
- Make sure you're using `useAtom` or `useAtomValue`
- Check that you're not reading the atom outside of React
- Verify the atom value is actually changing

### Type errors
- Always provide explicit types: `atom<YourType>(defaultValue)`
- Export types for reuse: `export type Theme = ...`
- Use TypeScript strict mode for better type safety
