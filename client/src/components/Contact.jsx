import { useEffect, useRef, useState } from 'react';
import {
  FaWhatsapp,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCommentDots,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Directly redirect to WhatsApp since there is no backend
    const msg = encodeURIComponent(
      `Hello Abirami Industries!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919500236783?text=${msg}`, '_blank');
    
    setSubmitStatus('whatsapp');
    setFormData({ name: '', phone: '', email: '', message: '' });

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['Thirumalai Nagar, Sultanpet', 'Avalapalli, Hosur', 'Tamil Nadu 635109'],
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+91 9500236783'],
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Mon - Sat: 6:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">📞 Contact Us</span>
          <h2 className="section-title">
            Get in <span className="text-green">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a question or need a quote? Reach out to us through WhatsApp, phone, or fill out the form below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper reveal-left">
            <h3 className="form-title">Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-icon"><FaUser /></div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="contact-name"
                />
              </div>
              <div className="form-group">
                <div className="input-icon"><FaPhone /></div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  id="contact-phone"
                />
              </div>
              <div className="form-group">
                <div className="input-icon"><FaEnvelope /></div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={handleChange}
                  id="contact-email"
                />
              </div>
              <div className="form-group">
                <div className="input-icon textarea-icon"><FaCommentDots /></div>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  id="contact-message"
                />
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-whatsapp form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner" />
                  ) : (
                    <>
                      <FaWhatsapp size={18} />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </div>

              {submitStatus && (
                <div className={`form-status ${submitStatus}`}>
                  {submitStatus === 'success' && '✅ Message sent successfully! We will get back to you soon.'}
                  {submitStatus === 'whatsapp' && '✅ Redirected to WhatsApp! Please send the message there.'}
                  {submitStatus === 'error' && '❌ Something went wrong. Please try WhatsApp instead.'}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper reveal-right">
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <div className="contact-info-card" key={index}>
                  <div className="contact-info-icon">{info.icon}</div>
                  <div>
                    <h4 className="contact-info-title">{info.title}</h4>
                    {info.details.map((detail, i) => (
                      <p className="contact-info-detail" key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="contact-map">
              <iframe
                src="https://maps.google.com/maps?q=Abirami%20Industries%20Bhaarthiyar%20Nagar%20Avallapalli%20Dam%20Road%20Hosur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abirami Industries Google Map Location"
              ></iframe>
              <div style={{ position: 'absolute', bottom: '15px', right: '15px', zIndex: 10 }}>
                <a
                  href="https://maps.app.goo.gl/SeqNdFda8jQmugRe8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark map-btn"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontSize: '0.8rem', background: 'var(--dark)', color: 'var(--white)', borderRadius: 'var(--radius-md)' }}
                >
                  <FaMapMarkerAlt />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
