import React from 'react';
import styles from '../../style.less';
import DateFilter from './DateFilter';
import Filter from './Filter';
import PriceFilter from './PriceFilter';
import moment from 'moment';

export default ({config, onChange}) => {
  const {currencySymbol, priceMax, startDate, endDate} = config;
  return (
    <div className={styles['theme-search-results-sidebar']}>
      <div className={styles['theme-search-results-sidebar-sections']}>
        <Filter title="Max Price">
          <div className={styles['theme-search-results-sidebar-section-price']}>
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
        </Filter>
        <Filter title="Depart">
          <div className={styles['theme-search-results-sidebar-section-price']}>
            <DateFilter
              name="startDate"
              date={startDate ? moment(startDate, 'DD/MM/YYYY') : null}
              onChange={(date) => {
                onChange({
                  ...config,
                  startDate: date.format('DD/MM/YYYY')
                });
              }}
            />
          </div>
        </Filter>
      </div>
    </div>
  );
};
