'use client'

import { useMemo, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'

import { products } from '@/data/products'

import type { CategorySlug } from '@/types/product'

export function useProductFilter(searchQuery: string) {
  const [activeCategory, setActiveCategory] = useState<CategorySlug>('tutti')
  const [debouncedQuery] = useDebounceValue(searchQuery, 300)

  const filteredProducts = useMemo(() => {
    const query = debouncedQuery.toLowerCase().trim()

    return products
      .filter((product) => {
        const matchesCategory =
          activeCategory === 'tutti' || product.category === activeCategory

        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.author.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.format.toLowerCase().includes(query)

        return matchesCategory && matchesSearch
      })
      .sort((a, b) => {
        const aIsBestseller = a.tag === 'Bestseller' ? 0 : 1
        const bIsBestseller = b.tag === 'Bestseller' ? 0 : 1
        return aIsBestseller - bIsBestseller
      })
  }, [activeCategory, debouncedQuery])

  return {
    filteredProducts,
    activeCategory,
    setActiveCategory
  }
}
