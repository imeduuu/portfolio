import { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import SectionEyebrow from './SectionEyebrow.jsx';

// Los destacados van primero; el resto mantiene el orden de src/data/projects.js.
const ordered = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
);

export default function Projects() {
  const [expanded, setExpanded] = useState([]);
  const toggle = (id) =>
    setExpanded((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );

  return (
    <section className="projects-section section" id="proyectos" aria-labelledby="proyectos-title">
      <div className="section-heading">
        <div>
          <SectionEyebrow section="proyectos">TRABAJO SELECCIONADO</SectionEyebrow>
          <h2 id="proyectos-title">
            Proyectos<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Proyectos personales y académicos construidos de punta a punta: modelo de dominio, API,
          interfaz, pruebas y despliegue.
        </p>
      </div>
      <div className="projects-list">
        {ordered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            number={String(i + 1).padStart(2, '0')}
            expanded={expanded.includes(project.id)}
            onToggle={() => toggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
