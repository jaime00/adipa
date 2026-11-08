export type ProductFormat =
  'Cartaceo' | 'Digitale' | 'Corso online' | 'In presenza'

export type CategorySlug =
  | 'tutti'
  | 'clinica-neuropsicologia'
  | 'scuola-eta-evolutiva'
  | 'lavoro-organizzazioni'
  | 'formazione'

export interface Category {
  slug: CategorySlug
  label: string
}

export type ProductTag = 'Bestseller' | 'Novità'

export interface Product {
  id: number
  name: string
  author: string
  category: CategorySlug
  ageRange: string
  startDate?: string
  originalPrice: number
  discountedPrice: number
  format: ProductFormat
  imageUrl: string
  imageAlt: string
  description: string
  rating: number
  reviewCount: number
  tag?: ProductTag
}
