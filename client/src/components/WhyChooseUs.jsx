import { useEffect, useRef } from 'react';
import {
  FaShieldAlt,
  FaMoneyBillWave,
  FaBoxes,
  FaTruck,
  FaTools,
  FaHeadset,
} from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('active'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure it meets ISO standards and industry specifications.',
      color: '#16a34a',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Competitive Pricing',
      description: 'Get the best value for your money with our competitive wholesale and retail pricing on all products.',
      color: '#ca8a04',
    },
    {
      icon: <FaBoxes />,
      title: 'Specialized Product Range',
      description: 'A dedicated catalog of products across specialized categories — from robust gate rollers to ornamental finials.',
      color: '#2563eb',
    },
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times with reliable delivery to ensure your projects stay on schedule.',
      color: '#dc2626',
    },
    {
      icon: <FaTools />,
      title: 'Custom Orders',
      description: 'Need something specific? We offer custom manufacturing for specialized requirements and bulk orders.',
      color: '#7c3aed',
    },
    {
      icon: <FaHeadset />,
      title: 'Expert Support',
      description: 'Our experienced team provides technical guidance to help you select the right products for your needs.',
      color: '#0891b2',
    },
  ];

  return (
    <section className="why-choose-us" id="why-us" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">✨ Why Choose Us</span>
          <h2 className="section-title">
            Why Clients <span className="text-green">Trust Us</span>
          </h2>
          <p className="section-subtitle">
            We go beyond just selling hardware — we build lasting partnerships through quality, reliability, and service.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card reveal" key={index}>
              <div
                className="feature-icon"
                style={{ background: `${feature.color}12`, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-line" style={{ background: feature.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
