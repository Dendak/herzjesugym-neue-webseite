import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Leitbild from './pages/Leitbild'
import Schulgemeinschaft from './pages/Schulgemeinschaft'
import Schulleitung from './pages/Schulleitung'
import Sekretariat from './pages/Sekretariat'
import Schuelerseite from './pages/Schuelerseite'
import SchularztPage from './pages/SchularztPage'
import Hausverwaltung from './pages/Hausverwaltung'
import Tagesheim from './pages/Tagesheim'
import Fachbereiche from './pages/Fachbereiche'
import Anmeldung from './pages/Anmeldung'
import AnmeldungOberstufe from './pages/AnmeldungOberstufe'
import Kontakt from './pages/Kontakt'
import Impressum from './pages/Impressum'
import Downloads from './pages/Downloads'
import Stundentafeln from './pages/Stundentafeln'
import Zeitraster from './pages/Zeitraster'
import FolderSchule from './pages/FolderSchule'
import Lehrkraefte from './pages/Lehrkraefte'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leitbild" element={<Leitbild />} />
          <Route path="/schulgemeinschaft" element={<Schulgemeinschaft />} />
          <Route path="/schulleitung" element={<Schulleitung />} />
          <Route path="/sekretariat" element={<Sekretariat />} />
          <Route path="/schuelerseite" element={<Schuelerseite />} />
          <Route path="/schularzt" element={<SchularztPage />} />
          <Route path="/hausverwaltung" element={<Hausverwaltung />} />
          <Route path="/tagesheim" element={<Tagesheim />} />
          <Route path="/fachbereiche" element={<Fachbereiche />} />
          <Route path="/anmeldung" element={<Anmeldung />} />
          <Route path="/anmeldung-oberstufe" element={<AnmeldungOberstufe />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/stundentafeln" element={<Stundentafeln />} />
          <Route path="/zeitraster" element={<Zeitraster />} />
          <Route path="/folder" element={<FolderSchule />} />
          <Route path="/lehrkraefte" element={<Lehrkraefte />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
