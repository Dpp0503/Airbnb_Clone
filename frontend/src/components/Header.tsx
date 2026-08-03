import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <div className={styles.logoContainer}>
          <img src="/UtilsImage/Airbnb_Logo_2.png" alt="Airbnb" className={styles.brandLogo} />
        </div>

        {/* Center: Search Bar */}
        <div className={styles.searchBar}>
          <div className={styles.houseIconContainer}>
            <img src="/UtilsImage/Home_Icon.png" alt="Home" className={styles.searchBarHouseIcon} />
          </div>
          <button className={styles.searchButton}>Anywhere</button>
          <span className={styles.divider}></span>
          <button className={styles.searchButton}>Anytime</button>
          <span className={styles.divider}></span>
          <button className={`${styles.searchButton} ${styles.addGuests}`}>Add guests</button>
          <div className={styles.searchIconContainer}>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2001/svg"
              style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '5.33333', overflow: 'visible' }}
            >
              <g fill="none">
                <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
              </g>
            </svg>
          </div>
        </div>

        {/* Right: User Menu */}
        <div className={styles.userMenuContainer}>
          <button className={styles.hostButton}>Become a host</button>
          <button className={styles.globeButton}>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentColor' }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.784-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.29-1.038-3.113-1.134-5.075zm5.905-7.007c-.722.016-1.743 2.47-1.937 5.507h3.903c-.156-2.902-1.178-5.348-1.888-5.499l-.067-.008zm-4.238 0c-.571 1.258-1.026 3.033-1.129 4.996h-2.738a6.262 6.262 0 0 1 3.867-4.996zm8.47 4.996h-2.748c-.105-1.956-.56-3.729-1.13-4.986a6.262 6.262 0 0 1 3.878 4.986z"></path></svg>
          </button>
          <div className={styles.profileMenu}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '14px', width: '14px', stroke: 'currentColor', strokeWidth: '3', overflow: 'visible' }}><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
