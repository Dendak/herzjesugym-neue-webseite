import { FaUserCircle, FaEnvelope } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const teachers = [
  { name: 'Mag. Johanna Auer', faecher: 'Deutsch, Englisch' },
  { name: 'Mag. Ursula Auinger-Brunner', faecher: 'Deutsch, Geographie und wirtschaftliche Bildung' },
  { name: 'Mag. Oliver Baumann', faecher: 'Geschichte und Politische Bildung, Latein, Informatik, Kommunikation-Rhetorik-Pr\u00e4sentation' },
  { name: 'MMMag. Dr. Helmut Beneder', faecher: 'Geschichte und Politische Bildung, Katholische Religion' },
  { name: 'Mag. Magdalena Br\u00e4ndle-Rathner', faecher: 'Englisch, Geschichte und Politische Bildung' },
  { name: 'Mag. Andrea Brommer', faecher: 'Technik und Design, Digitale Grundbildung' },
  { name: 'Univ. Prof. Mag. Dr. Anton Bucher', faecher: 'Katholische Religion' },
  { name: 'Mag. Johannes Czifra', faecher: 'Deutsch, Katholische Religion, Musik' },
  { name: 'Mag. Dr. Paul Dienstbier', faecher: 'Griechisch, Latein, Informatik', note: 'Tagesheimleiter' },
  { name: 'MMag. Josef Di Stolfo', faecher: 'Latein, Griechisch, Katholische Religion' },
  { name: 'Mag. Sabine Dorfer', faecher: 'Mathematik, Physik' },
  { name: 'Mag. Evelyn Eder', faecher: 'Geographie und wirtschaftliche Bildung, Spanisch' },
  { name: 'Mag. Sebastian Eger', faecher: 'Kunst und Gestaltung, Technik und Design', note: 'Sabbatical' },
  { name: 'Mag. Barbara Egger-Schlewitz', faecher: 'Italienisch' },
  { name: 'Mag. Thomas Eisner', faecher: 'Englisch, Geographie und wirtschaftliche Bildung' },
  { name: 'Cornel Entfellner', faecher: 'Deutsch' },
  { name: 'Mag. Stefan Enzinger', faecher: 'Bewegung und Sport, Chemie' },
  { name: 'Mag. Carina Ertl', faecher: 'Latein, Psychologie und Philosophie' },
  { name: 'Mag. Franz Feichtl', faecher: 'Geschichte und Politische Bildung, Informatik, Psychologie und Philosophie', note: 'Administrator' },
  { name: 'Mag. Christa Ganzera', faecher: 'Englisch, Latein' },
  { name: 'Mag. Katharina Gasser PhD', faecher: 'Englisch, Geschichte und Politische Bildung' },
  { name: 'DI Dr. Simon Ginzinger MSc', faecher: 'Physik' },
  { name: 'Mag. Victor Gonzalez', faecher: 'Englisch, Spanisch' },
  { name: 'Mag. Fabian Groiss', faecher: 'Italienisch, Geschichte und Politische Bildung' },
  { name: 'Mag. Martin G\u00fcnther', faecher: 'Geschichte und Politische Bildung, Geographie und wirtschaftliche Bildung' },
  { name: 'Mag. Peter Haas', faecher: 'Bildnerische Erziehung, Technisches Werken' },
  { name: 'Mag. Stefan Hagenhofer', faecher: 'Bewegung und Sport, Mathematik' },
  { name: 'MMag. Hermine Haidvogel', faecher: 'Deutsch, Russisch, Italienisch' },
  { name: 'Mag. Martina Hammerer-Kastner', faecher: 'Mathematik, Psychologie und Philosophie' },
  { name: 'Barbara Haupt', faecher: 'Deutsch' },
  { name: 'Mag. Sabine Hemetsberger', faecher: 'Deutsch, Franz\u00f6sisch', note: 'Karenz' },
  { name: 'Dominik Hiptmair M.Ed.', faecher: 'Biologie und Umweltbildung' },
  { name: 'Denis Holub BSc', faecher: 'Informatik, Digitale Grundbildung', note: 'Personalleiter' },
  { name: 'Lena H\u00f6tzendorfer BEd MEd', faecher: 'Deutsch, Franz\u00f6sisch, Bewegung und Sport' },
  { name: 'Mag. Andreas Hufnagl', faecher: 'Spanisch' },
  { name: 'MMag. Karin Itzinger', faecher: 'Englisch, Spanisch' },
  { name: 'Brigitte Kirchgatterer', faecher: 'Deutsch, Geschichte und Politische Bildung' },
  { name: 'Mag. Martin Knauseder', faecher: 'Englisch, Psychologie und Philosophie' },
  { name: 'Lisa K\u00f6rner', faecher: 'Deutsch, Russisch' },
  { name: 'Michael Kroiss', faecher: 'Deutsch, Geschichte und Politische Bildung' },
  { name: 'Eva Lachinger', faecher: 'Deutsch, Latein' },
  { name: 'Mag. Bernhard Landsgesell', faecher: 'Bildnerische Erziehung, Technisches Werken' },
  { name: 'MMag. Dr. Peter Machart', faecher: 'Biologie und Umweltbildung, Geographie und wirtschaftliche Bildung' },
  { name: 'Mag. Caroline Moser', faecher: 'Englisch, Spanisch' },
  { name: 'Mag. Peter Porenta', faecher: 'Direktor', note: 'Direktor' },
  { name: 'MMag. Eva Promegger', faecher: 'Franz\u00f6sisch, Italienisch, Spanisch' },
  { name: 'Verena Rathmayr BSc MEd', faecher: 'Bewegung und Sport, Franz\u00f6sisch' },
  { name: 'Mag. Dr. Wolfgang Richter', faecher: 'Bildnerische Erziehung, Geschichte' },
  { name: 'Mag. Dr. Oliver Riefler', faecher: 'Englisch, Geographie und wirtschaftliche Bildung', note: 'Sabbatical' },
  { name: 'Lukas Riegler', faecher: 'Deutsch' },
  { name: 'Mag. Thomas Stadler', faecher: 'Kunst und Gestaltung, Katholische Religion' },
  { name: 'Mag. Florian Standler', faecher: 'Englisch, Geschichte und Politische Bildung' },
  { name: 'Mag. Florian Stangassinger', faecher: 'Englisch, Geographie und wirtschaftliche Bildung' },
  { name: 'Josepha Stangassinger', faecher: 'Deutsch' },
  { name: 'Mag. Dr. Barbara Steiner-Enk', faecher: 'Chemie' },
  { name: 'Stephanie Stifter', faecher: 'Deutsch, Geschichte und Politische Bildung' },
  { name: 'Mag. Elisabeth Struber-Lienbacher', faecher: 'Technik und Design, Biologie und Umweltbildung' },
  { name: 'Mag. Arne Traun', faecher: 'Physik' },
  { name: 'Bernhard Vierthaler', faecher: 'Deutsch, Katholische Religion' },
  { name: 'Mag. Anna Voronina', faecher: 'Englisch' },
  { name: 'Sabine Wenighofer', faecher: 'Deutsch' },
  { name: 'Mag. Daniel Wundsam', faecher: 'Englisch, Geschichte und Politische Bildung' },
  { name: 'Mag. Stefan Zwidl', faecher: 'Biologie und Umweltbildung, Mathematik', note: 'Sabbatical' },
]

