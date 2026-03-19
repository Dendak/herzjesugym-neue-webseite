import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo, description, social */}
          <div className="footer-col">
            <div className="footer-logo">
              <img
                src="/msc-logo.jpg"
                alt="MSC Logo - Herz-Jesu-Missionare"
                className="footer-logo-img"
              />
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
              <a href="https://twitter.com/herzjesugym" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/herzjesugym.at/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/pages/Privatgymnasium-der-Herz-Jesu-Missionare/229435663740095" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/school/privatgymnasium-der-herz-jesu-missionare" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Start</Link></li>
              <li><Link to="/leitbild">Leitbild &ndash; Infos</Link></li>
              <li><Link to="/schulgemeinschaft">Schulgemeinschaft</Link></li>
              <li><Link to="/tagesheim">Tagesheim</Link></li>
              <li><a href="https://internat.herzjesugym.com/" target="_blank" rel="noopener noreferrer">Internat</a></li>
              <li><Link to="/fachbereiche">Fachbereiche</Link></li>
              <li><Link to="/kontakt">Termine</Link></li>
              <li><Link to="/anmeldung">Anmeldung</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
              <li><Link to="/impressum">Impressum</Link></li>
            </ul>
          </div>

          {/* Column 3: Wichtige Links */}
          <div className="footer-col">
            <h4>Wichtige Links</h4>
            <ul>
              <li><Link to="/downloads">Downloads</Link></li>
              <li><Link to="/stundentafeln">Stundentafeln</Link></li>
              <li><Link to="/zeitraster">Stunden-/Zeitraster</Link></li>
              <li><Link to="/folder">Folder Schule</Link></li>
              <li><a href="https://team.jako.com/de-de/team/herz_jesu_gymnasium/?item_source=27209" target="_blank" rel="noopener noreferrer">Schulshop</a></li>
              <li><a href="https://moodle.herzjesugym.at" target="_blank" rel="noopener noreferrer">Moodle</a></li>
              <li><a href="https://tipo.webuntis.com" target="_blank" rel="noopener noreferrer">WebUntis</a></li>
              <li><a href="https://erato.webuntis.com/WebUntis/?school=herzjesugym#/basic/officehours" target="_blank" rel="noopener noreferrer">Sprechstunden</a></li>
            </ul>
          </div>

          {/* Column 4: Kontakt */}
          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>Sch&ouml;nleitenstra&szlig;e 1, 5020 Salzburg</span>
              </li>
              <li>
                <FaPhone />
                <span>Tel.: <a href="tel:+43662432901">+43 662 432901</a></span>
              </li>
              <li>
                <FaFax />
                <span>Fax: +43 662 432901 219</span>
              </li>
              <li>
                <FaEnvelope />
                <span><a href="mailto:info@herzjesugym.at">info@herzjesugym.at</a></span>
              </li>
              <li>
                <FaGlobe />
                <span><a href="https://www.herzjesugym.at" target="_blank" rel="noopener noreferrer">www.herzjesugym.at</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Privatgymnasium der Herz-Jesu-Missionare. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <Link to="/impressum">Impressum</Link>
            <Link to="/kontakt">Kontakt</Link>
            <a href="https://herz-jesu-missionare.com" target="_blank" rel="noopener noreferrer">Herz-Jesu-Missionare</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
