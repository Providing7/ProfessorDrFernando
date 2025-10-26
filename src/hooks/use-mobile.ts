"use client"

import { useMediaQuery } from "@/hooks/use-media-query"

/**
 * A hook that returns true if the screen is mobile-sized (less than 768px).
 *
 * @returns {boolean} True if the screen is mobile-sized, false otherwise.
 */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 768px)")
}