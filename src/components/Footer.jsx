import emblem from '../assets/logo-emblem.png';
import './Footer.css';

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

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__layout">
            <div className="footer__brand">
              <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}>
                <img src={emblem} alt="Prithvi Agro Ventures logo" className="footer__logo-img" />
                <div>
                  <span className="footer__logo-primary">PRITHVI</span>
                  <span className="footer__logo-sub">AGRO VENTURES</span>
                </div>
              </a>
              <p className="footer__tagline">
                From Indian Soil to the World.<br />
                Connecting India's finest agricultural and herbal products with the world.
              </p>
              <p className="footer__pillars">Cultivation · Processing · Export · Global Reach</p>
              <div className="footer__social">
                <a href="#" className="footer__social-btn footer__social-btn--fb" aria-label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="footer__social-btn footer__social-btn--ig" aria-label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" className="footer__social-btn footer__social-btn--yt" aria-label="YouTube">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer__nav-group">
              <h4 className="footer__heading">Quick Links</h4>
              <nav className="footer__nav">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="footer__link"
                     onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer__nav-group">
              <h4 className="footer__heading">Products</h4>
              <nav className="footer__nav">
                {['Moringa Powder', 'Turmeric', 'Herbal Ingredients', 'Spices', 'Dehydrated Products', 'Private Label'].map((p) => (
                  <a key={p} href="#products" className="footer__link"
                     onClick={(e) => { e.preventDefault(); scrollTo('#products'); }}>
                    {p}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer__nav-group">
              <h4 className="footer__heading">Certifications</h4>
              <div className="footer__certs">
                {['FSSAI', 'IEC', 'UDYAM', 'HACCP', 'GMP'].map((cert) => (
                  <span key={cert} className="footer__cert-badge">{cert}</span>
                ))}
              </div>
              <h4 className="footer__heading footer__heading--mt">Contact</h4>
              <div className="footer__contact-mini">
                <a href="mailto:info@prithviagroventures.com" className="footer__link">info@prithviagroventures.com</a>
                <a href="tel:+919876543210" className="footer__link">+91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copy">© 2024 Prithvi Agro Ventures. Swarnabhumi is a brand of Prithvi Agro Ventures. All Rights Reserved.</p>
            <div className="footer__bottom-links">
              <a href="#" className="footer__bottom-link">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="footer__bottom-link">Terms of Use</a>
              <span>·</span>
              <a href="#" className="footer__bottom-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
