import {
  FaHome, FaMountain, FaHiking, FaCheck, FaInfoCircle,
  FaPhone, FaEnvelope
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

function Internat() {
  return (
    <>
      <PageHero
        tag="Wohnen & Leben"
        title="Internat"
        subtitle="Ein zweites Zuhause für unsere Schülerinnen und Schüler"
        color="purple"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">
            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaHome /></div>
              <h2>Leben im Internat</h2>
              <p>
                Unser Internat bietet Schülerinnen und Schülern ein zweites Zuhause in einer
                familiären Atmosphäre. Hier wird nicht nur gelernt, sondern auch gemeinsam gelebt,
                gespielt und Abenteuer erlebt.
              </p>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaMountain /></div>
              <h2>Aktivitäten & Wochenenden</h2>
              <p>
                Regelmäßige Internatswochenenden mit spannenden Aktivitäten gehören zum Programm:
                Wanderungen in der Salzburger Bergwelt, Skifahren, Bowling und vieles mehr.
              </p>
              <div className="highlight-box">
                <h4><FaHiking /> Highlights</h4>
                <ul className="styled-list">
                  <li>Wanderungen in den Salzburger Alpen</li>
                  <li>Skiausflüge nach Werfenweng und Obertauern</li>
                  <li>Gemeinsame Grillabende</li>
                  <li>Kulturelle Ausflüge</li>
                  <li>Internationale Begegnungen (z.B. Budweis)</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <aside className="content-sidebar">
            <AnimatedSection className="sidebar-card highlight-card">
              <h3><FaInfoCircle /> Auf einen Blick</h3>
              <ul className="info-list">
                {['Familiäre Atmosphäre', 'Professionelle Betreuung', 'Lernbegleitung',
                  'Freizeitprogramm', 'Internatswochenenden', 'Gemeinschaftsleben'].map((item, i) => (
                  <li key={i}><FaCheck /> {item}</li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection className="sidebar-card">
              <h3><FaPhone /> Kontakt Internat</h3>
              <p>Für Fragen zum Internat kontaktieren Sie uns gerne:</p>
              <a href="mailto:info@herzjesugym.at" className="btn btn-primary btn-block" style={{ marginTop: '1rem' }}>
                <FaEnvelope /> Anfrage senden
              </a>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Internat
