import React, { useEffect, useState } from 'react';
import styles from '../styles/StickyHeader.module.css';

interface StickyHeaderProps {
  price: number;
  currency: string;
  rating: number;
  reviewsCount: number;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ price, currency, rating, reviewsCount }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Assuming PhotoHeroGrid height is around 500-600px.
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Very rudimentary scroll spy
      const sections = ['photos', 'amenities', 'reviews', 'location'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.stickyHeaderContainer}>
      <div className={styles.headerContent}>
        <nav className={styles.navLinks}>
          <a href="#photos" onClick={(e) => scrollToSection(e, 'photos')} className={`${styles.navLink} ${activeSection === 'photos' ? styles.active : ''}`}>Photos</a>
          <a href="#amenities" onClick={(e) => scrollToSection(e, 'amenities')} className={`${styles.navLink} ${activeSection === 'amenities' ? styles.active : ''}`}>Amenities</a>
          <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')} className={`${styles.navLink} ${activeSection === 'reviews' ? styles.active : ''}`}>Reviews</a>
          <a href="#location" onClick={(e) => scrollToSection(e, 'location')} className={`${styles.navLink} ${activeSection === 'location' ? styles.active : ''}`}>Location</a>
        </nav>
        
        <div className={styles.rightSection}>
          <div className={styles.priceInfo}>
            <div className={styles.priceRow}>
              <span className={styles.price}>{currency === 'USD' ? '$' : ''}{price}</span>
              <span className={styles.night}>for 5 night</span>
            </div>
            <div className={styles.reviewsRow}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '10px', width: '10px', fill: 'currentColor' }}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
              <span className={styles.rating}>{rating}</span>
              <span className={styles.dot}>·</span>
              <a href="#reviews" className={styles.reviewsLink}>{reviewsCount} reviews</a>
            </div>
          </div>
          <button className={styles.reserveButton}>Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
