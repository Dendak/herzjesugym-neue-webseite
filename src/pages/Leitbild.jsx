import { Link } from 'react-router-dom'
import {
  FaCross, FaHandsHelping, FaHeart, FaGlobe, FaLink,
  FaChevronRight, FaDesktop, FaExternalLinkAlt, FaQuoteLeft,
  FaUserGraduate, FaAward
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

function Leitbild() {
  return (
    <>
      <PageHero
        tag="Unsere Identit\u00E4t"
        title="Leitbild & Schulprofil"
        subtitle="Was uns antreibt und ausmacht \u2014 seit 1891"
        color="green"
      />
      <div className="container page-content">
        <div className="content-grid">
          <div className="content-main">

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaCross /></div>
              <h2>Unser Leitbild</h2>
              <p>
                Das PG Herz-Jesu-Missionare ist eine katholische Privatschule mit {'\u00D6'}ffentlichkeitsrecht. Der Tr{'\u00E4'}ger der Schule ist der Orden der Herz-Jesu-Missionare.
              </p>
              <p>
                Wir bem{'\u00FC'}hen uns, den jungen Menschen auf der Basis der christlichen Herausforderung ein entsprechendes Menschen-, Welt- und Gottesbild bewu{'\u00DF'}tzumachen.
              </p>
              <p>
                F{'\u00FC'}r uns hat Bildung nicht nur einen individuell {'\u2013'} privaten, sondern auch einen solidarischen Charakter. Wir wollen eine Haltung f{'\u00F6'}rdern, die sich den gesellschaftlichen Widerspr{'\u00FC'}chen stellt. Religiosit{'\u00E4'}t stellt die Sinnfrage und soll vom {'\u2018'}ich{'\u2019'} zum {'\u2018'}Du{'\u2019'} f{'\u00FC'}hren.
              </p>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaUserGraduate /></div>
              <h2>Selbstverantwortung</h2>
              <ul className="styled-list">
                <li>Proze{'\u00DF'}haftes Lernen mit zunehmender {'\u00DC'}bernahme von Eigenverantwortung</li>
                <li>Lernen als Entdecken und Entfalten der eigenen Pers{'\u00F6'}nlichkeit, der eigenen F{'\u00E4'}higkeiten</li>
                <li>Entwicklung der emotionalen und k{'\u00F6'}rperlichen Anlagen</li>
                <li>Vernetzung der Lerninhalte</li>
                <li>Interkulturelles und ganzheitliches Lernen, Einbeziehen offener Lernformen</li>
                <li>Schulische Leistung soll als sinnvolle und motivierende Arbeit erlebt werden</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaAward /></div>
              <h2>Kompetenz</h2>
              <ul className="styled-list">
                <li>Breitgef{'\u00E4'}chertes Bildungsspektrum mit einem weltweiten Horizont: Offenheit und Engagement im geistigen, musischen, religi{'\u00F6'}sen und gesellschaftlichen Leben im Sinne der christlichen Herausforderung</li>
                <li>Kommunikation lernen im Zuh{'\u00F6'}ren, Reden, Planen und Handeln. Sprachliche Ausbildung (Erlernen von Fremdsprachen)</li>
                <li>Vertraut werden mit Arbeitstechniken und -mitteln als Vorbereitung f{'\u00FC'}r ein sp{'\u00E4'}teres Studium</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaHandsHelping /></div>
              <h2>Solidarit{'\u00E4'}t</h2>
              <ul className="styled-list">
                <li>Zusammenarbeit zwischen Sch{'\u00FC'}lern, Lehrern und Eltern</li>
                <li>Sensibel werden f{'\u00FC'}r das Recht aller auf ein menschenw{'\u00FC'}rdiges und sinnerf{'\u00FC'}lltes Leben (soziale Projekte, gemeinschaftsbezogene Aktionen) {'\u2013'} Bereitschaft zum Einsatz f{'\u00FC'}r gemeinsame Vorhaben, die diesem Ziel dienen {'\u2013'} Einander</li>
                <li>Raum lassen und Grenzen akzeptieren in der Ehrfurcht im Umgang miteinander</li>
                <li>Verantwortung {'\u00FC'}bernehmen lernen</li>
                <li>Bereitschaft zu solidarischer Weltverantwortung und zur Bewahrung der Sch{'\u00F6'}pfung</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="content-card">
              <div className="content-card-icon"><FaHeart /></div>
              <h2>Schulerhalter</h2>
              <p>
                Die Ordensgemeinschaft der Herz-Jesu-Missionare wurde von P. Julius Chevalier 1854 gegr{'\u00FC'}ndet. Der Gr{'\u00FC'}nder sah im Herzen Jesu jenes Symbol, das den Menschen k{'\u00FC'}ndet: {'\u2018'}Gott liebt die Menschen und die Welt und will, dass auch die Menschen einander lieben wie Er uns in Jesus geliebt hat.{'\u2019'}
              </p>
              <blockquote className="leitbild-quote">
                <FaQuoteLeft />
                <p>&bdquo;Sensibel werden f{'\u00FC'}r Gott, die eigene W{'\u00FC'}rde und Berufung sowie f{'\u00FC'}r den Anderen, besonders den Schw{'\u00E4'}cheren.&ldquo;</p>
                <cite>Schulprofil der Herz-Jesu-Missionare</cite>
              </blockquote>
              <p style={{ marginTop: '1.5rem' }}>
                Heute wirken die Herz-Jesu-Missionare in {'\u00FC'}ber 50 L{'\u00E4'}ndern auf allen Kontinenten. Ihre zentrale Leitung, das Generalat, ist in Rom, der Gr{'\u00FC'}ndungsort ist Issoudun bei Bourges in Frankreich, ein bekannter Wallfahrtsort und weltweites Fortbildungszentrum der MSC.
              </p>
              <p>
                Die Herz-Jesu-Missionare der s{'\u00FC'}ddeutsch-{'\u00F6'}sterreichischen Provinz mit ihrem Zentrum in Salzburg-Liefering f{'\u00FC'}hren Schulen, Heime, Internate, H{'\u00E4'}user der Besinnung, Pfarreien und arbeiten in der Mission im Kongo/Afrika und in Brasilien/Lateinamerika.
              </p>
            </AnimatedSection>

          </div>

          <aside className="content-sidebar">
            <AnimatedSection className="sidebar-card">
              <h3><FaLink /> Schnelllinks</h3>
              <ul className="sidebar-links">
                <li><Link to="/folder"><FaChevronRight /> Folder Schule</Link></li>
                <li><Link to="/stundentafeln"><FaChevronRight /> Stundentafeln</Link></li>
                <li><Link to="/zeitraster"><FaChevronRight /> Stunden-/Zeitraster</Link></li>
                <li><Link to="/downloads"><FaChevronRight /> Downloads</Link></li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="sidebar-card">
              <h3><FaDesktop /> Plattformen</h3>
              <ul className="sidebar-links">
                <li>
                  <a href="https://www4.lernplattform.schule.at/herzjesugym/login/index.php" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Moodle
                  </a>
                </li>
                <li>
                  <a href="https://herzjesugym.webuntis.com/WebUntis/?school=herzjesugym#/basic/login" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> WebUntis
                  </a>
                </li>
                <li>
                  <a href="https://login.microsoftonline.com/" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> MS Teams
                  </a>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="sidebar-card">
              <h3><FaGlobe /> Externe Links</h3>
              <ul className="sidebar-links">
                <li>
                  <a href="https://www.misacor.org" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> www.misacor.org
                  </a>
                </li>
                <li>
                  <a href="https://www.msc-salzburg.at" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> www.msc-salzburg.at
                  </a>
                </li>
                <li>
                  <a href="https://www.herzjesugym.at" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> www.herzjesugym.at
                  </a>
                </li>
              </ul>
            </AnimatedSection>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Leitbild
