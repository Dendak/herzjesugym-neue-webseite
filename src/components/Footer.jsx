import { Link } from 'react-router-dom'
import { FaCross, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon"><FaCross /></div>
              <div className="logo-text">
                <span className="logo-title">Herz-Jesu</span>
                <span className="logo-subtitle">Privatgymnasium Salzburg</span>
              </div>
            </div>
            <p className="footer-desc">
              Schule mit Herz und Verstand seit 1891. Wir bilden junge Menschen
              ganzheitlich aus &mdash; intellektuell, sozial, emotional und spirituell.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Startseite</Link></li>
              <li><Link to="/leitbild">Leitbild & Infos</Link></li>
              <li><Link to="/schulgemeinschaft">Schulgemeinschaft</Link></li>
              <li><Link to="/tagesheim">Tagesheim</Link></li>
              <li><Link to="/internat">Internat</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Wichtige Links</h4>
            <ul>
              <li><Link to="/fachbereiche">Fachbereiche</Link></li>
              <li><Link to="/anmeldung">Anmeldung</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
              <li><a href="https://moodle.herzjesugym.at" target="_blank" rel="noopener noreferrer">Moodle</a></li>
              <li><a href="https://tipo.webuntis.com" target="_blank" rel="noopener noreferrer">WebUntis</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul className="footer-contact">
              <li><FaMapMarkerAlt /> Schönleitenstraße 1, 5020 Salzburg</li>
              <li><FaPhone /> <a href="tel:+43662432901">+43 662 432901</a></li>
              <li><FaEnvelope /> <a href="mailto:info@herzjesugym.at">info@herzjesugym.at</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Privatgymnasium der Herz-Jesu-Missionare. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>
            <a href="https://herz-jesu-missionare.com" target="_blank" rel="noopener noreferrer">Herz-Jesu-Missionare</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
