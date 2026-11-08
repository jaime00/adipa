'use client'

import { m } from 'framer-motion'
import Image from 'next/image'

import { AnimatedIconButton } from '@/components/ui/animated-icon-button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CartIcon } from '@/components/ui/cart'

import { formatPrice } from '@/lib/formatPrice'

import type { Product, ProductFormat } from '@/types/product'

const formatColors: Record<ProductFormat, string> = {
  Cartaceo: 'bg-gp-badge-cartaceo text-white border-transparent',
  Digitale: 'bg-gp-badge-digitale text-white border-transparent',
  'Corso online': 'bg-gp-badge-corso text-white border-transparent',
  'In presenza': 'bg-gp-badge-presenza text-white border-transparent'
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountedPrice < product.originalPrice

  return (
    <m.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group flex flex-col h-full p-4 gap-4 transition-shadow duration-300 hover:shadow-card-hover">
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <div>
            <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
              {product.author}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {product.tag && (
              <Badge
                variant="outline"
                className="border-gp-accent text-gp-accent font-semibold"
              >
                {product.tag}
              </Badge>
            )}
            <div className="flex items-center gap-1">
              <svg
                className="size-3.5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-foreground">
                {product.rating}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {product.reviewCount.toLocaleString('it-IT')} valutazioni
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <Badge className={formatColors[product.format]}>
              {product.format}
            </Badge>
            <Badge variant="secondary" className="h-auto py-0.5 font-normal">
              {product.ageRange}
            </Badge>
            {product.startDate && (
              <Badge variant="secondary" className="h-auto py-0.5 font-normal">
                {product.startDate}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.discountedPrice)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <AnimatedIconButton
            icon={CartIcon}
            iconSize={14}
            variant="outline"
            size="sm"
          >
            Aggiungi al carrello
          </AnimatedIconButton>
        </div>
      </Card>
    </m.div>
  )
}
