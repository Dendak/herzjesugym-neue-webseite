import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaGavel
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const contactCards = [
  { icon: <FaMapMarkerAlt />, title: 'Adresse', content: <>Privatgymnasium der<br />Herz-Jesu-Missionare<br />Schönleitenstraße 1<br />5020 Salzburg, Österreich</> },
  { icon: <FaPhoneAlt />, title: 'Telefon', content: <><a href="tel:+43662432901">+43 662 432901</a><p className="text-muted">Fax: +43 662 432901 219</p></> },
  { icon: <FaEnvelope />, title: 'E-Mail', content: <><a href="mailto:info@herzjesugym.at">info@herzjesugym.at</a><br /><a href="https://www.herzjesugym.at" target="_blank" rel="noopener noreferrer">www.herzjesugym.at</a></> },
  { icon: <FaClock />, title: 'Öffnungszeiten', content: <>Sekretariat:<br />Mo&ndash;Fr: 07:30&ndash;15:00 Uhr</> },
]

function Kontakt() {
  return (
    <>
      <PageHero
        tag="Wir freuen uns auf Sie"
        title="Kontakt & Impressum"
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

        <AnimatedSection className="map-container">
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

        <AnimatedSection className="impressum-section">
          <h2><FaGavel /> Impressum</h2>
          <div className="impressum-grid">
            <div className="impressum-card">
              <h4>Schulerhalter</h4>
              <p>Herz-Jesu-Missionare<br />Schönleitenstraße 1<br />5020 Salzburg</p>
            </div>
            <div className="impressum-card">
              <h4>Direktor</h4>
              <p>Mag. Peter Porenta<br />
                <a href="mailto:direktion@herzjesugym.at">direktion@herzjesugym.at</a>
              </p>
            </div>
            <div className="impressum-card">
              <h4>Verantwortlich für den Inhalt</h4>
              <p>Privatgymnasium der<br />Herz-Jesu-Missionare</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}

export default Kontakt
