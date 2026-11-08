'use client'

import type { ReactNode, Ref } from 'react'
import { useRef } from 'react'

import { cn } from '@/lib/utils'

import type { AnimatedIconHandle } from '@/types/icon'

interface ContactInfoItemProps {
  icon: React.ComponentType<{
    ref?: Ref<AnimatedIconHandle>
    className?: string
    size?: number
  }>
  title: string
  children: ReactNode
  className?: string
}

export function ContactInfoItem({
  icon: Icon,
  title,
  children,
  className
}: ContactInfoItemProps) {
  const iconRef = useRef<AnimatedIconHandle>(null)

  return (
    <div
      className={cn('flex gap-3 cursor-default', className)}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon ref={iconRef} className="text-primary" size={20} />
      </div>
      <div>
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}
