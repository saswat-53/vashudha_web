import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './KnowledgeHarvest.css';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&q=80&auto=format&fit=crop',
    tag: 'Health & Wellness',
    title: 'Benefits of Moringa: A Superfood for a Healthy Life',
    excerpt: 'Moringa, known as the "miracle tree", is packed with nutrients that can transform your health and wellbeing in remarkable ways.',
    date: 'May 15, 2024',
    readTime: '5 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=700&q=80&auto=format&fit=crop',
    tag: 'Industry Insights',
    title: 'Global Herbal Market: Growing Trends and Opportunities',
    excerpt: 'The global herbal market is experiencing unprecedented growth driven by consumer demand for natural and sustainable products.',
    date: 'Apr 28, 2024',
    readTime: '7 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80&auto=format&fit=crop',
    tag: 'Export Guide',
    title: 'Agricultural Export Compliance: A Guide for India',
    excerpt: 'Navigating the complex regulatory landscape of agricultural exports requires understanding certifications, documentation, and quality standards.',
    date: 'Apr 10, 2024',
    readTime: '9 min read',
  },
];

export default function KnowledgeHarvest() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="knowledge" className="section-wrap">
      <div className="container" ref={ref}>
        <div className={`knowledge__top reveal ${isVisible ? 'visible' : ''}`}>
          <SectionHeader
            title="Knowledge Harvest"
            subtitle="Articles &amp; Insights"
          />
          <a href="#knowledge" className="knowledge__all-link">
            View All Articles →
          </a>
        </div>

        <div className="knowledge__grid">
          {articles.map((a, i) => (
            <article key={i} className={`article-card reveal delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <div className="article-card__img-wrap">
                <img src={a.image} alt={a.title} className="article-card__img" loading="lazy" />
                <span className="article-card__tag">{a.tag}</span>
              </div>
              <div className="article-card__body">
                <div className="article-card__meta">
                  <span>{a.date}</span>
                  <span className="article-card__sep">·</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="article-card__title">{a.title}</h3>
                <p className="article-card__excerpt">{a.excerpt}</p>
                <a href="#knowledge" className="article-card__link">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
