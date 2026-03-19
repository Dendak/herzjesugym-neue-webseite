import {
  FaEnvelope, FaPhone, FaGlobe
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const photoAvatarStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  objectFit: 'cover',
  margin: '0 auto 1rem',
  display: 'block',
  border: '4px solid var(--primary-100)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
}

const leadership = [
  {
    name: 'Mag. Peter Porenta',
    role: 'Direktor',
    emails: ['direktion@herzjesugym.at', 'peter.porenta@herzjesugym.at'],
    phone: '0662 432901',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/PORENTA_Peter_2019-1.jpg',
  },
  {
    name: 'Mag. Franz Feichtl',
    role: 'Administrator',
    emails: ['administration@herzjesugym.at', 'franz.feichtl@herzjesugym.at'],
    phone: '0662 432901-230',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/FEICHTL_Franz_2019.jpg',
  },
  {
    name: 'Mag. Dr. Paul Dienstbier',
    role: 'Tagesheimleiter',
    emails: ['paul.dienstbier@herzjesugym.at'],
    phone: '0662 432901-238',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Dienstbier-Paul-2025hp.jpg',
  },
  {
    name: 'Denis Holub',
    role: 'Personalleiter',
    emails: ['denis.holub@herzjesugym.at'],
    phone: '0662 432901-236',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Holub-Denis-2022hp.jpg',
  },
]

const schulerhalter = [
  {
    name: 'P. Michael Huber MSC',
    role: 'Provinzial',
    emails: ['provinzialat@msc-salzburg.at'],
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/09/Huber-Michael-2022-hp-1.jpg',
    web: 'https://herz-jesu-missionare.com',
  },
  {
    name: 'P. Manfred O\u00DFner MSC',
    role: 'Superior',
    emails: ['superiorat@msc-salzburg.at', 'manfred.msc@gmx.net'],
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Osner-2023hp.jpg',
    web: 'https://herz-jesu-missionare.com',
  },
]

function Schulleitung() {
  return (
    <>
      <PageHero
        tag="Unsere Menschen"
        title="Schulleitung"
        subtitle="Direktion, Administration & Schulerhalter"
        color="blue"
      />
      <div className="container page-content">

        <AnimatedSection className="section-header">
          <span className="section-tag">Schulleitung</span>
          <h2 className="section-title">Direktion & Administration</h2>
        </AnimatedSection>

        <div className="team-grid">
          {leadership.map((p, i) => (
            <AnimatedSection key={i} className="team-card" delay={i * 100}>
              <img
                src={p.photo}
                alt={p.name}
                style={photoAvatarStyle}
                loading="lazy"
              />
              <h3>{p.name}</h3>
              <span className="team-role">{p.role}</span>
              <div className="team-contact">
                {p.emails.map((email, j) => (
                  <a key={j} href={`mailto:${email}`}>
                    <FaEnvelope /> {email}
                  </a>
                ))}
                <a href={`tel:+43${p.phone.replace(/[^0-9]/g, '')}`}>
                  <FaPhone /> {p.phone}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="section-header" style={{ marginTop: '4rem' }}>
          <span className="section-tag">Schulerhalter</span>
          <h2 className="section-title">Herz-Jesu-Missionare</h2>
        </AnimatedSection>

        <div className="team-grid">
          {schulerhalter.map((p, i) => (
            <AnimatedSection key={i} className="team-card" delay={i * 100}>
              <img
                src={p.photo}
                alt={p.name}
                style={photoAvatarStyle}
                loading="lazy"
              />
              <h3>{p.name}</h3>
              <span className="team-role">{p.role}</span>
              <div className="team-contact">
                {p.emails.map((email, j) => (
                  <a key={j} href={`mailto:${email}`}>
                    <FaEnvelope /> {email}
                  </a>
                ))}
                {p.web && (
                  <a href={p.web} target="_blank" rel="noopener noreferrer">
                    <FaGlobe /> herz-jesu-missionare.com
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </>
  )
}

export default Schulleitung
