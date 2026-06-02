import { useScrollReveal } from '../hooks/useScrollReveal';
import './Sustainability.css';

const pillars = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <path d="M18 6C18 6 10 12 10 20C10 24.418 13.582 28 18 28C22.418 28 26 24.418 26 20C26 12 18 6 18 6Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2"/>
        <path d="M18 6C18 6 12 14 14 22" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Sustainable Sourcing',
    desc: 'We partner with farmers who use eco-friendly and responsible farming methods to protect the environment.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <circle cx="18" cy="14" r="5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="rgba(255,255,255,0.1)"/>
        <path d="M10 28C10 24 13.582 21 18 21C22.418 21 26 24 26 28" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Farmer Partnerships',
    desc: 'Empowering farming communities through fair trade practices and supporting local agricultural communities.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <path d="M12 24L18 8L24 24" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 20H22" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="18" cy="28" r="2" fill="rgba(255,255,255,0.7)"/>
      </svg>
    ),
    title: 'Eco-Friendly Practices',
    desc: 'Minimizing our environmental footprint through green packaging, waste reduction, and energy efficiency.',
  },
];

export default function Sustainability() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="sustainability" ref={ref}>
      <div className="sustainability__bg">
        <img
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80&auto=format&fit=crop"
          alt="Sustainable farming"
          className="sustainability__bg-img"
          loading="lazy"
        />
        <div className="sustainability__bg-overlay" />
      </div>

      <div className="container sustainability__content">
        <div className={`sustainability__header reveal ${isVisible ? 'visible' : ''}`}>
          <div className="sustainability__tag">Sustainability</div>
          <h2 className="sustainability__title">
            Respecting the Earth<br />
            <em>That Sustains Us</em>
          </h2>
          <a href="#roots" className="btn btn--outline"
             onClick={(e) => { e.preventDefault(); document.querySelector('#roots')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Our Sustainability Initiatives →
          </a>
        </div>

        <div className="sustainability__pillars">
          {pillars.map((p, i) => (
            <div key={i} className={`sustain-card reveal delay-${i + 2} ${isVisible ? 'visible' : ''}`}>
              <div className="sustain-card__icon">{p.icon}</div>
              <h4 className="sustain-card__title">{p.title}</h4>
              <p className="sustain-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
