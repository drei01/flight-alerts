import React from 'react';
import {List as LoadingIndicator} from 'react-content-loader';
import Flight from '../Flight';
import styles from '../../style.less';

const noLoadingIndicators = [...Array(10).keys()];

export default ({flights, loading}) => {
  if (loading) {
    return noLoadingIndicators.map((k) => <LoadingIndicator key={k} />);
  }

  return (
    <div className={styles['theme-search-results']}>
      {flights.map((flight) => (
        <Flight flight={flight} key={flight.id} />
      ))}
    </div>
  );
};
