import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './FarmToExport.css';

const steps = [
  { num: '01', icon: '🌾', label: 'Farm Sourcing', desc: 'Direct from trusted farms' },
  { num: '02', icon: '✓', label: 'Quality Selection', desc: 'Strict grading process' },
  { num: '03', icon: '⚙', label: 'Processing', desc: 'State-of-the-art facilities' },
  { num: '04', icon: '🔬', label: 'Lab Testing', desc: 'International standards' },
  { num: '05', icon: '📦', label: 'Export Packaging', desc: 'Compliant packaging' },
  { num: '06', icon: '📋', label: 'Export Documentation', desc: 'Full compliance' },
  { num: '07', icon: '✈', label: 'Global Delivery', desc: 'Worldwide logistics' },
];

export default function FarmToExport() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="journey" className="section-wrap dark">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <SectionHeader
            number="04"
            title="Farm to Export Journey"
            subtitle="Our Process"
            light
          />
        </div>

        <div className="journey__track">
          <div className="journey__line" />
          <div className="journey__steps">
            {steps.map((step, i) => (
              <div key={i} className={`journey__step reveal delay-${Math.min(i + 1, 6)} ${isVisible ? 'visible' : ''}`}>
                <div className="journey__step-node">
                  <span className="journey__step-icon">{step.icon}</span>
                  <div className="journey__step-connector" />
                </div>
                <div className="journey__step-body">
                  <span className="journey__step-num">{step.num}</span>
                  <h4 className="journey__step-label">{step.label}</h4>
                  <p className="journey__step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
