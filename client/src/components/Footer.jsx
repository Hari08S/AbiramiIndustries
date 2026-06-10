import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
  FaHeart,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const productLinks = [
    { name: 'Gate Rollers', href: '#products' },
    { name: 'Weld-on Hinges', href: '#products' },
    { name: 'Door & Gate Handles', href: '#products' },
    { name: 'Decorative Finials', href: '#products' },
    { name: 'Custom Fabrication', href: '#products' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src="/images/AI.jpg" alt="Abirami Industries Logo" />
              </div>
              <div className="logo-text">
                <span className="logo-name">Abirami</span>
                <span className="logo-sub">Industries</span>
              </div>
            </div>
            <p className="footer-desc">
              Your trusted partner for premium quality industrial hardware fittings,
              connectors, and custom metal components. Serving industries with excellence since years.
            </p>
            <div className="footer-social">
              <a
                href="https://wa.me/919500236783"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="tel:+919500236783"
                className="social-link phone"
                aria-label="Phone"
              >
                <FaPhone size={16} />
              </a>
              <a
                href="mailto:abiramiindustries6@gmail.com"
                className="social-link email"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-links-group">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <a 
                  href="https://maps.app.goo.gl/SeqNdFda8jQmugRe8?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'inline', color: 'rgba(255, 255, 255, 0.5)', transition: 'color var(--transition-base)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
                >
                  Thirumalai Nagar, Sultanpet, Avalapalli, Hosur, Tamil Nadu 635109
                </a>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <a href="mailto:abiramiindustries6@gmail.com">abiramiindustries6@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <a href="tel:+919500236783">+91 9500236783</a>
              </div>
              <div className="footer-contact-item">
                <FaWhatsapp className="footer-contact-icon" />
                <a href="https://wa.me/919500236783" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Abirami Industries. All rights reserved. 
            Made with <FaHeart className="heart-icon" /> in Hosur
          </p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
