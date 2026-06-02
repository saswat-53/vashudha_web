import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './OurRoots.css';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#D4A017" strokeWidth="1.5"/>
        <path d="M20 8C20 8 12 14 12 22C12 26.418 15.582 30 20 30C24.418 30 28 26.418 28 22C28 14 20 8 20 8Z" fill="#2D6A4F" opacity="0.3"/>
        <path d="M20 8C20 8 14 16 16 24" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 18C20 18 23 20 24 23" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Our Mission',
    text: 'To deliver high-quality agricultural and herbal products while promoting sustainable farming and enriching the agricultural products industry.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#D4A017" strokeWidth="1.5"/>
        <path d="M12 28L20 12L28 28" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 23H25.5" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Our Vision',
    text: 'To become a globally recognized leader in quality agricultural and herbal products, advancing sustainability within the agricultural products industry.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#D4A017" strokeWidth="1.5"/>
        <path d="M14 20L18 24L26 16" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Our Values',
    text: 'Quality • Sustainability • Integrity • Customer Success • Continuous Improvement — we are committed to protecting your needs with high-quality products.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#D4A017" strokeWidth="1.5"/>
        <path d="M13 20C13 16.134 16.134 13 20 13C23.866 13 27 16.134 27 20V24H13V20Z" stroke="#2D6A4F" strokeWidth="1.5"/>
        <path d="M17 24V26" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M23 24V26" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Our Commitment',
    text: 'We are committed to delivering safe and high-quality products while championing complete transparency and ethical business practices.',
  },
];

export default function OurRoots() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="roots" className="section-wrap">
      <div className="container" ref={ref}>
        <div className={`roots__intro reveal ${isVisible ? 'visible' : ''}`}>
          <div className="roots__leaf-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4C24 4 8 14 8 28C8 36.837 15.163 44 24 44C32.837 44 40 36.837 40 28C40 14 24 4 24 4Z" fill="#2D6A4F" opacity="0.15"/>
              <path d="M24 4C24 4 10 18 14 32C16 40 24 44 24 44" stroke="#2D6A4F" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M24 22C24 22 30 26 32 32" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <SectionHeader
            title="Rooted in Nature. Driven by Excellence."
            subtitle="At Vasudha Agro, we believe the Earth (Vasudha) provides the foundation for healthy living and sustainable growth. We transform carefully selected agricultural produce into premium export-quality products trusted by global buyers."
          />
        </div>

        <div className="roots__grid">
          {pillars.map((p, i) => (
            <div key={i} className={`roots__card reveal delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className="roots__card-icon">{p.icon}</div>
              <h3 className="roots__card-title">{p.title}</h3>
              <p className="roots__card-text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
