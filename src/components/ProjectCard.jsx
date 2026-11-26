import { ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectCard({ project, number, expanded, onToggle }) {
  const detailId = `detalle-${project.id}`;
  const titleId = `proyecto-${project.id}`;
  const classes = ['project-card', project.featured && 'featured', expanded && 'expanded']
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes} aria-labelledby={titleId}>
      <div className="project-main">
        <div className="project-visual-wrap">
          {project.image ? (
            <img
              className="visual visual-image"
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              width="1440"
              height="1000"
            />
          ) : (
            <>
              <div aria-hidden="true">
                <ProjectVisual type={project.visual} />
              </div>
              <span className="visual-note">Vista conceptual</span>
            </>
          )}
        </div>

        <div className="project-info">
          <div className="project-meta">
            <span>
              {number} / {project.kind}
            </span>
            <span className={`status ${project.statusType}`}>{project.status}</span>
          </div>
          <h3 id={titleId}>{project.name}</h3>
          <p className="project-summary">{project.summary}</p>

          {project.highlights?.length > 0 && (
            <ul className="project-highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <ul className="tech-list" aria-label="Tecnologías">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="project-actions">
            {project.demo && (
              <a
                className="action-demo"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver demo <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              Ver repositorio <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={expanded}
              aria-controls={detailId}
            >
              {expanded ? 'Cerrar detalle' : 'Ver detalle'}
              <ChevronDown size={16} aria-hidden="true" className={expanded ? 'rotated' : ''} />
            </button>
          </div>
        </div>
      </div>

      {/* Siempre en el DOM para que aria-controls apunte a un id existente. */}
      <div className="project-detail" id={detailId} hidden={!expanded}>
        <div>
          <h4 className="detail-label">01 / PROPÓSITO</h4>
          <p>{project.description}</p>
        </div>
        <div>
          <h4 className="detail-label">02 / DESARROLLO Y APORTE</h4>
          <p>{project.contribution}</p>
        </div>
      </div>
    </article>
  );
}
