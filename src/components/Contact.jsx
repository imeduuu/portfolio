import { ArrowUpRight, Download, ExternalLink, Github, Mail } from 'lucide-react';
import { profile, sectionIndex } from '../data/profile.js';

export default function Contact() {
  return (
    <section className="contact-section section" id="contacto" aria-labelledby="contacto-title">
      <div className="contact-top">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" /> CONTACTO
        </div>
        <span className="contact-number" aria-hidden="true">
          {sectionIndex('contacto')}
        </span>
      </div>
      <h2 id="contacto-title">
        ¿Conversamos<span className="accent">?</span>
      </h2>
      <p>Si tienes una oportunidad, un proyecto o comentarios sobre mi trabajo, escríbeme.</p>
      <a className="email-link" href={`mailto:${profile.email}`}>
        <Mail size={19} aria-hidden="true" /> {profile.email}{' '}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      <ul className="contact-links">
        <li>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} aria-hidden="true" /> GitHub{' '}
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href={profile.cv} download>
            <Download size={16} aria-hidden="true" /> CV (PDF)
          </a>
        </li>
      </ul>
    </section>
  );
}
