import React, {useState} from 'react';
import styles from '../../style.less';
import DateFilter from './DateFilter';
import Filter from './Filter';
import PriceFilter from './PriceFilter';
import ReturnFlightFilter from './ReturnFlightFilter';
import moment from 'moment';

export default ({config, onChange}) => {
  const {currencySymbol, priceMax, startDate, returnFlight, returnDate} = config;
  return (
    <div className={styles['theme-search-results-sidebar']}>
      <div className={styles['theme-search-results-sidebar-sections']}>
        <Filter title="Max Price">
          <div className={styles['theme-search-results-sidebar-section-price']}>
            <PriceFilter
              currencySymbol={currencySymbol}
              price={priceMax}
              onChange={(newPrice) =>
                onChange({
                  ...config,
                  priceMax: newPrice
                })
              }
            />
          </div>
        </Filter>
        <Filter title="Depart">
          <div className={styles['theme-search-results-sidebar-section-price']}>
            <DateFilter
              name="startDate"
              placeholder="Depart Date"
              date={startDate ? moment(startDate, 'DD/MM/YYYY') : null}
              onChange={(date, opts) =>
                onChange({
                  ...config,
                  startDate: date ? date.format('DD/MM/YYYY') : null,
                  endDate: date
                    ? opts && opts.isWholeMonth
                      ? date
                          .clone()
                          .add('months', 1)
                          .date(0) // first day of next month
                          .format('DD/MM/YYYY')
                      : date.format('DD/MM/YYYY')
                    : null
                })
              }
            />
          </div>
          <div>
            Return Flight? <br />
            <ReturnFlightFilter
              checked={returnFlight}
              onChange={(returnFlight) =>
                onChange({
                  ...config,
                  returnFlight
                })
              }
            />
          </div>
        </Filter>
        <Filter title="Return">
          <div className={styles['theme-search-results-sidebar-section-price']}>
            {returnFlight && (
              <DateFilter
                name="returnDate"
                placeholder="Return Date"
                date={
                  returnDate ? moment(returnDate, 'DD/MM/YYYY') : startDate ? moment(startDate, 'DD/MM/YYYY') : null
                }
                onChange={(date) =>
                  onChange({
                    ...config,
                    returnDate: date ? date.format('DD/MM/YYYY') : null
                  })
                }
              />
            )}
          </div>
        </Filter>
      </div>
    </div>
  );
};
