import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './RequestQuote.css';

const countries = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France',
  'Netherlands', 'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
  'South Africa', 'Nigeria', 'Kenya', 'Singapore', 'Japan', 'South Korea',
  'Malaysia', 'Indonesia', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Brazil',
  'Argentina', 'Mexico', 'New Zealand', 'Russia', 'Poland', 'Other',
];

const products = [
  'Moringa Powder', 'Turmeric Powder', 'Herbal Ingredients', 'Spices',
  'Dehydrated Products', 'Agricultural Products', 'Private Label Products',
  'Custom B2B Manufacturing', 'Custom Packaging', 'Other',
];

export default function RequestQuote() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({
    fullName: '', company: '', country: '', product: '',
    quantity: '', whatsapp: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const required = ['fullName', 'company', 'country', 'product', 'quantity'];
    const missing = required.find((f) => !form[f].trim());
    if (missing) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="quote" className="section-wrap dark" ref={ref}>
      <div className="container">
        <div className={`quote__layout reveal ${isVisible ? 'visible' : ''}`}>
          <div className="quote__left">
            <SectionHeader
              number="10"
              title="Request a Quote"
              subtitle="Let's Grow Together"
              light
            />
            <div className="quote__features">
              {['Fast Response Within 24hrs', 'Competitive B2B Pricing', 'Custom Packaging Available', 'Export Documentation Support'].map((f, i) => (
                <div key={i} className="quote__feature">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#D4A017" opacity="0.2" stroke="#D4A017" strokeWidth="1"/>
                    <path d="M5 8L7 10L11 6" stroke="#D4A017" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="quote__form-wrap">
            {submitted ? (
              <div className="quote__success">
                <div className="quote__success-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" fill="#D4A017" opacity="0.15" stroke="#D4A017" strokeWidth="1.5"/>
                    <path d="M14 24L20 30L34 18" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="quote__success-title">Inquiry Received!</h3>
                <p className="quote__success-text">Thank you, {form.fullName}. Our team will contact you within 24 hours at your provided WhatsApp number or email.</p>
                <button className="btn btn--gold" onClick={() => { setSubmitted(false); setForm({ fullName: '', company: '', country: '', product: '', quantity: '', whatsapp: '', message: '' }); }}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="quote__form" onSubmit={handleSubmit} noValidate>
                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label">Full Name <span className="form__req">*</span></label>
                    <input type="text" className="form__input" placeholder="Your full name" value={form.fullName} onChange={update('fullName')} />
                  </div>
                  <div className="form__field">
                    <label className="form__label">Company Name <span className="form__req">*</span></label>
                    <input type="text" className="form__input" placeholder="Your company" value={form.company} onChange={update('company')} />
                  </div>
                </div>

                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label">Country <span className="form__req">*</span></label>
                    <select className="form__input form__select" value={form.country} onChange={update('country')}>
                      <option value="">Select Country</option>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form__field">
                    <label className="form__label">Product Required <span className="form__req">*</span></label>
                    <select className="form__input form__select" value={form.product} onChange={update('product')}>
                      <option value="">Select Product</option>
                      {products.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label">Quantity (MT) <span className="form__req">*</span></label>
                    <input type="text" className="form__input" placeholder="e.g. 5 MT" value={form.quantity} onChange={update('quantity')} />
                  </div>
                  <div className="form__field">
                    <label className="form__label">WhatsApp Number</label>
                    <input type="tel" className="form__input" placeholder="+1 234 567 8900" value={form.whatsapp} onChange={update('whatsapp')} />
                  </div>
                </div>

                <div className="form__field">
                  <label className="form__label">Message (Optional)</label>
                  <textarea className="form__input form__textarea" rows={4} placeholder="Tell us more about your requirements..." value={form.message} onChange={update('message')} />
                </div>

                {error && <div className="form__error">{error}</div>}

                <button type="submit" className="btn btn--gold form__submit">
                  Submit Inquiry
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8H14M14 8L10 4M14 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
