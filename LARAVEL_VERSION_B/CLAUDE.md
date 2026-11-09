# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for "Giunti Psychometrics" (psychological tests and training catalog) built with Laravel 9 + Laravel Mix + jQuery + Stylus. Single-page app, no database interaction — product data lives in `config/products.php`.

## Commands

```bash
# Install dependencies
composer install
npm install

# Build frontend assets (dev)
npm run dev

# Build frontend assets (watch mode)
npm run watch

# Build frontend assets (production)
npm run prod

# Run tests
php artisan test
php artisan test --filter=ExampleTest   # single test

# Serve locally
php artisan serve
```

## Architecture

### Frontend Build Pipeline

Uses **Laravel Mix** (not Vite — `vite.config.js` exists but is unused). Config in `webpack.mix.js`:
- JS entry: `resources/js/app.js` → `public/js/app.js`
- CSS entry: `resources/stylus/app.styl` → `public/css/app.css`
- jQuery auto-loaded as `$` and `window.jQuery`
- Assets referenced in Blade via `mix()` helper

### Stylus Structure

`resources/stylus/app.styl` imports in order:
1. `_variables.styl`, `_mixins.styl`, `_base.styl` — design tokens and global styles
2. `components/` — reusable UI pieces (button, input, badge, card, tabs, toast, scroll-progress, mobile-menu)
3. `sections/` — page sections (header, hero, product-grid, contact-form, footer)

### JS Modules

`resources/js/app.js` requires modules from `resources/js/modules/`:
- `smooth-scroll`, `scroll-progress`, `nav-active`, `mobile-menu`, `count-up`, `product-filter`, `contact-form`

All use jQuery. No framework — vanilla JS modules with `require()`.

### Blade Views

Layout: `resources/views/layouts/app.blade.php` (lang="it")
Page: `resources/views/landing.blade.php` — composes sections via `@include`:
- `sections/header`, `sections/hero`, `sections/product-grid`, `sections/contact-form`, `sections/footer`
- Reusable partials in `resources/views/partials/` (logo, section-header, product-card, social-links, toast)

### Data Flow

- `LandingController::index()` reads `config('products.items')` and `config('products.categories')` then passes to view
- Single route: `GET /` → `LandingController@index`
- Product prices stored as cents (integers); `formatPrice()` global helper in `app/Helpers/format.php` converts to EUR format
- Helper auto-loaded via `composer.json` `autoload.files`

### Key Conventions

- Language/locale: Italian (it)
- Currency: EUR, prices in cents
- No database — all data is config-driven
- No authentication flow used (Sanctum installed but unused)
