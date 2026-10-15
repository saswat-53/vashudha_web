import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './IndustriesServe.css';

const industries = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#C9A227" opacity="0.12"/>
        <path d="M16 28C16 24 19.582 21 24 21C28.418 21 32 24 32 28H16Z" fill="#C9A227" opacity="0.6"/>
        <path d="M24 10C24 10 18 15 18 20H30C30 15 24 10 24 10Z" fill="#2E6B24" opacity="0.7"/>
        <rect x="18" y="28" width="12" height="6" rx="1" fill="#2E6B24" opacity="0.5"/>
      </svg>
    ),
    title: 'Food & Beverage',
    desc: 'Ingredients and spices for global food manufacturers and processors.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#C9A227" opacity="0.12"/>
        <rect x="16" y="12" width="16" height="24" rx="3" stroke="#C9A227" strokeWidth="1.5" fill="rgba(201,162,39,0.1)"/>
        <path d="M20 20H28M20 24H28M20 28H25" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="30" cy="14" r="3" fill="#2E6B24" opacity="0.6"/>
      </svg>
    ),
    title: 'Nutraceuticals',
    desc: 'Pure herbal extracts and botanicals for supplement manufacturers.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#C9A227" opacity="0.12"/>
        <path d="M24 12C18 12 13 16.477 13 22C13 27.523 18 34 24 36C30 34 35 27.523 35 22C35 16.477 30 12 24 12Z" stroke="#C9A227" strokeWidth="1.5" fill="rgba(201,162,39,0.1)"/>
        <path d="M20 22C20 22 22 24 24 24C26 24 28 22 28 22" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Cosmetics',
    desc: 'Natural botanical ingredients for skincare and beauty formulations.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#C9A227" opacity="0.12"/>
        <path d="M24 10C24 10 14 18 14 26C14 31.523 18.477 36 24 36C29.523 36 34 31.523 34 26C34 18 24 10 24 10Z" fill="#2E6B24" opacity="0.2" stroke="#2E6B24" strokeWidth="1.2"/>
        <path d="M24 10C24 10 16 20 19 28" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M24 22C24 22 27 24 28 27" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Agriculture',
    desc: 'Seeds, inputs, and value-added products for the agriculture industry.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#C9A227" opacity="0.12"/>
        <path d="M14 28C14 22 18.477 17 24 17C29.523 17 34 22 34 28" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 28C18 25.239 20.686 23 24 23C27.314 23 30 25.239 30 28" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round" fill="rgba(46,107,36,0.15)"/>
        <circle cx="24" cy="31" r="4" fill="#2E6B24" opacity="0.6"/>
      </svg>
    ),
    title: 'Animal Feed',
    desc: 'Natural herbal supplements and agricultural products for livestock nutrition.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#C9A227" opacity="0.12"/>
        <path d="M18 32L16 36H32L30 32H18Z" fill="#2E6B24" opacity="0.5"/>
        <rect x="18" y="16" width="12" height="16" rx="2" stroke="#C9A227" strokeWidth="1.5" fill="rgba(201,162,39,0.1)"/>
        <path d="M21 21H27M21 25H25" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="13" r="3" fill="#C9A227" opacity="0.7"/>
      </svg>
    ),
    title: 'Pharmaceutical',
    desc: 'Certified herbal raw materials meeting stringent pharmaceutical standards.',
  },
];

export default function IndustriesServe() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-wrap alt">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <SectionHeader
            title="Industries We Serve"
            subtitle="Our diverse product portfolio caters to multiple industry verticals across the globe."
            center
          />
        </div>

        <div className="industries__grid">
          {industries.map((ind, i) => (
            <div key={i} className={`industry-card reveal delay-${Math.min(i + 1, 6)} ${isVisible ? 'visible' : ''}`}>
              <div className="industry-card__icon">{ind.icon}</div>
              <h3 className="industry-card__title">{ind.title}</h3>
              <p className="industry-card__desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
