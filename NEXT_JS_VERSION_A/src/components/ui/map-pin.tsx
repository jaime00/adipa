'use client'

import type { Variants } from 'framer-motion'
import { m, useAnimation } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { useAnimatedIcon } from '@/hooks/useAnimatedIcon'

import { cn } from '@/lib/utils'

import type { AnimatedIconHandle } from '@/types/icon'

interface MapPinIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const SVG_VARIANTS: Variants = {
  normal: {
    y: 0
  },
  animate: {
    y: [0, -5, -3],
    transition: {
      duration: 0.5,
      times: [0, 0.6, 1]
    }
  }
}

const CIRCLE_VARIANTS: Variants = {
  normal: {
    opacity: 1
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [0.5, 0],
    transition: {
      delay: 0.3,
      duration: 0.5,
      opacity: { duration: 0.1, delay: 0.3 }
    }
  }
}

const MapPinIcon = forwardRef<AnimatedIconHandle, MapPinIconProps>(
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
          initial="normal"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          variants={SVG_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <m.circle
            animate={controls}
            cx="12"
            cy="10"
            initial="normal"
            r="3"
            variants={CIRCLE_VARIANTS}
          />
        </m.svg>
      </div>
    )
  }
)

MapPinIcon.displayName = 'MapPinIcon'

export { MapPinIcon }
export type { AnimatedIconHandle as MapPinIconHandle }
