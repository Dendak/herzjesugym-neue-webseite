import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaExternalLinkAlt } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
    window.scrollTo(0, 0)
  }, [location])

  const navItems = [
    { path: '/', label: 'Start' },
    {
      path: '/leitbild', label: 'Leitbild \u2013 Infos',
      children: [
        { path: '/leitbild', label: 'Leitbild \u2013 Schulprofil' },
        { path: '/folder', label: 'Folder Schule' },
        { path: '/stundentafeln', label: 'Stundentafeln' },
        { path: '/zeitraster', label: 'Stunden-/Zeitraster' },
        { path: '/downloads', label: 'Downloads' },
        { href: 'https://team.jako.com/de-de/team/herz_jesu_gymnasium/?item_source=27209', label: 'Schulshop', external: true },
      ]
    },
    {
      path: '/schulgemeinschaft', label: 'Schulgemeinschaft',
      children: [
        { path: '/schulleitung', label: 'Schulleitung' },
        { path: '/sekretariat', label: 'Sekretariat/Buchhaltung' },
        { path: '/schuelerseite', label: 'Sch\u00fclerinnen/Sch\u00fcler' },
        { path: '/tagesheim', label: 'Tagesheim' },
        { href: 'https://internat.herzjesugym.com/', label: 'Internat', external: true },
        { href: 'http://eltern-am-herzjesugym.at/', label: 'Elternverein', external: true },
        { path: '/lehrkraefte', label: 'Lehrerinnen/Lehrer' },
        { href: 'https://erato.webuntis.com/WebUntis/?school=herzjesugym#/basic/officehours', label: 'Sprechstunden', external: true },
        { path: '/schularzt', label: 'Schularzt / Schulpsychologin' },
        { path: '/hausverwaltung', label: 'Hausverwaltung' },
      ]
    },
    { path: '/tagesheim', label: 'Tagesheim' },
    { href: 'https://internat.herzjesugym.com/', label: 'Internat', external: true },
    { path: '/fachbereiche', label: 'Fachbereiche' },
    { path: '/kontakt', label: 'Termine' },
    {
      path: '/anmeldung', label: 'Anmeldung',
      children: [
        { path: '/anmeldung', label: 'Anmeldung \u2013 1. Klasse' },
        { path: '/anmeldung-oberstufe', label: 'Anmeldung \u2013 Oberstufe' },
      ]
    },
    { path: '/kontakt', label: 'Kontakt' },
    { path: '/impressum', label: 'Impressum' },
  ]

  const renderNavLink = (item) => {
    if (item.external || item.href) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          {item.label}
          {item.children && <FaChevronDown className="dropdown-arrow" />}
        </a>
      )
    }
    return (
      <Link
        to={item.path}
        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
        onClick={(e) => {
          if (item.children && window.innerWidth <= 768) {
            e.preventDefault()
            setOpenDropdown(openDropdown === navItems.indexOf(item) ? null : navItems.indexOf(item))
          }
        }}
      >
        {item.label}
        {item.children && <FaChevronDown className="dropdown-arrow" />}
      </Link>
    )
  }

  const renderDropdownLink = (child) => {
    if (child.external || child.href) {
      return (
        <a
          href={child.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {child.label}
          <FaExternalLinkAlt style={{ fontSize: '0.6rem', marginLeft: '0.4rem', opacity: 0.5 }} />
        </a>
      )
    }
    return <Link to={child.path}>{child.label}</Link>
  }

  return (
    <>
      {/* Top bar with address, phone, and social media */}
      <div className="nav-topbar">
        <div className="nav-topbar-inner">
          <span className="nav-topbar-info">
            Sch\u00f6nleitenstrasse 1 \u2013 5020 Salzburg \u2013 0662 432901
          </span>
          <div className="nav-topbar-social">
            <a href="https://twitter.com/herzjesugym" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/herzjesugym.at/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/pages/Privatgymnasium-der-Herz-Jesu-Missionare/229435663740095" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/school/privatgymnasium-der-herz-jesu-missionare" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img
              src="/msc-logo.jpg"
              alt="MSC Logo - Herz-Jesu-Missionare"
              className="nav-logo-img"
            />
            <div className="logo-text">
              <span className="logo-title">Herz-Jesu</span>
              <span className="logo-subtitle">Privatgymnasium Salzburg</span>
            </div>
          </Link>

          <button
            className={`nav-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Navigation umschalten"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item, i) => (
              <li
                key={i}
                className={item.children ? 'has-dropdown' : ''}
                onMouseEnter={() => item.children && setOpenDropdown(i)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                {renderNavLink(item)}
                {item.children && (
                  <ul className={`dropdown ${openDropdown === i ? 'show' : ''}`}>
                    {item.children.map((child, j) => (
                      <li key={j}>
                        {renderDropdownLink(child)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
      </nav>
    </>
  )
}

export default Navbar
