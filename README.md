# Portafolio — Eduardo Domínguez

Portafolio personal desarrollado con React y Vite. Incluye presentación, proyectos con vistas conceptuales desplegables, sección sobre mí y contacto.

## Requisitos

- Node.js 20 o superior
- npm

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre la URL local que indique Vite (normalmente http://localhost:5173).

## Generar versión de producción

```bash
npm run build
npm run preview
```

El resultado se genera en `dist/`.

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En Vercel selecciona **Add New → Project** e importa el repositorio.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. No necesitas variables de entorno.
7. Pulsa **Deploy**.

## Personalización

- Edita los textos y proyectos en `src/App.jsx`.
- Cambia colores, tipografías y estilos en `src/styles.css`.
- Los enlaces de GitHub y el correo están en `src/App.jsx`.

## Nota sobre las vistas de proyectos

Las vistas incluidas en las tarjetas son ilustraciones conceptuales hechas en CSS para representar el tipo de aplicación. No son capturas reales de las interfaces originales.
