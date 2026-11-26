import SectionEyebrow from './SectionEyebrow.jsx';

export default function About() {
  return (
    <section className="about-section section" id="sobre-mi" aria-labelledby="sobre-mi-title">
      <div className="about-left">
        <SectionEyebrow section="sobre-mi">CÓMO TRABAJO</SectionEyebrow>
        <h2 id="sobre-mi-title">
          Construyendo
          <br />
          experiencia,
          <br />
          <span>proyecto a proyecto.</span>
        </h2>
      </div>
      <div className="about-right">
        <p className="about-intro">
          He desarrollado experiencia práctica llevando proyectos de punta a punta: desde el
          modelo de dominio y la API hasta la interfaz, las pruebas y el despliegue de aplicaciones
          en producción.
        </p>
        <p>
          Separo el código en capas para que las reglas de negocio no dependan del framework ni de
          la base de datos, y acompaño cada cambio con pruebas automatizadas: unitarias, de
          integración y de extremo a extremo. Configuro integración continua para que lint, build y
          pruebas corran en cada cambio, y despliego en servicios como Vercel y Render.
        </p>
      </div>
    </section>
  );
}
