import './SectionHeader.css';

export default function SectionHeader({ number, title, subtitle, light = false, center = false }) {
  return (
    <div className={`section-header ${light ? 'section-header--light' : ''} ${center ? 'section-header--center' : ''}`}>
      {number && <span className="section-header__number">{number}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      <div className="section-header__rule">
        <span className="section-header__rule-line" />
        <span className="section-header__rule-dot" />
        <span className="section-header__rule-line" />
      </div>
    </div>
  );
}
