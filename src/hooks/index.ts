/**
 * Central export file for all custom hooks
 *
 * This file re-exports all custom hooks for accessing Jotai atoms,
 * making it easier to import multiple hooks in components.
 *
 * @example
 * import { useThemeAtom, useSidebar } from '@/hooks/index'
 */

// Theme hooks
export {
  useIsDarkTheme,
  useSetTheme,
  useThemeAtom,
  useThemeValue,
} from './useThemeAtom'

// UI state hooks
export {
  useCommandPalette,
  useLoading,
  useMobileMenu,
  useModal,
  useNotification,
  useSearch,
  useSidebar,
  useUIState,
} from './useUIState'
