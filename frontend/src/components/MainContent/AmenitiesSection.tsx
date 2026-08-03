import React, { useState } from 'react';
import styles from '../../styles/MainContentLayout.module.css';
import AmenitiesModal from '../AmenitiesModal';

const AmenitiesSection: React.FC = () => {
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  return (
    <>
      <div id="amenities">
        <h2 className={styles.sectionTitle}>What this place offers</h2>
        <div className={styles.amenitiesGrid}>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M7 16v5M5 16c-1-3 1-8 2-8s3 5 2 8M7 8c-2 3-2 8 0 8s2-5 0-8M17 16v5M15 16h4M15 16c-1-3-1-6 0-8h4c1 2 1 5 0 8" /></svg>
            Kitchen
          </div>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M12 20h.01" /><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" /></svg>
            Wifi
          </div>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
            Dedicated workspace
          </div>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 12 10s-6.7.6-8.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" /><polyline points="2.7 13 8 7 16 7 21.3 13" /><path d="M22 17v4" /><path d="M2 17v4" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg>
            Free parking on premises
          </div>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M2 6c.6.5 1.2 1 2.5 1C5.8 7 6.4 6.5 7 6c.6-.5 1.2-1 2.5-1C10.8 5 11.4 5.5 12 6c.6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1" /><path d="M2 12c.6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1" /><path d="M2 18c.6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 1.3 0 1.9-.5 2.5-1 .6-.5 1.2-1 2.5-1" /></svg>
            Pool
          </div>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M10 4s-2 2-2 4" /><path d="M14 4s-2 2-2 4" /><path d="M2 12h20" /><path d="M4 12v4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4" /><path d="M6 20v2" /><path d="M18 20v2" /></svg>
            Hot tub
          </div>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M12 21a5.5 5.5 0 0 1-5.5-5.5c0-3 5.5-6.5 5.5-6.5s5.5 3.5 5.5 6.5A5.5 5.5 0 0 1 12 21Z" /><circle cx="7" cy="9" r="1.5" /><circle cx="10" cy="5" r="1.5" /><circle cx="14" cy="5" r="1.5" /><circle cx="17" cy="9" r="1.5" /></svg>
            Pets allowed
          </div>
          <div className={styles.amenityItem}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
            Exterior security cameras on property
          </div>
          <div className={`${styles.amenityItem} ${styles.amenityCrossedOut}`}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m3 3 18 18" /></svg>
            Carbon monoxide alarm
          </div>
          <div className={`${styles.amenityItem} ${styles.amenityCrossedOut}`}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 14.14 14.14" /></svg>
            Smoke alarm
          </div>
        </div>
        <button className={styles.secondaryButton} onClick={() => setIsAmenitiesModalOpen(true)}>Show all 50 amenities</button>
      </div>

      <hr className={styles.divider} />

      {isAmenitiesModalOpen && (
        <AmenitiesModal 
          amenities={['Kitchen', 'Wifi', 'Dedicated workspace', 'Free parking on premises', 'Pool', 'Hot tub', 'Pets allowed', 'Exterior security cameras on property', 'Carbon monoxide alarm', 'Smoke alarm', 'Hairdryer', 'Cleaning products', 'Shampoo', 'Hot water', 'Shower gel', 'Washing machine', 'Hangers', 'Bed linen', 'Room-darkening blinds', 'Iron', 'Clothes storage', 'Cot', 'TV', 'Air conditioning', 'Ceiling fan', 'Fridge', 'Freezer', 'Microwave', 'Cooking basics', 'Crockery and cutlery', 'Kettle', 'Coffee', 'Wine glasses', 'Toaster', 'Blender', 'Cooker', 'Private entrance', 'Patio or balcony', 'Outdoor dining area', 'Gym', 'Cleaning available during stay', 'Long-term stays allowed', 'Self check-in']}
          onClose={() => setIsAmenitiesModalOpen(false)} 
        />
      )}
    </>
  );
};

export default AmenitiesSection;
