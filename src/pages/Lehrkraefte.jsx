import { FaEnvelope } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const teachers = [
  { name: 'Mag. Peter Porenta', faecher: 'Direktor', note: 'Direktor', photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/PORENTA_Peter_2019-1.jpg' },
  { name: 'Sophie Aichberger BSc MSc', faecher: 'Biologie und Umweltbildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/Aichberger-Sophie-2025-hp.jpg' },
  { name: 'Mag. Johanna Auer', faecher: 'Deutsch, Englisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2021/11/Auer-Johanna-2021-hp.jpg' },
  { name: 'Mag. Ursula Auinger-Brunner', faecher: 'Deutsch, Geographie und wirtschaftliche Bildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/11/Auinger-Brunner_Ursula.jpg' },
  { name: 'Mag. Oliver Baumann', faecher: 'Geschichte, Latein, Informatik, Kommunikation-Rhetorik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Baumann-Oliver-2022-hp.jpg' },
  { name: 'MMMag. Dr. Helmut Beneder', faecher: 'Geschichte, Katholische Religion', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/11/Beneder_Helmut.jpg' },
  { name: 'Clemens Biechl BEd', faecher: 'Katholische Religion, Englisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/09/Biechl-Clemens-2024hp.jpg' },
  { name: 'Benedikt Blender MEd', faecher: 'Mathematik, Psychologie und Philosophie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2020/09/Blender-Benedikt_2020-hp.jpg' },
  { name: 'Mag. Magdalena Br\u00e4ndle-Rathner', faecher: 'Englisch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Braendle-Rathner-Magdalena-2025hp.jpg' },
  { name: 'Mag. Andrea Brommer', faecher: 'Technik und Design, Digitale Grundbildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2020/09/Brommer-Andrea-2020-hp-1.jpg' },
  { name: 'Univ. Prof. Mag. Dr. Anton Bucher', faecher: 'Katholische Religion', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/bucher1.jpg' },
  { name: 'Mag. Johannes Czifra', faecher: 'Deutsch, Katholische Religion, Musik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/03/Czifra-Johannes-2021-hp.jpg' },
  { name: 'Mag. Dr. Paul Dienstbier', faecher: 'Griechisch, Latein, Informatik', note: 'Tagesheimleiter', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Dienstbier-Paul-2025hp.jpg' },
  { name: 'MMag. Josef Di Stolfo', faecher: 'Latein, Griechisch, Katholische Religion', photo: 'https://www.herzjesugym.com/wp-content/uploads/2021/08/Di-Stolfo-Josef-hp.jpg' },
  { name: 'Mag. Sabine Dorfer', faecher: 'Mathematik, Physik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/10/Dorfer-Sabine-2024-e1730098798671.png' },
  { name: 'Mag. Evelyn Eder', faecher: 'Geographie, Spanisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Eder-Evelyn-2025hp.jpg' },
  { name: 'Mag. Sebastian Eger', faecher: 'Kunst und Gestaltung, Technik und Design', note: 'Sabbatical', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Eger-2023-hp.jpg' },
  { name: 'Mag. Thomas Eisner', faecher: 'Englisch, Geographie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Thomas-Eisner-17.jpg' },
  { name: 'Cornel Entfellner BEd MEd', faecher: 'Deutsch, Kunst und Gestaltung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2020/11/ENTFELLNER_Cornel-2020-hp.jpg' },
  { name: 'Mag. Stefan Enzinger', faecher: 'Bewegung und Sport, Chemie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/11/Enzinger_Stefan.jpg' },
  { name: 'Mag. Carina Ertl', faecher: 'Latein, Psychologie und Philosophie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Ertl-Carina-2022-hp.jpg' },
  { name: 'Mag. Franz Feichtl', faecher: 'Geschichte, Informatik, Psychologie und Philosophie', note: 'Administrator', photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/FEICHTL_Franz_2019.jpg' },
  { name: 'Lukas Franta BEd MEd', faecher: 'Latein, Mathematik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Franta-Lukas-2025hp.jpg' },
  { name: 'Tobias Frisch BEd MEd', faecher: 'Englisch, Geographie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/08/Frisch-Tobias-2-2024hp-1.jpg' },
  { name: 'Mag. Christa Ganzera', faecher: 'Englisch, Latein', photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/11/Ganzere-Christa-2018-1.jpg' },
  { name: 'Mag. Katharina Gasser PhD', faecher: 'Englisch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Gasser-Katharina-2025hp.jpg' },
  { name: 'DI Dr. Simon Ginzinger MSc', faecher: 'Physik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Ginzinger-Simon-2025hp.jpg' },
  { name: 'Mag. Victor Gonz\u00e1lez', faecher: 'Englisch, Spanisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2018/11/Personal_Gonz\u00e1lez_Victor.jpg' },
  { name: 'Mag. Fabian Groi\u00df', faecher: 'Italienisch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Groiss-Fabian-2025hp.jpg' },
  { name: 'Thomas Gscho\u00dfmann BEd', faecher: 'Kunst und Gestaltung, Technik und Design', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Gschossmann-Thomas-2025hp.jpg' },
  { name: 'Mag. Martin G\u00fcnther', faecher: 'Geschichte, Geographie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Guenther-Martin-2025hp.jpg' },
  { name: 'Benedikt Gurtner BEd MEd', faecher: 'Musik, Physik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/08/Gurtner-Benedikt-2024hp.jpg' },
  { name: 'Mag. Stefan Hagenhofer', faecher: 'Bewegung und Sport, Mathematik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/12/Hagenhofer-2023-hp.jpg' },
  { name: 'MMag. Hermine Haidvogel', faecher: 'Deutsch, Russisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Haidvogel-Hermine-2025hp.jpg' },
  { name: 'Mag. Martina Hammerer-Kastner', faecher: 'Mathematik, Psychologie und Philosophie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Hammerer-kastner_martina.jpg' },
  { name: 'Mag. Dr. Wolfgang Hasiweder', faecher: 'Geschichte, Mathematik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Hasiweder-Wolfgang-2025hp.jpg' },
  { name: 'Mag. Barbara Haupt', faecher: 'Deutsch, Psychologie und Philosophie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Haupt-Barbara-2025hp.jpg' },
  { name: 'Stefanie Hiesel MEd', faecher: 'Musik, Geschichte und Sozialkunde', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Hiesel-Stephanie-2024-hp.jpg' },
  { name: 'Dominik Hiptmair MEd BA', faecher: 'Biologie und Umweltbildung, Musik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Hiptmaier-2023-hp.jpg' },
  { name: 'Denis Holub BSc', faecher: 'Informatik, Digitale Grundbildung', note: 'Personalleiter', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Holub-Denis-2022hp.jpg' },
  { name: 'Lena H\u00f6tzendorfer BEd MEd', faecher: 'Deutsch, Franz\u00f6sisch, Bewegung und Sport', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Hoetzendorfer-2023-hp.jpg' },
  { name: 'Mag. Andreas Hufnagl', faecher: 'Spanisch, Geographie, Digitale Grundbildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2017/09/Andreas-Hufnagl-2017.jpg' },
  { name: 'MMag. Karin Itzinger', faecher: 'Englisch, Spanisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2026/01/Itzinger-Karin-2026-hp.jpg' },
  { name: 'Franz J\u00f6rgner BEd MEd', faecher: 'Mathematik, Bewegung und Sport', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Joergner-Franz-2024-hp.jpg' },
  { name: 'MMag. Brigitte Kirchgatterer', faecher: 'Deutsch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Kirchgatterer-Brigitte-2025hp.jpg' },
  { name: 'Jakob Klien BEd MEd', faecher: 'Physik, Mathematik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/08/Klien-Jakob-2024hp.jpg' },
  { name: 'Mag. Martin Knauseder', faecher: 'Englisch, Psychologie und Philosophie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Knauseder-Martin-2022hp.jpg' },
  { name: 'Mag. Michael Kroi\u00df', faecher: 'Deutsch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/Kroiss-2025-hp-1.jpg' },
  { name: 'Mag. Lisa K\u00f6rner', faecher: 'Deutsch, Russisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Koerner-2023hp.jpg' },
  { name: 'Mag. Eva Lachinger', faecher: 'Deutsch, Latein', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Lachinger-Eva-2022hp.jpg' },
  { name: 'Mag. Markus Lackner', faecher: 'Geographie, Bewegung und Sport', photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/LACKNER_Markus_2019-1.jpg' },
  { name: 'Mag. Christina LaFollette', faecher: 'Technik und Design, Kunst und Gestaltung, Digitale Grundbildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2021/11/Heiss-Christina-2021-hp-1.jpg' },
  { name: 'Mag. Sebastian Lebwohl', faecher: 'Geographie, Bewegung und Sport', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Lebwohl-2023hp.jpg' },
  { name: 'MMag. Dr. Peter Machart', faecher: 'Biologie, Geographie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Machart-2023hp.jpg' },
  { name: 'Mag. Caroline Moser', faecher: 'Englisch, Spanisch', note: 'Karenz', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Moser-Caroline-2022hp.jpg' },
  { name: 'Maximilian Neumann', faecher: 'Mathematik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/08/Neumann-Maximilian-2023hp.jpg' },
  { name: 'Roman Neumayer MEd', faecher: 'Mathematik, Psychologie und Philosophie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/NEUMAYER_Roman_2019.jpg' },
  { name: 'Mag. Bertram Neuner', faecher: 'Katholische Religion', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/08/Neuner-Bertram-2023-hp.jpg' },
  { name: 'Mag. Brigitte Otter', faecher: 'Bewegung und Sport, Geographie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/08/Otter-Brigitte-2023-hp.jpg' },
  { name: 'Mag. Reinhold Pann', faecher: 'Bewegung und Sport, Geographie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2020/11/PANN_Reinhold-2020-hp.jpg' },
  { name: 'Mag. Barbara Pollak BA', faecher: 'Bewegung und Sport, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Pollak-Barbara-2025hp.jpg' },
  { name: 'MMag. Eva Promegger', faecher: 'Franz\u00f6sisch, Italienisch, Spanisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/08/Promegger-Eva-2024-hp.jpg' },
  { name: 'Calvin Ramsauer BEd MEd', faecher: 'Chemie, Physik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/08/Ramsauer-Calvin-2024-hp.jpg' },
  { name: 'Verena Rathmayr BSc MEd', faecher: 'Bewegung und Sport, Franz\u00f6sisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/09/Rathmayer-Verena-2025-hp.jpg' },
  { name: 'Mag. Dr. Oliver Riefler', faecher: 'Englisch, Geographie', note: 'Sabbatical', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/11/Riefler-2023hp.jpg' },
  { name: 'Lukas Riegler BEd', faecher: 'Deutsch, Bewegung und Sport', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/08/Riegler-Lukas-2024hp.jpg' },
  { name: 'Fabian Rosskopf BEd MEd', faecher: 'Informatik, Psychologie-Philosophie, Digitale Grundbildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Rosskopf-2024-hp.jpg' },
  { name: 'Mag. Dr. Isabella Schiller-Dienstbier', faecher: 'Latein, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/09/Schiller-Dienstbier-Isabella-2024hp.jpg' },
  { name: 'Mag. Michaela Schwaiger', faecher: 'Bewegung und Sport, Technik und Design', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Michaela-Schwaiger-1.jpg' },
  { name: 'Mag. Doris Sebela-Schardax', faecher: 'Deutsch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2026/02/Doris-Sebela-Schardax-2026-hp.jpg' },
  { name: 'Mag. Thomas Stadler', faecher: 'Kunst und Gestaltung, Katholische Religion', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Stadler-Thomas.jpg' },
  { name: 'Mag. Florian Standler', faecher: 'Englisch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2021/08/standler-Florian-2021-hp.jpg' },
  { name: 'Mag. Florian Stangassinger', faecher: 'Englisch, Geographie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2020/12/STANGASSINGER_Florian-2020-1.jpg' },
  { name: 'Josepha Stangassinger BEd MEd', faecher: 'Deutsch, Biologie und Umweltbildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2021/09/Stangassinger-Josepha-2021-hp.jpg' },
  { name: 'Mag. Florian Stehrer', faecher: 'Latein, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/11/Stehrer-Florian-2022hp.jpg' },
  { name: 'Mag. Dr. Barbara Steiner-Enk', faecher: 'Chemie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Steiner-Enk-Barbara-2024-hp.jpg' },
  { name: 'MMag. Michael Steyskal', faecher: 'Biologie, Geographie, EPWA', photo: 'https://www.herzjesugym.com/wp-content/uploads/2021/11/Steyskal-Michael-2021-hp-1.jpg' },
  { name: 'Mag. Stephanie Stifter', faecher: 'Deutsch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/08/Stifter-Stephanie-2024hp.jpg' },
  { name: 'Mag. Angelique Strgar', faecher: 'Kunst und Gestaltung, Biologie, Digitale Grundbildung', photo: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Strgar2013.jpg' },
  { name: 'Mag. Elisabeth Struber-Lienbacher', faecher: 'Technik und Design, Biologie', photo: 'https://www.herzjesugym.com/wp-content/uploads/2020/11/STRUBER-LIENBACHER_Elisabeth-2020-hp.jpg' },
  { name: 'Mag. Arne Traun', faecher: 'Physik', photo: 'https://www.herzjesugym.com/wp-content/uploads/2022/01/Traun-Arne-2022-hp.jpg' },
  { name: 'Mag. Bernhard Vierthaler', faecher: 'Deutsch, Katholische Religion', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Vierthaler-Bernhard-2024-hp.jpg' },
  { name: 'Julia Voithofer MEd', faecher: 'Mathematik, Musik', note: 'Karenz', photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/LIENBACHER_Julia_2019-1.jpg' },
  { name: 'Mag. Anna Voronina', faecher: 'Englisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2023/09/Voronina-Anna-2023hp.jpg' },
  { name: 'Philipp Wirrer', faecher: 'Englisch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/09/Wirrer-Philipp-2024hp.jpg' },
  { name: 'Mag. Michael Welther', faecher: 'Evangelische Religion', photo: 'https://www.herzjesugym.com/wp-content/uploads/2020/11/WELTHER_Michael-2020-hp.jpg' },
  { name: 'Mag. Daniel Wundsam', faecher: 'Englisch, Geschichte', photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/WUNDSAM_Daniel_2019-1.jpg' },
  { name: 'Olha Zholnina BA', faecher: 'Digitale Grundbildung, Deutsch, Russisch', photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Olha-Zholnina.jpg' },
  { name: 'Mag. Stefan Zwidl', faecher: 'Biologie, Mathematik', note: 'Sabbatical', photo: 'https://www.herzjesugym.com/wp-content/uploads/2021/11/Zwidl-Stefan-2021-hp-1.jpg' },
]

const roleNotes = ['Direktor', 'Administrator', 'Tagesheimleiter', 'Personalleiter']

function getBadgeClass(note) {
  if (roleNotes.includes(note)) return 'lehrer-badge lehrer-badge-role'
  return 'lehrer-badge lehrer-badge-away'
}

const photoStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'block',
  margin: '0 auto 0.75rem',
}

function Lehrkraefte() {
  return (
    <>
      <PageHero
        color="blue"
        tag="Unsere Lehrkr\u00e4fte"
        title="Lehrerinnen und Lehrer"
        subtitle={`${teachers.length} Lehrerinnen und Lehrer begleiten unsere Sch\u00fclerinnen und Sch\u00fcler`}
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
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    style={photoStyle}
                    loading="lazy"
                  />
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
