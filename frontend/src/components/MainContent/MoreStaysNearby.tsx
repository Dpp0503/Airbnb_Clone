import React, { useRef } from 'react';
import styles from '../../styles/MainContentLayout.module.css';

const MoreStaysNearby: React.FC = () => {
  const moreStaysRef = useRef<HTMLDivElement>(null);

  const handleScrollMoreStays = () => {
    if (moreStaysRef.current) {
      moreStaysRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.moreStaysHeader}>
        <h2 className={styles.sectionTitle} style={{marginBottom: 0}}>More stays nearby</h2>
        <div className={styles.carouselArrows}>
          <span className={styles.carouselPageCounter}>1 / 2</span>
          <button className={styles.carouselArrowBtn} onClick={() => moreStaysRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '3', overflow: 'visible' }}><g fill="none"><path d="M20 28L8 16 20 4"></path></g></svg>
          </button>
          <button className={styles.carouselArrowBtn} onClick={handleScrollMoreStays}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '3', overflow: 'visible' }}><g fill="none"><path d="M12 4l12 12-12 12"></path></g></svg>
          </button>
        </div>
      </div>
      <div className={styles.moreStaysScroll} ref={moreStaysRef}>
        {[
          { img: 1, title: 'Beautiful Studio with a view to die for', price: '₹23,600', rating: '4.91' },
          { img: 2, title: 'NAQAB - 1bhk with private pool', price: '₹42,218', rating: '4.95' },
          { img: 3, title: 'Greentique Luxury Flat with plunge pool, Calangute', price: '₹44,506', rating: '4.94' },
          { img: 4, title: 'The Tropical Studio | 5 mins to Beach', price: '₹22,824', rating: '4.96' },
          { img: 5, title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', price: '₹39,942', rating: '4.95' },
          { img: 6, title: 'Private Villa with pool near Candolim', price: '₹32,000', rating: '4.98' },
          { img: 7, title: 'Seaside luxury retreat Goa', price: '₹25,500', rating: '4.90' },
        ].map((stay, i) => (
          <div key={i} className={styles.stayCard}>
            <div className={styles.stayCardImageWrapper}>
              <img src={`/More_stays_nearby/${stay.img}.png`} alt={stay.title} className={styles.stayCardImage} />
            </div>
            <div className={styles.stayCardContent}>
              <h4 className={styles.stayCardTitle}>{stay.title}</h4>
              <div className={styles.stayCardMeta}>
                <span className={styles.stayCardPrice}>{stay.price}</span>
                <span className={styles.stayCardRating}>★ {stay.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreStaysNearby;
