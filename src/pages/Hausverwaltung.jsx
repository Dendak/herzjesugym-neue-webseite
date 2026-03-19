import { FaEnvelope, FaUtensils, FaWrench, FaBroom } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const kueche = [
  {
    name: 'Franz Steiner',
    role: 'Küchenchef',
    email: 'franz.steiner@herzjesugym.at',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Steiner-Franz-2024hp.jpg',
  },
  {
    name: 'Jürgen Bliem',
    role: null,
    email: 'juergen.bliem@herzjesugym.at',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/BLIEM_Jürgen_2019.jpg',
  },
  {
    name: 'Nicole Fritsch',
    role: null,
    email: 'nicole.fritsch@herzjesugym.at',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Fritsch-Brigitte-2024hp.jpg',
  },
  {
    name: 'Brigitte Brunthaler',
    role: null,
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/10/BRUNTHALER_Brigitte_2019.jpg',
  },
  {
    name: 'Irena Vujicic',
    role: null,
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Vujicic-Irena-2024hp.jpg',
  },
]

const haustechnik = [
  {
    name: 'Markus Mayer',
    role: null,
    email: 'markus.mayer@herzjesugym.at',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/12/Markus-Mayer-e1575444665203.jpg',
  },
  {
    name: 'Anton Stangassinger',
    role: null,
    email: 'anton.stangassinger@herzjesugym.at',
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Stangassinger-Anton-2024hp.jpg',
  },
]

const raumpflege = [
  {
    name: 'Maria Keskic',
    role: 'Leitung',
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/11/Personal_Keskic_Marija.jpg',
  },
  {
    name: 'Casimira Martinez',
    role: 'Leitung Essensausgabe',
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/11/Personal_Martinez_Casimira.jpg',
  },
  {
    name: 'Maria Felizeter',
    role: 'Leitung Kloster',
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Felizeter-Maria-2024hp.jpg',
  },
  {
    name: 'Elvira Kapic',
    role: null,
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2024/11/Kapic-Elvira-2024hp.jpg',
  },
  {
    name: 'Danijela Grujic',
    role: null,
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Grujic-Daniela-2025-hp.jpg',
  },
  {
    name: 'Ingeborg Gschaider',
    role: null,
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2025/11/Inge-Gschaider-2025hp.jpg',
  },
  {
    name: 'Ornela Tadic',
    role: null,
    email: null,
    photo: 'https://www.herzjesugym.com/wp-content/uploads/2019/11/Personal_Tadic_Ornela.jpg',
  },
]

const photoStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '1rem',
}

function StaffCard({ person, delay }) {
  return (
    <AnimatedSection className="team-card" delay={delay}>
      <img src={person.photo} alt={person.name} style={photoStyle} />
      <h3>{person.name}</h3>
      {person.role && <span className="team-role">{person.role}</span>}
      {person.email && (
        <div className="team-contact">
          <a href={`mailto:${person.email}`}>
            <FaEnvelope /> {person.email}
          </a>
        </div>
      )}
    </AnimatedSection>
  )
}

function DepartmentSection({ icon, tag, title, staff }) {
  return (
    <>
      <AnimatedSection className="section-header" style={{ marginTop: '4rem' }}>
        <span className="section-tag">{tag}</span>
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          {icon} {title}
        </h2>
      </AnimatedSection>
      <div className="team-grid">
        {staff.map((person, i) => (
          <StaffCard key={i} person={person} delay={i * 100} />
        ))}
      </div>
    </>
  )
}

function Hausverwaltung() {
  return (
    <>
      <PageHero
        tag="Unser Team"
        title="Hausverwaltung"
        subtitle="Die Menschen, die unsere Schule am Laufen halten"
        color="warm"
      />
      <div className="container page-content">
        <DepartmentSection
          icon={<FaUtensils style={{ color: 'var(--primary)' }} />}
          tag="Verpflegung"
          title="Küche"
          staff={kueche}
        />

        <DepartmentSection
          icon={<FaWrench style={{ color: 'var(--primary)' }} />}
          tag="Technik"
          title="Haustechnik"
          staff={haustechnik}
        />

        <DepartmentSection
          icon={<FaBroom style={{ color: 'var(--primary)' }} />}
          tag="Reinigung"
          title="Raumpflege"
          staff={raumpflege}
        />
      </div>
    </>
  )
}

export default Hausverwaltung
