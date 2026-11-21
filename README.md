# Portafolio — Eduardo Domínguez

Sitio personal con mis proyectos de desarrollo de software.

**En vivo:** https://portfolio-eduardo-dominguez.vercel.app

## Stack

- [React 18](https://react.dev) + [Vite 6](https://vite.dev)
- CSS propio (sin frameworks), tipografías Manrope y DM Mono
- Íconos de [lucide-react](https://lucide.dev)
- ESLint (configuración plana, reglas de React y Hooks) y Prettier

## Estructura

```
.
├── index.html              # Metadatos SEO, Open Graph y fuentes
├── public/                 # Archivos estáticos (favicon, CV, capturas, og-image)
├── src/
│   ├── main.jsx            # Punto de entrada
│   ├── App.jsx             # Composición de secciones
│   ├── components/         # Header, Hero, Projects, ProjectCard, ProjectVisual,
│   │                       # About, Stack, Contact, Footer
│   ├── data/
│   │   ├── profile.js      # Datos personales, enlaces y orden de secciones
│   │   ├── projects.js     # Proyectos (con demo, highlights, featured, image)
│   │   └── stack.js        # Tecnologías agrupadas
│   └── styles.css          # Estilos, ordenados por sección
├── eslint.config.js
└── vite.config.js
```

Para editar contenido basta con modificar los archivos de `src/data/`. Si un proyecto tiene
`image`, la tarjeta muestra esa captura; si no, usa la vista conceptual en CSS.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # versión de producción en dist/
npm run preview   # sirve dist/ localmente
npm run lint      # ESLint
npm run format    # Prettier
```

## Despliegue

1. Importar el repositorio en Vercel (**Add New → Project**) con el preset **Vite**.
2. Build Command: `npm run build` · Output Directory: `dist`.
3. No requiere variables de entorno.
