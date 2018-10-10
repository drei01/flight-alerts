import React from 'react';
import {Button} from 'react-bootstrap';
import styles from '../../../style.less';

export default ({price, onClick}) => {
  return (
    <div className={styles['theme-search-results-item-book']}>
      <div className={styles['theme-search-results-item-price']}>
        <p className={styles['theme-search-results-item-price-tag']}>£{price}</p>
        <p className={styles['theme-search-results-item-price-sign']}>economy</p>
      </div>
      <Button className={styles['theme-search-results-item-price-btn']} href="#" onClick={onClick}>
        Book Now
      </Button>
    </div>
  );
};
