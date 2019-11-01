import React from 'react';
import styles from '../../style.less';
import c from 'classnames';
import Destination from '../Filters/Destination';

export default function({geoCity, onChangeAirport}) {
  return (
    <div className={c(styles['theme-hero-area'], styles.front)}>
      <div className={styles['theme-hero-area-bg-wrap']}>
        <div className={c(styles['theme-hero-area-bg'], styles['theme-hero-area-bg-blur'])} />
        <div className={c(styles['theme-hero-area-mask'], styles['theme-hero-area-mask-half'])} />
      </div>
      <div className={styles['theme-hero-area-body']}>
        <div className="container">
          <div className={c(styles['_pb-50'], styles['_pt-100'], styles['_pv-mob-50'])}>
            <div className={c(styles['theme-search-area'], styles['_mob-h'], styles['theme-search-area-white'])}>
              <div className={c(styles['theme-search-area-header'], styles['_mb-20'])}>
                <h1 className={c(styles['theme-search-area-title'], styles['theme-search-area-title-sm'])}>
                  Find cheap flights from <Destination city={geoCity} onChange={onChangeAirport} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
