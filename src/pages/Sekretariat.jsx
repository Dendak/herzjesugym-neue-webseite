import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const staff = [
  {
    name: 'Edith Aigner',
    role: 'Sekretariat',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Aigner-Edith-2025hp.jpg',
    phone: '0662 432901 231',
    emails: ['info@herzjesugym.at', 'edith.aigner@herzjesugym.at'],
  },
  {
    name: 'Roswitha Mayer',
    role: 'Buchhaltung',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/MAYER_Roswitha_2019-1.jpg',
    phone: '0662 432901 232',
    emails: ['buchhaltung@herzjesugym.at', 'roswitha.mayer@herzjesugym.at'],
  },
]

function Sekretariat() {
  return (
    <>
      <PageHero
        tag="Verwaltung"
        title="Sekretariat & Buchhaltung"
        subtitle="Ihre Ansprechpartnerinnen in der Verwaltung"
        color="blue"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">Unser Team</span>
          <h2 className="section-title">Wir sind gerne für Sie da</h2>
          <p className="section-desc">
            Das Sekretariat und die Buchhaltung stehen Ihnen bei allen organisatorischen und
            administrativen Anliegen zur Verfügung.
          </p>
        </AnimatedSection>

        <div className="team-grid">
          {staff.map((person, i) => (
            <AnimatedSection key={i} className="team-card" delay={i * 150}>
              <img
                src={person.photo}
                alt={person.name}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '1rem',
                }}
              />
              <h3>{person.name}</h3>
              <span className="team-role">{person.role}</span>
              <div className="team-contact">
                <a href={`tel:+43${person.phone.replace(/[^0-9]/g, '')}`}>
                  <FaPhone /> {person.phone}
                </a>
                {person.emails.map((email, j) => (
                  <a key={j} href={`mailto:${email}`}>
                    <FaEnvelope /> {email}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="content-card" style={{ marginTop: '3rem' }}>
          <div className="content-card-icon">
            <FaClock />
          </div>
          <h2>Öffnungszeiten</h2>
          <p>Das Sekretariat ist während der Schulzeit erreichbar:</p>
          <p><strong>Montag bis Freitag:</strong> 07:30 bis 15:00 Uhr</p>
        </AnimatedSection>
      </div>
    </>
  )
}

export default Sekretariat
