/**
 * Proyectos mostrados en el portafolio.
 *
 * Campos obligatorios: id, name, kind, status, statusType ('live' | 'progress' | 'neutral'),
 * summary, description, contribution, tech, repo, visual ('cancha' | 'cabins').
 *
 * Campos opcionales:
 * - demo:       URL pública; muestra el botón «Ver demo».
 * - highlights: logros concretos y verificables (frases cortas).
 * - featured:   true para destacarlo con una tarjeta más grande.
 * - image:      ruta a una captura real (p. ej. '/projects/cancha.webp'); reemplaza la vista
 *               conceptual. Requiere imageAlt.
 * - imageAlt:   texto alternativo descriptivo de la captura.
 *
 * Las cifras de los highlights se verificaron en los repositorios (noviembre de 2026).
 */

export const projects = [
  {
    id: 'cancha',
    name: 'Cancha',
    kind: 'Aplicación web full-stack · Gestión deportiva',
    status: 'v1 en producción',
    statusType: 'live',
    featured: true,
    summary:
      'Simulador y gestor de campeonatos de fútbol sudamericano: calendarios, tablas, copas y resultados importados desde fuentes oficiales.',
    description:
      'Monorepo con npm workspaces: un núcleo de dominio en TypeScript puro (sin DOM ni APIs de Node), una web en React y Vite, y una API en NestJS que expone los casos de uso por GraphQL. Funciona sin cuenta guardando en el navegador; con una cuenta opcional, la biblioteca de campeonatos se sincroniza en el servidor y se abre desde cualquier navegador.',
    contribution:
      'Diseñé las capas y las reglas de dependencia, que el lint verifica: el dominio no puede importar React, Node ni globales del navegador. Construí la API con autenticación JWT y token de refresco rotativo en cookie HttpOnly, persistencia en MongoDB con transacciones y control de versiones optimista, y los importadores de resultados desde fuentes oficiales y ESPN. El CI ejecuta lint, build, pruebas unitarias y de integración, y E2E con Playwright en escritorio y móvil; la API se despliega en Render con Docker y la web en Vercel.',
    highlights: [
      '166 archivos de prueba con Vitest en núcleo, API y web, más recorridos E2E con Playwright.',
      'Suite de contrato de 13 casos que cumplen los 3 repositorios: localStorage, MongoDB y memoria.',
      'Importa ligas y copas de Chile, Argentina, Brasil y Conmebol desde ANFP, ANFA, CBF y ESPN.',
      'La API se despliega en Render solo cuando el CI de GitHub Actions termina en verde.',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'GraphQL', 'MongoDB', 'GitHub Actions', 'Docker'],
    repo: 'https://github.com/imeduuu/cancha',
    demo: 'https://cancha-eduardo-dominguez.vercel.app',
    visual: 'cancha',
    image: '/projects/cancha.webp',
    imageAlt:
      'Pantalla principal de Cancha con la biblioteca de torneos y el simulador de campeonatos.',
  },
  {
    id: 'cabanias',
    name: 'Cabañas',
    kind: 'Aplicación web · Reservas',
    status: 'En desarrollo',
    statusType: 'progress',
    summary:
      'Base reutilizable para sitios de arriendo de cabañas, con catálogo público, solicitudes de reserva y panel de administración.',
    description:
      'Aplicación en Next.js (App Router) pensada para pequeños negocios de alojamiento. El sitio público muestra un catálogo filtrable por modalidad (por noche o por hora) y recibe solicitudes de reserva. La identidad del negocio, el catálogo y las tarifas se administran desde un panel autenticado y se leen desde PostgreSQL.',
    contribution:
      'Modelé los datos con Prisma: cabañas, tarifas por temporada, solicitudes y bloqueos de disponibilidad. Las reglas críticas viven en la base de datos: triggers mantienen la ocupación y una restricción de exclusión rechaza reservas solapadas incluso con escrituras concurrentes. El panel protege cada lectura y acción en el servidor, y las solicitudes siguen transiciones de estado explícitas (pendiente, confirmada, rechazada o cancelada).',
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Better Auth', 'Docker'],
    repo: 'https://github.com/imeduuu/cabanias',
    visual: 'cabins',
  },
];