const roleNotes = ['Direktor', 'Administrator', 'Tagesheimleiter', 'Personalleiter']

function getBadgeClass(note) {
  if (roleNotes.includes(note)) return 'lehrer-badge lehrer-badge-role'
  return 'lehrer-badge lehrer-badge-away'
}

function Lehrkraefte() {
  return (
    <>
      <PageHero
        color="blue"
        tag="Unsere Lehrkr\u00e4fte"
        title="Lehrerinnen und Lehrer"
      />

      <div className="page-content">
        <div className="container">
          <AnimatedSection>
            <img
              src="https://www.herzjesugym.com/wp-content/uploads/2024/10/alle-Lehrer-2024-1.jpg"
              alt="Lehrerkollegium des Privatgymnasiums der Herz-Jesu-Missionare 2024"
              className="lehrer-group-photo"
            />
            <p className="lehrer-group-caption">Unser Lehrerkollegium 2024</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="lehrer-grid">
              {teachers.map((teacher, index) => (
                <div className="lehrer-card" key={index}>
                  <div className="lehrer-avatar">
                    <FaUserCircle />
                  </div>
                  <div className="lehrer-name">{teacher.name}</div>
                  <div className="lehrer-faecher">{teacher.faecher}</div>
                  {teacher.note && (
                    <span className={getBadgeClass(teacher.note)}>
                      {teacher.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div style={{
              marginTop: '3rem',
              padding: '1.5rem',
              background: 'var(--gray-50)',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              color: 'var(--gray-600)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}>
              <FaEnvelope style={{ color: 'var(--primary)' }} />
              E-Mail-Schema: <strong>vorname.nachname@herzjesugym.at</strong>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}

export default Lehrkraefte
