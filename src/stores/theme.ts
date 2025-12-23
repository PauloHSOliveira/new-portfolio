/**
 * Theme State Management with Jotai
 *
 * This module contains atoms for managing theme-related state across the application.
 * Uses Jotai for atomic state management with TypeScript type safety.
 */

import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

/**
 * Available theme options for the terminal-style portfolio
 */
export type Theme =
  | 'matrix'
  | 'dracula'
  | 'monokai'
  | 'nord'
  | 'solarized-dark'
  | 'one-dark'
  | 'ocean'

/**
 * Main theme atom with localStorage persistence
 * Default: 'matrix'
 *
 * This atom automatically syncs with localStorage under the key 'terminal-theme'
 * and persists across page reloads.
 */
export const themeAtom = atomWithStorage<Theme>('terminal-theme', 'matrix')

/**
 * Derived atom for checking if the current theme is dark
 * All themes in this portfolio are dark themes, but this can be extended
 */
export const isDarkThemeAtom = atom<boolean>((get) => {
  const _theme = get(themeAtom)
  // Currently all themes are dark, but this allows for future light theme support
  return true
})

/**
 * Atom for tracking theme transition state
 * Useful for animations during theme changes
 */
export const isThemeTransitioningAtom = atom<boolean>(false)
