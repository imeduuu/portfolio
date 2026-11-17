import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Mail, Code2, Terminal, Database, Layers3, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';

const projects = [
  {
    id: 'cancha',
    number: '01',
    name: 'Cancha',
    kind: 'Aplicación web · Gestión deportiva',
    status: 'En desarrollo',
    statusType: 'progress',
    summary: 'Herramienta para crear, administrar y simular campeonatos de fútbol sudamericano.',
    description: 'Cancha permite preparar temporadas, organizar competiciones, gestionar equipos y partidos, consultar tablas y simular resultados. El proyecto está construido con una separación por capas para mantener las reglas deportivas independientes de la interfaz.',
    contribution: 'Desarrollo de la aplicación y sus reglas de dominio, integración de datos de competiciones, persistencia local y herramientas de respaldo. Las importaciones se apoyan en fuentes de datos externas; los datos oficiales y algunos desempates pueden requerir verificación manual.',
    tech: ['React', 'TypeScript', 'Vite', 'LocalStorage', 'Playwright'],
    repo: 'https://github.com/imeduuu/cancha',
    visual: 'cancha'
  },
  {
    id: 'cabanias',
    number: '02',
    name: 'Cabañas',
    kind: 'Aplicación web · Reservas',
    status: 'En desarrollo',
    statusType: 'progress',
    summary: 'Base reutilizable para sitios de cabañas, con catálogo público y herramientas de administración.',
    description: 'Proyecto pensado como una base adaptable para pequeños negocios de alojamiento. Incluye páginas públicas para presentar cabañas y una zona administrativa para gestionar alojamientos, solicitudes y configuración del negocio.',
    contribution: 'Construcción de la experiencia web con Next.js, React y TypeScript, junto con el diseño del modelo de datos para alojamientos, tarifas, solicitudes de reserva y bloqueos de disponibilidad. El flujo de base de datos todavía requiere configuración y conexión para funcionar en un entorno real.',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repo: 'https://github.com/imeduuu/cabanias',
    visual: 'cabins'
  },
  {
    id: 'dae',
    number: '03',
    name: 'Gestor de Pedidos Tecnológicos',
    kind: 'Aplicación de escritorio · Gestión de pedidos',
    status: 'Proyecto académico',
    statusType: 'neutral',
    summary: 'Sistema para gestionar pedidos tecnológicos, usuarios, roles y estados de entrega.',
    description: 'Aplicación de escritorio que organiza un catálogo de productos tecnológicos y permite registrar y administrar pedidos. Contempla distintos perfiles de usuario y un flujo de estados para seguir cada solicitud.',
    contribution: 'Desarrollo de funcionalidades de autenticación y registro, gestión de roles, catálogo y administración de pedidos. Se utiliza SQLite para persistir la información y se mantiene una separación entre las responsabilidades de la aplicación.',
    tech: ['Python', 'PyQt6', 'SQLite'],
    repo: 'https://github.com/imeduuu/DAE2026',
    visual: 'dae'
  }
];

function ProjectVisual({ type }) {
  if (type === 'cancha') return <div className="visual visual-pitch">
    <div className="pitch-top"><span>TORNEO · TEMPORADA 2026</span><span className="live-dot">● EN CURSO</span></div>
    <div className="pitch-field"><div className="half-line"/><div className="center-circle"/><div className="goal goal-left"/><div className="goal goal-right"/>
      <div className="team team-a"><b>COL</b><strong>2</strong></div><div className="team team-b"><strong>1</strong><b>ARG</b></div>
    </div>
    <div className="pitch-bottom"><span>Tabla de posiciones</span><span>Partidos · Equipos · Simulación</span></div>
  </div>;
  if (type === 'cabins') return <div className="visual visual-cabins">
    <div className="cabin-nav"><span className="cabin-logo">REFUGIO<span>.</span></span><span>ALOJAMIENTOS　 RESERVAS　 CONTACTO</span></div>
    <div className="cabin-hero"><div><small>DESCANSO EN LA NATURALEZA</small><b>Tu próximo<br/>descanso comienza aquí.</b><span className="fake-button">Explorar cabañas ↗</span></div><div className="cabin-art"><div className="sun"/><div className="mountain m1"/><div className="mountain m2"/><div className="little-house"/></div></div>
    <div className="cabin-foot"><span>01 — BOSQUE</span><span>02 — RÍO</span><span>03 — MONTAÑA</span></div>
  </div>;
  return <div className="visual visual-dae">
    <div className="dae-sidebar"><div className="dae-mark">DAE<span>.</span></div><i/><i/><i/><i/></div>
    <div className="dae-main"><div className="dae-head"><b>Panel de pedidos</b><span>Administrador　⌄</span></div><div className="dae-stats"><div><small>PEDIDOS</small><b>128</b></div><div><small>PENDIENTES</small><b>08</b></div><div><small>ENTREGADOS</small><b>94</b></div></div><div className="dae-table"><b>Pedidos recientes</b><div><span>#1042　Notebook</span><em>Confirmado</em></div><div><span>#1041　Memoria RAM</span><em>Enviado</em></div><div><span>#1040　Micrófono</span><em>Entregado</em></div></div></div>
  </div>;
}

