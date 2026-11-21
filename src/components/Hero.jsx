import { ArrowDown, ArrowUpRight, Code2, Download } from 'lucide-react';
import { profile, sectionIndex } from '../data/profile.js';

export default function Hero() {
  const tagline = ['Chile', `${profile.career} · ${profile.institution}`, profile.lookingFor]
    .filter(Boolean)
    .join(' · ');

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" /> PORTAFOLIO · DESARROLLO DE SOFTWARE
        </div>
        <h1 id="hero-title">
          Hola, soy
          <br />
          <span>{profile.name}.</span>
        </h1>
        <p className="hero-lead">
          Estudiante de {profile.career} en la {profile.institution}. Construyo aplicaciones
          full-stack con TypeScript, React y NestJS, con foco en backend, pruebas y arquitectura.
        </p>
        <div className="hero-buttons">
          <a className="button-primary" href="#proyectos">
            Ver proyectos <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a className="button-secondary" href={profile.cv} download>
            Descargar CV <Download size={15} aria-hidden="true" />
          </a>
          <a className="button-quiet" href="#contacto">
            Contacto <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-aside" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit-core">
          <Code2 size={42} />
        </div>
        <span className="orbit-label label-top">DOMINIO → API → INTERFAZ</span>
        <span className="orbit-label label-bottom">PROBAR · DESPLEGAR · MEJORAR</span>
      </div>
      <div className="hero-index">
        <span aria-hidden="true">{sectionIndex('inicio')}</span>
        <span>{tagline.toUpperCase()}</span>
      </div>
    </section>
  );
}
