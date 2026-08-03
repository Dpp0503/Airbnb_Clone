import React, { useEffect, useState, useRef } from 'react';
import { HARDCODED_PHOTO_TOUR } from '../utils/constants';
import styles from '../styles/PhotoTour.module.css';
import type { PhotoCategory } from '../types';

interface PhotoTourProps {
  photoTour?: PhotoCategory[];
  onClose: () => void;
  initialCategory?: string | null;
  onImageClick?: (globalIndex: number) => void;
}

const PhotoTour: React.FC<PhotoTourProps> = ({ onClose, initialCategory, onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || HARDCODED_PHOTO_TOUR[0].title);
  
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Intersection observer to track active section
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const title = entry.target.getAttribute('data-title');
          if (title) {
            setActiveCategory(title);
            // Scroll the nav strip to show the active thumbnail
            const navStrip = document.getElementById('photo-nav-strip');
            const activeItem = document.getElementById(`nav-item-${title}`);
            if (navStrip && activeItem) {
              const scrollLeft = activeItem.offsetLeft - navStrip.offsetWidth / 2 + activeItem.offsetWidth / 2;
              navStrip.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
          }
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-150px 0px -50% 0px',
      threshold: 0
    });
    
    if (initialCategory) {
      setTimeout(() => {
        scrollToCategory(initialCategory);
      }, 100);
    }

    return () => {
      document.body.style.overflow = '';
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  const setSectionRef = (el: HTMLDivElement | null) => {
    if (el && observer.current) {
      observer.current.observe(el);
    }
  };

  const scrollToCategory = (title: string) => {
    setActiveCategory(title);
    const element = document.getElementById(`category-${title}`);
    if (element) {
      const scrollContainer = document.getElementById('photo-tour-overlay');
      if (scrollContainer) {
        // Find header and navStrip height to offset properly (approx 100px)
        const y = element.getBoundingClientRect().top + scrollContainer.scrollTop - 160; // Increased offset to account for sticky header + navstrip
        scrollContainer.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  let globalIndexCounter = 0;

  return (
    <div className={styles.overlay} id="photo-tour-overlay">
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onClose}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '4', overflow: 'visible' }}><g fill="none"><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></g></svg>
          </button>
        </div>
        <div className={styles.headerCenter}>Photo tour</div>
        <div className={styles.headerRight}>
          <button className={styles.actionButton}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '2', overflow: 'visible' }}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path></g></svg>
          </button>
          <button className={styles.actionButton}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '2', overflow: 'visible' }}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
          </button>
        </div>
      </header>
      
      <div className={styles.navStrip} id="photo-nav-strip">
        {HARDCODED_PHOTO_TOUR.map((section, index) => (
          <div 
            key={index}
            id={`nav-item-${section.title}`}
            className={`${styles.navItem} ${activeCategory === section.title ? styles.active : ''}`}
            onClick={() => scrollToCategory(section.title)}
          >
            <div className={styles.navThumbnailWrapper}>
              <img src={section.imageUrls[0]} alt="" className={styles.navThumbnail} />
            </div>
            <div className={styles.navText}>{section.title}</div>
          </div>
        ))}
      </div>

      <div className={styles.content} id="photo-tour-container">
        <div className={styles.container}>
          {HARDCODED_PHOTO_TOUR.map((section, index) => (
            <div key={index} id={`category-${section.title}`} data-title={section.title} ref={setSectionRef} className={styles.section}>
              <div className={styles.sectionLeft}>
                {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
                {section.subtitle && <p className={styles.sectionSubtitle}>{section.subtitle}</p>}
              </div>
              <div className={styles.sectionRight}>
                <div className={styles.grid}>
                  {section.imageUrls.map((url, imgIndex) => {
                    const currentIndex = globalIndexCounter++;
                    return (
                      <div 
                        key={imgIndex} 
                        id={`photo-tour-image-${currentIndex}`}
                        className={styles.imageWrapper}
                        onClick={() => onImageClick && onImageClick(currentIndex)}
                        style={{ cursor: onImageClick ? 'pointer' : 'default' }}
                      >
                        <img src={url} alt={`${section.title} ${imgIndex + 1}`} className={styles.image} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoTour;
