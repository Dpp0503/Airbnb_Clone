import React from 'react';
import styles from '../../styles/MainContentLayout.module.css';

const ThingsToKnow: React.FC = () => {
  return (
    <>
      <h2 className={styles.sectionTitle}>Things to know</h2>
      <div className={styles.thingsToKnowGrid}>
        <div className={styles.rulesColumn}>
          <div className={styles.ruleIconTop}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '2', overflow: 'visible' }}>
              <path d="M26 6H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
              <path d="M10 4v4m12-4v4m-18 6h24" />
              <path d="M14 16l4 4m0-4l-4 4" />
            </svg>
          </div>
          <h3 className={styles.rulesColTitle}>Cancellation policy</h3>
          <p className={styles.ruleItem}>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p>
          <p className={styles.ruleItem}>Review this host's full policy for details.</p>
          <a href="#" className={styles.ruleLink}>Learn more</a>
        </div>
        <div className={styles.rulesColumn}>
          <div className={styles.ruleIconTop}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '2', overflow: 'visible' }}>
              <circle cx="11" cy="11" r="6" />
              <path d="M15 15l11 11v4h-4v-4h-4v-4h-3l-2-2" />
            </svg>
          </div>
          <h3 className={styles.rulesColTitle}>House rules</h3>
          <p className={styles.ruleItem}>Check-in after 2:00 pm</p>
          <p className={styles.ruleItem}>Checkout before 11:00 am</p>
          <p className={styles.ruleItem}>3 guests maximum</p>
          <a href="#" className={styles.ruleLink}>Learn more</a>
        </div>
        <div className={styles.rulesColumn}>
          <div className={styles.ruleIconTop}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '2', overflow: 'visible' }}>
              <path d="M8 4h16v10c0 8-8 14-8 14S8 22 8 14V4z" />
              <line x1="16" y1="4" x2="16" y2="28" />
            </svg>
          </div>
          <h3 className={styles.rulesColTitle}>Safety & property</h3>
          <p className={styles.ruleItem}>Carbon monoxide alarm not reported</p>
          <p className={styles.ruleItem}>Smoke alarm not reported</p>
          <p className={styles.ruleItem}>Exterior security cameras on property</p>
          <a href="#" className={styles.ruleLink}>Learn more</a>
        </div>
      </div>

      <hr className={styles.divider} />
    </>
  );
};

export default ThingsToKnow;
