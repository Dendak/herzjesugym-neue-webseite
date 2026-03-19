import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  FaUserPlus, FaInfoCircle, FaGraduationCap, FaUsers, FaBookOpen,
  FaAward, FaHeart, FaFlask, FaGlobeEurope, FaHome, FaLaptopCode,
  FaPlane, FaCalendar, FaTag, FaEnvelope, FaChevronDown,
  FaYoutube, FaExternalLinkAlt
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

function CountUp({ target, suffix = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0
        const step = Math.ceil(target / 60)
        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          el.textContent = current + suffix
        }, 25)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return <div ref={ref} className="stat-number">0</div>
}

const blogPosts = [
  {
    title: 'Gestern Vitamin D, heute Vitamin Schnee \u2013 Gr\u00fc\u00dfe von der 3ab',
    date: '18. M\u00e4rz 2026',
    category: 'Bewegung und Sport',
    url: '/bewegung-und-sport/gestern-vitamin-d-heute-vitamin-schnee-gruesse-von-der-3ab/',
    image: 'https://www.herzjesugym.com/wp-content/uploads/2026/03/d323d901-a41f-407a-a218-eea45d0c4380-1-700x500.jpeg',
    featured: true,
  },
  {
    title: 'Austausch verbindet: Besuch aus Kecskem\u00e9t',
    date: '11. M\u00e4rz 2026',
    category: 'Projekte',
    url: '/projekte/austausch-verbindet-besuch-aus-kecskemet/',
    image: 'https://www.herzjesugym.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-11-at-09.11.44-700x500.jpeg',
  },
  {
    title: 'Gr\u00fc\u00dfe vom Schikurs der Klassen 2cd in Obertauern!',
    date: '4. M\u00e4rz 2026',
    category: 'Bewegung und Sport',
    url: '/bewegung-und-sport/gruesse-vom-schikurs-der-klassen-2cd-in-obertauern/',
    image: 'https://www.herzjesugym.com/wp-content/uploads/2026/03/1000057291-700x600.jpg',
  },
  {
    title: 'Talenteabend 2026 \u2013 herzliche Einladung!',
    date: '27. Februar 2026',
    category: 'Elternverein',
    url: '/elternverein/talenteabend-2026-herzliche-einladung/',
    image: 'https://www.herzjesugym.com/wp-content/uploads/2026/02/Einladung_Talente-Abend_aktuell-bilder-0-1024x724.jpg',
  },
  {
    title: 'Landessprachenwettbewerb 2026',
    date: '25. Februar 2026',
    category: 'Allgemein',
    url: '/allgemein/landessprachenwettbewerb-2026/',
    image: 'https://www.herzjesugym.com/wp-content/uploads/2026/02/Sprachenwettbewerb.jpg',
  },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <header
        className="hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://www.herzjesugym.com/wp-content/uploads/2024/10/alle-Lehrer-2024-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content">
          <div className="hero-badge">Privatgymnasium seit 1891</div>
          <h1 className="hero-title">
            Privatgymnasium der<br />
            <span className="highlight">Herz-Jesu-Missionare</span>
          </h1>
          <p className="hero-subtitle">Schule mit Herz und Verstand in Salzburg</p>
          <p className="hero-motto">&bdquo;Auch in Zukunft Mensch sein&ldquo; &mdash; Jahresmotto bis 2029</p>
          <div className="hero-actions">
            <Link to="/anmeldung" className="btn btn-primary">
              <FaUserPlus /> Jetzt anmelden
            </Link>
            <Link to="/leitbild" className="btn btn-secondary">
              <FaInfoCircle /> Mehr erfahren
            </Link>
          </div>
        </div>
        <div className="hero-scroll"><FaChevronDown /></div>
      </header>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <AnimatedSection className="stat-card">
              <div className="stat-icon"><FaGraduationCap /></div>
              <CountUp target={130} />
              <div className="stat-label">Jahre Tradition</div>
            </AnimatedSection>
            <AnimatedSection className="stat-card" delay={100}>
              <div className="stat-icon"><FaUsers /></div>
              <CountUp target={600} suffix="+" />
              <div className="stat-label">Sch&uuml;lerinnen &amp; Sch&uuml;ler</div>
            </AnimatedSection>
            <AnimatedSection className="stat-card" delay={200}>
              <div className="stat-icon"><FaBookOpen /></div>
              <CountUp target={25} suffix="+" />
              <div className="stat-label">Fachbereiche</div>
            </AnimatedSection>
            <AnimatedSection className="stat-card" delay={300}>
              <div className="stat-icon"><FaAward /></div>
              <CountUp target={100} suffix="%" />
              <div className="stat-label">Engagement</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-tag">Was uns auszeichnet</span>
            <h2 className="section-title">Bildung mit Werten</h2>
            <p className="section-desc">
              Unser Gymnasium verbindet christliche Werte mit moderner Bildung und bietet ein umfassendes Lernumfeld.
            </p>
          </AnimatedSection>
          <div className="features-grid">
            {[
              { icon: <FaHeart />, title: 'Christliche Werte', desc: 'Gegr\u00fcndet von den Herz-Jesu-Missionaren, pflegen wir eine Kultur der N\u00e4chstenliebe, des Respekts und der Gemeinschaft.' },
              { icon: <FaFlask />, title: 'MINT-F\u00f6rderung', desc: 'Naturwissenschaftliches Labor, Informatik und Astronomie-Pluskurs erweitern das klassische Gymnasium um zukunftsorientierte F\u00e4cher.' },
              { icon: <FaGlobeEurope />, title: 'Sprachenvielfalt', desc: 'Englisch, Franz\u00f6sisch, Latein, Griechisch, Italienisch, Russisch und Spanisch \u2014 eine einzigartige Bandbreite.' },
              { icon: <FaHome />, title: 'Tagesheim & Internat', desc: 'Ganzt\u00e4gige Betreuung mit frischem Mittagessen, Freizeitangeboten und professioneller Lernbegleitung.' },
              { icon: <FaLaptopCode />, title: 'Digitale Bildung', desc: 'Als Expert.Schule mit Gold-Zertifikat nutzen wir moderne Lernplattformen wie Moodle, Teams und WebUntis.' },
              { icon: <FaPlane />, title: 'Erasmus+ & Austausch', desc: 'Internationale Projekte und Sch\u00fcleraustausch, u.a. mit unserer Partnerschule in Kecskem\u00e9t, Ungarn.' },
            ].map((f, i) => (
              <AnimatedSection key={i} className="feature-card" delay={i * 100}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="news-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="section-tag">Aktuelles</span>
            <h2 className="section-title">Neuigkeiten aus dem Schulleben</h2>
          </AnimatedSection>
          <div className="news-with-sidebar">
            <div className="news-grid">
              {blogPosts.map((post, i) => (
                <AnimatedSection key={i} className={`news-card ${post.featured ? 'featured' : ''}`} delay={i * 100}>
                  <a href={`https://www.herzjesugym.com${post.url}`} target="_blank" rel="noopener noreferrer" className="news-card-link">
                    <div className="news-image">
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </div>
                    <div className="news-content">
                      <div className="news-meta">
                        <span><FaCalendar /> {post.date}</span>
                        <span><FaTag /> {post.category}</span>
                      </div>
                      <h3>{post.title}</h3>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="news-sidebar">
              <AnimatedSection className="sidebar-card">
                <h3><FaYoutube /> Videoimpressionen</h3>
                <a
                  href="https://youtu.be/mTIMB7TI3vo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-video-link"
                >
                  <img
                    src="https://www.herzjesugym.com/wp-content/uploads/2023/06/intro-300x149.jpg"
                    alt="Videoimpressionen Herz-Jesu-Gymnasium"
                    style={{ width: '100%', borderRadius: '8px' }}
                    loading="lazy"
                  />
                  <span className="sidebar-video-play">Video ansehen <FaExternalLinkAlt /></span>
                </a>
              </AnimatedSection>

              <AnimatedSection className="sidebar-card" delay={100}>
                <h3>Jahresmotto</h3>
                <img
                  src="https://www.herzjesugym.com/wp-content/uploads/2025/09/5JahresMotto2025-26-120x300.jpg"
                  alt="Jahresmotto 2025/26"
                  style={{ width: '120px', display: 'block', margin: '0 auto', borderRadius: '8px' }}
                  loading="lazy"
                />
              </AnimatedSection>

              <AnimatedSection className="sidebar-card" delay={200}>
                <h3>Auszeichnungen</h3>
                <div className="sidebar-badges">
                  <img
                    src="https://www.herzjesugym.com/wp-content/uploads/2024/10/expertschule.png"
                    alt="Expert.Schule"
                    style={{ height: '60px', marginRight: '12px' }}
                    loading="lazy"
                  />
                  <img
                    src="https://www.herzjesugym.com/wp-content/uploads/2019/03/erasmus.jpg"
                    alt="Erasmus+"
                    style={{ height: '60px' }}
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection className="cta-content">
            <h2>Bereit f&uuml;r eine Schule mit Herz?</h2>
            <p>
              Lernen Sie uns kennen und erfahren Sie, warum das Herz-Jesu-Gymnasium
              seit &uuml;ber 130 Jahren die richtige Wahl f&uuml;r Ihr Kind ist.
            </p>
            <div className="cta-actions">
              <Link to="/anmeldung" className="btn btn-primary btn-lg">
                <FaUserPlus /> Zur Anmeldung
              </Link>
              <Link to="/kontakt" className="btn btn-outline btn-lg">
                <FaEnvelope /> Kontakt aufnehmen
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Home
