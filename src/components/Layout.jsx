import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import FacebookIcon from './FacebookIcon'
import Logo from './Logo'
import ScissorCursor from './ScissorCursor'
import { business } from '../data'

const nav = [
  ['Pricing', '/pricing'],
  ['Boarding', '/boarding'],
  ['Gallery', '/gallery'],
  ['About', '/about'],
  ['Reviews', '/reviews'],
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)

    if (location.hash) {
      const timer = window.setTimeout(() => {
        const target = document.querySelector(location.hash)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => window.clearTimeout(timer)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return (
    <>
      <ScissorCursor />
      <header className="site-header">
        <div className="nav-wrap nav-wrap--center-mark">
          <Logo wordsOnly />
          <Logo markOnly />

          <div className="nav-right">
            <nav className="desktop-nav" aria-label="Primary navigation">
              {nav.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
            </nav>
            <div className="nav-actions">
              <a className="nav-book" href={business.phoneHref}>Book a Groom <ArrowUpRight size={14} /></a>
              <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
          {nav.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
          <NavLink to="/pricing#extras">Specialty care + extras</NavLink>
          <a href={business.phoneHref}><Phone size={18} /> {business.phoneDisplay}</a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer" id="contact">
        <div className="footer__top">
          <div>
            <Logo />
            <p className="footer__tagline">Clean dogs. Happier lives. <span>♡</span></p>
          </div>
          <div className="footer__contact">
            <a href={business.mapsHref} target="_blank" rel="noreferrer"><MapPin size={20} /> {business.address}</a>
            <a href={business.phoneHref}><Phone size={20} /> {business.phoneDisplay}</a>
            <a href={business.facebook} target="_blank" rel="noreferrer"><FacebookIcon size={20} /> Follow & message us on Facebook</a>
          </div>
          <div className="footer__qr">
            <img src="/assets/facebook-qr.png" alt="QR code linking to Suds 'n Scissors on Facebook" />
            <span>Scan to follow + message</span>
          </div>
          <div className="footer__cta">
            <a className="nav-book nav-book--footer" href={business.phoneHref}>Book a Groom <ArrowUpRight size={14} /></a>
            <small>Groom · Board · Belong</small>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Suds ’n Scissors · Dog Grooming & Boarding · Cullman, Alabama</span>
          <a className="footer__credit" href="https://jessie2e.com" target="_blank" rel="noreferrer">Built by 2e Studio ↗</a>
        </div>
      </footer>
    </>
  )
}
