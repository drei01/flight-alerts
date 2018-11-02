import React from 'react';
import styles from '../../style.less';
import PriceFilter from './PriceFilter';

export default ({config, onChange}) => {
  const {currencySymbol, priceMax} = config;
  return (
    <div className={styles['theme-search-results-sidebar']}>
      <div className={styles['theme-search-results-sidebar-sections']}>
        <PriceFilter
          currencySymbol={currencySymbol}
          price={priceMax}
          onChange={(newPrice) => {
            onChange({
              ...config,
              priceMax: newPrice
            });
          }}
        />
      </div>
    </div>
  );
};
