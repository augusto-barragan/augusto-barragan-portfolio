# Augusto Barragán — Portfolio

Sitio de portafolio de Augusto Barragán, Senior Visual Designer. Construido con React, TypeScript y Vite.

## Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) como bundler y dev server
- CSS Modules (sin librerías de estilos externas)

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (incluido con Node)

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/augusto-barragan/augusto-barragan-portfolio.git
cd augusto-barragan-portfolio
npm install
```

## Correr en desarrollo

```bash
npm run dev
```

Esto levanta el servidor de Vite (por defecto en `http://localhost:5173`) con hot-reload: los cambios en `src/` se reflejan al instante en el navegador.

## Compilar para producción

```bash
npm run build
```

Corre el chequeo de tipos de TypeScript y genera el sitio optimizado en `dist/`. Para revisar ese build localmente:

```bash
npm run preview
```

## Actualizar contenido

Todo el contenido del sitio (roles, skills, experiencia, proyectos) vive en un solo archivo de datos tipados, sin necesidad de tocar componentes:

- [`src/data/content.ts`](src/data/content.ts) — roles del hero, ítems del marquee, skills, experiencia laboral y proyectos de "Work". Edita los arrays (`SKILLS`, `EXPERIENCE`, `WORK_ITEMS`, etc.) para agregar, quitar o modificar entradas.

Para actualizar textos o estructura fuera del contenido de datos, cada sección de la página vive en su propio componente dentro de `src/components/`:

| Sección | Componente |
|---|---|
| Navegación | [`src/components/Nav/Nav.tsx`](src/components/Nav/Nav.tsx) |
| Hero + animación de rol | [`src/components/Hero/Hero.tsx`](src/components/Hero/Hero.tsx), [`RoleCycler.tsx`](src/components/Hero/RoleCycler.tsx) |
| Cinta de marquee | [`src/components/Marquee/Marquee.tsx`](src/components/Marquee/Marquee.tsx) |
| Sobre mí / experiencia | [`src/components/About/About.tsx`](src/components/About/About.tsx) |
| Proyectos | [`src/components/Work/Work.tsx`](src/components/Work/Work.tsx) |
| Contacto | [`src/components/Footer/Footer.tsx`](src/components/Footer/Footer.tsx) |

Cada componente tiene su propio archivo `.module.css` junto al `.tsx` con los estilos de esa sección.

### Imágenes de proyectos

Las imágenes de fondo de "Work" se sirven desde [`public/images/`](public/images) y se referencian con rutas absolutas (`/images/nombre.jpg`) en `WORK_ITEMS` dentro de `content.ts`. Para agregar una nueva, coloca el archivo en `public/images/` y apunta `bgSrc` a esa ruta.

## Publicar cambios

```bash
git add .
git commit -m "Descripción del cambio"
git push
```
