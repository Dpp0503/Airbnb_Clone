import React from 'react';
import styles from '../../styles/MainContentLayout.module.css';
import type { ListingDTO } from '../../types';

interface SleepSpacesProps {
  listing: ListingDTO;
}

const SleepSpaces: React.FC<SleepSpacesProps> = ({ listing }) => {
  return (
    <>
      <h2 className={styles.sectionTitle}>Where you'll sleep</h2>
      <div className={styles.sleepSpacesContainer}>
        {listing.sleepSpaces && listing.sleepSpaces.map((space, index) => (
          <div key={index} className={styles.sleepSpaceCard}>
            <img src={space.imageUrl} alt={space.title} className={styles.sleepSpaceImage} />
            <h3 className={styles.sleepSpaceTitle}>{space.title}</h3>
            <p className={styles.sleepSpaceDesc}>{space.description}</p>
          </div>
        ))}
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default SleepSpaces;
