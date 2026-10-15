import { useState, useEffect } from 'react';
import emblem from '../assets/logo-emblem.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#roots' },
  { label: 'Catalog', href: '#products' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Export', href: '#export-network' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')}>
          <img src={emblem} alt="Prithvi Agro Ventures logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-primary">PRITHVI</span>
            <span className="navbar__logo-sub">AGRO VENTURES</span>
          </div>
        </a>

        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link"
               onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation">
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__mobile-link"
               onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
