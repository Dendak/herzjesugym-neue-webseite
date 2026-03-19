import { Link } from 'react-router-dom'
import {
  FaRoute, FaCalendar, FaFileAlt, FaExclamationCircle,
  FaPhoneAlt, FaPhone, FaEnvelope, FaDownload, FaFilePdf,
  FaArrowRight
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const timeline = [
  {
    step: 1,
    title: 'Tag der offenen T\u00fcr',
    date: 'Freitag, 10. Oktober 2025, 8.00 bis 13.00 Uhr',
    desc: 'F\u00fcr Eltern, Sch\u00fclerinnen und Sch\u00fcler. Wir ersuchen um Anmeldung \u2013 bitte senden Sie an edith.aigner@herzjesugym.at eine E-Mail, um den Link zur Anmeldung f\u00fcr den Tag der offenen T\u00fcr zu erhalten!',
  },
  {
    step: 2,
    title: 'Informationsabend',
    date: 'Sonntag, 12. Oktober 2025, 18.30 Uhr',
    desc: 'Im Theatersaal der Schule.',
  },
  {
    step: 3,
    title: 'Pers\u00f6nliches Gespr\u00e4ch',
    date: 'Ab Montag, 13. Oktober 2025 bis sp\u00e4testens Ende J\u00e4nner 2026',
    desc: 'Zwischen Eltern, dem Sch\u00fcler bzw. der Sch\u00fclerin und dem Direktor. Telefonische Terminvereinbarung unter: 0662/432901.',
  },
  {
    step: 4,
    title: 'Abgabe des Anmeldeformulars',
    date: 'Beim Aufnahmegespr\u00e4ch',
    desc: 'Inklusive Beilagen. Das Anmeldeformular steht als PDF-Download zur Verf\u00fcgung.',
  },
  {
    step: 5,
    title: 'Schulnachricht einreichen',
    date: 'Am letzten Schultag des 1. Semesters',
    desc: 'Abgabe/Zusendung der Schulnachricht (4. Klasse) im Original.',
  },
  {
    step: 6,
    title: 'Schriftliche Verst\u00e4ndigung \u00fcber die Aufnahme',
    date: 'Bis sp\u00e4testens Freitag, 13. Februar 2026',
    desc: 'Sie erhalten die schriftliche Verst\u00e4ndigung \u00fcber die Aufnahme.',
  },
  {
    step: 7,
    title: 'Erster Informationsabend f\u00fcr Aufgenommene',
    date: 'Sonntag, 5. Juli 2026, 18.30 Uhr',
    desc: 'Gemeinsamer erster Informationsabend f\u00fcr Eltern und aufgenommene Sch\u00fclerinnen und Sch\u00fcler in der Mehrzweckhalle.',
  },
]

function Anmeldung() {
  return (
    <>
      <PageHero
        tag="Werden Sie Teil unserer Gemeinschaft"
        title="Anmeldung"
        subtitle="Der Weg zu uns \u2014 einfach erkl\u00e4rt"
        color="red"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaRoute /></div>
              <h2>Anmeldung &ndash; die n&auml;chsten Schritte:</h2>
              <p>
                Wir freuen uns &uuml;ber Ihr Interesse an unserem Gymnasium! Hier finden Sie
                alle wichtigen Informationen und Termine f&uuml;r die Anmeldung.
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

            <AnimatedSection className="content-card" style={{ background: 'var(--danger-50, #fef2f2)', borderLeft: '4px solid var(--danger, #dc2626)' }}>
              <div className="content-card-icon"><FaExclamationCircle /></div>
              <h2>Wichtiger Hinweis</h2>
              <p><strong>Die oben genannten Termine sind f&uuml;r alle Aufnahmewerberinnen und Aufnahmewerber verpflichtend!</strong></p>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaFileAlt /></div>
              <h2>Erforderliche Dokumente</h2>
              <ul className="styled-list">
                <li>
                  Ausgef&uuml;lltes{' '}
                  <a
                    href="https://www.herzjesugym.com/wp-content/uploads/2024/11/Anmeldeformular-2024-erste-Klasse-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Anmeldeformular (PDF)
                  </a>{' '}
                  inklusive Beilagen
                </li>
                <li>Schulnachricht der 4. Klasse Volksschule (Original)</li>
                <li>Geburtsurkunde (Kopie)</li>
                <li>Staatsb&uuml;rgerschaftsnachweis (Kopie)</li>
                <li>Meldezettel (Kopie)</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <p>F&uuml;r weitere Fragen wenden Sie sich bitte an das Sekretariat!</p>
            </AnimatedSection>
          </div>

          <aside className="content-sidebar">
            <AnimatedSection className="sidebar-card highlight-card">
              <h3><FaArrowRight /> Anmeldung Oberstufe</h3>
              <p>
                Eine Anmeldung ist auch f&uuml;r den Einstieg in die Oberstufe m&ouml;glich.
              </p>
              <a
                href="https://www.herzjesugym.com/anmeldung-oberstufe/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
                style={{ marginTop: '0.75rem' }}
              >
                Infos zur Oberstufe
              </a>
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
                <li>
                  <a
                    href="https://www.herzjesugym.com/wp-content/uploads/2024/11/Anmeldeformular-2024-erste-Klasse-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFilePdf /> Anmeldeformular (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.herzjesugym.com/wp-content/uploads/2025/09/GTS-Angebote-25-26-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFilePdf /> Tagesheimangebote 2025/26
                  </a>
                </li>
              </ul>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Anmeldung
