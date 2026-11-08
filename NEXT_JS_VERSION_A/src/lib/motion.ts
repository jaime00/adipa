import type { Transition, Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
}

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30
}

export const durationDefault: Transition = {
  duration: 0.5
}

export const durationSlow: Transition = {
  duration: 0.7,
  ease: 'easeOut'
}

export const viewportOnce = { once: true, margin: '-100px' } as const
export const viewportOnceNear = { once: true, margin: '-80px' } as const
