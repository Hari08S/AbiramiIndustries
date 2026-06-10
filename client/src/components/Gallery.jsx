import { useEffect, useRef, useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('active'), i * 80);
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

  const getGalleryImages = () => {
    const images = [];

    // Categorization lists
    const pulleyIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 33, 37];
    const elbowIndices = [19, 28];
    const knurledIndices = [15, 18, 29, 36, 43];
    const nippleIndices = [20];
    const boltIndices = [27, 26, 14];
    const hingeIndices = [11, 32, 12, 31];
    const handleIndices = [10];
    const plugIndices = [21];
    const sleeveIndices = [16, 30, 35, 39, 40];
    const screwIndices = [17, 23];
    const adapterIndices = [22, 24, 34, 38, 41, 42];

    for (let i = 1; i <= 43; i++) {
      let caption = `Machined Component #${i}`;

      if (pulleyIndices.includes(i)) {
        caption = i === 2 ? 'Sliding Gate Roller (Double Bearing)' : `V-Groove Steel Pulley (Type ${i})`;
      } else if (elbowIndices.includes(i)) {
        caption = i === 19 ? 'Brass Threaded 90-Degree Elbow' : 'Brass Right-Angle Hose Joint';
      } else if (knurledIndices.includes(i)) {
        caption = i === 43 ? 'Round Knurled Brass Collar Nut' : `Knurled Brass Nut (Type ${i})`;
      } else if (nippleIndices.includes(i)) {
        caption = 'Double Male Brass Nipple';
      } else if (boltIndices.includes(i)) {
        caption = i === 27 ? 'Threaded Steel Anchor Rods' : `Industrial Fastener Pin`;
      } else if (hingeIndices.includes(i)) {
        caption = `Weld-On Hinge Pin Set`;
      } else if (handleIndices.includes(i)) {
        caption = 'Polished Brass Cabinet Door Handle';
      } else if (plugIndices.includes(i)) {
        caption = 'Brass Hex-Head Socket Plug';
      } else if (sleeveIndices.includes(i)) {
        caption = `Brass Cylindrical Sleeve/Bushing`;
      } else if (screwIndices.includes(i)) {
        caption = `Knurled Brass Thumb Screw`;
      } else if (adapterIndices.includes(i)) {
        caption = `Precision Brass Adapter/Fitting`;
      } else if (i === 25) {
        caption = 'Copper Spacer Collar';
      }

      images.push({
        src: `/images/001 (${i}).JPG`,
        alt: caption,
        caption: caption,
      });
    }

    return images;
  };

  const galleryImages = getGalleryImages();

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = (currentImage + direction + galleryImages.length) % galleryImages.length;
    setCurrentImage(newIndex);
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [lightboxOpen, currentImage]);

  return (
    <section className="gallery" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">📸 Gallery</span>
          <h2 className="section-title">
            Our <span className="text-green">Product Gallery</span>
          </h2>
          <p className="section-subtitle">
            Browse through our extensive collection of industrial hardware products. Click any image to view in full size.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              className={`gallery-item reveal ${index === 0 ? 'gallery-item-large' : ''}`}
              key={index}
              onClick={() => openLightbox(index)}
              style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--white)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', transition: 'all var(--transition-base)' }}
            >
              <div className="gallery-image-container" style={{ flex: 1, overflow: 'hidden', position: 'relative', minHeight: index === 0 ? '300px' : '150px' }}>
                <img src={image.src} alt={image.alt} className="gallery-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="gallery-overlay">
                  <span className="gallery-zoom">🔍 Zoom View</span>
                </div>
              </div>
              <div className="gallery-name-plate" style={{ padding: '10px 8px', background: 'var(--white)', borderTop: '1px solid var(--border)', textAlign: 'center', fontWeight: '600', fontSize: '0.8rem', color: 'var(--text-primary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <FaTimes size={20} />
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateImage(-1)} aria-label="Previous image">
              <FaChevronLeft size={20} />
            </button>
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="lightbox-image"
            />
            <button className="lightbox-nav lightbox-next" onClick={() => navigateImage(1)} aria-label="Next image">
              <FaChevronRight size={20} />
            </button>
            <div className="lightbox-info">
              <span className="lightbox-caption">{galleryImages[currentImage].caption}</span>
              <span className="lightbox-counter">{currentImage + 1} / {galleryImages.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
