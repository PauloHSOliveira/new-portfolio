/**
 * Custom Hooks for Theme State Management
 *
 * These hooks provide a convenient API for components to interact with theme atoms.
 * They wrap Jotai's useAtom hook with specific types and additional functionality.
 */

'use client'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'
import {
  isDarkThemeAtom,
  isThemeTransitioningAtom,
  type Theme,
  themeAtom,
} from '@/stores/theme'

/**
 * Hook for accessing and updating the theme
 *
 * @returns {object} Object containing current theme and setter function
 * @example
 * const { theme, setTheme } = useThemeAtom()
 * setTheme('dracula')
 */
export function useThemeAtom() {
  const [theme, setTheme] = useAtom(themeAtom)
  const [isTransitioning, setIsTransitioning] = useAtom(
    isThemeTransitioningAtom
  )

  /**
   * Set theme with transition animation
   */
  const setThemeWithTransition = useCallback(
    (newTheme: Theme) => {
      setIsTransitioning(true)
      setTheme(newTheme)

      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    },
    [setTheme, setIsTransitioning]
  )

  return {
    theme,
    setTheme,
    setThemeWithTransition,
    isTransitioning,
  }
}

/**
 * Hook for read-only access to the current theme
 *
 * @returns {Theme} Current theme value
 * @example
 * const theme = useThemeValue()
 */
export function useThemeValue() {
  return useAtomValue(themeAtom)
}

/**
 * Hook for updating the theme (write-only)
 *
 * @returns {function} Theme setter function
 * @example
 * const setTheme = useSetTheme()
 * setTheme('monokai')
 */
export function useSetTheme() {
  return useSetAtom(themeAtom)
}

/**
 * Hook for checking if current theme is dark
 *
 * @returns {boolean} True if dark theme
 * @example
 * const isDark = useIsDarkTheme()
 */
export function useIsDarkTheme() {
  return useAtomValue(isDarkThemeAtom)
}
