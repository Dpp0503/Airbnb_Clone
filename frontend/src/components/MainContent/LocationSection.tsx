import React, { useState } from 'react';
import styles from '../../styles/MainContentLayout.module.css';

const LocationSection: React.FC = () => {
  const [mapZoom, setMapZoom] = useState(1);

  return (
    <>
      <div id="location" className={styles.whereYouWillBeSection}>
        <h2 className={styles.sectionTitle} style={{marginBottom: '24px'}}>Where you'll be</h2>
        <div className={styles.locationCity}>Candolim, Goa, India</div>
        <div className={styles.mapContainer}>
          <img 
            src="/UtilsImage/Map_Custom.png" 
            alt="Map" 
            className={styles.mapImage} 
            style={{ transform: `scale(${mapZoom})`, transition: 'transform 0.3s ease' }}
          />
          
          {/* Search Top Left */}
          <button className={styles.mapSearchBtn}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentColor' }}><path d="M13 0c7.18 0 13 5.82 13 13 0 2.86-.93 5.5-2.51 7.66l8.22 8.22-2.12 2.12-8.22-8.22A12.94 12.94 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path></svg>
          </button>

          {/* Map Controls */}
          <div className={styles.mapControls}>
            <button className={styles.mapControlBtn} onClick={() => setMapZoom(prev => Math.min(prev + 0.5, 3))}>+</button>
            <button className={styles.mapControlBtn} onClick={() => setMapZoom(prev => Math.max(prev - 0.5, 1))}>-</button>
          </div>
        </div>
        
        <p className={styles.exactLocationText}>Exact location will be provided after booking.</p>
        
        <div className={styles.neighborhoodHighlights}>
          <h3 className={styles.neighborhoodTitle}>Neighbourhood highlights</h3>
          <p className={styles.neighborhoodText}>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
          <button className={styles.showMoreLinkBtn}>
            Show more
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '4', overflow: 'visible', marginLeft: '4px' }}>
              <g fill="none"><path d="M12 4l12 12-12 12"></path></g>
            </svg>
          </button>
        </div>
      </div>

      <hr className={styles.divider} />
    </>
  );
};

export default LocationSection;
