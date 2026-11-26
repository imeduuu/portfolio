/** Ilustraciones conceptuales en CSS. No son capturas reales de las aplicaciones. */
export default function ProjectVisual({ type }) {
  if (type === 'cancha') {
    return (
      <div className="visual visual-pitch">
        <div className="pitch-top">
          <span>TORNEO · TEMPORADA 2026</span>
          <span className="live-dot">● EN CURSO</span>
        </div>
        <div className="pitch-field">
          <div className="half-line" />
          <div className="center-circle" />
          <div className="goal goal-left" />
          <div className="goal goal-right" />
          <div className="team team-a">
            <b>COL</b>
            <strong>2</strong>
          </div>
          <div className="team team-b">
            <strong>1</strong>
            <b>ARG</b>
          </div>
        </div>
        <div className="pitch-bottom">
          <span>Tabla de posiciones</span>
          <span>Partidos · Equipos · Simulación</span>
        </div>
      </div>
    );
  }

  return (
    <div className="visual visual-cabins">
      <div className="cabin-nav">
        <span className="cabin-logo">
          REFUGIO<span>.</span>
        </span>
        <span>{'ALOJAMIENTOS　 RESERVAS　 CONTACTO'}</span>
      </div>
      <div className="cabin-hero">
        <div>
          <small>DESCANSO EN LA NATURALEZA</small>
          <b>
            Tu próximo
            <br />
            descanso comienza aquí.
          </b>
          <span className="fake-button">Explorar cabañas ↗</span>
        </div>
        <div className="cabin-art">
          <div className="sun" />
          <div className="mountain m1" />
          <div className="mountain m2" />
          <div className="little-house" />
        </div>
      </div>
      <div className="cabin-foot">
        <span>01 — BOSQUE</span>
        <span>02 — RÍO</span>
        <span>03 — MONTAÑA</span>
      </div>
    </div>
  );
}
