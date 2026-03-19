import {
  FaDownload, FaFilePdf, FaExternalLinkAlt
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const downloads = [
  {
    label: 'Anmeldeformular 1. Klasse',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Anmeldeformular-2024-erste-Klasse-1.pdf',
  },
  {
    label: 'Anmeldung Reifeprüfung',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Anmeldung-Reifepruefung-2026-1.pdf',
  },
  {
    label: 'Anmeldung Kompensationsprüfung',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2025/05/Anmeldung-zur-Kompensationspruefung-2025.pdf',
  },
  {
    label: 'Anmeldung Reifeprüfung Nebentermine',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Anmeldung-Reifeprufung-Nebentermine.pdf',
  },
  {
    label: 'An-/Abmeldung Oberstufe',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/An-Abmeldung-Schulbesuch-Oberstufe-Wahl-F-G-2023-24.pdf',
  },
]

function Downloads() {
  return (
    <>
      <PageHero
        tag="Service"
        title="Downloads"
        subtitle="Wichtige Dokumente und Formulare zum Herunterladen"
        color="green"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">Dokumente</span>
          <h2 className="section-title">Formulare &amp; Unterlagen</h2>
          <p className="section-desc">
            Hier finden Sie alle wichtigen Dokumente und Formulare als PDF zum Download.
          </p>
        </AnimatedSection>

        <div className="features-grid">
          {downloads.map((d, i) => (
            <AnimatedSection key={i} className="feature-card" delay={i * 100}>
              <div className="feature-icon"><FaFilePdf /></div>
              <h3>{d.label}</h3>
              <p>PDF-Dokument zum Herunterladen</p>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: '1rem', fontSize: '0.85rem' }}
              >
                <FaDownload /> Herunterladen
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default Downloads
