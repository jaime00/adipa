'use client'

import { m, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <m.div
      className="absolute bottom-0 left-0 right-0 h-[3px] origin-left bg-gp-accent"
      style={{ scaleX }}
    />
  )
}
