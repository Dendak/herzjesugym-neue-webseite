import {
  FaRoute, FaCalendar, FaFileAlt, FaExclamationCircle,
  FaPhoneAlt, FaPhone, FaEnvelope, FaDownload, FaFilePdf
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const timeline = [
  {
    step: 1, title: 'Tag der offenen Tür',
    date: 'Freitag, 10. Oktober 2025, 8:00\u201313:00 Uhr',
    desc: 'Lernen Sie unsere Schule persönlich kennen. Anmeldung per E-Mail an edith.aigner@herzjesugym.at erforderlich.'
  },
  {
    step: 2, title: 'Informationsabend',
    date: 'Sonntag, 12. Oktober 2025, 18:30 Uhr',
    desc: 'Im Theatersaal \u2014 alle wichtigen Informationen für Eltern und Kinder.'
  },
  {
    step: 3, title: 'Persönliches Aufnahmegespräch',
    date: 'Ab 13. Oktober 2025 bis Ende Jänner 2026',
    desc: 'Termine unter 0662/432901 vereinbaren. Bitte das Anmeldeformular inkl. Beilagen mitbringen.'
  },
  {
    step: 4, title: 'Schulnachricht einreichen',
    date: 'Bis zum letzten Schultag des 1. Semesters',
    desc: 'Original der Schulnachricht (4. Klasse Volksschule) im Sekretariat abgeben.'
  },
  {
    step: 5, title: 'Aufnahmebescheid',
    date: 'Bis spätestens Freitag, 13. Februar 2026',
    desc: 'Sie erhalten den Aufnahmebescheid per Post.'
  },
  {
    step: 6, title: 'Informationsabend für Aufgenommene',
    date: 'Sonntag, 5. Juli 2026, 18:30 Uhr',
    desc: 'Erster gemeinsamer Abend in der Mehrzweckhalle.'
  },
]

function Anmeldung() {
  return (
    <>
      <PageHero
        tag="Werden Sie Teil unserer Gemeinschaft"
        title="Anmeldung"
        subtitle="Der Weg zu uns \u2014 einfach erklärt"
        color="red"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaRoute /></div>
              <h2>Anmeldung für die 1. Klasse</h2>
              <p>
                Wir freuen uns über Ihr Interesse an unserem Gymnasium! Hier finden Sie
                alle wichtigen Informationen und Termine für die Anmeldung.
              </p>
            </AnimatedSection>

            <AnimatedSection className="timeline">
              {timeline.map((t) => (
                <div key={t.step} className="timeline-item">
                  <div className="timeline-marker">{t.step}</div>
                  <div className="timeline-content">
                    <h3>{t.title}</h3>
                    <p className="timeline-date"><FaCalendar /> {t.date}</p>
                    <p>{t.desc}</p>
                  </div>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaFileAlt /></div>
              <h2>Erforderliche Dokumente</h2>
              <ul className="styled-list">
                <li>Ausgefülltes Anmeldeformular (inkl. Beilagen)</li>
                <li>Schulnachricht der 4. Klasse Volksschule (Original)</li>
                <li>Geburtsurkunde (Kopie)</li>
                <li>Staatsbürgerschaftsnachweis (Kopie)</li>
                <li>Meldezettel (Kopie)</li>
              </ul>
            </AnimatedSection>
          </div>

          <aside className="content-sidebar">
            <AnimatedSection className="sidebar-card highlight-card">
              <h3><FaExclamationCircle /> Wichtig</h3>
              <p>Fehlende Unterlagen bitte bis Mitte Jänner 2026 nachreichen.</p>
              <p style={{ marginTop: '1rem' }}><strong>Anmeldung auch für die Oberstufe möglich!</strong></p>
            </AnimatedSection>

            <AnimatedSection className="sidebar-card">
              <h3><FaPhoneAlt /> Kontakt Sekretariat</h3>
              <p>Bei Fragen zur Anmeldung:</p>
              <a href="tel:+43662432901" className="btn btn-primary btn-block" style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                <FaPhone /> 0662 432901
              </a>
              <a href="mailto:info@herzjesugym.at" className="btn btn-outline btn-block">
                <FaEnvelope /> E-Mail senden
              </a>
            </AnimatedSection>

            <AnimatedSection className="sidebar-card">
              <h3><FaDownload /> Downloads</h3>
              <ul className="sidebar-links">
                <li><a href="#"><FaFilePdf /> Anmeldeformular</a></li>
                <li><a href="#"><FaFilePdf /> Informationsfolder</a></li>
                <li><a href="#"><FaFilePdf /> Tagesheimangebote 2025/26</a></li>
              </ul>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Anmeldung
