# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
pnpm dev          # Dev server (http://localhost:3000)
pnpm build        # Build produccion
pnpm start        # Serve build produccion
pnpm lint         # ESLint (next/core-web-vitals + next/typescript)
```

No hay test runner configurado.

## Stack

- Next.js 16 (App Router) con React 19 y TypeScript strict
- Tailwind CSS 4 (via `@tailwindcss/turbopack`)
- Framer Motion para animaciones
- shadcn/ui (estilo base-nova, `components.json` en raiz)
- pnpm como package manager

## Arquitectura

Landing page single-page para catalogo de productos psicometricos (idioma italiano).

### Atomic Design + shadcn/ui

Componentes organizados en `src/components/` siguiendo Atomic Design:

- **atoms/** — Logo, ScrollProgress, Toast (componentes custom minimos)
- **molecules/** — ProductCard, SocialLinks (componentes compuestos)
- **organisms/** — Header, HeroSection, ProductGrid, ContactForm, Footer (secciones completas)
- **templates/** — `LandingTemplate` orquesta todo; es `"use client"` y maneja `searchQuery` como estado compartido entre Header y ProductGrid
- **ui/** — Componentes shadcn (Button, Card, Badge, Tabs, Input, Textarea, Field, Sheet, Separator, Tooltip, NavigationMenu, Label) + iconos SVG animados con Framer Motion

### Flujo de datos

- `page.tsx` renderiza `LandingTemplate` (unico entry point)
- `LandingTemplate` levanta `searchQuery` state y lo pasa a `Header` (input) y `ProductGrid` (filtro)
- `useProductFilter` hook filtra productos por categoria + texto de busqueda
- `useContactForm` hook maneja validacion y submit simulado del formulario de contacto
- `useNavActive` hook detecta seccion visible via IntersectionObserver
- Datos en `src/data/products.ts` — productos ficticios con precios en centavos

### Convenciones

- Path alias: `@/*` apunta a `src/*`
- Precios en centavos (ej. 18500 = 185,00 EUR), formateados con `Intl.NumberFormat("it-IT")` via `formatPrice()`
- `cn()` re-exportado desde paquete `cn` en `src/lib/utils.ts`
- Imagenes remotas desde `images.unsplash.com` y `www.giuntipsy.com` (configurado en `next.config.ts`)
- Fuente: system-ui (sans-serif)
- `lang="it"` en HTML root
- Colores de marca via CSS variables: `--primary` (#1B4F8A), `--foreground` (#0F2D52), `--ring` (#0EA5E9), `--background` (#EFF6FF)
- Variables `gp-*` en Tailwind para colores especificos de la marca

## Commits

- NUNCA incluir referencias a Claude, Claude Code, modelos de IA, o "Co-authored-by" de ningun modelo/IA en mensajes de commit.
- Los commits deben parecer escritos completamente por el usuario humano.
