import React, { useEffect } from 'react';
import styles from '../styles/Lightbox.module.css';

interface LightboxProps {
  photos: { url: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!photos || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.gridButton} onClick={onClose}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'currentColor', height: '16px', width: '16px', overflow: 'visible' }}><path d="M10 4H4v6h6V4zm9 0h-6v6h6V4zm9 0h-6v6h6V4zM10 13H4v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zM10 22H4v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"></path></svg>
          </button>
        </div>
        
        <div className={styles.headerCenter}>
          {currentPhoto.title}
        </div>
        
        <div className={styles.headerRight}>
          <span className={styles.counter}>
            {currentIndex + 1} of {photos.length}
          </span>
          <button className={styles.closeButton} onClick={onClose}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '3', overflow: 'visible' }}><path d="m6 6 20 20M26 6 6 26"></path></svg>
          </button>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.navLeft}>
          <button className={styles.navButton} onClick={onPrev} disabled={currentIndex === 0}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '4', overflow: 'visible' }}><g fill="none"><path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></g></svg>
          </button>
        </div>
        
        <div className={styles.imageContainer}>
          <img src={currentPhoto.url} alt={`Photo ${currentIndex + 1}`} className={styles.image} />
        </div>
        
        <div className={styles.navRight}>
          <button className={styles.navButton} onClick={onNext} disabled={currentIndex === photos.length - 1}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '4', overflow: 'visible' }}><g fill="none"><path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></g></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
