import React from 'react';
import styles from '../styles/PhotoHeroGrid.module.css';

interface PhotoHeroGridProps {
  photos: string[];
  onImageClick: (index: number) => void;
  onShowAllClick: () => void;
}

const PhotoHeroGrid: React.FC<PhotoHeroGridProps> = ({ photos, onImageClick, onShowAllClick }) => {
  if (!photos || photos.length < 5) {
    return null; // For simplicity, assume we always have at least 5 photos as per requirements
  }

  return (
    <div className={styles.gridContainer}>
      <div className={styles.mainPhotoWrapper}>
        <img src={photos[0]} alt="Property Main" className={styles.photo} onClick={() => onImageClick(0)} />
      </div>
      <div className={styles.secondaryPhotosWrapper}>
        <img src={photos[1]} alt="Property 2" className={styles.photo} onClick={() => onImageClick(1)} />
        <img src={photos[2]} alt="Property 3" className={`${styles.photo} ${styles.topRight}`} onClick={() => onImageClick(2)} />
        <img src={photos[3]} alt="Property 4" className={styles.photo} onClick={() => onImageClick(3)} />
        <img src={photos[4]} alt="Property 5" className={`${styles.photo} ${styles.bottomRight}`} onClick={() => onImageClick(4)} />
      </div>
      
      <button className={styles.showAllButton} onClick={onShowAllClick}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'currentColor', height: '14px', width: '14px', overflow: 'visible' }}><path d="M10 4H4v6h6V4zm9 0h-6v6h6V4zm9 0h-6v6h6V4zM10 13H4v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zM10 22H4v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"></path></svg>
        Show all photos
      </button>
    </div>
  );
};

export default PhotoHeroGrid;
