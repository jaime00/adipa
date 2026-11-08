'use client'

import type { Variants } from 'framer-motion'
import { m, useAnimation } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { useAnimatedIcon } from '@/hooks/useAnimatedIcon'

import { cn } from '@/lib/utils'

import type { AnimatedIconHandle } from '@/types/icon'

interface InstagramIconProps extends HTMLAttributes<HTMLDivElement> {
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

const InstagramIcon = forwardRef<AnimatedIconHandle, InstagramIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const rectControls = useAnimation()
    const pathControls = useAnimation()
    const lineControls = useAnimation()
    const { handleMouseEnter, handleMouseLeave } =
      useAnimatedIcon<HTMLDivElement>(ref, {
        onMouseEnter,
        onMouseLeave,
        startAnimation: () => {
          rectControls.start('animate')
          pathControls.start('animate')
          lineControls.start('animate')
        },
        stopAnimation: () => {
          rectControls.start('normal')
          pathControls.start('normal')
          lineControls.start('normal')
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
          <m.rect
            animate={rectControls}
            height="20"
            initial="normal"
            rx="5"
            ry="5"
            variants={DRAW_VARIANTS}
            width="20"
            x="2"
            y="2"
          />
          <m.path
            animate={pathControls}
            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            initial="normal"
            variants={DRAW_VARIANTS}
          />
          <m.line
            animate={lineControls}
            initial="normal"
            variants={DRAW_VARIANTS}
            x1="17.5"
            x2="17.51"
            y1="6.5"
            y2="6.5"
          />
        </svg>
      </div>
    )
  }
)

InstagramIcon.displayName = 'InstagramIcon'

export { InstagramIcon }
export type { AnimatedIconHandle as InstagramIconHandle }
