'use client'

import type { Variants } from 'framer-motion'
import { m, useAnimation } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { useAnimatedIcon } from '@/hooks/useAnimatedIcon'

import { cn } from '@/lib/utils'

import type { AnimatedIconHandle } from '@/types/icon'

interface PhoneIconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: number
}

const PHONE_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    scale: 1
  },
  animate: {
    rotate: [10, 20, -10, 10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.9,
      ease: 'easeInOut'
    }
  }
}

const PhoneIcon = forwardRef<AnimatedIconHandle, PhoneIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation()
    const { handleMouseEnter, handleMouseLeave } =
      useAnimatedIcon<HTMLSpanElement>(ref, {
        onMouseEnter,
        onMouseLeave,
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal')
      })

    return (
      <span
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
          variants={PHONE_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
        </m.svg>
      </span>
    )
  }
)

PhoneIcon.displayName = 'PhoneIcon'

export { PhoneIcon }
