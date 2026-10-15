import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './ProductCategories.css';

const products = [
  {
    number: '01',
    title: 'Raw Agricultural Commodities',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=80&auto=format&fit=crop',
    items: ['Whole & Ground Spices', 'Turmeric Fingers', 'Dehydrated Produce', 'Wild Agricultural Products'],
    badge: 'Prithvi Agro Ventures',
    badgeClass: 'badge--green',
  },
  {
    number: '02',
    title: 'Processed Ingredients',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&q=80&auto=format&fit=crop',
    items: ['Moringa Powder', 'Turmeric Powder', 'Herbal Ingredients', 'Private Label & Custom Packaging'],
    badge: 'Swarnabhumi · B2B',
    badgeClass: 'badge--gold',
  },
];

export default function ProductCategories() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="products" className="section-wrap alt">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <SectionHeader
            number="03"
            title="Product Categories"
            subtitle="Processed & value-added products under our B2B brand, Swarnabhumi"
          />
        </div>

        <div className="products__grid">
          {products.map((p, i) => (
            <div key={i} className={`product-card reveal delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className="product-card__img-wrap">
                <img src={p.image} alt={p.title} className="product-card__img" loading="lazy" />
                <div className="product-card__img-overlay" />
                <span className={`product-card__badge ${p.badgeClass}`}>{p.badge}</span>
                <span className="product-card__num">{p.number}</span>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{p.title}</h3>
                <ul className="product-card__list">
                  {p.items.map((item, j) => (
                    <li key={j} className="product-card__item">
                      <span className="product-card__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#enquiry" className="product-card__link"
                   onClick={(e) => { e.preventDefault(); document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  Enquire Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
