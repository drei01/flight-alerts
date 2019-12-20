import React from 'react';
import {FaPlane} from 'react-icons/fa';
import styles from '../../style.less';

export default function Route({route, duration}) {
  return (
    <div className={styles['theme-search-results-item-flight-section-path']}>
      <div className={styles['theme-search-results-item-flight-section-path-fly-time']}>
        <p>{duration}</p>
      </div>
      <div className={styles['theme-search-results-item-flight-section-path-line']} />
      <RouteStop airport={route.flyFrom} isStart={true} />
      <RouteStop airport={route.flyTo} />
    </div>
  );
}

function RouteStop({airport, isStart = false}) {
  return (
    <div
      className={
        styles[
          isStart
            ? 'theme-search-results-item-flight-section-path-line-start'
            : 'theme-search-results-item-flight-section-path-line-end'
        ]
      }
    >
      <FaPlane className={styles['theme-search-results-item-flight-section-path-icon']} />
      <div className={styles['theme-search-results-item-flight-section-path-line-dot']} />
      <div className={styles['theme-search-results-item-flight-section-path-line-title']}>{airport}</div>
    </div>
  );
}
