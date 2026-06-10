import { useEffect, useRef, useState } from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

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

  // Re-trigger animation for newly filtered products
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('.product-card.reveal').forEach(el => {
        el.classList.add('active');
      });
    }, 50);
  }, [activeCategory]);

  const products = [
    // Gate Rollers & Wheels
    {
      id: 1,
      name: 'Runner Wheel (U & V) Full Rotate',
      sizes: 'Standard',
      description: 'Heavy-duty full rotation runner wheels for sliding gates, available in both U and V groove profiles.',
      image: '/images/Runner_Wheel_UV_Full_Rotate_card.png',
      category: 'gate-rollers',
      features: ['Full 360° Rotation', 'Smooth Operation', 'Heavy Load Capacity'],
    },
    {
      id: 2,
      name: 'Runner Wheel (V) + Clamp',
      sizes: 'Multiple Sizes',
      description: 'V-groove sliding gate wheels integrated with sturdy mounting clamps for easy installation.',
      image: '/images/Runner_Wheel_V_Clamp_card.png',
      category: 'gate-rollers',
      features: ['V-Groove Profile', 'Integrated Clamp', 'Durable Steel'],
    },
    {
      id: 3,
      name: 'Runner Wheel (U) + Clamp',
      sizes: 'Multiple Sizes',
      description: 'U-groove sliding gate wheels with integrated mounting clamps, designed for round tracks.',
      image: '/images/Runner_Wheel_U_Clamp_card.png',
      category: 'gate-rollers',
      features: ['U-Groove Profile', 'Integrated Clamp', 'Smooth Tracking'],
    },
    {
      id: 4,
      name: 'Runner Wheel (Pin Only)',
      sizes: 'Standard',
      description: 'Precision machined runner wheels with pin-only mounting for custom gate applications.',
      image: '/images/Runner_Wheel_Pin_Only_card.png',
      category: 'gate-rollers',
      features: ['Pin Mounting', 'High Precision', 'Versatile Use'],
    },
    
    // Weld-on Hinges & Pins
    {
      id: 5,
      name: 'Design Inches (2 Pin) Norling Type',
      sizes: '1x4, 1¼x5, 1½x5',
      description: 'Premium Norling type 2-pin weld-on hinges for heavy doors and gates.',
      image: '/images/Design_Inches_2Pin_Norling.png',
      category: 'hinges',
      features: ['Norling Design', '2-Pin Structure', 'High Load Bearing'],
    },
    {
      id: 6,
      name: 'Design Inches (3 Pin) Norling Type',
      sizes: '1x4, 1¼x5, 1½x5',
      description: 'Heavy-duty Norling type 3-pin weld-on hinges for maximum security and stability.',
      image: '/images/Design_Inches_3Pin_Norling.png',
      category: 'hinges',
      features: ['Norling Design', '3-Pin Structure', 'Maximum Stability'],
    },
    {
      id: 7,
      name: 'Design Inches (3 Pin) RDH',
      sizes: '1x4, 1¼x5, 1½x5',
      description: 'RDH type 3-pin weld-on hinges offering robust rotation for industrial gates.',
      image: '/images/Design_Inches_3Pin_RDH.png',
      category: 'hinges',
      features: ['RDH Type', '3-Pin Structure', 'Smooth Rotation'],
    },
    {
      id: 8,
      name: 'Nipple Type Inches (2 Pin)',
      sizes: '1x4, 1¼x5, 1½x6, 1¾x6',
      description: 'Nipple type 2-pin barrel hinges designed for easy welding and alignment.',
      image: '/images/Nipple_Type_2Pin.png',
      category: 'hinges',
      features: ['Nipple Type', '2-Pin Structure', 'Easy Alignment'],
    },
    {
      id: 9,
      name: 'Nipple Type Inches (3 Pin)',
      sizes: '1x4',
      description: 'Compact nipple type 3-pin hinges for reliable door articulation.',
      image: '/images/Nipple_Type_3Pin.png',
      category: 'hinges',
      features: ['Nipple Type', '3-Pin Structure', 'Reliable Articulation'],
    },
    {
      id: 10,
      name: 'Nipple Type Inches (4 Pin)',
      sizes: '1¼x1¼, 1½x1½, 1¾x1¾',
      description: 'Extra heavy-duty nipple type 4-pin hinges for massive industrial gates.',
      image: '/images/Nipple_Type_4Pin.png',
      category: 'hinges',
      features: ['Nipple Type', '4-Pin Structure', 'Extreme Duty'],
    },
    {
      id: 11,
      name: 'Square Inches Hinge',
      sizes: 'Standard',
      description: 'Square profile weld-on hinges offering a unique aesthetic and strong structural support.',
      image: '/images/Square_Inches_card.png',
      category: 'hinges',
      features: ['Square Profile', 'Strong Support', 'Clean Aesthetic'],
    },

    // Door & Gate Handles
    {
      id: 12,
      name: 'Rod Handle',
      sizes: 'Multiple Sizes',
      description: 'Elegant and sturdy rod handles for main doors, gates, and industrial cabinets.',
      image: '/images/Rod_Handle_card.png',
      category: 'handles',
      features: ['Ergonomic Grip', 'Sturdy Build', 'Elegant Design'],
    },
    {
      id: 13,
      name: 'Star Handle',
      sizes: 'Small, Medium, Big',
      description: 'Star-shaped decorative handles adding a premium look to heavy doors.',
      image: '/images/Star_Handle_card.png',
      category: 'handles',
      features: ['Star Design', 'Premium Look', 'Comfortable Grip'],
    },

    // Decorative Finials
    {
      id: 14,
      name: 'Bangalore Small',
      sizes: '3x4',
      description: 'Decorative brass/steel pillar spacers and finials for ornamental gates.',
      image: '/images/Bangalore_Small.png',
      category: 'decorative',
      features: ['Ornamental Design', 'Pillar Spacer', 'Polished Finish'],
    },
    {
      id: 15,
      name: 'Sharp Finials',
      sizes: '½", ¾", 1", 1¼"',
      description: 'Pointed spearhead finials to top off gate pickets with a sharp, secure look.',
      image: '/images/Sharp.png',
      category: 'decorative',
      features: ['Spearhead Design', 'Security Feature', 'Multiple Sizes'],
    },
    {
      id: 16,
      name: 'Kadisal Spacers',
      sizes: '1½x4, 2x4, 2½x4',
      description: 'Traditional Kadisal type decorative spacers for gate and grill fabrications.',
      image: '/images/Kadisal.png',
      category: 'decorative',
      features: ['Traditional Design', 'Grill Fabrication', 'Robust Build'],
    },
    {
      id: 17,
      name: 'T-Ball Finials',
      sizes: '1", 1¼", 1½", 2"',
      description: 'Spherical ball top finials for an elegant finish to gate posts and pillars.',
      image: '/images/T_Ball.png',
      category: 'decorative',
      features: ['Spherical Top', 'Elegant Finish', 'Post Cap'],
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gate-rollers', name: 'Gate Rollers & Wheels' },
    { id: 'hinges', name: 'Weld-on Hinges & Pins' },
    { id: 'handles', name: 'Door & Gate Handles' },
    { id: 'decorative', name: 'Decorative Finials' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleWhatsAppClick = (productName) => {
    const message = encodeURIComponent(`Hello Abirami Industries! I am interested in ${productName}. Please share more details and pricing.`);
    window.open(`https://wa.me/919500236783?text=${message}`, '_blank');
  };

  return (
    <section className="products" id="products" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">🔩 Our Products</span>
          <h2 className="section-title">
            Premium Quality <span className="text-green">Industrial Hardware</span>
          </h2>
          <p className="section-subtitle">
            Explore our extensive range of high-quality hardware fittings, connectors, and industrial components
            designed for durability and performance.
          </p>
        </div>

        <div className="products-filter reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div
              className="product-card reveal"
              key={product.id}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <button
                    className="btn btn-whatsapp product-btn"
                    onClick={() => handleWhatsAppClick(product.name)}
                  >
                    <FaWhatsapp size={16} />
                    Enquire Now
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', gap: '8px' }}>
                  <span className="product-category-tag" style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--primary)', fontWeight: 'bold' }}>
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                  <span className="product-size-tag" style={{ background: 'var(--primary-lighter)', color: 'var(--primary-darker)', padding: '2px 8px', borderRadius: 'var(--radius-full)', fontSize: '0.72rem', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                    📏 {product.sizes}
                  </span>
                </div>
                <h3 className="product-name" style={{ margin: '4px 0 8px 0', fontSize: '1.15rem' }}>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-features">
                  {product.features.map((f, i) => (
                    <span className="product-tag" key={i}>{f}</span>
                  ))}
                </div>
                <button
                  className="product-cta"
                  onClick={() => handleWhatsAppClick(product.name)}
                >
                  Get Quote
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
