import {
  FaGraduationCap, FaLanguage, FaFlask, FaFilePdf,
  FaDownload, FaCalendarAlt, FaExclamationCircle, FaPhoneAlt, FaEnvelope
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const downloads = [
  {
    label: 'Anmeldung Schulbesuch Oberstufe',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2023/12/An-Abmeldung-Schulbesuch-Oberstufe-Wahl-F-G-2024-25.pdf',
  },
  {
    label: 'Anmeldeformular Oberstufe',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2023/12/Anmeldeformular-Oberstufe-2023.pdf',
  },
]

function AnmeldungOberstufe() {
  return (
    <>
      <PageHero
        tag="Oberstufe"
        title="Anmeldung Oberstufe"
        subtitle="Informationen und Formulare zur Anmeldung"
        color="red"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaGraduationCap /></div>
              <h2>Unsere Oberstufe</h2>
              <p>
                Wir führen in der Oberstufe zwei verschiedene Zweige: sprachlich
                (neusprachlich und humanistisch) und naturwissenschaftlich.
              </p>
            </AnimatedSection>

            <AnimatedSection className="content-card" delay={100}>
              <div className="content-card-icon"><FaLanguage /></div>
              <h2>Sprachlicher Zweig</h2>
              <p>
                Der sprachliche Zweig umfasst den neusprachlichen und den humanistischen
                Schwerpunkt. Hier stehen Sprachen und Geisteswissenschaften im Mittelpunkt.
              </p>
            </AnimatedSection>

            <AnimatedSection className="content-card" delay={200}>
              <div className="content-card-icon"><FaFlask /></div>
              <h2>Naturwissenschaftlicher Zweig</h2>
              <p>
                Im naturwissenschaftlichen Zweig liegt der Fokus auf Mathematik,
                Physik, Chemie und Biologie mit verstärktem Laborunterricht.
              </p>
            </AnimatedSection>

            <AnimatedSection className="content-card" delay={300}>
              <div className="content-card-icon"><FaDownload /></div>
              <h2>Downloads</h2>
              <p>Hier finden Sie die erforderlichen Formulare zur Anmeldung für die Oberstufe.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
                {downloads.map((d, i) => (
                  <a
                    key={i}
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ justifyContent: 'flex-start' }}
                  >
                    <FaFilePdf /> {d.label}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <aside className="content-sidebar">
            <AnimatedSection className="sidebar-card highlight-card">
              <h3><FaExclamationCircle /> Anmeldeschluss</h3>
              <p>
                <strong>Freitag, eine Woche vor Beginn der Semesterferien.</strong>
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                Bitte bringen Sie alle erforderlichen Unterlagen rechtzeitig im Sekretariat vorbei.
              </p>
            </AnimatedSection>

            <AnimatedSection className="sidebar-card">
              <h3><FaCalendarAlt /> Zweige im Überblick</h3>
              <ul className="styled-list">
                <li>Neusprachlich</li>
                <li>Humanistisch</li>
                <li>Naturwissenschaftlich</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="sidebar-card">
              <h3><FaPhoneAlt /> Kontakt</h3>
              <p>Bei Fragen zur Oberstufen-Anmeldung:</p>
              <a
                href="tel:+43662432901"
                className="btn btn-primary btn-block"
                style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}
              >
                <FaPhoneAlt /> 0662 432901
              </a>
              <a
                href="mailto:info@herzjesugym.at"
                className="btn btn-outline btn-block"
              >
                <FaEnvelope /> E-Mail senden
              </a>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default AnmeldungOberstufe
