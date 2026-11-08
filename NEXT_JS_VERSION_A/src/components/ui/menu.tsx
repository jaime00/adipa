'use client'

import type { Variants } from 'framer-motion'
import { m, useAnimation } from 'framer-motion'
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { useAnimatedIcon } from '@/hooks/useAnimatedIcon'

import { cn } from '@/lib/utils'

import type { AnimatedIconHandle } from '@/types/icon'

interface MenuIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const LINE_VARIANTS: Variants = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1
  },
  animate: (custom: number) => ({
    rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
    y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
    opacity: custom === 2 ? 0 : 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  })
}

const MenuIcon = forwardRef<AnimatedIconHandle, MenuIconProps>(
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
          <m.line
            animate={controls}
            custom={1}
            initial="normal"
            variants={LINE_VARIANTS}
            x1="4"
            x2="20"
            y1="6"
            y2="6"
          />
          <m.line
            animate={controls}
            custom={2}
            initial="normal"
            variants={LINE_VARIANTS}
            x1="4"
            x2="20"
            y1="12"
            y2="12"
          />
          <m.line
            animate={controls}
            custom={3}
            initial="normal"
            variants={LINE_VARIANTS}
            x1="4"
            x2="20"
            y1="18"
            y2="18"
          />
        </svg>
      </div>
    )
  }
)

MenuIcon.displayName = 'MenuIcon'

export { MenuIcon }
export type { AnimatedIconHandle as MenuIconHandle }
