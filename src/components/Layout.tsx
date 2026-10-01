import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Menu, X } from 'lucide-react'
import { profile } from '../config/profile'
import { ThemeToggle } from './UI'
const copyrightYear = new Date().getFullYear()
const links = [
  'Projects',
  'Experience',
  'Skills',
  'About',
  ...(profile.email || profile.phone || profile.linkedin || profile.github
    ? ['Contact']
    : []),
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-15% 0px -55% 0px' },
    )
    for (const id of ['home', ...links.map((link) => link.toLowerCase())]) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const focusFrame = window.requestAnimationFrame(() => {
      document.querySelector<HTMLAnchorElement>('#navigation a')?.focus()
    })
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', close)
    }
  }, [open])
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])
  return (
    <header className="header">
      <div className="container nav">
        <a
          href="#home"
          className="brand"
          aria-label={`sk. - ${profile.name} home`}
        >
          sk<span>.</span>
        </a>
        <nav
          id="navigation"
          className={open ? 'open' : ''}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              aria-current={
                active === link.toLowerCase() ? 'location' : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="container footer">
      <a
        className="brand"
        href="#home"
        aria-label={`sk. - ${profile.name} home`}
      >
        sk<span>.</span>
      </a>
      <p>
        &copy; {copyrightYear} {profile.name}
      </p>
      <a href="#home">
        Back to top <ArrowUp size={16} aria-hidden="true" />
      </a>
    </footer>
  )
}
