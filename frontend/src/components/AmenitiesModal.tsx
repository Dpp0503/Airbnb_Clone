import React, { useEffect } from 'react';
import styles from '../styles/AmenitiesModal.module.css';

interface AmenitiesModalProps {
  amenities: string[];
  onClose: () => void;
}

import { getAmenityIcon } from '../utils/amenityHelpers';

const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ amenities, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const categorized = {
    Bathroom: amenities.filter(a => ['Hairdryer', 'Cleaning products', 'Shampoo', 'Hot water', 'Shower gel'].includes(a)),
    'Bedroom and laundry': amenities.filter(a => ['Washing machine', 'Hangers', 'Bed linen', 'Room-darkening blinds', 'Iron', 'Clothes storage', 'Cot'].includes(a)),
    Entertainment: amenities.filter(a => ['TV'].includes(a)),
    Family: amenities.filter(a => ['Cot'].includes(a)),
    'Heating and cooling': amenities.filter(a => ['Air conditioning', 'Ceiling fan'].includes(a)),
    'Home safety': amenities.filter(a => ['Exterior security cameras on property', 'Carbon monoxide alarm', 'Smoke alarm'].includes(a)),
    'Internet and office': amenities.filter(a => ['Wifi', 'Dedicated workspace'].includes(a)),
    'Kitchen and dining': amenities.filter(a => ['Kitchen', 'Fridge', 'Freezer', 'Microwave', 'Cooking basics', 'Crockery and cutlery', 'Kettle', 'Coffee', 'Wine glasses', 'Toaster', 'Blender', 'Cooker'].includes(a)),
    'Location features': amenities.filter(a => ['Private entrance'].includes(a)),
    Outdoor: amenities.filter(a => ['Patio or balcony', 'Outdoor dining area'].includes(a)),
    'Parking and facilities': amenities.filter(a => ['Free parking on premises', 'Pool', 'Hot tub', 'Gym'].includes(a)),
    Services: amenities.filter(a => ['Pets allowed', 'Cleaning available during stay', 'Long-term stays allowed', 'Self check-in'].includes(a))
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '4', overflow: 'visible' }}><path d="M4 28L28 4M4 4l24 24"></path></svg>
          </button>
        </div>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>What this place offers</h2>
          
          {Object.entries(categorized).map(([category, items]) => {
            if (items.length === 0) return null;
            return (
              <div key={category} className={styles.categoryBlock}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <ul className={styles.amenityList}>
                  {items.map((item, idx) => (
                    <li key={idx} className={styles.amenityItem}>
                      <div className={styles.amenityIcon}>{getAmenityIcon(item)}</div>
                      <div className={styles.amenityText}>{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesModal;
