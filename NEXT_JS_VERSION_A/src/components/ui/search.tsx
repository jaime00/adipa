'use client'

import { m, useAnimation } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { useAnimatedIcon } from '@/hooks/useAnimatedIcon'

import { cn } from '@/lib/utils'

import type { AnimatedIconHandle } from '@/types/icon'

interface SearchIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const SearchIcon = forwardRef<AnimatedIconHandle, SearchIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation()
    const { handleMouseEnter, handleMouseLeave } =
      useAnimatedIcon<HTMLDivElement>(ref, {
        onMouseEnter,
        onMouseLeave,
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal')
      })

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <m.svg
          animate={controls}
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          transition={{
            duration: 1,
            bounce: 0.3
          }}
          variants={{
            normal: { x: 0, y: 0 },
            animate: {
              x: [0, 0, -3, 0],
              y: [0, -4, 0, 0]
            }
          }}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </m.svg>
      </div>
    )
  }
)

SearchIcon.displayName = 'SearchIcon'

export { SearchIcon }
export type { AnimatedIconHandle as SearchIconHandle }
