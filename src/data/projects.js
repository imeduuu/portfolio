/**
 * Proyectos mostrados en el portafolio.
 *
 * Campos obligatorios: id, name, kind, status, statusType ('live' | 'progress' | 'neutral'),
 * summary, description, contribution, tech, repo, visual ('cancha' | 'cabins' | 'dae').
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

// TODO: agregar capturas reales en public/projects/ (cancha.webp, cabanias.webp, dae.webp,
// idealmente 1280×800) y completar `image` e `imageAlt` en cada proyecto.

export const projects = [
  {
    id: 'cancha',
    name: 'Cancha',
    kind: 'Aplicación web full-stack · Gestión deportiva',
    status: 'Desplegado · en evolución',
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
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'NestJS',
      'GraphQL',
      'MongoDB',
      'JWT',
      'Vitest',
      'Playwright',
      'GitHub Actions',
      'Docker',
    ],
    repo: 'https://github.com/imeduuu/cancha',
    demo: 'https://cancha-eduardo-dominguez.vercel.app',
    visual: 'cancha',
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
  {
    id: 'dae',
    name: 'Gestor de Pedidos Tecnológicos',
    kind: 'Aplicación de escritorio · Gestión de pedidos',
    status: 'Proyecto académico',
    statusType: 'neutral',
    summary:
      'Sistema de escritorio para gestionar pedidos de productos tecnológicos, con usuarios, roles y estados de entrega.',
    description:
      'Aplicación de escritorio con interfaz en PyQt6 que organiza un catálogo de productos por categoría y permite registrar y administrar pedidos. Distingue tres roles (administrador, gerente y cliente) y sigue cada pedido por sus estados: pendiente, confirmado, enviado, entregado o cancelado.',
    // TODO: indicar si fue un trabajo en equipo y, en ese caso, cuál fue exactamente tu parte.
    contribution:
      'Organizado con Clean Architecture: la interfaz, los servicios de negocio (autenticación, usuarios y pedidos) y el acceso a datos están en capas separadas, coordinadas por un mediador que inyecta las dependencias. La persistencia en SQLite se encapsula con el patrón Repositorio, y los registros nuevos se crean siempre como cliente por seguridad.',
    tech: ['Python', 'PyQt6', 'SQLite', 'Clean Architecture', 'Patrón Repositorio'],
    repo: 'https://github.com/imeduuu/DAE2026',
    visual: 'dae',
  },
];
