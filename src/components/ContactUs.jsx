import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './ContactUs.css';

export default function ContactUs() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please provide your name, a valid email and a message.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <section id="contact" className="section-wrap alt" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <SectionHeader
            title="Contact Us"
            subtitle="Reach Prithvi Agro Ventures or our Swarnabhumi B2B team"
          />
        </div>

        <div className="contact__layout">
          <div className={`contact__info reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="contact__card">
              <div className="contact__info-group">
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2C7.239 2 5 4.239 5 7C5 11 10 18 10 18C10 18 15 11 15 7C15 4.239 12.761 2 10 2Z" stroke="#C9A227" strokeWidth="1.5" fill="rgba(201,162,39,0.1)"/>
                      <circle cx="10" cy="7" r="2" fill="#C9A227" opacity="0.8"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact__info-label">Corporate Office</span>
                    <p className="contact__info-value">Prithvi Agro Ventures<br />Gujarat, India – 7**</p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 4H8L9.5 8L7.5 9.5C8.5 11.5 10.5 13.5 12.5 14.5L14 12.5L18 14V18C18 18 15 19 11 17C7 15 5 12 3 8C1 4 4 4 4 4Z" stroke="#C9A227" strokeWidth="1.5" fill="rgba(201,162,39,0.1)" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact__info-label">Phone</span>
                    <p className="contact__info-value">+91 98765 43210</p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#C9A227" strokeWidth="1.5" fill="rgba(201,162,39,0.1)"/>
                      <path d="M2 7L10 12L18 7" stroke="#C9A227" strokeWidth="1.3"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact__info-label">Enquiry Channels</span>
                    <p className="contact__info-value">General: info@prithviagroventures.com<br />B2B &amp; Exports (Swarnabhumi): exports@prithviagroventures.com<br />Business hours: Mon–Sat, 9:00–18:00 IST</p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="2" width="16" height="16" rx="4" fill="rgba(37,211,102,0.15)" stroke="#25D366" strokeWidth="1.5"/>
                      <path d="M10 5.5C7.515 5.5 5.5 7.515 5.5 10C5.5 10.88 5.758 11.7 6.2 12.38L5.5 14.5L7.68 13.82C8.34 14.22 9.14 14.5 10 14.5C12.485 14.5 14.5 12.485 14.5 10C14.5 7.515 12.485 5.5 10 5.5Z" stroke="#25D366" strokeWidth="1.2" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact__info-label">WhatsApp</span>
                    <p className="contact__info-value">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="contact__social">
                <span className="contact__social-label">Follow Us</span>
                <div className="contact__social-links">
                  <a href="#" className="contact__social-btn contact__social-btn--fb" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="contact__social-btn contact__social-btn--ig" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="contact__social-btn contact__social-btn--yt" aria-label="YouTube">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`contact__form-wrap reveal-right ${isVisible ? 'visible' : ''}`}>
            {sent ? (
              <div className="contact__form-success">
                <h3 className="contact__form-title">Thank you, {form.name}.</h3>
                <p>Your message has been received. Our team will reply within one business day.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Send Us a Message</h3>
                <p className="contact__form-note">For bulk or export requirements, please use the B2B Enquiry form.</p>
                <div className="contact__form-row">
                  <input type="text" className="contact__input" placeholder="Full name *" value={form.name} onChange={update('name')} />
                  <input type="email" className="contact__input" placeholder="Email *" value={form.email} onChange={update('email')} />
                </div>
                <input type="text" className="contact__input" placeholder="Subject" value={form.subject} onChange={update('subject')} />
                <textarea className="contact__input" rows={5} placeholder="How can we help? *" value={form.message} onChange={update('message')} />
                {error && <div className="contact__form-error">{error}</div>}
                <button type="submit" className="btn btn--gold">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
