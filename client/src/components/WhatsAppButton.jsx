import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const whatsappUrl = 'https://wa.me/919500236783?text=Hello%20Abirami%20Industries!%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20products.';

  if (!isVisible) return null;

  return (
    <div className="whatsapp-float">
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <button
            className="tooltip-close"
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
          >
            <FaTimes size={10} />
          </button>
          <p className="tooltip-text">
            👋 Need help? Chat with us on WhatsApp!
          </p>
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={28} />
        <span className="whatsapp-pulse" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
