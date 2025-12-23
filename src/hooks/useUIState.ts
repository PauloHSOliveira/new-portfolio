/**
 * Custom Hooks for UI State Management
 *
 * These hooks provide a convenient API for components to interact with UI state atoms.
 * They wrap Jotai's useAtom hook with specific types and additional functionality.
 */

'use client'

import { useAtom, useAtomValue } from 'jotai'
import { useCallback } from 'react'
import {
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
} from '@/stores/ui'

/**
 * Hook for accessing and updating all UI state
 *
 * @returns {object} Object containing all UI state values and setters
 * @example
 * const { sidebarOpen, setSidebarOpen, searchQuery, setSearchQuery } = useUIState()
 */
export function useUIState() {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom)
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [modalState, setModalState] = useAtom(modalStateAtom)
  const [mobileMenuOpen, setMobileMenuOpen] = useAtom(mobileMenuOpenAtom)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const [notification, setNotification] = useAtom(notificationAtom)
  const [commandPaletteOpen, setCommandPaletteOpen] = useAtom(
    commandPaletteOpenAtom
  )

  return {
    sidebarOpen,
    setSidebarOpen,
    searchQuery,
    setSearchQuery,
    modalState,
    setModalState,
    mobileMenuOpen,
    setMobileMenuOpen,
    isLoading,
    setIsLoading,
    notification,
    setNotification,
    commandPaletteOpen,
    setCommandPaletteOpen,
  }
}

/**
 * Hook for sidebar state
 *
 * @returns {object} Sidebar state and controls
 * @example
 * const { isOpen, toggle, open, close } = useSidebar()
 */
export function useSidebar() {
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [setIsOpen])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}

/**
 * Hook for search functionality
 *
 * @returns {object} Search query and controls
 * @example
 * const { query, setQuery, clear } = useSearch()
 */
export function useSearch() {
  const [query, setQuery] = useAtom(searchQueryAtom)

  const clear = useCallback(() => {
    setQuery('')
  }, [setQuery])

  return {
    query,
    setQuery,
    clear,
  }
}

/**
 * Hook for modal state management
 *
 * @returns {object} Modal state and controls
 * @example
 * const { isOpen, modalType, openModal, closeModal } = useModal()
 */
export function useModal() {
  const [modalState, setModalState] = useAtom(modalStateAtom)
  const isOpen = useAtomValue(isModalOpenAtom)

  const openModal = useCallback(
    (modalType: ModalState['modalType'], modalData?: unknown) => {
      setModalState({
        isOpen: true,
        modalType,
        modalData,
      })
    },
    [setModalState]
  )

  const closeModal = useCallback(() => {
    setModalState({
      isOpen: false,
      modalType: null,
      modalData: undefined,
    })
  }, [setModalState])

  return {
    isOpen,
    modalType: modalState.modalType,
    modalData: modalState.modalData,
    openModal,
    closeModal,
  }
}

/**
 * Hook for mobile menu state
 *
 * @returns {object} Mobile menu state and controls
 * @example
 * const { isOpen, toggle, open, close } = useMobileMenu()
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useAtom(mobileMenuOpenAtom)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [setIsOpen])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}

/**
 * Hook for global loading state
 *
 * @returns {object} Loading state and controls
 * @example
 * const { isLoading, startLoading, stopLoading } = useLoading()
 */
export function useLoading() {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [setIsLoading])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [setIsLoading])

  return {
    isLoading,
    startLoading,
    stopLoading,
  }
}

/**
 * Hook for notification/toast messages
 *
 * @returns {object} Notification state and controls
 * @example
 * const { showNotification, hideNotification } = useNotification()
 * showNotification('Success!', 'success')
 */
export function useNotification() {
  const [notification, setNotification] = useAtom(notificationAtom)

  const showNotification = useCallback(
    (message: string, type: NotificationState['type'] = 'info') => {
      setNotification({
        isVisible: true,
        message,
        type,
      })
    },
    [setNotification]
  )

  const hideNotification = useCallback(() => {
    setNotification({
      isVisible: false,
      message: '',
      type: 'info',
    })
  }, [setNotification])

  return {
    notification,
    showNotification,
    hideNotification,
  }
}

/**
 * Hook for command palette state
 *
 * @returns {object} Command palette state and controls
 * @example
 * const { isOpen, toggle, open, close } = useCommandPalette()
 */
export function useCommandPalette() {
  const [isOpen, setIsOpen] = useAtom(commandPaletteOpenAtom)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [setIsOpen])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}
