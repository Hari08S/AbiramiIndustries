import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <div className="logo-icon">
            <img src="/images/AI.jpg" alt="Abirami Industries Logo" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Abirami</span>
            <span className="logo-sub">Industries</span>
          </div>
        </a>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a
              href="https://wa.me/919500236783?text=Hello%20Abirami%20Industries!%20I%20am%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-nav"
            >
              <FaWhatsapp size={18} />
              WhatsApp Us
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/919500236783?text=Hello%20Abirami%20Industries!%20I%20am%20interested%20in%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-nav nav-cta-desktop"
        >
          <FaWhatsapp size={18} />
          WhatsApp Us
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
