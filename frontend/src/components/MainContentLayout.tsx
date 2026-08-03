import React from 'react';
import styles from '../styles/MainContentLayout.module.css';
import type { ListingDTO } from '../types';

import PropertyDetails from './MainContent/PropertyDetails';
import SleepSpaces from './MainContent/SleepSpaces';
import AmenitiesSection from './MainContent/AmenitiesSection';
import CalendarSection from './MainContent/CalendarSection';
import ReservationSidebar from './MainContent/ReservationSidebar';
import ReviewsSection from './MainContent/ReviewsSection';
import LocationSection from './MainContent/LocationSection';
import HostSection from './MainContent/HostSection';
import ThingsToKnow from './MainContent/ThingsToKnow';
import MoreStaysNearby from './MainContent/MoreStaysNearby';
import { useToast } from '../hooks/useToast';

interface MainContentLayoutProps {
  listing: ListingDTO;
}

const MainContentLayout: React.FC<MainContentLayoutProps> = ({ listing }) => {
  const { toastMessage, setToastMessage } = useToast(3000);

  return (
    <>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <PropertyDetails listing={listing} />
          <SleepSpaces listing={listing} />
          <AmenitiesSection />
          <CalendarSection listing={listing} />
        </div>

        {/* Right Column */}
        <ReservationSidebar setToastMessage={setToastMessage} />
      </div>
      
      <hr className={styles.divider} />

      <ReviewsSection listing={listing} />
      <LocationSection />
      <HostSection listing={listing} />
      <ThingsToKnow />
      <MoreStaysNearby />

      <div className={`${styles.toast} ${toastMessage ? styles.toastVisible : ''}`}>
        {toastMessage}
      </div>
    </>
  );
};

export default MainContentLayout;
