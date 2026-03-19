import { Link } from 'react-router-dom'
import {
  FaUserTie, FaCalculator, FaUsers, FaHome, FaBuilding,
  FaUserFriends, FaChalkboardTeacher, FaClock, FaStethoscope,
  FaExternalLinkAlt
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const communityLinks = [
  {
    icon: <FaUserTie />,
    label: 'Schulleitung',
    to: '/schulleitung',
    external: false,
  },
  {
    icon: <FaCalculator />,
    label: 'Sekretariat / Buchhaltung',
    to: '/sekretariat',
    external: false,
  },
  {
    icon: <FaUsers />,
    label: 'Sch\u00fclerinnen / Sch\u00fcler',
    to: '/schuelerseite',
    external: false,
  },
  {
    icon: <FaHome />,
    label: 'Tagesheim',
    to: '/tagesheim',
    external: false,
  },
  {
    icon: <FaBuilding />,
    label: 'Internat',
    to: 'https://internat.herzjesugym.com/',
    external: true,
  },
  {
    icon: <FaUserFriends />,
    label: 'Elternverein',
    to: 'http://eltern-am-herzjesugym.at/',
    external: true,
  },
  {
    icon: <FaChalkboardTeacher />,
    label: 'Lehrerinnen / Lehrer',
    to: '/schulleitung',
    external: false,
  },
  {
    icon: <FaClock />,
    label: 'Sprechstunden',
    to: 'https://erato.webuntis.com/WebUntis/?school=herzjesugym#/basic/officehours',
    external: true,
  },
  {
    icon: <FaStethoscope />,
    label: 'Schularzt / Schulpsychologin',
    to: '/schularzt',
    external: false,
  },
  {
    icon: <FaBuilding />,
    label: 'Hausverwaltung',
    to: '/hausverwaltung',
    external: false,
  },
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
          <span className="section-tag">Bereiche</span>
          <h2 className="section-title">Unsere Schulgemeinschaft</h2>
          <p className="section-desc">
            Die Schulgemeinschaft des Herz-Jesu-Gymnasiums besteht aus vielen engagierten Menschen.
            W&auml;hlen Sie einen Bereich, um mehr zu erfahren.
          </p>
        </AnimatedSection>

        <div className="link-cards-grid">
          {communityLinks.map((item, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              {item.external ? (
                <a
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card"
                >
                  <div className="link-card-icon">{item.icon}</div>
                  <span className="link-card-label">{item.label}</span>
                  <FaExternalLinkAlt className="link-card-external" />
                </a>
              ) : (
                <Link to={item.to} className="link-card">
                  <div className="link-card-icon">{item.icon}</div>
                  <span className="link-card-label">{item.label}</span>
                </Link>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default Schulgemeinschaft
