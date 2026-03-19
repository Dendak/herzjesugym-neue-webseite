import {
  FaTable, FaSearchPlus
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const stundentafeln = [
  {
    label: 'Stundentafel Unterstufe',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2024/09/Stundentafeln-Unterstufe.jpg',
  },
  {
    label: 'Stundentafel Oberstufe Neusprachlich',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2018/10/Stundentafel-OSTU-NEUSPR.jpg',
  },
  {
    label: 'Stundentafel NaWi-Zweig',
    url: 'https://www.herzjesugym.com/wp-content/uploads/2021/11/Nawi-Zweig-Stundentafel-650x1024.jpg',
  },
]

function Stundentafeln() {
  return (
    <>
      <PageHero
        tag="Unterricht"
        title="Stundentafeln"
        subtitle="Übersicht der Stundentafeln für alle Schulstufen und Zweige"
        color="teal"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">Übersicht</span>
          <h2 className="section-title">Unsere Stundentafeln</h2>
          <p className="section-desc">
            Die Stundentafeln geben einen Überblick über die Unterrichtsfächer
            und deren Wochenstunden in den einzelnen Schulstufen.
          </p>
        </AnimatedSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {stundentafeln.map((st, i) => (
            <AnimatedSection key={i} className="content-card" delay={i * 150}>
              <div className="content-card-icon"><FaTable /></div>
              <h2>{st.label}</h2>
              <div style={{
                marginTop: '1.5rem',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--gray-200)'
              }}>
                <a href={st.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={st.url}
                    alt={st.label}
                    style={{ width: '100%', display: 'block' }}
                  />
                </a>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                <FaSearchPlus style={{ marginRight: '0.3rem' }} />
                Klicken Sie auf das Bild für die Vollansicht.
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default Stundentafeln
