/**
 * Central export file for all Jotai stores
 *
 * This file re-exports all atoms and types from store modules,
 * making it easier to import multiple atoms in components.
 *
 * @example
 * import { themeAtom, sidebarOpenAtom } from '@/stores/index'
 */

// Theme atoms and types
export {
  isDarkThemeAtom,
  isThemeTransitioningAtom,
  type Theme,
  themeAtom,
} from './theme'

// UI atoms and types
export {
  commandPaletteOpenAtom,
  isLoadingAtom,
  isModalOpenAtom,
  type ModalState,
  mobileMenuOpenAtom,
  modalStateAtom,
  type NotificationState,
  notificationAtom,
  searchQueryAtom,
  sidebarOpenAtom,
} from './ui'
