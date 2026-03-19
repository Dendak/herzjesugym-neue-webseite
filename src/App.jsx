import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Leitbild from './pages/Leitbild'
import Schulgemeinschaft from './pages/Schulgemeinschaft'
import Tagesheim from './pages/Tagesheim'
import Internat from './pages/Internat'
import Fachbereiche from './pages/Fachbereiche'
import Anmeldung from './pages/Anmeldung'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leitbild" element={<Leitbild />} />
          <Route path="/schulgemeinschaft" element={<Schulgemeinschaft />} />
          <Route path="/tagesheim" element={<Tagesheim />} />
          <Route path="/internat" element={<Internat />} />
          <Route path="/fachbereiche" element={<Fachbereiche />} />
          <Route path="/anmeldung" element={<Anmeldung />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
