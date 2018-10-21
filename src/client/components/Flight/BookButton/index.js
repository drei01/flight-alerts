import React from 'react';
import {Button} from 'react-bootstrap';
import styles from '../../../style.less';
import c from 'classnames';

export default ({price, onClick}) => {
  return (
    <div className={styles['theme-search-results-item-book']}>
      <div className={styles['theme-search-results-item-price']}>
        <p className={styles['theme-search-results-item-price-tag']}>£{price}</p>
        <p className={styles['theme-search-results-item-price-sign']}>economy</p>
      </div>
      <Button
        className={c(
          styles.btn,
          styles['theme-search-results-item-price-btn'],
          styles['btn-primary-invert'],
          'btn-block'
        )}
        href="#"
        onClick={onClick}
      >
        Book Now
      </Button>
    </div>
  );
};
