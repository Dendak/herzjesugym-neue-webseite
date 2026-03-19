import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  FaUserPlus, FaInfoCircle, FaGraduationCap, FaUsers, FaBookOpen,
  FaAward, FaHeart, FaFlask, FaGlobeEurope, FaHome, FaLaptopCode,
  FaPlane, FaCalendar, FaTag, FaSkiing, FaExchangeAlt, FaSnowboarding,
  FaStar, FaEnvelope, FaChevronDown
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

function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero">
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
              <div className="stat-label">Schülerinnen & Schüler</div>
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
              { icon: <FaHeart />, title: 'Christliche Werte', desc: 'Gegründet von den Herz-Jesu-Missionaren, pflegen wir eine Kultur der Nächstenliebe, des Respekts und der Gemeinschaft.' },
              { icon: <FaFlask />, title: 'MINT-Förderung', desc: 'Naturwissenschaftliches Labor, Informatik und Astronomie-Pluskurs erweitern das klassische Gymnasium um zukunftsorientierte Fächer.' },
              { icon: <FaGlobeEurope />, title: 'Sprachenvielfalt', desc: 'Englisch, Französisch, Latein, Griechisch, Italienisch, Russisch und Spanisch \u2014 eine einzigartige Bandbreite.' },
              { icon: <FaHome />, title: 'Tagesheim & Internat', desc: 'Ganztägige Betreuung mit frischem Mittagessen, Freizeitangeboten und professioneller Lernbegleitung.' },
              { icon: <FaLaptopCode />, title: 'Digitale Bildung', desc: 'Als Expert.Schule mit Gold-Zertifikat nutzen wir moderne Lernplattformen wie Moodle, Teams und WebUntis.' },
              { icon: <FaPlane />, title: 'Erasmus+ & Austausch', desc: 'Internationale Projekte und Schüleraustausch, u.a. mit unserer Partnerschule in Kecskemét, Ungarn.' },
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
          <div className="news-grid">
            {[
              { icon: <FaSkiing />, badge: 'Aktuell', date: 'März 2026', tag: 'Sport', title: 'Vitamin Schnee \u2014 Schikurs der 3ab', desc: 'Unsere dritten Klassen genossen einen unvergesslichen Schikurs mit viel Schnee und Spaß auf der Piste.', featured: true },
              { icon: <FaExchangeAlt />, date: '2026', tag: 'Erasmus+', title: 'Austausch mit Kecskemét', desc: 'Im Rahmen unseres Erasmus-Projekts besuchten Schüler unsere Partnerschule in Ungarn.' },
              { icon: <FaSnowboarding />, date: '2026', tag: 'Sport', title: 'Schikurs 2cd in Obertauern', desc: 'Die Klassen 2c und 2d verbrachten eine sportliche Woche in Obertauern.' },
              { icon: <FaStar />, date: '2026', tag: 'Kultur', title: 'Talenteabend 2026', desc: 'Schülerinnen und Schüler zeigten beim Talenteabend ihre beeindruckenden Fähigkeiten.' },
            ].map((n, i) => (
              <AnimatedSection key={i} className={`news-card ${n.featured ? 'featured' : ''}`} delay={i * 100}>
                <div className="news-image">
                  <div className="news-image-placeholder">{n.icon}</div>
                  {n.badge && <span className="news-badge">{n.badge}</span>}
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span><FaCalendar /> {n.date}</span>
                    <span><FaTag /> {n.tag}</span>
                  </div>
                  <h3>{n.title}</h3>
                  <p>{n.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection className="cta-content">
            <h2>Bereit für eine Schule mit Herz?</h2>
            <p>
              Lernen Sie uns kennen und erfahren Sie, warum das Herz-Jesu-Gymnasium
              seit über 130 Jahren die richtige Wahl für Ihr Kind ist.
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
