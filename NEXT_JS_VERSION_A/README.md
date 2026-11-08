# Giunti Psychometrics — Version A (Next.js)

Landing de catalogo de productos para Giunti Psychometrics Italia: tests psicologicos y cursos de formacion para profesionales.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS 4
- **Componentes UI:** shadcn/ui (estilo base-nova)
- **Lenguaje:** TypeScript (strict mode)
- **Animaciones:** Framer Motion
- **Fuentes:** system-ui (sans-serif)
- **Package manager:** pnpm

## Requisitos

- Node.js >= 20
- pnpm >= 10

## Instalacion

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de produccion

```bash
pnpm build
pnpm start
```

## Lint y formato

```bash
pnpm lint        # ESLint
npx prettier --write .   # Prettier + sort imports + Tailwind classes
```

## Versiones utilizadas

| Herramienta  | Version |
| ------------ | ------- |
| Node.js      | 24.0.0  |
| pnpm         | 10.34.5 |
| Next.js      | 16.4.5  |
| React        | 19.3.0  |
| TypeScript   | 5.x     |
| Tailwind CSS | 4.x     |
| shadcn/ui    | 4.23.0  |

## Estructura del proyecto

```
src/
├── app/                  # App Router (layout, page, globals.css)
├── components/
│   ├── atoms/            # Componentes minimos (Logo, ScrollProgress, Toast)
│   ├── molecules/        # Componentes compuestos (ProductCard, SocialLinks)
│   ├── organisms/        # Secciones completas (Header, Hero, ProductGrid, ContactForm, Footer)
│   ├── templates/        # Layout de la landing (LandingTemplate)
│   └── ui/               # Componentes shadcn + iconos SVG animados (Framer Motion)
├── data/                 # Datos ficticios de productos y categorias
├── hooks/                # Custom hooks (useContactForm, useProductFilter, useNavActive)
├── lib/                  # Utilidades (formatPrice, cn)
└── types/                # Tipos TypeScript (Product, Category, FormData)
```

## Identidad visual

| Token    | Color   | Uso                     |
| -------- | ------- | ----------------------- |
| Primario | #1B4F8A | Botones, links, titulos |
| Texto    | #0F2D52 | Texto principal         |
| Acento   | #0EA5E9 | Focus rings, highlights |
| Fondo    | #EFF6FF | Background general      |

## Supuestos

- Los datos de productos son ficticios y no corresponden a tests reales de Giunti Psychometrics.
- Los precios se almacenan en centavos (ej. 18500 = 185,00 EUR) y se formatean con formato italiano via `Intl.NumberFormat`.
- El formulario de contacto simula el envio sin backend real (timeout de 1 segundo).
- Las imagenes de productos provienen de Unsplash como placeholders.
- El logo se carga desde el dominio oficial de Giunti Psychometrics.

## Mejoras respecto a la referencia

- **shadcn/ui como sistema de componentes:** Card, Badge, Tabs, Sheet, Field, Button, Input, Textarea, Tooltip y Separator de shadcn para consistencia visual y accesibilidad built-in (Radix/Base UI).
- **Sheet para menu mobile:** drawer lateral animado en vez de menu desplegable simple.
- **Tabs para filtrado de categorias:** componente accesible con keyboard navigation y linea indicadora animada.
- **Formulario con Field system:** layout de formulario con validacion visual via `data-invalid` y `aria-invalid`, FieldGroup, FieldLabel y FieldError de shadcn.
- **Tooltips en botones de accion:** tooltip contextual en "Aggiungi al carrello".
- **Cards minimalistas:** inspiradas en estilo Udemy — imagen con bordes redondeados interna, jerarquia titulo > autor > rating + reviews, badges de formato, precio y boton outline.
- **Iconos animados:** todos los iconos SVG tienen microinteracciones al hover via Framer Motion.
- **Animaciones de entrada:** secciones aparecen con transiciones suaves al scroll (Framer Motion + viewport detection).
- **Filtro y busqueda combinados:** el buscador del header filtra la grilla en tiempo real y hace scroll automatico al catalogo.
- **Stats bar integrada:** barra de estadisticas en el hero con efecto glassmorphism.
- **Tipografia:** system-ui como fuente base para todo el sitio.
- **Responsive completo:** breakpoints en 375px, 768px y 1280px con adaptaciones especificas.
- **Accesibilidad WCAG 2.1 AA:** focus visible en todos los elementos interactivos, alt text en imagenes, aria-labels, navegacion completa por teclado, contraste suficiente.
- **Contacto reorganizado:** grid 2 columnas (Sede + Telefono arriba, Orari abajo) para mejor uso del espacio.
