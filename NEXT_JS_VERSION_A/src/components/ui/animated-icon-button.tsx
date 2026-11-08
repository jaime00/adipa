'use client'

import type { ComponentProps, Ref } from 'react'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'

import type { AnimatedIconHandle } from '@/types/icon'

interface AnimatedIconButtonProps extends ComponentProps<typeof Button> {
  icon: React.ComponentType<{
    ref?: Ref<AnimatedIconHandle>
    size?: number
    className?: string
  }>
  iconSize?: number
  iconClassName?: string
  iconPosition?: 'left' | 'right'
}

export function AnimatedIconButton({
  icon: Icon,
  iconSize = 14,
  iconClassName,
  iconPosition = 'left',
  children,
  onMouseEnter,
  onMouseLeave,
  ...buttonProps
}: AnimatedIconButtonProps) {
  const iconRef = useRef<AnimatedIconHandle>(null)

  return (
    <Button
      onMouseEnter={(e) => {
        iconRef.current?.startAnimation()
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        iconRef.current?.stopAnimation()
        onMouseLeave?.(e)
      }}
      {...buttonProps}
    >
      {iconPosition === 'left' && (
        <Icon ref={iconRef} size={iconSize} className={iconClassName} />
      )}
      {children}
      {iconPosition === 'right' && (
        <Icon ref={iconRef} size={iconSize} className={iconClassName} />
      )}
    </Button>
  )
}
