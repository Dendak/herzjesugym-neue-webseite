import { Link } from 'react-router-dom'
import {
  FaCross, FaBullseye, FaCertificate, FaHeart, FaBook, FaHandsHelping,
  FaSeedling, FaLaptopCode, FaMedal, FaMicroscope, FaGlobe, FaLink,
  FaChevronRight, FaDesktop, FaExternalLinkAlt, FaQuoteLeft
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

function Leitbild() {
  return (
    <>
      <PageHero
        tag="Unsere Identität"
        title="Leitbild & Informationen"
        subtitle="Was uns antreibt und ausmacht \u2014 seit 1891"
        color="green"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaCross /></div>
              <h2>Unser Leitbild</h2>
              <p>
                Das Privatgymnasium der Herz-Jesu-Missionare ist eine katholische Privatschule
                mit Öffentlichkeitsrecht. Gegründet 1891, verbinden wir christliche Werte mit moderner Bildung.
              </p>
              <p>
                Unser Ziel ist die ganzheitliche Bildung junger Menschen: intellektuell, sozial,
                emotional und spirituell. Wir fördern kritisches Denken, Verantwortungsbewusstsein
                und Respekt vor der Würde jedes Einzelnen.
              </p>
              <blockquote className="leitbild-quote">
                <FaQuoteLeft />
                <p>&bdquo;Auch in Zukunft Mensch sein&ldquo;</p>
                <cite>Jahresmotto bis 2029</cite>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaBullseye /></div>
              <h2>Unsere Werte</h2>
              <div className="values-grid">
                {[
                  { icon: <FaHeart />, title: 'Nächstenliebe', desc: 'Respektvoller Umgang und gegenseitige Wertschätzung' },
                  { icon: <FaBook />, title: 'Bildung', desc: 'Ganzheitliche Förderung aller Talente' },
                  { icon: <FaHandsHelping />, title: 'Gemeinschaft', desc: 'Starkes Miteinander in Schule und Internat' },
                  { icon: <FaSeedling />, title: 'Verantwortung', desc: 'Für sich selbst, die Gemeinschaft und die Umwelt' },
                ].map((v, i) => (
                  <div key={i} className="value-item">
                    {v.icon}
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaCertificate /></div>
              <h2>Zertifizierungen & Auszeichnungen</h2>
              <div className="badges-grid">
                {[
                  { icon: <FaLaptopCode />, label: 'Expert.Schule' },
                  { icon: <FaMedal />, label: 'Gold-Zertifikat (2019\u20132022)' },
                  { icon: <FaMicroscope />, label: 'Sparkling Science' },
                  { icon: <FaGlobe />, label: 'Erasmus+' },
                ].map((b, i) => (
                  <div key={i} className="badge-item">
                    {b.icon}
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <aside className="content-sidebar">
            <AnimatedSection className="sidebar-card">
              <h3><FaLink /> Schnelllinks</h3>
              <ul className="sidebar-links">
                <li><Link to="/schulgemeinschaft"><FaChevronRight /> Schulgemeinschaft</Link></li>
                <li><Link to="/fachbereiche"><FaChevronRight /> Fachbereiche</Link></li>
                <li><Link to="/tagesheim"><FaChevronRight /> Tagesheim</Link></li>
                <li><Link to="/anmeldung"><FaChevronRight /> Anmeldung</Link></li>
              </ul>
            </AnimatedSection>
            <AnimatedSection className="sidebar-card">
              <h3><FaDesktop /> Plattformen</h3>
              <ul className="sidebar-links">
                <li><a href="https://moodle.herzjesugym.at" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Moodle</a></li>
                <li><a href="https://tipo.webuntis.com" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> WebUntis</a></li>
                <li><a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> MS Teams</a></li>
              </ul>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Leitbild
