import React from 'react';
import styles from '../../../style.less';

export default ({routes, duration}) => {
  return (
    <div className={styles['theme-search-results-item-flight-section-path']}>
      <div className={styles['theme-search-results-item-flight-section-path-fly-time']}>
        <p>{duration}</p>
      </div>
      <div className={styles['theme-search-results-item-flight-section-path-line']} />
      {routes &&
        routes.map((route, idx) => (
          <div className={styles['theme-search-results-item-flight-section-path-line-start']} key={idx}>
            <i className={styles['fa fa-plane theme-search-results-item-flight-section-path-icon']} />
            <div className={styles['theme-search-results-item-flight-section-path-line-dot']} />
            <div className={styles['theme-search-results-item-flight-section-path-line-title']}>{route[0]}</div>
          </div>
        ))}
    </div>
  );
};
