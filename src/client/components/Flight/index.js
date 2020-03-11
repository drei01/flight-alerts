import React from 'react';
import c from 'classnames';
import styles from '../../style.less';
import {Row, Col} from 'react-bootstrap';
import DateTime from './DateTime';
import BookButton from './BookButton';
import Route from './Route';

export default ({flight}) => {
  const {airline} = flight;
  return (
    <div
      className={c(
        styles['theme-search-results-item'],
        styles['theme-search-results-item-rounded'],
        styles['theme-search-results-item-']
      )}
    >
      <div className={styles['theme-search-results-item-preview']}>
        <Row>
          <Col md={10}>
            <div className={styles['theme-search-results-item-flight-sections']}>
              <div className={styles['theme-search-results-item-flight-section']}>
                <Row className={styles['row row-no-gutter row-eq-height']}>
                  <Col md={2}>{flight.departure.format('MMM DD')}</Col>
                  <Col md={10}>
                    <div className={styles['theme-search-results-item-flight-section-item']}>
                      {flight.route.map((route) => (
                        <Row key={route.flight_no}>
                          <Col md={3}>
                            <DateTime date={route.departure} place={flight.cityFrom} />
                          </Col>
                          <Col md={6}>
                            <Route route={route} duration={flight.fly_duration} />
                          </Col>
                          <Col md={3}>
                            <DateTime date={route.arrival} place={flight.cityTo} />
                          </Col>
                        </Row>
                      ))}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={2}>
                    <h5 className={styles['theme-search-results-item-flight-section-airline-title']}>
                      <img
                        className={styles['theme-search-results-item-flight-section-airline-logo']}
                        src={airline.logo}
                        alt={airline.name}
                        title={airline.name}
                      />{' '}
                      Operated by {airline.name}
                    </h5>
                  </Col>
                  <Col md={2} />
                  <Col md={8} />
                </Row>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <BookButton price={flight.price} currencySymbol={flight.currencySymbol} link={flight.deep_link} />
          </Col>
        </Row>
      </div>
    </div>
  );
};
