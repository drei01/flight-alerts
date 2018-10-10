import React from 'react';
import c from 'classnames';
import styles from '../../style.less';
import {Row, Col} from 'react-bootstrap';
import moment from 'moment';
import api from '../../api';
import DateTime from './DateTime';
import RouteList from './RouteList';
import BookButton from './BookButton';

class Flight extends React.Component {
  constructor(props) {
    super(props);
    const {flight} = props;

    this.state = {
      flight,
      departure: moment(new Date(flight.dTime * 1000)),
      arrival: moment(new Date(flight.aTime * 1000)),
      airline: null
    };

    api.airlines.getAirline(flight.airlines[0]).then((airline) => {
      this.setState({airline});
    });
  }

  render() {
    const {flight, departure, arrival, airline} = this.state;
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
                  <div className={styles['row row-no-gutter row-eq-height']}>
                    <Col md={2}>
                      <div className={styles['theme-search-results-item-flight-section-airline-logo-wrap']}>
                        {airline && (
                          <img
                            className={styles['theme-search-results-item-flight-section-airline-logo']}
                            src={airline.logo}
                            alt={airline.name}
                            title={airline.name}
                          />
                        )}
                      </div>
                    </Col>
                    <Col md={10}>
                      <div className={styles['theme-search-results-item-flight-section-item']}>
                        <Row>
                          <Col md={3}>
                            <DateTime date={departure} place={flight.cityFrom} />
                          </Col>
                          <Col md={6}>
                            <RouteList routes={flight.routes} duration={flight.fly_duration} />
                          </Col>
                          <Col md={3}>
                            <DateTime date={arrival} place={flight.cityTo} />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </div>
                  {airline && (
                    <h5 className={styles['theme-search-results-item-flight-section-airline-title']}>
                      Operated by {airline.name}
                    </h5>
                  )}
                </div>
              </div>
            </Col>
            <Col md={2}>
              <BookButton price={flight.price} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Flight;
