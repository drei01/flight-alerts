import React from 'react';
import {List as LoadingIndicator} from 'react-content-loader';
import Flight from '../Flight';
import styles from '../../style.less';
import EmptyState from '../EmptyState';

const noLoadingIndicators = [...Array(10).keys()];

export default ({flights, loading}) => {
  if (loading) {
    return noLoadingIndicators.map((k) => <LoadingIndicator key={k} />);
  }

  if (!flights || flights.length == 0) {
    return (
      <EmptyState title="Search for flights">
        Enter a city or airport above to search for the cheapest flights.
      </EmptyState>
    );
  }

  return (
    <div className={styles['theme-search-results']}>
      {flights.map((flight) => (
        <Flight flight={flight} key={flight.id} />
      ))}
    </div>
  );
};
