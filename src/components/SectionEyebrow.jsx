import { sectionIndex } from '../data/profile.js';

/** Encabezado pequeño de sección con la numeración decorativa «NN / TT». */
export default function SectionEyebrow({ section, children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-line" aria-hidden="true" />
      <span className="eyebrow-index" aria-hidden="true">
        {sectionIndex(section)}
      </span>
      {children}
    </div>
  );
}
