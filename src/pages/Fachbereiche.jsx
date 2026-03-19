import {
  FaLanguage, FaComment, FaGlobeAmericas, FaFlag, FaLandmark,
  FaScroll, FaPizzaSlice, FaSnowflake, FaSun as FaSunIcon,
  FaAtom, FaCalculator, FaBolt, FaFlask, FaLeaf, FaMicroscope,
  FaLaptopCode, FaStar,
  FaBook, FaMap, FaMonument, FaBrain, FaPray, FaFileAlt, FaHeart,
  FaPalette, FaMusic, FaPaintBrush, FaHammer, FaRunning
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const categories = [
  {
    title: 'Sprachen', icon: <FaLanguage />,
    subjects: [
      { icon: <FaComment />, name: 'Deutsch' },
      { icon: <FaGlobeAmericas />, name: 'Englisch' },
      { icon: <FaFlag />, name: 'Französisch' },
      { icon: <FaLandmark />, name: 'Latein' },
      { icon: <FaScroll />, name: 'Griechisch' },
      { icon: <FaPizzaSlice />, name: 'Italienisch' },
      { icon: <FaSnowflake />, name: 'Russisch' },
      { icon: <FaSunIcon />, name: 'Spanisch' },
    ]
  },
  {
    title: 'Naturwissenschaften', icon: <FaAtom />,
    subjects: [
      { icon: <FaCalculator />, name: 'Mathematik' },
      { icon: <FaBolt />, name: 'Physik' },
      { icon: <FaFlask />, name: 'Chemie' },
      { icon: <FaLeaf />, name: 'Biologie & Umweltkunde' },
      { icon: <FaMicroscope />, name: 'Naturwiss. Labor' },
      { icon: <FaLaptopCode />, name: 'Informatik' },
      { icon: <FaStar />, name: 'Astronomie (Pluskurs)' },
    ]
  },
  {
    title: 'Geisteswissenschaften', icon: <FaBook />,
    subjects: [
      { icon: <FaMap />, name: 'Geografie & Wirtschaft' },
      { icon: <FaMonument />, name: 'Geschichte & Sozialkunde' },
      { icon: <FaBrain />, name: 'Psychologie & Philosophie' },
      { icon: <FaPray />, name: 'Religion' },
      { icon: <FaFileAlt />, name: 'EPWA' },
      { icon: <FaHeart />, name: 'Mentale Gesundheit' },
    ]
  },
  {
    title: 'Musisch & Kreativ', icon: <FaPalette />,
    subjects: [
      { icon: <FaMusic />, name: 'Musikerziehung' },
      { icon: <FaPaintBrush />, name: 'Kunst & Gestaltung' },
      { icon: <FaHammer />, name: 'Werkerziehung' },
      { icon: <FaRunning />, name: 'Bewegung & Sport' },
    ]
  },
]

function Fachbereiche() {
  return (
    <>
      <PageHero
        tag="Unser Angebot"
        title="Fachbereiche"
        subtitle="25+ Fächer für eine umfassende Bildung"
        color="teal"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">Fächerangebot</span>
          <h2 className="section-title">Vielfalt als Stärke</h2>
          <p className="section-desc">
            Unser breites Fächerspektrum ermöglicht individuelle Schwerpunktsetzung und ganzheitliche Bildung.
          </p>
        </AnimatedSection>

        <div className="subjects-grid">
          {categories.map((cat, i) => (
            <AnimatedSection key={i} className="subject-category" delay={i * 100}>
              <h3>{cat.icon} {cat.title}</h3>
              <div className="subject-list">
                {cat.subjects.map((s, j) => (
                  <div key={j} className="subject-item">
                    {s.icon} {s.name}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default Fachbereiche
