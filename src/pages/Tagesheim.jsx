import {
  FaSun, FaUtensils, FaFutbol, FaBookReader, FaUserGraduate,
  FaStar, FaClock, FaPalette, FaUserTie, FaEnvelope
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const features = [
  { icon: <FaUtensils />, title: 'Frisches Mittagessen', desc: 'In unserer schuleigenen Küche wird täglich frisch und gesund gekocht.' },
  { icon: <FaFutbol />, title: 'Vielfältiges Freizeitangebot', desc: 'Fußball, Handball, Klettern, Fotografie, Theater, Chorgesang, Instrumentalunterricht, Keramikwerkstatt und vieles mehr.' },
  { icon: <FaBookReader />, title: 'Studium & Hausaufgaben', desc: 'Betreutes Lernen in Klassenräumen mit professioneller Unterstützung.' },
  { icon: <FaUserGraduate />, title: 'Oberstufenbetreuung', desc: 'Separate Studierräume mit fachlich gemischtem Betreuerteam für gezielte Unterstützung.' },
]

const schedule = [
  { time: '07:45', desc: 'Schulbeginn' },
  { time: '12:15', desc: 'Mittagessen' },
  { time: '13:00', desc: 'Freizeit' },
  { time: '14:00', desc: 'Studium / Unterricht' },
  { time: '16:40', desc: 'Ende Tagesheim' },
]

const activities = [
  'Fußball', 'Handball', 'Klettern', 'Hockey', 'Fotografie',
  'Theater', 'Chorgesang', 'Trommeln', 'Instrumentalunterricht',
  'Keramik', 'Medienarbeit', 'Labor'
]

function Tagesheim() {
  return (
    <>
      <PageHero
        tag="Ganztagesbetreuung"
        title="Tagesheim"
        subtitle="Eine wesentliche Säule unserer Schule"
        color="warm"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaSun /></div>
              <h2>Unser Tagesheim</h2>
              <p>
                Die Tagesbetreuung ist eine wesentliche Säule unserer Schule und wird von
                fast allen Schülerinnen und Schülern genutzt. Wir bieten ein umfassendes
                Programm, das Lernen und Freizeit perfekt verbindet.
              </p>
            </AnimatedSection>

            <div className="tagesheim-features">
              {features.map((f, i) => (
                <AnimatedSection key={i} className="th-feature" delay={i * 100}>
                  <div className="th-feature-icon">{f.icon}</div>
                  <div className="th-feature-content">
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaStar /></div>
              <h2>Was uns unterscheidet</h2>
              <ul className="styled-list">
                <li>Tagesheimgruppen entsprechen den Klassengemeinschaften</li>
                <li>Klassenlehrer fungieren als Betreuer &mdash; sie kennen Ihre Kinder</li>
                <li>Betreuung bis 16:40 Uhr</li>
                <li>Umfassendes Freizeit- und Förderangebot</li>
                <li>Finanzierung durch Staat und Schulerhalter/Eltern</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaUserTie /></div>
              <h2>Leitung</h2>
              <div className="contact-inline">
                <p><strong>Mag. Dr. Paul Dienstbier</strong> &mdash; Tagesheimleiter</p>
                <a href="mailto:paul.dienstbier@herzjesugym.at"><FaEnvelope /> paul.dienstbier@herzjesugym.at</a>
              </div>
            </AnimatedSection>
          </div>

          <aside className="content-sidebar">
            <AnimatedSection className="sidebar-card highlight-card">
              <h3><FaClock /> Tagesablauf</h3>
              <div className="schedule">
                {schedule.map((s, i) => (
                  <div key={i} className="schedule-item">
                    <span className="schedule-time">{s.time}</span>
                    <span className="schedule-desc">{s.desc}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection className="sidebar-card">
              <h3><FaPalette /> Freizeitangebote</h3>
              <div className="tag-cloud">
                {activities.map((a, i) => (
                  <span key={i} className="tag">{a}</span>
                ))}
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Tagesheim
