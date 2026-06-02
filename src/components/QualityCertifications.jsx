import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './QualityCertifications.css';

const certs = [
  { code: 'FSSAI', name: 'Food Safety and Standards Authority of India', color: '#1B4332', accent: '#D4A017', desc: 'Food safety certification ensuring compliance with Indian food standards.' },
  { code: 'IEC', name: 'Import Export Code', color: '#2D6A4F', accent: '#E5B62E', desc: 'Official import-export certification for international trade operations.' },
  { code: 'UDYAM', name: 'MSME Registration', color: '#40916C', accent: '#D4A017', desc: 'Registered MSME enterprise under the Government of India initiative.' },
  { code: 'HACCP', name: 'Hazard Analysis Critical Control Points', color: '#0D2818', accent: '#E5B62E', desc: 'International food safety management system certification.' },
  { code: 'GMP', name: 'Good Manufacturing Practices', color: '#1B4332', accent: '#D4A017', desc: 'Ensures products are consistently produced and controlled to quality standards.' },
];

export default function QualityCertifications() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="certifications" className="section-wrap">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <SectionHeader
            number="05"
            title="Quality &amp; Certifications"
            subtitle="Quality You Can Trust — each product undergoes strict quality checks to ensure compliance with international standards."
            center
          />
        </div>

        <div className="certs__grid">
          {certs.map((cert, i) => (
            <div key={i} className={`cert-card reveal delay-${i + 1} ${isVisible ? 'visible' : ''}`}
                 style={{ '--cert-color': cert.color, '--cert-accent': cert.accent }}>
              <div className="cert-card__badge">
                <span className="cert-card__code">{cert.code}</span>
              </div>
              <h4 className="cert-card__name">{cert.name}</h4>
              <p className="cert-card__desc">{cert.desc}</p>
              <div className="cert-card__check">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Certified
              </div>
            </div>
          ))}
        </div>

        <div className={`certs__trust reveal delay-4 ${isVisible ? 'visible' : ''}`}>
          <div className="certs__trust-inner">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="#D4A017" opacity="0.8"/>
            </svg>
            <p>All certifications are regularly audited and renewed to maintain the highest standards of quality assurance in agricultural and herbal product manufacturing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
