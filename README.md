# Prueba Técnica — Giunti Psychometrics Landing Page

Monorepo con dos implementaciones independientes de la misma landing page: un catálogo de productos psicométricos para **Giunti Psychometrics** (idioma italiano).

Ambas versiones replican las mismas secciones (Header, Hero, ProductGrid con filtro y búsqueda, ContactForm y Footer), comparten la misma paleta de colores e identidad visual, y usan datos ficticios sin base de datos.

## Versiones

| Versión | Stack | Directorio | Deploy |
|---------|-------|-----------|--------|
| **A** | Next.js 16 + React 19 + Tailwind CSS 4 + Framer Motion | [`NEXT_JS_VERSION_A/`](./NEXT_JS_VERSION_A/) | [adipa-next.netlify.app](https://adipa-next.netlify.app/) |
| **B** | Laravel 9 + Laravel Mix + jQuery + Stylus | [`LARAVEL_VERSION_B/`](./LARAVEL_VERSION_B/) | [adipa-production.up.railway.app](https://adipa-production.up.railway.app/) |

Cada carpeta contiene su propio `README.md` con instrucciones de instalación, comandos, estructura del proyecto, decisiones técnicas y mejoras propuestas.

## Inicio rápido

### Version A (Next.js)

```bash
cd NEXT_JS_VERSION_A
pnpm install
pnpm dev          # http://localhost:3000
```

### Version B (Laravel)

```bash
cd LARAVEL_VERSION_B
composer install && npm install
cp .env.example .env
php artisan key:generate
php artisan serve  # http://localhost:8000
npm run dev        # Build assets
```

## Links

- **Demo Version A (Netlify):** https://adipa-next.netlify.app/
- **Demo Version B (Railway):** https://adipa-production.up.railway.app/
- **README Version A:** [NEXT_JS_VERSION_A/README.md](./NEXT_JS_VERSION_A/README.md)
- **README Version B:** [LARAVEL_VERSION_B/README.md](./LARAVEL_VERSION_B/README.md)
