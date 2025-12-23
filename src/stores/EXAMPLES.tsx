/**
 * Example Usage of Jotai State Management
 * 
 * This file demonstrates how to use the Jotai atoms and custom hooks
 * in your components. You can copy these patterns to your actual components.
 */

'use client'

import {
  useModal,
  useSearch,
  useSidebar,
  useThemeAtom,
} from '@/hooks/index'

/**
 * Example 1: Theme Management
 */
export function ThemeSwitcherExample() {
  const { theme, setThemeWithTransition, isTransitioning } = useThemeAtom()

  const themes = [
    'matrix',
    'dracula',
    'monokai',
    'nord',
    'solarized-dark',
    'one-dark',
    'ocean',
  ] as const

  return (
    <div>
      <h3>Current Theme: {theme}</h3>
      <p>Transitioning: {isTransitioning ? 'Yes' : 'No'}</p>
      <div>
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setThemeWithTransition(t)}
            disabled={isTransitioning}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * Example 2: Sidebar Management
 */
export function SidebarExample() {
  const { isOpen, toggle, open, close } = useSidebar()

  return (
    <div>
      <h3>Sidebar Status: {isOpen ? 'Open' : 'Closed'}</h3>
      <button onClick={toggle}>Toggle Sidebar</button>
      <button onClick={open}>Open Sidebar</button>
      <button onClick={close}>Close Sidebar</button>
    </div>
  )
}

/**
 * Example 3: Modal Management
 */
export function ModalExample() {
  const { isOpen, modalType, modalData, openModal, closeModal } = useModal()

  return (
    <div>
      <h3>Modal Status: {isOpen ? 'Open' : 'Closed'}</h3>
      {isOpen && <p>Modal Type: {modalType}</p>}
      {isOpen && modalData ? (
        <p>Modal Data: {JSON.stringify(modalData)}</p>
      ) : null}
      
      <div>
        <button onClick={() => openModal('contact')}>
          Open Contact Modal
        </button>
        <button onClick={() => openModal('project', { id: 123 })}>
          Open Project Modal with Data
        </button>
        <button onClick={() => openModal('settings')}>
          Open Settings Modal
        </button>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  )
}

/**
 * Example 4: Search Functionality
 */
export function SearchExample() {
  const { query, setQuery, clear } = useSearch()

  return (
    <div>
      <h3>Search Query: {query || '(empty)'}</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <button onClick={clear}>Clear Search</button>
    </div>
  )
}

/**
 * Example 5: Using Multiple Atoms Together
 */
export function CombinedExample() {
  const { theme } = useThemeAtom()
  const { isOpen: sidebarOpen } = useSidebar()
  const { query } = useSearch()
  const { isOpen: modalOpen } = useModal()

  return (
    <div>
      <h3>Current Application State</h3>
      <ul>
        <li>Theme: {theme}</li>
        <li>Sidebar: {sidebarOpen ? 'Open' : 'Closed'}</li>
        <li>Search Query: {query || 'None'}</li>
        <li>Modal: {modalOpen ? 'Open' : 'Closed'}</li>
      </ul>
    </div>
  )
}
