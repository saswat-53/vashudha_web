import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './ManufacturingExcellence.css';

const features = [
  {
    title: 'Advanced Processing',
    desc: 'State-of-the-art machinery for consistent, high-volume production with minimal human error.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="6" height="16" rx="1" fill="#C9A227" opacity="0.8"/>
        <rect x="13" y="8" width="6" height="20" rx="1" fill="#C9A227" opacity="0.9"/>
        <rect x="22" y="4" width="6" height="24" rx="1" fill="#C9A227"/>
        <path d="M2 28H30" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Hygienic Production',
    desc: 'GMP-compliant clean rooms and food-safe environments throughout the production process.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L6 9V16C6 21.523 10.477 26 16 26C21.523 26 26 21.523 26 16V9L16 4Z" fill="#C9A227" opacity="0.2" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M11 16L14 19L21 13" stroke="#2E6B24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Quality Control',
    desc: 'Multi-stage inspection from raw material receipt to finished product dispatch.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#C9A227" strokeWidth="1.5" opacity="0.8"/>
        <path d="M10 16L14 20L22 12" stroke="#2E6B24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Export Packaging',
    desc: 'Custom packaging solutions designed to preserve product integrity during global transit.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="14" width="20" height="14" rx="2" fill="#C9A227" opacity="0.2" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M6 14L16 4L26 14" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 28V20H19V28" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Traceability',
    desc: 'End-to-end supply chain transparency — from farm origin to final destination.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="8" r="4" fill="#C9A227" opacity="0.7"/>
        <circle cx="24" cy="8" r="4" fill="#C9A227" opacity="0.7"/>
        <circle cx="16" cy="24" r="4" fill="#C9A227"/>
        <path d="M8 12L16 20M24 12L16 20" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Consistent Supply',
    desc: 'Reliable supply chain management ensuring on-time delivery without compromising quality.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 16C4 16 8 8 16 8C24 8 28 16 28 16" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 20C4 20 8 24 16 24C24 24 28 20 28 20" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="3" fill="#C9A227"/>
      </svg>
    ),
  },
];

export default function ManufacturingExcellence() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="manufacturing" className="section-wrap">
      <div className="container" ref={ref}>
        <div className="mfg__layout">
          <div className={`mfg__left reveal-left ${isVisible ? 'visible' : ''}`}>
            <SectionHeader
              title="Manufacturing Excellence"
              subtitle="From Raw Harvest to Premium Products"
            />
            <p className="mfg__desc">
              Our state-of-the-art manufacturing facility combines traditional wisdom with modern
              technology to deliver products of the highest caliber. Every step is precision-controlled
              and documented for full traceability.
            </p>
            <div className="mfg__img-wrap">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop"
                alt="Manufacturing facility"
                className="mfg__img"
                loading="lazy"
              />
            </div>
          </div>

          <div className={`mfg__features reveal-right ${isVisible ? 'visible' : ''}`}>
            {features.map((f, i) => (
              <div key={i} className={`mfg__feature delay-${i + 1}`}>
                <div className="mfg__feature-icon">{f.icon}</div>
                <div>
                  <h4 className="mfg__feature-title">{f.title}</h4>
                  <p className="mfg__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
