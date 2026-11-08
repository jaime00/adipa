'use client'

import { motion } from 'framer-motion'

import { durationDefault, fadeUp, viewportOnce } from '@/lib/motion'

interface SectionHeaderProps {
  label: string
  title: string
  description: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={durationDefault}
      className="text-center"
    >
      <span className="inline-block font-semibold text-xs uppercase tracking-[0.2em] text-gp-accent mb-3">
        {label}
      </span>
      <h2 className="font-extrabold text-3xl text-foreground md:text-4xl tracking-tight">
        {title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  )
}
