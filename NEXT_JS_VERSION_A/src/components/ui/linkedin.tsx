'use client'

import type { Variants } from 'framer-motion'
import { m, useAnimation } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { useAnimatedIcon } from '@/hooks/useAnimatedIcon'

import { cn } from '@/lib/utils'

import type { AnimatedIconHandle } from '@/types/icon'

interface LinkedinIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const DRAW_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 }
    }
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: 'linear',
      opacity: { duration: 0.1 }
    }
  }
}

const LinkedinIcon = forwardRef<AnimatedIconHandle, LinkedinIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const pathControls = useAnimation()
    const rectControls = useAnimation()
    const circleControls = useAnimation()
    const { handleMouseEnter, handleMouseLeave } =
      useAnimatedIcon<HTMLDivElement>(ref, {
        onMouseEnter,
        onMouseLeave,
        startAnimation: () => {
          pathControls.start('animate')
          rectControls.start('animate')
          circleControls.start('animate')
        },
        stopAnimation: () => {
          pathControls.start('normal')
          rectControls.start('normal')
          circleControls.start('normal')
        }
      })

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            animate={pathControls}
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            initial="normal"
            variants={DRAW_VARIANTS}
          />
          <m.rect
            animate={rectControls}
            height="12"
            initial="normal"
            variants={DRAW_VARIANTS}
            width="4"
            x="2"
            y="9"
          />
          <m.circle
            animate={circleControls}
            cx="4"
            cy="4"
            initial="normal"
            r="2"
            variants={DRAW_VARIANTS}
          />
        </svg>
      </div>
    )
  }
)

LinkedinIcon.displayName = 'LinkedinIcon'

export { LinkedinIcon }
