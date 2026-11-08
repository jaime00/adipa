'use client'

import { motion } from 'framer-motion'

import { AnimatedIconButton } from '@/components/ui/animated-icon-button'
import { ArrowRightIcon } from '@/components/ui/arrow-right'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { scrollTo } from '@/lib/scrollTo'

const stats = [
  { value: '75+', label: 'Anni di esperienza' },
  { value: '2.500+', label: 'Test pubblicati' },
  { value: '15', label: 'Paesi nel mondo' }
]

export function HeroSection() {
  return (
    <section
      id="test"
      className="relative bg-gradient-to-br from-gp-primary-dark via-gp-primary to-gp-primary-light overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pb-10">
        <div className="pb-10 pt-24 md:pb-16 md:pt-36 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-white/10 text-gp-accent-light border-white/15 backdrop-blur-sm text-xs uppercase tracking-widest font-semibold px-3 py-1 h-auto"
            >
              Catalogo 2025
            </Badge>

            <h1 className="font-extrabold text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl tracking-tight">
              Strumenti per la{' '}
              <span className="relative">
                <span className="relative z-10 text-gp-accent-light">
                  mente
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gp-accent/20 -skew-x-3 rounded" />
              </span>
              , <br className="hidden lg:block" />
              risorse per i{' '}
              <span className="text-gp-accent-light">professionisti</span>
            </h1>

            <p className="mt-6 text-lg text-white/70 md:text-xl max-w-2xl leading-relaxed">
              Scopri il catalogo completo di test psicologici, batterie
              diagnostiche e corsi di formazione per professionisti della salute
              mentale.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <AnimatedIconButton
                icon={ArrowRightIcon}
                iconSize={18}
                iconPosition="right"
                size="lg"
                className="bg-gp-accent text-white hover:bg-gp-accent-light shadow-lg shadow-gp-accent/25 h-11 px-6 text-sm"
                onClick={() => scrollTo('catalogo')}
              >
                Esplora il catalogo
              </AnimatedIconButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-gp-primary backdrop-blur-sm h-11 px-6 text-sm"
                onClick={() => scrollTo('contatti')}
              >
                Contattaci
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mb-8 rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 md:mb-12 md:p-8"
        >
          <div className="grid grid-cols-3 divide-x divide-white/15">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 text-center md:px-8">
                <p className="text-2xl font-extrabold text-white md:text-4xl tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/60 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
