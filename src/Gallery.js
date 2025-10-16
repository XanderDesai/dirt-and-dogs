import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your bike event images here
  const images = [
    { src: '/images/1.jpeg', alt: 'Dirt and Dogs' },
    { src: '/images/3.jpeg', alt: 'Dirt and Dogs' },
    { src: '/images/4.jpeg', alt: 'Dirt and Dogs' },
    { src: '/images/5.jpeg', alt: 'Dirt and Dogs' },
    { src: '/images/6.jpeg', alt: 'Dirt and Dogs' },
    { src: '/images/7.jpeg', alt: 'Dirt and Dogs' },
    { src: '/images/8.jpeg', alt: 'Dirt and Dogs' },
    { src: '/images/9.jpeg', alt: 'Dirt and Dogs' },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <section className="gallery-section">
      <h2>Photo Gallery</h2>
      <p className="gallery-description">Photos from our previous bike rides!</p>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <span className="view-icon">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          >
            ‹
          </button>
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            ›
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt}
            />
            <p className="lightbox-caption">
              {currentImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
