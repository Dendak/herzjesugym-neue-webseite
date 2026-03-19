import {
  FaSun, FaUtensils, FaFutbol, FaBookReader, FaUserGraduate,
  FaStar, FaClock, FaPalette, FaUserTie, FaEnvelope,
  FaFilePdf, FaDownload, FaImages
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const features = [
  { icon: <FaUtensils />, title: 'Frisches Mittagessen', desc: 'In unserer schuleigenen K\u00fcche wird t\u00e4glich frisch und gesund gekocht.' },
  { icon: <FaFutbol />, title: 'Vielf\u00e4ltiges Freizeitangebot', desc: 'Fu\u00dfball, Handball, Klettern, Fotografie, Theater, Chorgesang, Instrumentalunterricht, Keramikwerkstatt und vieles mehr.' },
  { icon: <FaBookReader />, title: 'Studium & Hausaufgaben', desc: 'Betreutes Lernen in Klassenr\u00e4umen mit professioneller Unterst\u00fctzung.' },
  { icon: <FaUserGraduate />, title: 'Oberstufenbetreuung', desc: 'Separate Studierr\u00e4ume mit fachlich gemischtem Betreuerteam f\u00fcr gezielte Unterst\u00fctzung.' },
]

const schedule = [
  { time: '07:45', desc: 'Schulbeginn' },
  { time: '12:15', desc: 'Mittagessen' },
  { time: '13:00', desc: 'Freizeit' },
  { time: '14:00', desc: 'Studium / Unterricht' },
  { time: '16:40', desc: 'Ende Tagesheim' },
]

const activities = [
  'Fu\u00dfball', 'Handball', 'Klettern', 'Hockey', 'Fotografie',
  'Theater', 'Chorgesang', 'Trommeln', 'Instrumentalunterricht',
  'Keramik', 'Medienarbeit', 'Labor'
]

const galleryImages = [
  { src: 'https://www.herzjesugym.com/wp-content/uploads/2014/10/Tagesheim-1-512x427.jpg', alt: 'Domino Day' },
  { src: 'https://www.herzjesugym.com/wp-content/uploads/2014/10/Tagesheim-2-512x427.jpg', alt: 'Kr\u00e4utergarten' },
  { src: 'https://www.herzjesugym.com/wp-content/uploads/2014/10/Tagesheim-4-512x427.jpg', alt: 'Freizeit und Spiel' },
  { src: 'https://www.herzjesugym.com/wp-content/uploads/2014/10/Fotografieren-430x359.jpg', alt: 'Kreatives Fotografieren' },
  { src: 'https://www.herzjesugym.com/wp-content/uploads/2014/10/Instrumentalunterricht-430x359.jpg', alt: 'Instrumentalunterricht' },
  { src: 'https://www.herzjesugym.com/wp-content/uploads/2014/10/Schulbuffet-430x359.jpg', alt: 'Schulbuffet' },
]

function Tagesheim() {
  return (
    <>
      <PageHero
        tag="Ganztagesbetreuung"
        title="Tagesheim"
        subtitle="Eine wesentliche S&auml;ule unserer Schule"
        color="warm"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaSun /></div>
              <h2>Unser Tagesheim</h2>
              <p>
                Die Tagesbetreuung ist eine wesentliche S&auml;ule unserer Schule und wird von
                fast allen Sch&uuml;lerinnen und Sch&uuml;lern genutzt. Wir bieten ein umfassendes
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
                <li>Umfassendes Freizeit- und F&ouml;rderangebot</li>
                <li>Finanzierung durch Staat und Schulerhalter/Eltern</li>
              </ul>
            </AnimatedSection>

            {/* Gallery */}
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaImages /></div>
              <h2>Impressionen aus dem Tagesheim</h2>
              <div className="tagesheim-gallery">
                {galleryImages.map((img, i) => (
                  <div key={i} className="gallery-item">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <span className="gallery-caption">{img.alt}</span>
                  </div>
                ))}
              </div>
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
            <AnimatedSection className="sidebar-card">
              <h3><FaDownload /> Download</h3>
              <a
                href="https://www.herzjesugym.com/wp-content/uploads/2025/09/GTS-Angebote-25-26-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                <FaFilePdf /> Tagesheimangebote 2025/26 (PDF)
              </a>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Tagesheim
