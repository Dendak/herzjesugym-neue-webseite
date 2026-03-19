import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Nach oben scrollen"
    >
      <FaArrowUp />
    </button>
  )
}

export default BackToTop
