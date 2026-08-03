import React from 'react';
import styles from '../../styles/MainContentLayout.module.css';
import type { ListingDTO } from '../../types';

interface ReviewsSectionProps {
  listing: ListingDTO;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ listing }) => {
  return (
    <>
      <div id="reviews">
        <div className={styles.reviewsHero}>
          <div className={styles.reviewsHeroWreaths}>
            <img src="/UtilsImage/Image_Around_Ratings.png" alt="Left Wreath" className={styles.reviewsHeroWreath} />
            <div className={styles.reviewsHeroNumber}>{listing.metrics.overallRating}</div>
            <img src="/UtilsImage/Image_Around_Ratings_2.png" alt="Right Wreath" className={styles.reviewsHeroWreath} />
          </div>
          <div className={styles.reviewsHeroTitle}>Guest favourite</div>
          <div className={styles.reviewsHeroSubtitle}>This home is a guest favourite based on ratings, reviews and<br/>reliability</div>
          <div className={styles.reviewsHeroLink}>How reviews work</div>
        </div>

        <div className={styles.reviews7ColGrid}>
          <div className={styles.reviewColOverallBar}>
            <div className={styles.metricLabel}>Overall rating</div>
            <div className={styles.ratingBars}>
              {[5, 4, 3, 2, 1].map((num) => (
                <div key={num} className={styles.ratingBarRow}>
                  <span className={styles.ratingBarNum}>{num}</span>
                  <div className={styles.ratingBarTrack}>
                    <div className={styles.ratingBarFill} style={{width: num === 5 ? '90%' : num === 4 ? '5%' : '0%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.reviewColMetric}>
            <div className={styles.metricLabel}>Cleanliness</div>
            <div className={styles.metricVal}>{(listing.metrics.cleanliness || 5.0).toFixed(1)}</div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M7 21h10v-5c0-1-1-3-2-5v-2H9v2c-1 2-2 4-2 5v5z" /><path d="M9 9V5h6v4" /><path d="M9 7H6l-1 2" /><path d="M15 6h3" /><path d="M7 16h10" /><circle cx="20" cy="5" r="0.75" fill="currentColor" stroke="none" /><circle cx="22" cy="7" r="0.75" fill="currentColor" stroke="none" /><circle cx="21" cy="9" r="0.75" fill="currentColor" stroke="none" /></svg>
          </div>
          
          <div className={styles.reviewColMetric}>
            <div className={styles.metricLabel}>Accuracy</div>
            <div className={styles.metricVal}>{(listing.metrics.accuracy || 5.0).toFixed(1)}</div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-5" /></svg>
          </div>
          
          <div className={styles.reviewColMetric}>
            <div className={styles.metricLabel}>Check-in</div>
            <div className={styles.metricVal}>{(listing.metrics.checkIn || 5.0).toFixed(1)}</div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><circle cx="8" cy="9" r="5" /><circle cx="8" cy="9" r="1.5" /><path d="m11.5 12.5 8 8" /><path d="M18.5 19.5v2h-1.5 M15.5 16.5v2h-1.5" /></svg>
          </div>
          
          <div className={styles.reviewColMetric}>
            <div className={styles.metricLabel}>Communication</div>
            <div className={styles.metricVal}>{(listing.metrics.communication || 5.0).toFixed(1)}</div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4l4 4 4-4h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" /></svg>
          </div>
          
          <div className={styles.reviewColMetric}>
            <div className={styles.metricLabel}>Location</div>
            <div className={styles.metricVal}>{(listing.metrics.location || 4.8).toFixed(1)}</div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" /><path d="M9 4v14" /><path d="M15 6v14" /></svg>
          </div>
          
          <div className={styles.reviewColMetric}>
            <div className={styles.metricLabel}>Value</div>
            <div className={styles.metricVal}>{(listing.metrics.value || 4.8).toFixed(1)}</div>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '32px', width: '32px', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M4 4h7l10 10c1 1 1 2.5 0 3.5l-4.5 4.5c-1 1-2.5 1-3.5 0L4 11V4z" /><circle cx="8" cy="8" r="1.5" /></svg>
          </div>
        </div>
        <div className={styles.reviewTagsScroller}>
          <div className={styles.reviewTag}><span>🛋️</span> Comfort <strong className={styles.reviewTagVal}>6</strong></div>
          <div className={styles.reviewTag}><span>🟢</span> Accuracy <strong className={styles.reviewTagVal}>5</strong></div>
          <div className={styles.reviewTag}><span>🛁</span> Hot tub <strong className={styles.reviewTagVal}>5</strong></div>
          <div className={styles.reviewTag}><span>🌡️</span> Condition <strong className={styles.reviewTagVal}>4</strong></div>
          <div className={styles.reviewTag}><span>🎁</span> Hospitality <strong className={styles.reviewTagVal}>8</strong></div>
          <div className={styles.reviewTag}><span>🧴</span> Cleanliness <strong className={styles.reviewTagVal}>4</strong></div>
          <div className={styles.reviewTag}><span>🍰</span> Amenities <strong className={styles.reviewTagVal}>2</strong></div>
          <div className={styles.reviewTag}><span>🖼️</span> Decor <strong className={styles.reviewTagVal}>2</strong></div>
          <div className={styles.reviewTag}><span>🏠</span> Indoor spaces <strong className={styles.reviewTagVal}>2</strong></div>
          <div className={styles.reviewTag}><span>📍</span> Location <strong className={styles.reviewTagVal}>2</strong></div>
        </div>
        <div className={styles.reviewsGrid}>
          {listing.reviews && listing.reviews.slice(0, 6).map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewerHeader}>
                <div className={styles.reviewerAvatar}>
                  {['Aheesh', 'Samiksha', 'Vaibhav S'].includes(review.authorName) ? (
                    <img src={`/UtilsImage/Reviews/${review.authorName}.jpeg`} alt={review.authorName} className={styles.avatarImg} />
                  ) : review.authorName === 'Mohd' ? (
                    <img src={`/UtilsImage/Reviews/Modh.jpeg`} alt={review.authorName} className={styles.avatarImg} />
                  ) : review.authorName === 'Amit' ? (
                    <div className={styles.alphabetAvatar} style={{backgroundColor: '#ffedd5', color: '#9a3412'}}>A</div>
                  ) : review.authorName === 'Vedant' ? (
                    <div className={styles.alphabetAvatar} style={{backgroundColor: '#ede9fe', color: '#5b21b6'}}>V</div>
                  ) : (
                    <div className={styles.alphabetAvatar} style={{backgroundColor: '#e2e8f0', color: '#475569'}}>
                      {review.authorName ? review.authorName.charAt(0).toUpperCase() : '?'}
                    </div>
                  )}
                </div>
                <div className={styles.reviewerInfo}>
                  <h4 className={styles.reviewerName}>{review.authorName}</h4>
                  <p className={styles.reviewerTenure}>
                    {review.authorName === 'Amit' ? '2 months on Airbnb' : 
                     review.authorName === 'Samiksha' ? '8 months on Airbnb' : 
                     review.authorName === 'Vedant' ? '4 years on Airbnb' :
                     review.authorName === 'Mohd' ? '5 years on Airbnb' :
                     '3 years on Airbnb'}
                  </p>
                </div>
              </div>
              <div className={styles.reviewStarsAndDate}>
                <div className={styles.reviewStars}>
                  ★★★★★
                </div>
                <span className={styles.dot}>·</span>
                <span className={styles.reviewDate}>
                  {review.authorName === 'Amit' ? '1 week ago' : 
                   review.authorName === 'Aheesh' ? '2 weeks ago' : 
                   'May 2026'}
                </span>
              </div>
              <div className={styles.reviewTextWrapper}>
                <p className={styles.reviewText}>
                  {review.authorName === 'Amit' ? 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.' :
                   review.authorName === 'Aheesh' ? 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.' :
                   review.authorName === 'Samiksha' ? 'the host nitish was really great help' :
                   review.authorName === 'Vedant' ? 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....' :
                   review.authorName === 'Vaibhav S' ? 'Great great experience living out there , can\'t expect more , will always look for it in the future and will recommend my friends too.' :
                   review.authorName === 'Mohd' ? 'Great place. Exactly as described in the listing.' : review.reviewText}
                </p>
                {(review.authorName === 'Aheesh' || review.authorName === 'Vedant') && (
                  <button className={styles.showMoreReviewBtn}>Show more</button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className={styles.secondaryButton}>Show all {listing.metrics.totalReviews} reviews</button>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default ReviewsSection;
