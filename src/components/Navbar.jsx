import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#skills', label: 'Skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand__mark">IA</span>
          {profile.shortName}
        </a>
        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--primary btn--small nav__cta">
          Get in touch
        </a>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <nav className={`nav__mobile${open ? ' is-open' : ''}`} aria-label="Mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary" onClick={close}>
          Get in touch
        </a>
      </nav>
    </header>
  )
}
