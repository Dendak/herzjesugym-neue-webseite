import {
  FaGavel, FaSchool, FaUserTie, FaCross, FaShieldAlt,
  FaPhone, FaEnvelope, FaGlobe, FaLock, FaChartBar,
  FaMapMarkerAlt, FaYoutube
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

function Impressum() {
  return (
    <>
      <PageHero
        tag="Rechtliche Informationen"
        title="Impressum & Offenlegung"
        subtitle="Angaben gemäß österreichischem Recht"
        color="dark"
      />
      <div className="container page-content">
        <AnimatedSection className="impressum-section">
          <h2><FaSchool /> Schulinformation</h2>
          <div className="impressum-grid">
            <div className="impressum-card">
              <h4>Schulbezeichnung</h4>
              <p>
                Privatgymnasium der Herz-Jesu-Missionare<br />
                Schönleitenstraße 1<br />
                5020 Salzburg
              </p>
            </div>
            <div className="impressum-card">
              <h4>Schulkennzahl</h4>
              <p>501056</p>
            </div>
            <div className="impressum-card">
              <h4>Direktor</h4>
              <p>
                Dir. Mag. Peter Porenta<br />
                <a href="mailto:direktion@herzjesugym.at">
                  <FaEnvelope style={{ marginRight: '0.3rem' }} />
                  direktion@herzjesugym.at
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="impressum-section">
          <h2><FaCross /> Schulerhalter</h2>
          <div className="impressum-grid">
            <div className="impressum-card">
              <h4>Organisation</h4>
              <p>Herz-Jesu-Missionare</p>
            </div>
            <div className="impressum-card">
              <h4>Telefon</h4>
              <p>
                <a href="tel:+43662432901153">
                  <FaPhone style={{ marginRight: '0.3rem' }} />
                  +43 662 432901-153
                </a>
              </p>
            </div>
            <div className="impressum-card">
              <h4>E-Mail</h4>
              <p>
                <a href="mailto:provinzialat@msc-salzburg.at">
                  <FaEnvelope style={{ marginRight: '0.3rem' }} />
                  provinzialat@msc-salzburg.at
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="impressum-section">
          <h2><FaShieldAlt /> Datenschutzbehörde</h2>
          <div className="impressum-grid">
            <div className="impressum-card">
              <h4>Behörde</h4>
              <p>Österreichische Datenschutzbehörde</p>
            </div>
            <div className="impressum-card">
              <h4>Website &amp; Telefon</h4>
              <p>
                <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
                  <FaGlobe style={{ marginRight: '0.3rem' }} />
                  www.dsb.gv.at
                </a>
                <br />
                <a href="tel:+4315215200">
                  <FaPhone style={{ marginRight: '0.3rem' }} />
                  +43 1 52 152-0
                </a>
              </p>
            </div>
            <div className="impressum-card">
              <h4>E-Mail</h4>
              <p>
                <a href="mailto:dsb@dsb.gv.at">
                  <FaEnvelope style={{ marginRight: '0.3rem' }} />
                  dsb@dsb.gv.at
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="impressum-section">
          <h2><FaLock /> Datenschutz &amp; Technologien</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaChartBar /></div>
              <h3>Google Analytics</h3>
              <p>
                Diese Website verwendet Google Analytics zur statistischen Auswertung
                der Besucherzugriffe. Die Daten werden anonymisiert erhoben.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaMapMarkerAlt /></div>
              <h3>Google Maps</h3>
              <p>
                Zur Darstellung unseres Standorts wird Google Maps eingebunden.
                Dabei können Daten an Google übertragen werden.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaYoutube /></div>
              <h3>YouTube</h3>
              <p>
                Videos auf dieser Website werden über YouTube eingebettet.
                Beim Abspielen können Daten an YouTube/Google übertragen werden.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><FaLock /></div>
              <h3>SSL/TLS-Verschlüsselung</h3>
              <p>
                Diese Website nutzt SSL/TLS-Verschlüsselung für eine sichere
                Datenübertragung zwischen Browser und Server.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}

export default Impressum
