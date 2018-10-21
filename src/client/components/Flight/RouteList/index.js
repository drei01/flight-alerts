import React from 'react';
import {FaPlane} from 'react-icons/fa';
import styles from '../../../style.less';

export default ({routes, duration}) => {
  if (!routes) return null;

  const route = routes[0];
  return (
    <div className={styles['theme-search-results-item-flight-section-path']}>
      <div className={styles['theme-search-results-item-flight-section-path-fly-time']}>
        <p>{duration}</p>
      </div>
      <div className={styles['theme-search-results-item-flight-section-path-line']} />
      {route.map((airport, idx) => (
        <div className={styles[getClassName(route, idx)]} key={idx}>
          <FaPlane className={styles['theme-search-results-item-flight-section-path-icon']} />
          <div className={styles['theme-search-results-item-flight-section-path-line-dot']} />
          <div className={styles['theme-search-results-item-flight-section-path-line-title']}>{airport}</div>
        </div>
      ))}
    </div>
  );
};

const getClassName = (routes, idx) => {
  if (routes.length - 1 === idx) {
    return 'theme-search-results-item-flight-section-path-line-end';
  } else {
    switch (idx) {
      case 0:
        return 'theme-search-results-item-flight-section-path-line-start';
      case 1:
        return 'theme-search-results-item-flight-section-path-line-middle-1';
      case 2:
        return 'theme-search-results-item-flight-section-path-line-middle-2';
      default:
        return 'theme-search-results-item-flight-section-path-line-middle';
    }
  }
};
