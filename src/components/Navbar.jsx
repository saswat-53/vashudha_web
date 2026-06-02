import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#roots' },
  { label: 'Products', href: '#products' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Export Services', href: '#export-network' },
  { label: 'Blog', href: '#knowledge' },
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
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C16 2 6 8 6 18C6 23.523 10.477 28 16 28C21.523 28 26 23.523 26 18C26 8 16 2 16 2Z" fill="#D4A017" opacity="0.9"/>
            <path d="M16 2C16 2 8 10 10 20C11.5 27 16 28 16 28" stroke="#1B4332" strokeWidth="1.5" fill="none"/>
            <path d="M16 14C16 14 20 17 21 21" stroke="#1B4332" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <div className="navbar__logo-text">
            <span className="navbar__logo-primary">VASUDHA AGRO</span>
            <span className="navbar__logo-sub">PVT. LTD.</span>
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
