'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { useState } from 'react'

import { ContactForm } from '@/components/organisms/ContactForm'
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { HeroSection } from '@/components/organisms/HeroSection'
import { ProductGrid } from '@/components/organisms/ProductGrid'

export function LandingTemplate() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main>
          <HeroSection />
          <ProductGrid searchQuery={searchQuery} />
          <ContactForm />
        </main>
        <Footer />
      </LazyMotion>
    </MotionConfig>
  )
}
