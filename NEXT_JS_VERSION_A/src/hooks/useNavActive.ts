'use client'

import { useEffect, useState } from 'react'
import { useIsClient } from 'usehooks-ts'

export function useNavActive(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('')
  const isClient = useIsClient()

  useEffect(() => {
    if (!isClient) return

    const visibleSections = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id)
          } else {
            visibleSections.delete(entry.target.id)
          }
        }

        if (visibleSections.size > 0) {
          const sorted = sectionIds.filter((id) => visibleSections.has(id))
          setActiveId(sorted[sorted.length - 1] ?? '')
        } else {
          setActiveId('')
        }
      },
      { rootMargin: '-20% 0px -20% 0px' }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sectionIds, isClient])

  return activeId
}
