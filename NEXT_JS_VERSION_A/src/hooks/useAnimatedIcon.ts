import type { ForwardedRef } from 'react'
import { useCallback, useImperativeHandle, useRef } from 'react'

import type { AnimatedIconHandle } from '@/types/icon'

interface UseAnimatedIconOptions<T extends HTMLElement> {
  onMouseEnter?: React.MouseEventHandler<T>
  onMouseLeave?: React.MouseEventHandler<T>
  startAnimation: () => void
  stopAnimation: () => void
}

export function useAnimatedIcon<T extends HTMLElement = HTMLElement>(
  ref: ForwardedRef<AnimatedIconHandle>,
  {
    onMouseEnter,
    onMouseLeave,
    startAnimation,
    stopAnimation
  }: UseAnimatedIconOptions<T>
) {
  const isControlledRef = useRef(false)

  useImperativeHandle(ref, () => {
    isControlledRef.current = true
    return { startAnimation, stopAnimation }
  })

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<T>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e)
      } else {
        startAnimation()
      }
    },
    [startAnimation, onMouseEnter]
  )

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<T>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e)
      } else {
        stopAnimation()
      }
    },
    [stopAnimation, onMouseLeave]
  )

  return { handleMouseEnter, handleMouseLeave }
}
