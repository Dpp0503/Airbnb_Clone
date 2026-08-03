import React from 'react';
import styles from '../../styles/MainContentLayout.module.css';
import type { ListingDTO } from '../../types';

interface HostSectionProps {
  listing: ListingDTO;
}

const HostSection: React.FC<HostSectionProps> = ({ listing }) => {
  return (
    <>
      <h2 className={styles.sectionTitle}>Meet your host</h2>
      <div className={styles.meetHostLayout}>
        <div className={styles.meetHostLeftCol}>
          <div className={styles.hostCardWide}>
            <div className={styles.hostCardLeft}>
              <div className={styles.hostAvatarLargeWrapper}>
                <img src={listing.hostDetails.avatarUrl || '/UtilsImage/Hosted_by_Mirashya_Homes_Image.png'} alt="Mirashya Homes" className={styles.hostAvatarLarge} />
                <div className={styles.hostAvatarBadge}>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '12px', width: '12px', fill: 'white' }}><path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zM14 22l-6-6 1.41-1.41L14 19.17l10.59-10.59L26 10z"></path></svg>
                </div>
              </div>
              <h3 className={styles.hostCardName}>Mirashya<br/>Homes</h3>
              <div className={styles.hostCardSubtitle}>Host</div>
            </div>
            <div className={styles.hostCardRight}>
              <div className={styles.hostStatRow}>
                <span className={styles.hostStatValue}>1,463</span>
                <span className={styles.hostStatLabel}>Reviews</span>
              </div>
              <hr className={styles.hostStatDivider}/>
              <div className={styles.hostStatRow}>
                <span className={styles.hostStatValue}>4.68★</span>
                <span className={styles.hostStatLabel}>Rating</span>
              </div>
              <hr className={styles.hostStatDivider}/>
              <div className={styles.hostStatRow}>
                <span className={styles.hostStatValue}>2</span>
                <span className={styles.hostStatLabel}>Years hosting</span>
              </div>
            </div>
          </div>
          
          <div className={styles.hostPersonalDetails}>
            <div className={styles.hostPersonalItem}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}><path d="M22 6a7 7 0 1 0-7 7v17h-2V13a7 7 0 1 0 7-7zm-7 5a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm5.7-8.1l-1.4 1.4-2.3-2.3 1.4-1.4 2.3 2.3z"></path></svg>
              Born in the 80s
            </div>
            <div className={styles.hostPersonalItem}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}><path d="M16 2.3l-14 7v1.4l2 1v11h2v-10l10 5 10-5v10h2v-11l2-1V9.3l-14-7zm0 2.3l10 5-10 5-10-5 10-5z"></path></svg>
              Where I went to school: NICMAR GOA
            </div>
          </div>
        </div>

        <div className={styles.meetHostRightCol}>
          <div className={styles.coHostsSectionTitle}>Co-Hosts</div>
          <div className={styles.coHostsGrid}>
            {[
              {name: 'Sharath', imgUrl: '/UtilsImage/Co-Host/Sharath.jpg'},
              {name: 'Aman Dev Pahwa', imgUrl: '/UtilsImage/Co-Host/Aman Dev Pahwa.jpg'},
              {name: 'Maria Karen Priyanka', imgUrl: '/UtilsImage/Co-Host/Maria Karen Priyanka.jpg'},
              {name: 'Simran', imgUrl: '/UtilsImage/Co-Host/Simran.jpeg'},
              {name: 'Pallavi', imgUrl: '/UtilsImage/Co-Host/Pallavi.jpeg'},
              {name: 'Sanyukta', imgUrl: '/UtilsImage/Co-Host/Sanyukta.jpeg'},
              {name: 'Shruti', initial: 'S', imgUrl: null, color: '#fdd'},
              {name: 'Amisha', initial: 'A', imgUrl: null, color: '#ddf'}
            ].map((co, index) => (
              <div key={index} className={styles.coHostItem}>
                {co.imgUrl ? (
                  <img src={co.imgUrl} alt={co.name} className={styles.coHostAvatar} />
                ) : (
                  <div className={styles.coHostAvatarInitial} style={{backgroundColor: co.color || '#e2e8f0', color: '#475569'}}>
                    {co.initial || co.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className={styles.coHostName}>{co.name}</span>
              </div>
            ))}
          </div>
          
          <div className={styles.hostDetailsBlock}>
            <div className={styles.coHostsSectionTitle} style={{marginTop: '32px'}}>Host details</div>
            <div className={styles.hostDetailsText}>Response rate: 100%</div>
            <div className={styles.hostDetailsText}>Responds within an hour</div>
            <button className={styles.messageHostBtn}>Message host</button>
          </div>

          <div className={styles.paymentProtection}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: '2' }}><path d="M16 4L4 9v7c0 8.5 12 12 12 12s12-3.5 12-12V9l-12-5z"></path></svg>
            To help protect your payment, always use Airbnb to send money and communicate with hosts.
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};

export default HostSection;
