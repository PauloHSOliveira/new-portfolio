import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes with proper conflict resolution.
 * This utility combines clsx for conditional classes and tailwind-merge
 * to handle Tailwind class conflicts (e.g., 'px-2 px-4' becomes 'px-4').
 *
 * @param inputs - Class names, objects, or arrays to merge
 * @returns A single string of merged and deduplicated class names
 *
 * @example
 * cn('px-2 py-1', 'px-4') // Returns: 'py-1 px-4'
 * cn('text-red-500', isActive && 'text-green-500') // Conditional classes
 * cn('bg-red-500', { 'bg-blue-500': isBlue }) // Object syntax
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
