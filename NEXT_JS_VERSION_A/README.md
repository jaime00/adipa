# Giunti Psychometrics — Landing Page (Version A: Next.js)

Landing de catálogo de productos para Giunti Psychometrics Italia: tests psicológicos y cursos de formación para profesionales.

## Deploy

Desplegado en **Netlify**: [https://adipa-next.netlify.app/](https://adipa-next.netlify.app/)

## Requisitos previos

- **Node.js** >= 20
- **pnpm** >= 10

## Instalación

```bash
# Clonar el repositorio e ingresar al directorio
cd NEXT_JS_VERSION_A

# Instalar dependencias
pnpm install
```

## Comandos

```bash
# Servidor de desarrollo
pnpm dev               # http://localhost:3000

# Build de producción
pnpm build

# Servidor de producción
pnpm start

# Lint
pnpm lint

# Formato
npx prettier --write .
```

## Stack técnico

| Componente      | Tecnología                   |
| --------------- | ---------------------------- |
| Framework       | Next.js 16 (App Router)      |
| Estilos         | Tailwind CSS 4               |
| Componentes UI  | shadcn/ui (estilo base-nova) |
| Lenguaje        | TypeScript (strict mode)     |
| Animaciones     | Framer Motion                |
| Fuentes         | system-ui (sans-serif)       |
| Package manager | pnpm                         |

## Estructura del proyecto

```
src/
├── app/                  # App Router (layout, page, globals.css)
├── components/
│   ├── atoms/            # Componentes mínimos (Logo, ScrollProgress, Toast)
│   ├── molecules/        # Componentes compuestos (ProductCard, SocialLinks)
│   ├── organisms/        # Secciones completas (Header, Hero, ProductGrid, ContactForm, Footer)
│   ├── templates/        # Layout de la landing (LandingTemplate)
│   └── ui/               # Componentes shadcn + iconos SVG animados (Framer Motion)
├── data/                 # Datos ficticios de productos y categorías
├── hooks/                # Custom hooks (useContactForm, useProductFilter, useNavActive)
├── lib/                  # Utilidades (formatPrice, cn)
└── types/                # Tipos TypeScript (Product, Category, FormData)
```

## Datos

Los productos se definen en `src/data/` (9 productos ficticios en 4 categorías). No se usa base de datos. Los precios se almacenan en centavos y se formatean con formato italiano vía `Intl.NumberFormat`.

**Categorías:** Clinica e Neuropsicologia, Scuola ed Età Evolutiva, Lavoro e Organizzazioni, Formazione.

## Diseño responsive

- **Mobile:** 375px (1 columna, menú hamburguesa via Sheet)
- **Tablet:** 768px (2 columnas)
- **Desktop:** 1280px+ (3 columnas)

## Accesibilidad (WCAG 2.1 AA)

- Focus visible en todos los elementos interactivos
- Alt text en imágenes, aria-labels en navegación y formularios
- Navegación completa por teclado (Tabs con keyboard navigation via Radix)
- Contraste suficiente entre texto y fondo
- Componentes shadcn/ui con accesibilidad built-in (Radix/Base UI)

## Identidad visual

| Token    | Color     | Uso                     |
| -------- | --------- | ----------------------- |
| Primario | `#1B4F8A` | Botones, links, títulos |
| Texto    | `#0F2D52` | Texto principal         |
| Acento   | `#0EA5E9` | Focus rings, highlights |
| Fondo    | `#EFF6FF` | Background general      |

## Supuestos y decisiones

- **Sin backend real para el formulario:** el envío se simula client-side con un timeout de 1 segundo.
- **Imágenes de Unsplash:** se usan como placeholder para productos.
- **Nombres ficticios:** todos los tests, autores y cursos son inventados para evitar material protegido.
- **Logo externo:** se carga desde el dominio oficial de Giunti Psychometrics.
- **shadcn/ui como sistema de componentes:** Card, Badge, Tabs, Sheet, Field, Button, Input, Textarea, Tooltip y Separator para consistencia visual y accesibilidad built-in.
- **Iconos animados:** todos los iconos SVG tienen microinteracciones al hover vía Framer Motion.
- **Filtro y búsqueda combinados:** el buscador del header filtra la grilla en tiempo real y hace scroll automático al catálogo.

## Mejoras propuestas

- Envío real del formulario de contacto vía backend (SMTP o API)
- Páginas de detalle por producto
- Carrito de compras con persistencia en localStorage
- Paginación o infinite scroll para catálogos grandes
- Tests E2E con Cypress o Playwright
