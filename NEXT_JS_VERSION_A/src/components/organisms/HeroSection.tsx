'use client'

import { m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

import { AnimatedIconButton } from '@/components/ui/animated-icon-button'
import { ArrowRightIcon } from '@/components/ui/arrow-right'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { scrollTo } from '@/lib/scrollTo'

const stats = [
  { end: 75, suffix: '+', label: 'Anni di esperienza', separator: false },
  { end: 2500, suffix: '+', label: 'Test pubblicati', separator: true },
  { end: 15, suffix: '', label: 'Paesi nel mondo', separator: false }
]

const numberFormat = new Intl.NumberFormat('it-IT')

function formatNumber(n: number, useSeparator: boolean) {
  if (!useSeparator) return n.toString()
  return numberFormat.format(n)
}

function useCountUp(end: number, duration = 2400) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  useEffect(() => {
    if (isIntersecting && !started) setStarted(true)
  }, [isIntersecting, started])

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    let raf: number
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  return { count, ref }
}

function CountUpStat({ stat }: { stat: (typeof stats)[number] }) {
  const { count, ref } = useCountUp(stat.end)
  return (
    <div ref={ref} className="px-4 text-center md:px-8">
      <p className="text-2xl font-extrabold text-white md:text-4xl tracking-tight">
        {formatNumber(count, stat.separator)}
        {stat.suffix}
      </p>
      <p className="mt-1 text-xs text-white/60 md:text-sm">{stat.label}</p>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="test"
      className="relative bg-gradient-to-br from-gp-primary-dark via-gp-primary to-gp-primary-light overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-6 pb-10">
        <div className="pb-10 pt-24 md:pb-16 md:pt-36 lg:pt-40">
          <m.div
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

            <h1 className="font-extrabold text-[1.75rem] leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
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

            <p className="mt-6 text-base text-white/70 sm:text-lg md:text-xl max-w-2xl leading-relaxed">
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
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mb-8 rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 md:mb-12 md:p-8"
        >
          <div className="grid grid-cols-3 divide-x divide-white/15">
            {stats.map((stat) => (
              <CountUpStat key={stat.label} stat={stat} />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}
