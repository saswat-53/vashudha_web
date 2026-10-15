import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const stats = [
  { value: '50+', label: 'Agricultural Products' },
  { value: '25,000+', label: 'MT Production Capacity' },
  { value: '30+', label: 'Countries Exported' },
  { value: '100%', label: 'Quality Tested' },
  { value: '500+', label: 'Global Clients' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&auto=format&fit=crop"
          alt="Golden wheat field at sunset"
          className="hero__bg-img"
        />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__content container">
        <div className={`hero__text ${loaded ? 'hero__text--loaded' : ''}`}>
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span>From Indian Soil to the World</span>
          </div>
          <h1 className="hero__title">
            Premium Agricultural &amp;<br className="hero__br" />
            <em>Herbal Products</em><br />
            Manufacturer and Exporter
          </h1>
          <p className="hero__desc">
            Connecting India's finest agricultural and herbal products with businesses
            worldwide through responsible sourcing, advanced processing, and global export excellence.
          </p>
          <div className="hero__ctas">
            <a href="#products" className="btn btn--gold"
               onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Explore Products
            </a>
            <a href="#enquiry" className="btn btn--outline"
               onClick={(e) => { e.preventDefault(); document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span />
      </div>
    </section>
  );
}
