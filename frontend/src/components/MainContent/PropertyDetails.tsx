import React, { useState } from 'react';
import styles from '../../styles/MainContentLayout.module.css';
import type { ListingDTO } from '../../types';

interface PropertyDetailsProps {
  listing: ListingDTO;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ listing }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <>
      {/* Subtitle Summary */}
      <div className={styles.subtitleSection}>
        <h2 className={styles.subtitle}>{listing.subtitle}</h2>
        <ol className={styles.propertyDetailsList}>
          <li>{listing.propertyDetails.maxGuests} guests</li>
          <li className={styles.dot}>·</li>
          <li>{listing.propertyDetails.bedrooms} bedrooms</li>
          <li className={styles.dot}>·</li>
          <li>{listing.propertyDetails.beds} beds</li>
          <li className={styles.dot}>·</li>
          <li>{listing.propertyDetails.baths} baths</li>
        </ol>
      </div>

      {/* Guest Favorite Badge */}
      <div className={styles.guestFavoriteBadge}>
        <div className={styles.badgeLeft}>
          <img src="/UtilsImage/Left_Side.png" alt="Left Wreath" className={styles.badgeWreath} />
          <div className={styles.badgeLeftText}>Guest<br/>favourite</div>
          <img src="/UtilsImage/Right_Side.png" alt="Right Wreath" className={styles.badgeWreath} />
        </div>
        <div className={styles.badgeCenter}>
          One of the most loved homes on Airbnb,<br/>according to guests
        </div>
        <div className={styles.badgeRight}>
          <div className={styles.badgeRatingBlock}>
            <div className={styles.badgeRatingVal}>{listing.metrics.overallRating}</div>
            <div className={styles.badgeStars}>★★★★★</div>
          </div>
          <div className={styles.badgeDivider}></div>
          <div className={styles.badgeReviewsBlock}>
            <div className={styles.badgeReviewsVal}>{listing.metrics.totalReviews}</div>
            <div className={styles.badgeReviewsLabel}>Reviews</div>
          </div>
        </div>
      </div>

      <div className={styles.hostInfoRow}>
        <div className={styles.hostAvatar}>
          <img src={listing.hostDetails.avatarUrl} alt={listing.hostDetails.name} />
        </div>
        <div className={styles.hostTextContent}>
          <h3 className={styles.hostTitle}>Hosted by {listing.hostDetails.name}</h3>
          <p className={styles.hostSubtitle}>{listing.hostDetails.yearsHosting} years hosting</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.highlightsSection}>
        {listing.highlights && listing.highlights.map((highlight, index) => {
          let Icon;
          if (highlight.title === 'Outdoor entertainment') {
            Icon = <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }}><path d="M6 22h20 M6 26h20 M10 22V10h12v12 M16 10V4 M13 7l3-3 3 3" /></svg>;
          } else if (highlight.title === 'Designed for staying cool') {
            Icon = <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }}><path d="M16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M16 14c-4-4-2-10 0-10s4 6 0 10z M16 18c4 4 2 10 0 10s-4-6 0-10z M14 16c-4 4-10 2-10 0s6-4 10 0z M18 16c4-4 10-2 10 0s-6 4-10 0z" /></svg>;
          } else if (highlight.title === 'Self check-in') {
            Icon = <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }}><path d="M8 28h16 M12 28V4h8v24 M18 16v2" /></svg>;
          } else {
            Icon = <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }}><circle cx="16" cy="16" r="12" /></svg>;
          }

          return (
            <div key={index} className={styles.highlightItem}>
              <div className={styles.highlightIcon}>
                {Icon}
              </div>
              <div className={styles.highlightText}>
                <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                <p className={styles.highlightSubtitle}>{highlight.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <hr className={styles.divider} />

      <div className={styles.descriptionSection}>
        <div className={styles.translationBanner}>
          <span className={styles.translationText}>Some info has been automatically translated. </span>
          <a href="#" className={styles.translationLink}>Show original</a>
        </div>
        <p className={styles.descriptionText}>
          {isDescriptionExpanded ? listing.description : listing.description.substring(0, listing.description.indexOf("it's") + 4) + '...'}
        </p>
        <button 
          className={styles.showMoreButton} 
          style={{ textDecoration: 'underline' }}
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
        >
          {isDescriptionExpanded ? 'Show less' : 'Show more'}
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '5.33333', overflow: 'visible', transform: isDescriptionExpanded ? 'rotate(-90deg)' : 'none' }}>
            <g fill="none">
              <path d="M12 4L24 16 12 28"></path>
            </g>
          </svg>
        </button>
      </div>

      <hr className={styles.divider} />
    </>
  );
};

export default PropertyDetails;
