# Giunti Psychometrics — Landing Page (Version B: Laravel)

Landing page de catálogo de productos psicométricos para Giunti Psychometrics Italia, construida con Laravel 9, Blade, Stylus, jQuery y Laravel Mix.

## Deploy

Desplegado en **Railway**: [https://adipa-production.up.railway.app/](https://adipa-production.up.railway.app/)

## Requisitos previos

- **PHP** >= 8.0.2
- **Composer** >= 2.x
- **Node.js** >= 16.x
- **npm** >= 8.x

## Instalación

```bash
# Clonar el repositorio e ingresar al directorio
cd LARAVEL_VERSION_B

# Instalar dependencias PHP
composer install

# Instalar dependencias Node
npm install

# Configurar entorno
cp .env.example .env
php artisan key:generate
```

## Comandos

```bash
# Servidor de desarrollo
php artisan serve          # http://localhost:8000

# Build de assets (desarrollo)
npm run dev

# Build de assets (watch mode)
npm run watch

# Build de assets (producción, minificado)
npm run prod

# Tests
php artisan test
```

## Stack técnico

| Componente | Tecnología |
|-----------|-----------|
| Framework | Laravel 9 |
| Templates | Blade (layouts + sections + partials) |
| Preprocesador CSS | Stylus |
| Nomenclatura CSS | BEM (Block Element Modifier) |
| Interactividad | jQuery 3.7 |
| Build tool | Laravel Mix 6 (Webpack 5) |

## Estructura del proyecto

```
resources/
├── views/
│   ├── layouts/app.blade.php        # Layout principal (lang="it")
│   ├── landing.blade.php            # Página principal
│   ├── sections/                    # Secciones de la landing
│   │   ├── header.blade.php
│   │   ├── hero.blade.php
│   │   ├── product-grid.blade.php
│   │   ├── contact-form.blade.php
│   │   └── footer.blade.php
│   └── partials/                    # Componentes reutilizables
│       ├── logo.blade.php
│       ├── section-header.blade.php
│       ├── product-card.blade.php
│       ├── social-links.blade.php
│       └── toast.blade.php
├── stylus/
│   ├── app.styl                     # Entry point
│   ├── _variables.styl              # Design tokens
│   ├── _mixins.styl                 # Mixins responsive
│   ├── _base.styl                   # Reset y estilos globales
│   ├── components/                  # UI reutilizable (button, badge, card, tabs...)
│   └── sections/                    # Estilos por sección
└── js/
    ├── app.js                       # Entry point
    └── modules/                     # Módulos jQuery
        ├── product-filter.js        # Filtrado por categoría y búsqueda
        ├── contact-form.js          # Validación client-side
        ├── mobile-menu.js           # Menú responsive
        ├── smooth-scroll.js         # Scroll suave a secciones
        ├── scroll-progress.js       # Barra de progreso
        ├── nav-active.js            # Highlight de sección activa
        └── count-up.js              # Animación de números en hero
```

## Datos

Los productos se definen en `config/products.php` (9 productos ficticios en 4 categorías). No se usa base de datos. Los precios se almacenan en centavos y se formatean con locale italiano mediante el helper `formatPrice()` en `app/Helpers/format.php`.

**Categorías:** Clinica e Neuropsicologia, Scuola ed Età Evolutiva, Lavoro e Organizzazioni, Formazione.

## Diseño responsive

- **Mobile:** 375px (1 columna, menú hamburguesa)
- **Tablet:** 768px (2 columnas)
- **Desktop:** 1280px+ (3 columnas)

## Accesibilidad (WCAG 2.1 AA)

- HTML semántico (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Atributos ARIA en formularios, tabs y navegación
- Navegación completa por teclado (focus-visible, Escape para cerrar menú)
- Textos alternativos en todas las imágenes
- Contraste suficiente entre texto y fondo

## Identidad visual

| Token | Color | Uso |
|-------|-------|-----|
| Primario | `#1B4F8A` | Botones, links, títulos |
| Texto | `#0F2D52` | Texto principal |
| Acento | `#0EA5E9` | Focus rings, highlights |
| Fondo | `#EFF6FF` | Background general |

## Supuestos y decisiones

- **Sin backend real para el formulario:** el envío se simula client-side con un toast de confirmación.
- **Imágenes de Unsplash:** se usan como placeholder para productos.
- **Nombres ficticios:** todos los tests, autores y cursos son inventados para evitar material protegido.
- **Laravel Mix sobre Vite:** se eligió Mix por compatibilidad con Stylus y el requisito de la prueba (Gulp o Laravel Mix).
- **Scroll progress bar y animaciones count-up:** mejoras adicionales para enriquecer la experiencia de usuario.
- **Mapa en footer:** se incluyó un iframe de Google Maps como elemento visual adicional.

## Mejoras propuestas

- Envío real del formulario de contacto vía backend (SMTP o API)
- Páginas de detalle por producto
- Carrito de compras con persistencia en localStorage
- Paginación o infinite scroll para catálogos grandes
- Tests E2E con Cypress o Playwright
