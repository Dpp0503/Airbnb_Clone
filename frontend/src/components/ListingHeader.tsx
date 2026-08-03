import React, { useState } from 'react';
import { useToast } from '../hooks/useToast';
import styles from '../styles/ListingHeader.module.css';

interface ListingHeaderProps {
  title: string;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({ title }) => {
  const [isSaved, setIsSaved] = useState(false);
  const { toastMessage, setToastMessage } = useToast(3000);

  const handleSaveClick = () => {
    const newState = !isSaved;
    setIsSaved(newState);
    setToastMessage(newState ? 'Saved to Wishlist' : 'Removed from wishlist');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={() => setToastMessage('Share options')}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '2', overflow: 'visible' }}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path><path d="M16 3v23V3z"></path><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path></g></svg>
          <span className={styles.actionText}>Share</span>
        </button>
        <button className={styles.actionButton} onClick={handleSaveClick}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: isSaved ? '#ff385c' : 'none', height: '16px', width: '16px', stroke: isSaved ? '#ff385c' : 'currentColor', strokeWidth: '2', overflow: 'visible' }}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
          <span className={styles.actionText}>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      <div className={`${styles.toast} ${toastMessage ? styles.toastVisible : ''}`}>
        {toastMessage}
      </div>
    </div>
  );
};

export default ListingHeader;
