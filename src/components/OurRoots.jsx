import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import logo from '../assets/logo-full.png';
import './OurRoots.css';

const aboutBlocks = [
  {
    title: 'Business Model',
    text: 'Prithvi Agro Ventures sources agricultural produce directly from farming communities and supplies it as raw commodities. Through Swarnabhumi, our B2B brand, we process it into value-added ingredients for food, nutraceutical and wellness businesses, with private label and custom packaging.',
  },
  {
    title: 'Long-Term Objectives',
    text: 'To build a transparent, traceable farm-to-buyer supply chain; to grow Swarnabhumi into a trusted ingredient brand across global markets; and to improve farmer livelihoods through fair sourcing and sustainable practices.',
  },
];

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M20 8C20 8 12 14 12 22C12 26.418 15.582 30 20 30C24.418 30 28 26.418 28 22C28 14 20 8 20 8Z" fill="#2E6B24" opacity="0.3"/>
        <path d="M20 8C20 8 14 16 16 24" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 18C20 18 23 20 24 23" stroke="#2E6B24" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Our Mission',
    text: 'To deliver high-quality agricultural and herbal products while promoting sustainable farming and enriching the agricultural products industry.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M12 28L20 12L28 28" stroke="#2E6B24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 23H25.5" stroke="#2E6B24" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Our Vision',
    text: 'To become a globally recognized leader in quality agricultural and herbal products, advancing sustainability within the agricultural products industry.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M14 20L18 24L26 16" stroke="#2E6B24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Our Values',
    text: 'Quality • Sustainability • Integrity • Customer Success • Continuous Improvement — we are committed to protecting your needs with high-quality products.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#C9A227" strokeWidth="1.5"/>
        <path d="M13 20C13 16.134 16.134 13 20 13C23.866 13 27 16.134 27 20V24H13V20Z" stroke="#2E6B24" strokeWidth="1.5"/>
        <path d="M17 24V26" stroke="#2E6B24" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M23 24V26" stroke="#2E6B24" strokeWidth="1.2" strokeLinecap="round"/>
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
          <img src={logo} alt="Prithvi Agro Ventures – From Indian Soil to the World" className="roots__logo" />
          <SectionHeader
            title="Rooted in Nature. Driven by Excellence."
            subtitle="At Prithvi Agro Ventures, we believe the Earth (Prithvi) provides the foundation for healthy living and sustainable growth. We transform carefully selected agricultural produce into premium export-quality products trusted by global buyers. Our B2B brand, Swarnabhumi, brings these value-added and processed products to businesses worldwide."
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

        <div className="roots__about">
          {aboutBlocks.map((b, i) => (
            <div key={i} className={`roots__about-card reveal delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <h3 className="roots__card-title">{b.title}</h3>
              <p className="roots__card-text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
