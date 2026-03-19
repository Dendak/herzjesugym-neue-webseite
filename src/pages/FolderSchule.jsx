import {
  FaFileAlt, FaFilePdf, FaDownload, FaSearchPlus
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const folders = [
  {
    label: 'Folder Unterstufe',
    preview: 'https://www.herzjesugym.com/wp-content/uploads/2014/05/Infofolder-Schule-491x1024.jpg',
    pdf: 'https://www.herzjesugym.com/wp-content/uploads/2021/11/Flyer_unterstufe.2.11.pdf',
  },
  {
    label: 'Folder Oberstufe',
    preview: 'https://www.herzjesugym.com/wp-content/uploads/2017/10/Folder-Oberstufe-2017-1.jpg',
    pdf: 'https://www.herzjesugym.com/wp-content/uploads/2021/11/Flyer_Oberstufe2.11.pdf',
  },
]

function FolderSchule() {
  return (
    <>
      <PageHero
        tag="Informationsmaterial"
        title="Folder Schule"
        subtitle="Informationsfolder des Privatgymnasiums der Herz-Jesu-Missionare"
        color="green"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">Infomaterial</span>
          <h2 className="section-title">Unsere Schulfolder</h2>
          <p className="section-desc">
            Kompakte Übersicht über das Bildungsangebot, die Werte und die Besonderheiten unserer Schule.
          </p>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
        }}>
          {folders.map((f, i) => (
            <AnimatedSection key={i} className="content-card" delay={i * 150}>
              <div className="content-card-icon"><FaFileAlt /></div>
              <h2>{f.label}</h2>
              <div style={{
                marginTop: '1.25rem',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--gray-200)',
              }}>
                <a href={f.preview} target="_blank" rel="noopener noreferrer">
                  <img
                    src={f.preview}
                    alt={f.label}
                    style={{ width: '100%', display: 'block' }}
                  />
                </a>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                <FaSearchPlus style={{ marginRight: '0.3rem' }} />
                Klicken Sie auf das Bild für die Vollansicht.
              </p>
              <a
                href={f.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                <FaFilePdf /> PDF herunterladen
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default FolderSchule
