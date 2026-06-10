import { FaWhatsapp, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-pattern" />
        <div className="hero-glow" />
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            Trusted Since Years — Hosur, Tamil Nadu
          </div>
          <h1 className="hero-title">
            Premium Industrial
            <span className="hero-highlight"> Hardware Fittings</span>
            <br />& Metal Components
          </h1>
          <p className="hero-subtitle">
            Abirami Industries delivers top-quality gate rollers, weld-on hinges, sturdy handles, decorative finials,
            and custom metal components for all your fabrication needs. Built with precision, delivered with trust.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/919500236783?text=Hello%20Abirami%20Industries!%20I%20am%20interested%20in%20your%20products.%20Please%20share%20the%20catalog."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-hero"
            >
              <FaWhatsapp size={20} />
              Get Quote on WhatsApp
            </a>
            <a href="#products" className="btn btn-outline btn-hero" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore Products
              <FaArrowRight size={14} />
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <img
              src="/images/img1.png"
              alt="Premium industrial hardware fittings by Abirami Industries"
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={handleScrollDown} aria-label="Scroll down">
        <FaChevronDown className="scroll-icon" />
      </button>
    </section>
  );
};

export default Hero;
