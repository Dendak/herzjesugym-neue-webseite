import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCross, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

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
      path: '/leitbild', label: 'Leitbild & Infos',
      children: [
        { path: '/leitbild', label: 'Schulprofil' },
        { path: '/fachbereiche', label: 'Stundentafeln' },
      ]
    },
    {
      path: '/schulgemeinschaft', label: 'Schulgemeinschaft',
      children: [
        { path: '/schulgemeinschaft', label: 'Schulleitung' },
        { path: '/schulgemeinschaft', label: 'Lehrkräfte' },
      ]
    },
    { path: '/tagesheim', label: 'Tagesheim' },
    { path: '/internat', label: 'Internat' },
    { path: '/fachbereiche', label: 'Fachbereiche' },
    { path: '/anmeldung', label: 'Anmeldung' },
    { path: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <FaCross />
          </div>
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
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={(e) => {
                  if (item.children && window.innerWidth <= 768) {
                    e.preventDefault()
                    setOpenDropdown(openDropdown === i ? null : i)
                  }
                }}
              >
                {item.label}
                {item.children && <FaChevronDown className="dropdown-arrow" />}
              </Link>
              {item.children && (
                <ul className={`dropdown ${openDropdown === i ? 'show' : ''}`}>
                  {item.children.map((child, j) => (
                    <li key={j}>
                      <Link to={child.path}>{child.label}</Link>
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
  )
}

export default Navbar
