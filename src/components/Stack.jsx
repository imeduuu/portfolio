import { stack } from '../data/stack.js';
import SectionEyebrow from './SectionEyebrow.jsx';

export default function Stack() {
  return (
    <section className="stack-section section" id="stack" aria-labelledby="stack-title">
      <div className="section-heading">
        <div>
          <SectionEyebrow section="stack">HERRAMIENTAS</SectionEyebrow>
          <h2 id="stack-title">
            Stack<span className="accent">.</span>
          </h2>
        </div>
        <p>Tecnologías que uso en los proyectos de este portafolio.</p>
      </div>
      <div className="stack-grid">
        {stack.map(({ group, items }) => (
          <div className="stack-group" key={group}>
            <h3>{group}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
