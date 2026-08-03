import React, { useState } from 'react';
import styles from '../../styles/MainContentLayout.module.css';
import type { ListingDTO } from '../../types';

interface CalendarSectionProps {
  listing: ListingDTO;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ listing }) => {
  const [checkInDate, setCheckInDate] = useState<number | null>(18);
  const [checkOutDate, setCheckOutDate] = useState<number | null>(23);

  const handleDateClick = (day: number) => {
    if (!checkInDate || (checkInDate && checkOutDate)) {
      setCheckInDate(day);
      setCheckOutDate(null);
    } else if (day > checkInDate) {
      setCheckOutDate(day);
    } else {
      setCheckInDate(day);
    }
  };

  const getDayClass = (day: number) => {
    let cls = styles.day;
    if (day === checkInDate || day === checkOutDate) {
      cls += ` ${styles.selectedDay}`;
    } else if (checkInDate && checkOutDate && day > checkInDate && day < checkOutDate) {
      cls += ` ${styles.inBetweenDay}`;
    }
    return cls;
  };

  return (
    <>
      <div className={styles.calendarHeaderRow}>
        <h2 className={styles.sectionTitle} style={{marginBottom: '4px'}}>5 nights in {listing.location.split(',')[0]}</h2>
        <p className={styles.calendarSubtitle}>18 Oct 2026 - 23 Oct 2026</p>
      </div>
      <div className={styles.calendarGrid}>
        <div className={styles.calendarMonth}>
          <div className={styles.monthHeader}>
            <button className={styles.calendarNavBtn}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '5.33333', overflow: 'visible' }}><path d="M20 28L8 16 20 4"></path></svg>
            </button>
            <h3 className={styles.monthTitle}>October 2026</h3>
          </div>
          <div className={styles.daysGrid}>
            <span className={styles.dayHeader}>S</span><span className={styles.dayHeader}>M</span><span className={styles.dayHeader}>T</span><span className={styles.dayHeader}>W</span><span className={styles.dayHeader}>T</span><span className={styles.dayHeader}>F</span><span className={styles.dayHeader}>S</span>
            <span className={styles.emptyDay}></span><span className={styles.emptyDay}></span><span className={styles.emptyDay}></span><span className={styles.emptyDay}></span>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(day => (
              <span 
                key={day} 
                className={getDayClass(day)}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.calendarMonth}>
          <div className={styles.monthHeader}>
            <h3 className={styles.monthTitle}>November 2026</h3>
            <button className={styles.calendarNavBtn}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: '5.33333', overflow: 'visible' }}><path d="M12 4l12 12-12 12"></path></svg>
            </button>
          </div>
          <div className={styles.daysGrid}>
            <span className={styles.dayHeader}>S</span><span className={styles.dayHeader}>M</span><span className={styles.dayHeader}>T</span><span className={styles.dayHeader}>W</span><span className={styles.dayHeader}>T</span><span className={styles.dayHeader}>F</span><span className={styles.dayHeader}>S</span>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map(day => {
              const absoluteDay = day + 31; 
              return (
                <span 
                  key={day} 
                  className={getDayClass(absoluteDay)}
                  onClick={() => handleDateClick(absoluteDay)}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.calendarFooter}>
        <button className={styles.keyboardBtn}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2001/svg" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentColor' }}><path d="M29 6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h26zm0 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM9 20v2h14v-2H9zm-2-4v2H5v-2h2zm4 0v2H9v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm-20-4v2H5v-2h2zm4 0v2H9v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2zm4 0v2h-2v-2h2z"></path></svg>
        </button>
        <button className={styles.clearDates} onClick={() => { setCheckInDate(null); setCheckOutDate(null); }}>Clear dates</button>
      </div>
    </>
  );
};

export default CalendarSection;
