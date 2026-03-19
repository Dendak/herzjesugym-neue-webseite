import {
  FaUsers, FaUserCircle, FaStar, FaExternalLinkAlt,
  FaLink, FaBriefcase, FaCompass, FaIdCard, FaGraduationCap
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const svMembers = [
  { name: 'Julia Gmachl', klasse: '6na', role: 'Schulsprecherin', icon: <FaStar /> },
  { name: 'Paul Speckmayer', klasse: '7b', role: '1. Stellvertreter', icon: <FaUserCircle /> },
  { name: 'Jonah Rauscher', klasse: '7a', role: '2. Stellvertreter', icon: <FaUserCircle /> },
  { name: 'Franz Fössl', klasse: '7a', role: 'Mitglied', icon: <FaUserCircle /> },
  { name: 'Raphael Plaschke', klasse: '7b', role: 'Mitglied', icon: <FaUserCircle /> },
  { name: 'Xaver Strasser', klasse: '7a', role: 'Mitglied', icon: <FaUserCircle /> },
]

const links = [
  { icon: <FaBriefcase />, label: 'Berufslexikon', url: 'http://www.berufslexikon.at', desc: 'Informationen zu verschiedenen Berufen' },
  { icon: <FaCompass />, label: 'Berufskompass', url: 'http://www.berufskompass.at', desc: 'Orientierungshilfe zur Berufswahl' },
  { icon: <FaIdCard />, label: 'S-Pass', url: 'http://www.s-pass.at', desc: 'Jugendkarte des Landes Salzburg' },
  { icon: <FaGraduationCap />, label: 'Vorwissenschaftliche Arbeit', url: 'http://www.ahs-vwa.at/', desc: 'Infos rund um die VWA' },
]

function Schuelerseite() {
  return (
    <>
      <PageHero
        tag="Für unsere Schülerinnen & Schüler"
        title="Schülerseite"
        subtitle="Vertretung, Informationen und nützliche Links"
        color="blue"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">Schülervertretung</span>
          <h2 className="section-title">Schülervertretung 2025/26</h2>
          <p className="section-desc">
            Eure gewählte Vertretung setzt sich für eure Interessen ein.
          </p>
        </AnimatedSection>

        <div className="team-grid">
          {svMembers.map((m, i) => (
            <AnimatedSection key={i} className="team-card" delay={i * 100}>
              <div className="team-avatar">{m.icon}</div>
              <h3>{m.name}</h3>
              <span className="team-role">{m.role}</span>
              <div className="team-contact">
                <span style={{ fontSize: '0.85rem', color: 'var(--gray-600)' }}>Klasse {m.klasse}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="section-header" style={{ marginTop: '4rem' }}>
          <span className="section-tag">Nützliche Links</span>
          <h2 className="section-title">Links für Schüler</h2>
          <p className="section-desc">
            Hilfreiche Webseiten für Berufsorientierung und mehr.
          </p>
        </AnimatedSection>

        <div className="features-grid">
          {links.map((l, i) => (
            <AnimatedSection key={i} className="feature-card" delay={i * 100}>
              <div className="feature-icon">{l.icon}</div>
              <h3>{l.label}</h3>
              <p>{l.desc}</p>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: '1rem', fontSize: '0.85rem' }}
              >
                <FaExternalLinkAlt /> Website besuchen
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default Schuelerseite