function ProjectCard({ project, expanded, onToggle }) {
  return <article className={`project-card ${expanded ? 'expanded' : ''}`}>
    <div className="project-main">
      <div className="project-visual-wrap"><ProjectVisual type={project.visual}/><span className="visual-note">Vista conceptual</span></div>
      <div className="project-info">
        <div className="project-meta"><span>{project.number} / {project.kind}</span><span className={`status ${project.statusType}`}>{project.status}</span></div>
        <h3>{project.name}</h3><p className="project-summary">{project.summary}</p>
        <div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
        <div className="project-actions">
          <a href={project.repo} target="_blank" rel="noreferrer">Ver repositorio <ArrowUpRight size={15}/></a>
          <button onClick={onToggle} aria-expanded={expanded}>{expanded ? 'Cerrar detalle' : 'Ver detalle'} <ChevronDown size={16} className={expanded ? 'rotated' : ''}/></button>
        </div>
      </div>
    </div>
    {expanded && <div className="project-detail">
      <div><span className="detail-label">01 / PROPÓSITO</span><p>{project.description}</p></div>
      <div><span className="detail-label">02 / DESARROLLO Y APORTE</span><p>{project.contribution}</p></div>
    </div>}
  </article>;
}

export default function App() {
  const [expanded, setExpanded] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = id => setExpanded(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#inicio" onClick={closeMenu}>ED<span>.</span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#proyectos" onClick={closeMenu}>Proyectos</a><a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a><a href="#contacto" onClick={closeMenu}>Contacto</a>
        <a className="nav-github" href="https://github.com/imeduuu" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> PORTAFOLIO · DESARROLLO DE SOFTWARE</div>
          <h1>Hola, soy<br/><span>Eduardo Domínguez.</span></h1>
          <p className="hero-lead">Estudiante de informática interesado en crear soluciones de software, desarrollar aplicaciones y aprender construyendo proyectos.</p>
          <div className="hero-buttons"><a className="button-primary" href="#proyectos">Explorar proyectos <ArrowDown size={16}/></a><a className="button-quiet" href="mailto:edominguezfinschi@gmail.com">Hablemos <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="hero-aside"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-core"><Code2 size={42}/></div><span className="orbit-label label-top">IDEAS → CÓDIGO</span><span className="orbit-label label-bottom">APRENDER · CONSTRUIR · MEJORAR</span></div>
        <div className="hero-index"><span>01</span><span>CHILE · DISPONIBLE PARA APRENDER Y COLABORAR</span></div>
      </section>

      <section className="projects-section section" id="proyectos">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> TRABAJO SELECCIONADO</div><h2>Proyectos<span className="accent">.</span></h2></div><p>Una selección de proyectos académicos y personales en los que he trabajado, desde aplicaciones web hasta herramientas de gestión.</p></div>
        <div className="projects-list">{projects.map(project => <ProjectCard key={project.id} project={project} expanded={expanded.includes(project.id)} onToggle={() => toggle(project.id)}/>)}</div>
      </section>

      <section className="about-section section" id="sobre-mi">
        <div className="about-left"><div className="eyebrow"><span className="eyebrow-line"/> UN POCO SOBRE MÍ</div><h2>Construyendo<br/>experiencia,<br/><span>proyecto a proyecto.</span></h2></div>
        <div className="about-right"><p className="about-intro">Actualmente soy estudiante de informática y estoy desarrollando mis habilidades a través de proyectos prácticos.</p><p>Aún no cuento con experiencia laboral formal en el área. Por eso, utilizo mis proyectos académicos y personales para poner en práctica lo aprendido, explorar nuevas tecnologías y mejorar mi forma de resolver problemas.</p><p>Me interesa seguir creciendo en desarrollo de software, especialmente en aplicaciones web, backend y diseño de soluciones que sean útiles para las personas.</p>
          <div className="focus-grid"><div><Code2/><b>Desarrollo</b><span>Aplicaciones y lógica</span></div><div><Database/><b>Datos</b><span>Persistencia y modelos</span></div><div><Layers3/><b>Aprendizaje</b><span>Arquitectura y pruebas</span></div></div>
        </div>
      </section>

      <section className="contact-section section" id="contacto"><div className="contact-top"><div className="eyebrow"><span className="eyebrow-line"/> CONTACTO</div><span className="contact-number">04 — 04</span></div><h2>¿Conversamos<span className="accent">?</span></h2><p>Estoy abierto a aprender, colaborar y conversar sobre proyectos u oportunidades.</p><a className="email-link" href="mailto:edominguezfinschi@gmail.com"><Mail size={19}/> edominguezfinschi@gmail.com <ArrowUpRight size={18}/></a><div className="contact-links"><a href="https://github.com/imeduuu" target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ExternalLink size={13}/></a></div></section>
    </main>
    <footer><a className="brand" href="#inicio">ED<span>.</span></a><span>Diseñado y desarrollado por Eduardo Domínguez</span><span>© {new Date().getFullYear()}</span></footer>
  </div>;
}