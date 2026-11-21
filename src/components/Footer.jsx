import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer>
      <a className="brand" href="#inicio" aria-label="Volver al inicio">
        ED<span aria-hidden="true">.</span>
      </a>
      <span>Diseñado y desarrollado por {profile.name}</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
