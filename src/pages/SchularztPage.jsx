import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt, FaInfoCircle, FaStethoscope, FaBrain } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const photoStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '1rem',
}

function SchularztPage() {
  return (
    <>
      <PageHero
        tag="Gesundheit & Beratung"
        title="Schularzt & Schulpsychologin"
        subtitle="Gesundheitliche und psychologische Betreuung an unserer Schule"
        color="blue"
      />
      <div className="container page-content">
        <div className="team-grid">
          {/* Schularzt */}
          <AnimatedSection className="team-card" delay={0}>
            <img
              src="https://www.herzjesugym.com/wp-content/uploads/2019/12/Keinbild.gif"
              alt="Dr. Johannes Dannoritzer"
              style={photoStyle}
            />
            <h3>Dr. Johannes Dannoritzer</h3>
            <span className="team-role"><FaStethoscope style={{ marginRight: '0.4rem' }} />Schularzt</span>
            <div className="team-contact">
              <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <FaClock /> Ordination: Dienstag vormittags 8:30 bis 11:30 Uhr
              </span>
              <a href="tel:+43662432901">
                <FaPhone /> 0662 432901
              </a>
              <a href="mailto:schularzt@herzjesugym.at">
                <FaEnvelope /> schularzt@herzjesugym.at
              </a>
            </div>
          </AnimatedSection>

          {/* Schulpsychologin */}
          <AnimatedSection className="team-card" delay={150}>
            <img
              src="https://www.herzjesugym.com/wp-content/uploads/2024/09/Marta-Sturm-2024-hp.png"
              alt="Marta Sturm BA"
              style={photoStyle}
            />
            <h3>Marta Sturm BA</h3>
            <span className="team-role"><FaBrain style={{ marginRight: '0.4rem' }} />Schulpsychologin</span>
            <div className="team-contact">
              <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <FaClock /> Sprechstunde: Donnerstag 09:40–12:30 Uhr
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--gray-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <FaMapMarkerAlt /> Sprechzimmer Erdgeschoss
              </span>
              <a href="tel:+4367764828230">
                <FaPhone /> 0677 6482 8230
              </a>
              <a href="mailto:praxis@psychotherapie-martasturm.com">
                <FaEnvelope /> praxis@psychotherapie-martasturm.com
              </a>
            </div>
            <div className="highlight-box" style={{ marginTop: '1rem', textAlign: 'left' }}>
              <h4><FaInfoCircle /> Hinweis</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)' }}>
                Um Terminvereinbarung wird gebeten.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}

export default SchularztPage
