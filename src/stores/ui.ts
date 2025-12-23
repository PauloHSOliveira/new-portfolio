/**
 * UI State Management with Jotai
 *
 * This module contains atoms for managing UI-related state across the application.
 * Includes state for sidebar, search, modals, and other UI interactions.
 */

import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

/**
 * Modal state type definition
 */
export interface ModalState {
  isOpen: boolean
  modalType: 'contact' | 'project' | 'settings' | null
  modalData?: unknown
}

/**
 * Sidebar open/closed state atom with localStorage persistence
 * Default: true (open)
 *
 * Persists sidebar preference across page reloads
 */
export const sidebarOpenAtom = atomWithStorage<boolean>('sidebar-open', true)

/**
 * Search query atom for global search functionality
 * Default: empty string
 *
 * This atom holds the current search query value
 */
export const searchQueryAtom = atom<string>('')

/**
 * Modal state atom for managing modal dialogs
 * Default: closed modal with no type
 *
 * Controls which modal is open and any associated data
 */
export const modalStateAtom = atom<ModalState>({
  isOpen: false,
  modalType: null,
  modalData: undefined,
})

/**
 * Derived atom for checking if any modal is open
 */
export const isModalOpenAtom = atom<boolean>((get) => {
  const modalState = get(modalStateAtom)
  return modalState.isOpen
})

/**
 * Mobile menu state atom
 * Default: false (closed)
 *
 * Controls mobile navigation menu visibility
 */
export const mobileMenuOpenAtom = atom<boolean>(false)

/**
 * Loading state atom for global loading indicator
 * Default: false
 */
export const isLoadingAtom = atom<boolean>(false)

/**
 * Notification/toast state atom
 */
export interface NotificationState {
  isVisible: boolean
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
}

export const notificationAtom = atom<NotificationState>({
  isVisible: false,
  message: '',
  type: 'info',
})

/**
 * Command palette state atom (for keyboard shortcuts)
 * Default: false (closed)
 */
export const commandPaletteOpenAtom = atom<boolean>(false)
