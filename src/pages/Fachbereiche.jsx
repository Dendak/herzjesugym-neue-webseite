import { FaExternalLinkAlt } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const subjects = [
  { name: 'Astronomie', link: 'https://www.herzjesugym.com/fachbereiche/pluskurs-astronomie/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/10/Teleskop-Bild-4-150x150.jpg' },
  { name: 'Bewegung und Sport', link: 'https://www.herzjesugym.com/fachbereiche/bewegung-und-sport/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/BSP-150x150.jpg' },
  { name: 'Kunst und Gestaltung', link: 'https://www.herzjesugym.com/fachbereiche/bildnerische-erziehung/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/08/Kunst3-150x150.jpeg' },
  { name: 'Biologie und Umweltkunde', link: 'https://www.herzjesugym.com/fachbereiche/biologie-und-umweltkunde/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/10/Bild-Biologie1.jpg' },
  { name: 'Chemie', link: 'https://www.herzjesugym.com/fachbereiche/chemie/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/IMG-20240621-WA0001-150x150.jpg' },
  { name: 'Deutsch', link: 'https://www.herzjesugym.com/fachbereiche/deutsch/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/08/Leseadvent-1-e1754307012232-edited-e1754307583572-150x150.jpg' },
  { name: 'EPWA', link: 'https://www.herzjesugym.com/fachbereiche/einfuehrung-in-die-praxis-wissenschaftlichen-arbeitens/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Bibliothek-150x150.jpg' },
  { name: 'Englisch', link: 'https://www.herzjesugym.com/fachbereiche/englisch/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/08/Englisch-150x150.jpg' },
  { name: 'Franz\u00f6sisch', link: 'https://www.herzjesugym.com/fachbereiche/franzoesisch/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/Bonjour-Paris-Foto1-150x150.jpg' },
  { name: 'Geografie und wirtschaftliche Bildung', link: 'https://www.herzjesugym.com/fachbereiche/geographie-und-wirtschaftskunde/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/08/Geographie3-150x150.jpg' },
  { name: 'Geschichte/Sozialkunde', link: 'https://www.herzjesugym.com/fachbereiche/geschichte-und-sozialkunde/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Geschichte-150x150.jpg' },
  { name: 'Griechisch', link: 'https://www.herzjesugym.com/fachbereiche/griechisch/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/Griechisch-Reisegruppe-vor-der-Tholos-der-Athene-dahinter-Delphi-und-Gebirge-des-Parnass-150x150.jpg' },
  { name: 'Informatik', link: 'https://www.herzjesugym.com/fachbereiche/informatik/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/Foto-Informatik-150x150.jpg' },
  { name: 'Italienisch', link: 'https://www.herzjesugym.com/fachbereiche/italienisch/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Camillo-Peppone-1-150x150.jpg' },
  { name: 'Latein', link: 'https://www.herzjesugym.com/fachbereiche/latein/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Latein-150x150.jpg' },
  { name: 'Mathematik', link: 'https://www.herzjesugym.com/fachbereiche/mathematik/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/06/Fachbereich-Mathematik-150x150.jpg' },
  { name: 'Mentale Gesundheit', link: 'https://www.herzjesugym.com/fachbereiche/mentale%20Gesundheit/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/08/Mentale-Gesundheit-klein-150x150.png' },
  { name: 'Musikerziehung', link: 'https://www.herzjesugym.com/fachbereiche/musikerziehung/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Musikerziehung-150x150.jpg' },
  { name: 'Naturwiss. Labor', link: 'https://www.herzjesugym.com/fachbereiche/naturwissenschaftliches-labor/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2019/06/Fachbereich-NAWI-150x150.jpg' },
  { name: 'Physik', link: 'https://www.herzjesugym.com/fachbereiche/physik/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/10/Foto-11-150x150.jpg' },
  { name: 'Psychologie/Philosophie', link: 'https://www.herzjesugym.com/fachbereiche/psychologie-und-philosophie/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/Profilbild-Psychologie-und-Philosophie-Homepage-150x150.png' },
  { name: 'Religion', link: 'https://www.herzjesugym.com/fachbereiche/religion/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Religion-150x150.jpg' },
  { name: 'Russisch', link: 'https://www.herzjesugym.com/fachbereiche/russisch/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2025/10/Zeichnung_net_voine-150x150.jpeg' },
  { name: 'Spanisch', link: 'https://www.herzjesugym.com/fachbereiche/spanisch/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/spanisch-150x150.jpg' },
  { name: 'Werkerziehung', link: 'https://www.herzjesugym.com/fachbereiche/werkerziehung/', thumbnail: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/WE-150x150.jpg' },
]

function Fachbereiche() {
  return (
    <>
      <PageHero
        tag="Unser Angebot"
        title="Fachbereiche"
        subtitle="25 F&auml;cher f&uuml;r eine umfassende Bildung"
        color="teal"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">F&auml;cherangebot</span>
          <h2 className="section-title">Vielfalt als St&auml;rke</h2>
          <p className="section-desc">
            Unser breites F&auml;cherspektrum erm&ouml;glicht individuelle Schwerpunktsetzung und ganzheitliche Bildung.
            Klicken Sie auf einen Fachbereich, um mehr zu erfahren.
          </p>
        </AnimatedSection>

        <div className="fachbereiche-grid">
          {subjects.map((subject, i) => (
            <AnimatedSection key={i} delay={i * 40}>
              <a
                href={subject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="fachbereich-card"
              >
                <div className="fachbereich-image">
                  <img src={subject.thumbnail} alt={subject.name} loading="lazy" />
                </div>
                <div className="fachbereich-name">
                  <span>{subject.name}</span>
                  <FaExternalLinkAlt className="fachbereich-link-icon" />
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default Fachbereiche
