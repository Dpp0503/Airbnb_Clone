import React, { useCallback } from 'react';
import styles from '../../styles/MainContentLayout.module.css';

interface ReservationSidebarProps {
  setToastMessage: (msg: string | null) => void;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({ setToastMessage }) => {
  const handleReserveClick = useCallback(() => {
    setToastMessage("You won't be charged");
  }, [setToastMessage]);

  return (
    <div className={styles.rightColumn}>
      <div className={styles.discountWidget}>
        <div className={styles.discountIcon}>
          <img src="/UtilsImage/discount.svg" alt="Discount" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div className={styles.discountTextContent}>
          <span className={styles.discountTitle}>Get 10% off your next stay.</span>
          <a href="#" className={styles.discountLink}>Terms apply</a>
        </div>
        <button className={styles.discountClaimBtn}>Claim</button>
      </div>

      <div className={styles.reservationWidget}>
        <div className={styles.widgetHeader}>
          <div>
            <span className={styles.priceValueUnderlined}>₹28,499</span>
            <span className={styles.priceLabel}> for 5 nights</span>
          </div>
        </div>

        <div className={styles.pickerContainer}>
          <div className={styles.datesPicker}>
            <div className={styles.pickerField}>
              <div className={styles.pickerLabel}>CHECK-IN</div>
              <div className={styles.pickerValueText}>10/18/2026</div>
            </div>
            <div className={styles.pickerBorder}></div>
            <div className={styles.pickerField}>
              <div className={styles.pickerLabel}>CHECKOUT</div>
              <div className={styles.pickerValueText}>10/23/2026</div>
            </div>
          </div>
          <div className={styles.guestsPicker}>
            <div>
              <div className={styles.pickerLabel}>GUESTS</div>
              <div className={styles.pickerValueText}>2 guests</div>
            </div>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '2', overflow: 'visible' }}><g fill="none"><path d="M28 12L16 24 4 12"></path></g></svg>
          </div>
        </div>

        <div className={styles.freeCancellationCallout}>
          Free cancellation before <strong>17 October</strong>
        </div>

        <button className={styles.reserveButton} onClick={handleReserveClick}>Reserve</button>
        
        <div className={styles.chargeDisclaimer}>You won't be charged yet</div>
      </div>

      <div className={styles.reportListing}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor', marginRight: '8px' }}><path d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h2V16h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"></path></svg>
        <span>Report this listing</span>
      </div>
    </div>
  );
};

export default ReservationSidebar;
