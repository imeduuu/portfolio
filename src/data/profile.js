// Datos personales y enlaces usados en todo el sitio.
export const profile = {
  name: 'Eduardo Domínguez',
  career: 'Ingeniería Civil Informática',
  institution: 'UCT',
  email: 'edominguezfinschi@gmail.com',
  github: 'https://github.com/imeduuu',
  // TODO: agregar la URL de tu perfil de LinkedIn. Mientras sea null, el enlace no se muestra.
  linkedin: null,
  // TODO: subir el CV a public/cv.pdf (o cambiar esta ruta). Hasta entonces el enlace da 404.
  cv: '/cv.pdf',
  // TODO: indicar qué buscas (p. ej. práctica profesional, primer empleo, proyectos freelance)
  // para mostrarlo junto a la ubicación en el hero. Mientras sea null, solo se muestra la carrera.
  lookingFor: null,
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
