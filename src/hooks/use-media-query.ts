"use client"

import * as React from "react"

/**
 * A hook for tracking the state of a media query.
 *
 * @param query - The media query to track.
 * @returns `true` if the media query matches, otherwise `false`.
 */
export function useMediaQuery(query: string): boolean {
  const [value, setValue] = React.useState(false)

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    setValue(result.matches)

    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}