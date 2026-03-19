import {
  FaUserTie, FaUserCog, FaUserShield, FaUser, FaCross, FaEnvelope,
  FaPhone, FaGlobe, FaChalkboardTeacher, FaUserFriends, FaUsers,
  FaStethoscope, FaBrain, FaBuilding, FaClock, FaCalculator
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const leadership = [
  { icon: <FaUserTie />, name: 'Mag. Peter Porenta', role: 'Direktor', email: 'direktion@herzjesugym.at', phone: '0662 432901' },
  { icon: <FaUserCog />, name: 'Mag. Franz Feichtl', role: 'Administrator', email: 'administration@herzjesugym.at', phone: '0662 432901-230' },
  { icon: <FaUserShield />, name: 'Mag. Dr. Paul Dienstbier', role: 'Tagesheimleiter', email: 'paul.dienstbier@herzjesugym.at', phone: '0662 432901-238' },
  { icon: <FaUser />, name: 'Denis Holub', role: 'Personalleiter', email: 'denis.holub@herzjesugym.at', phone: '0662 432901-236' },
]

const schulerhalter = [
  { name: 'P. Michael Huber MSC', role: 'Provinzial', email: 'provinzialat@msc-salzburg.at', web: 'herz-jesu-missionare.com' },
  { name: 'P. Manfred Oßner MSC', role: 'Superior', email: 'superiorat@msc-salzburg.at', web: 'herz-jesu-missionare.com' },
]

const communityLinks = [
  { icon: <FaChalkboardTeacher />, label: 'Lehrkräfte' },
  { icon: <FaUserFriends />, label: 'Elternverein' },
  { icon: <FaUsers />, label: 'Schülervertretung' },
  { icon: <FaStethoscope />, label: 'Schularzt' },
  { icon: <FaBrain />, label: 'Schulpsychologie' },
  { icon: <FaBuilding />, label: 'Hausverwaltung' },
  { icon: <FaClock />, label: 'Sprechstunden' },
  { icon: <FaCalculator />, label: 'Sekretariat' },
]

function Schulgemeinschaft() {
  return (
    <>
      <PageHero
        tag="Unsere Menschen"
        title="Schulgemeinschaft"
        subtitle="Gemeinsam bilden wir eine starke Gemeinschaft"
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
              <div className="team-avatar">{p.icon}</div>
              <h3>{p.name}</h3>
              <span className="team-role">{p.role}</span>
              <div className="team-contact">
                <a href={`mailto:${p.email}`}><FaEnvelope /> {p.email}</a>
                <a href={`tel:+43${p.phone.replace(/[^0-9]/g, '')}`}><FaPhone /> {p.phone}</a>
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
              <div className="team-avatar"><FaCross /></div>
              <h3>{p.name}</h3>
              <span className="team-role">{p.role}</span>
              <div className="team-contact">
                <a href={`mailto:${p.email}`}><FaEnvelope /> {p.email}</a>
                <a href={`https://${p.web}`} target="_blank" rel="noopener noreferrer"><FaGlobe /> {p.web}</a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="community-links">
          <h3>Weitere Bereiche der Schulgemeinschaft</h3>
          <div className="link-cards-grid">
            {communityLinks.map((l, i) => (
              <div key={i} className="link-card">
                {l.icon}
                <span>{l.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}

export default Schulgemeinschaft
