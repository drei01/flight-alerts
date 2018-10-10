import React from 'react';
import styles from '../../../style.less';

export default ({date, place}) => {
  return (
    <div className={styles['theme-search-results-item-flight-section-meta']}>
      <p className={styles['theme-search-results-item-flight-section-meta-time']}>
        {date.format('hh:mm')} <span>{date.format('A')}</span>
      </p>
      <p className={styles['theme-search-results-item-flight-section-meta-city']}>{place}</p>
      <p className={styles['theme-search-results-item-flight-section-meta-date']}>{date.format('MMM DD, YYYY')}</p>
    </div>
  );
};
