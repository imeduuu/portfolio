import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github, Menu, X } from 'lucide-react';
import { profile } from '../data/profile.js';

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);

  // Escape cierra el menú móvil y devuelve el foco al botón.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="header">
      <a
        className="brand"
        href="#inicio"
        onClick={closeMenu}
        aria-label="Eduardo Domínguez, inicio"
      >
        ED<span aria-hidden="true">.</span>
      </a>
      <button
        ref={buttonRef}
        type="button"
        className="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="nav-principal"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        id="nav-principal"
        className={menuOpen ? 'nav nav-open' : 'nav'}
        aria-label="Navegación principal"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="nav-github" href={profile.github} target="_blank" rel="noopener noreferrer">
          <Github size={16} aria-hidden="true" /> GitHub{' '}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
