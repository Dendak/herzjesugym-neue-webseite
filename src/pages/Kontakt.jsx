import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,
  FaBus, FaTrain, FaSubway
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const contactCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Adresse',
    content: (
      <>
        Privatgymnasium der<br />
        Herz-Jesu-Missionare<br />
        Sch&ouml;nleitenstra&szlig;e 1<br />
        5020 Salzburg, &Ouml;sterreich
      </>
    ),
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Telefon',
    content: (
      <>
        <a href="tel:+43662432901">+43 662 432901</a>
        <p className="text-muted">Fax: +43 662 432901 219</p>
      </>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: 'E-Mail',
    content: (
      <>
        <a href="mailto:info@herzjesugym.at">info@herzjesugym.at</a><br />
        <a href="https://www.herzjesugym.at" target="_blank" rel="noopener noreferrer">www.herzjesugym.at</a>
      </>
    ),
  },
  {
    icon: <FaClock />,
    title: '&Ouml;ffnungszeiten',
    content: (
      <>
        Sekretariat:<br />
        Mo&ndash;Fr: 07:30&ndash;15:00 Uhr
      </>
    ),
  },
]

function Kontakt() {
  return (
    <>
      <PageHero
        tag="Wir freuen uns auf Sie"
        title="Kontakt"
        subtitle="So erreichen Sie uns"
        color="dark"
      />
      <div className="container page-content">
        <div className="contact-grid">
          {contactCards.map((c, i) => (
            <AnimatedSection key={i} className="contact-info-card" delay={i * 100}>
              <div className="contact-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <div>{c.content}</div>
            </AnimatedSection>
          ))}
        </div>

        {/* &Ouml;ffentliche Verkehrsmittel */}
        <AnimatedSection className="content-card" style={{ marginTop: '2rem' }}>
          <h2><FaBus /> &Ouml;ffentliche Verkehrsmittel</h2>
          <div className="transport-grid">
            <div className="transport-item">
              <div className="transport-icon"><FaTrain /></div>
              <div>
                <strong>S-Bahn</strong>
                <p>Haltestelle Europark</p>
              </div>
            </div>
            <div className="transport-item">
              <div className="transport-icon"><FaBus /></div>
              <div>
                <strong>O-Bus Linie 4</strong>
                <p>Haltestelle Siebenb&uuml;rgerstra&szlig;e</p>
              </div>
            </div>
            <div className="transport-item">
              <div className="transport-icon"><FaBus /></div>
              <div>
                <strong>O-Bus Linien 1, 12, 28</strong>
                <p>Haltestelle Europark</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="map-container" style={{ marginTop: '2rem' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.5!2d13.0167!3d47.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47769a2e5e6c0b0d%3A0x8c0a3e0a0a0a0a0a!2sSch%C3%B6nleitenstra%C3%9Fe%201%2C%205020%20Salzburg!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort Herz-Jesu-Gymnasium"
          />
        </AnimatedSection>
      </div>
    </>
  )
}

export default Kontakt
