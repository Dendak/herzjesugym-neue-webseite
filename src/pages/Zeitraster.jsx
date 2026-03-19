import {
  FaClock, FaCoffee
} from 'react-icons/fa'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'

const schedule = [
  { stunde: '1. Stunde', zeit: '7:50 \u2013 8:40', type: 'lesson' },
  { stunde: '2. Stunde', zeit: '8:45 \u2013 9:35', type: 'lesson' },
  { stunde: '3. Stunde', zeit: '9:40 \u2013 10:30', type: 'lesson' },
  { stunde: 'Pause', zeit: '10:30 \u2013 10:50', type: 'pause' },
  { stunde: '4. Stunde', zeit: '10:50 \u2013 11:40', type: 'lesson' },
  { stunde: '5. Stunde', zeit: '11:45 \u2013 12:35', type: 'lesson' },
  { stunde: '6. Stunde', zeit: '12:35 \u2013 13:25', type: 'lesson' },
  { stunde: '7. Stunde', zeit: '13:25 \u2013 13:55', type: 'lesson' },
  { stunde: '8. Stunde', zeit: '13:55 \u2013 14:45', type: 'lesson' },
  { stunde: '9. Stunde', zeit: '14:45 \u2013 15:35', type: 'lesson' },
  { stunde: '10. Stunde', zeit: '15:50 \u2013 16:40', note: 'Freitag: 15:35 \u2013 16:25', type: 'lesson' },
  { stunde: '11. Stunde', zeit: '16:45 \u2013 17:35', type: 'lesson' },
  { stunde: '12. Stunde', zeit: '17:35 \u2013 18:25', type: 'lesson' },
]

function Zeitraster() {
  return (
    <>
      <PageHero
        tag="Tagesstruktur"
        title="Stunden-/Zeitraster"
        subtitle="Übersicht über den zeitlichen Ablauf des Schultages"
        color="teal"
      />
      <div className="container page-content">
        <AnimatedSection className="section-header">
          <span className="section-tag">Zeitplan</span>
          <h2 className="section-title">Der Schultag im Überblick</h2>
          <p className="section-desc">
            Unser Zeitraster zeigt den zeitlichen Rahmen für alle Unterrichtsstunden und Pausen.
          </p>
        </AnimatedSection>

        <AnimatedSection className="content-card" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="content-card-icon"><FaClock /></div>
          <h2>Zeitraster</h2>
          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0',
              fontSize: '0.95rem',
            }}>
              <thead>
                <tr>
                  <th style={{
                    textAlign: 'left',
                    padding: '0.85rem 1rem',
                    background: 'var(--primary)',
                    color: 'var(--white)',
                    fontWeight: '700',
                    borderRadius: 'var(--radius-sm) 0 0 0',
                  }}>
                    Stunde
                  </th>
                  <th style={{
                    textAlign: 'left',
                    padding: '0.85rem 1rem',
                    background: 'var(--primary)',
                    color: 'var(--white)',
                    fontWeight: '700',
                  }}>
                    Zeit
                  </th>
                  <th style={{
                    textAlign: 'left',
                    padding: '0.85rem 1rem',
                    background: 'var(--primary)',
                    color: 'var(--white)',
                    fontWeight: '700',
                    borderRadius: '0 var(--radius-sm) 0 0',
                  }}>
                    Anmerkung
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, i) => (
                  <tr key={i} style={{
                    background: s.type === 'pause'
                      ? 'var(--primary-50)'
                      : i % 2 === 0
                        ? 'var(--gray-50)'
                        : 'var(--white)',
                  }}>
                    <td style={{
                      padding: '0.75rem 1rem',
                      fontWeight: s.type === 'pause' ? '700' : '600',
                      color: s.type === 'pause' ? 'var(--primary)' : 'var(--gray-800)',
                      borderBottom: '1px solid var(--gray-200)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      {s.type === 'pause' ? <FaCoffee /> : null}
                      {s.stunde}
                    </td>
                    <td style={{
                      padding: '0.75rem 1rem',
                      color: s.type === 'pause' ? 'var(--primary)' : 'var(--gray-700)',
                      fontWeight: s.type === 'pause' ? '600' : '400',
                      borderBottom: '1px solid var(--gray-200)',
                    }}>
                      {s.zeit}
                    </td>
                    <td style={{
                      padding: '0.75rem 1rem',
                      color: 'var(--gray-500)',
                      fontSize: '0.85rem',
                      borderBottom: '1px solid var(--gray-200)',
                      fontStyle: s.note ? 'italic' : 'normal',
                    }}>
                      {s.note || '\u2014'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}

export default Zeitraster
