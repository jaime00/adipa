# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Estructura del repositorio

Monorepo con dos implementaciones independientes de la misma landing page (catalogo de productos psicometricos de "Giunti Psychometrics", idioma italiano):

- **`NEXT_JS_VERSION_A/`** — Next.js 16 + React 19 + Tailwind CSS 4 + Framer Motion (static export)
- **`LARAVEL_VERSION_B/`** — Laravel 9 + Laravel Mix + jQuery + Stylus

Cada directorio tiene su propio `CLAUDE.md` con comandos, stack y arquitectura detallada. Consultar esos archivos antes de trabajar en cada sub-proyecto.

## Comandos rapidos

### Next.js (Version A)
```bash
cd NEXT_JS_VERSION_A
pnpm dev          # Dev server :3000
pnpm build        # Static export a /out
pnpm lint         # ESLint
```

### Laravel (Version B)
```bash
cd LARAVEL_VERSION_B
composer install && npm install
php artisan serve  # Dev server :8000
npm run dev        # Build assets
php artisan test   # PHPUnit
```

## Arquitectura compartida

Ambas versiones implementan la misma pagina con secciones identicas: Header, Hero, ProductGrid (filtro por categoria + busqueda), ContactForm y Footer. Datos de productos ficticios con precios en centavos (EUR), formateados con locale italiano.

Ninguna version usa base de datos — datos en config/archivos estaticos.

## Commits

- NUNCA incluir referencias a Claude, Claude Code, modelos de IA, o "Co-authored-by" de ningun modelo/IA en mensajes de commit.
- Los commits deben parecer escritos completamente por el usuario humano.
