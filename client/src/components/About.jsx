import { useEffect, useRef, useState } from 'react';
import { FaIndustry, FaUsers, FaCogs, FaTrophy } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({ years: 0, clients: 0, products: 0, orders: 0 });
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 15, clients: 1000, products: 50, orders: 5000 };
    const duration = 2000;
    const start = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounters({
        years: Math.floor(targets.years * eased),
        clients: Math.floor(targets.clients * eased),
        products: Math.floor(targets.products * eased),
        orders: Math.floor(targets.orders * eased),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const stats = [
    { icon: <FaTrophy />, value: `${counters.years}+`, label: 'Years Experience', color: '#ca8a04' },
    { icon: <FaUsers />, value: `${counters.clients}+`, label: 'Happy Clients', color: '#16a34a' },
    { icon: <FaCogs />, value: `${counters.products}+`, label: 'Products Available', color: '#2563eb' },
    { icon: <FaIndustry />, value: `${counters.orders}+`, label: 'Orders Delivered', color: '#dc2626' },
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal-left">
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Building Trust Through
              <span className="text-green"> Quality Hardware</span>
            </h2>
            <p className="about-description">
              Founded by <strong>Mr. Suresh</strong>, <strong>Abirami Industries</strong> is a leading manufacturer and supplier of premium hardware fittings
              based in Hosur, Tamil Nadu. With over 15 years of experience, we have been providing top-quality
              gate rollers, weld-on hinges (Norling & Nipple types), durable handles, and decorative spacers
              for fabricators and industries across the region.
            </p>
            <p className="about-description">
              Proudly supplying top-grade components to major gate fabricators and construction contractors across Tamil Nadu and Karnataka. Our commitment to quality, competitive pricing, and exceptional customer service has made us
              the preferred choice for businesses of all sizes. Every product we supply
              meets rigorous quality standards, ensuring maximum durability and performance.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-check">✓</div>
                <span>ISO Standard Quality Products</span>
              </div>
              <div className="about-feature">
                <div className="feature-check">✓</div>
                <span>Competitive Wholesale Pricing</span>
              </div>
              <div className="about-feature">
                <div className="feature-check">✓</div>
                <span>Custom Manufacturing Available</span>
              </div>
              <div className="about-feature">
                <div className="feature-check">✓</div>
                <span>Fast & Reliable Delivery</span>
              </div>
            </div>
          </div>

          <div className="about-stats-grid reveal-right">
            {stats.map((stat, index) => (
              <div
                className="about-stat-card"
                key={index}
                style={{ '--stat-color': stat.color }}
              >
                <div className="stat-icon-wrapper" style={{ background: `${stat.color}15`, color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
