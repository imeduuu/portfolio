// Datos personales y enlaces usados en todo el sitio.
export const profile = {
  name: 'Eduardo Domínguez',
  career: 'Ingeniería Civil Informática',
  institution: 'UCT',
  email: 'edominguezfinschi@gmail.com',
  github: 'https://github.com/imeduuu',
  cv: '/cv.pdf',
  lookingFor: 'Práctica profesional, desarrollo de proyectos o primer empleo',
};

// Numeración decorativa de secciones: se calcula a partir de este orden.
export const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'stack', label: 'Stack' },
  { id: 'contacto', label: 'Contacto' },
];

export function sectionIndex(id) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(sections.findIndex((s) => s.id === id) + 1)} / ${pad(sections.length)}`;
}
