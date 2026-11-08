'use client'

import { AnimatePresence, m } from 'framer-motion'

import { ProductCard } from '@/components/molecules/ProductCard'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { categories } from '@/data/products'

import { useProductFilter } from '@/hooks/useProductFilter'

import { fadeUp, viewportOnceNear } from '@/lib/motion'

import type { CategorySlug } from '@/types/product'

interface ProductGridProps {
  searchQuery: string
}

export function ProductGrid({ searchQuery }: ProductGridProps) {
  const { filteredProducts, activeCategory, setActiveCategory } =
    useProductFilter(searchQuery)

  return (
    <section id="catalogo" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeader
          label="Catalogo"
          title="I nostri strumenti"
          description="Esplora la selezione di test psicologici e corsi di formazione accreditati per professionisti"
        />

        <m.div
          className="mt-10 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceNear}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Tabs
            value={activeCategory}
            onValueChange={(val: string | null) => {
              if (val) setActiveCategory(val as CategorySlug)
            }}
          >
            <TabsList
              variant="line"
              className="w-full max-w-[calc(100vw-2rem)] overflow-x-auto overflow-y-hidden justify-start md:w-auto md:max-w-full md:justify-center h-auto gap-0 scrollbar-none"
            >
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.slug}
                  value={cat.slug}
                  className="px-4 py-2 text-sm whitespace-nowrap shrink-0"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </m.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center text-muted-foreground"
          >
            Nessun prodotto trovato. Prova a modificare i filtri o la ricerca.
          </m.p>
        )}
      </div>
    </section>
  )
}
