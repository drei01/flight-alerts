import React from 'react';
import styles from '../../style.less';
import ReactBootstrapSlider from 'react-bootstrap-slider';

export default ({onChange}) => {
  return (
    <div className={styles['theme-search-results-sidebar']}>
      <div className={styles['theme-search-results-sidebar-section-price']}>
        <ReactBootstrapSlider value={10} min={1} max={1000} />
      </div>
      Filters appear here
    </div>
  );
};
