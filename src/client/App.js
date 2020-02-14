import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, {useEffect, useState, useRef} from 'react';
import {hot} from 'react-hot-loader';
import api from './api';
import FlightList from './components/FlightList';
import Filters from './components/Filters';
import {Grid, Row, Col, Alert} from 'react-bootstrap';
import moment from 'moment';
import Header from './components/Header';
import Nav from './components/Nav';
import styles from './style.less';
import c from 'classnames';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import {assign} from 'lodash/fp';
import URLSearchParams from '@ungap/url-search-params/cjs';

const DEFAULT_CONFIG = {
  sort: 'price',
  currency: 'GBP',
  currencySymbol: '£',
  adults: 1,
  from: null,
  fromType: 'airport',
  to: '',
  typType: 'airport',
  startDate: moment().format('DD/MM/YYYY'),
  endDate: moment()
    .add(30, 'days')
    .format('DD/MM/YYYY'),
  returnDate: null,
  limit: 20,
  maxStopOvers: 0,
  priceMax: 3000,
  maxFlightDuration: 60,
  airlines: [],
  timeFrom: '00:00',
  timeTo: '23:59',
  returnFlight: false
};

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetParent.offsetTop);

const applyParams = assign(DEFAULT_CONFIG);
const loadConfig = () => {
  const queryParams = Object.fromEntries(new URLSearchParams(window.location.search));
  return applyParams(queryParams);
};

function App() {
  const [flights, setFlights] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [config, setConfig] = useState(loadConfig());
  const handleConfigChange = (newConfig) => {
    const {from, to, startDate, returnDate, priceMax} = newConfig;
    window.history.pushState(
      '',
      '',
      '/?' + new URLSearchParams({from, to, startDate, returnDate, priceMax}).toString()
    );
    setConfig(newConfig);
  };

  const flightsRef = useRef(null);

  const loadFlights = () => {
    if (!config.from) {
      return;
    }
    setLoading(true);
    api.skypicker
      .getFlights({
        sort: config.sort,
        asc: 1,
        locale: 'us',
        curr: config.currency,
        daysInDestinationFrom: '',
        daysInDestinationTo: '',
        adults: config.adults,
        children: 0,
        infants: 0,
        flyFrom: config.from,
        flyFrom_type: config.fromType,
        to: config.to,
        typeFlight: config.returnFlight ? 'round' : 'oneway',
        returnFrom: config.returnFlight ? config.returnDate : '',
        returnTo: config.returnFlight ? config.returnDate : '',
        dateFrom: config.startDate,
        dateTo: config.endDate,
        partner: 'picky',
        limit: config.limit,
        maxstopovers: config.maxStopOvers,
        price_to: config.priceMax,
        maxFlyDuration: config.maxFlightDuration,
        stopoverfrom: '00:00',
        stopoverto: '30:00',
        selectedAirlines: config.airlines.join(','),
        dtimefrom: config.timeFrom,
        dtimeto: config.timeTo
      })
      .then(setFlights)
      .catch(setError)
      .finally(() => {
        setLoading(false);
        if (flights && flights.length > 0) {
          setTimeout(() => scrollToRef(flightsRef), 100);
        }
      });
  };

  useEffect(
    () => {
      loadFlights();
    },
    [config]
  );

  return (
    <ErrorBoundary>
      <Nav />
      <Header
        geoCity={null}
        sourceAirport={config.from}
        onChangeSource={({code, type}) => {
          handleConfigChange({...config, from: code, fromType: type});
        }}
        onChangeDestination={({code, type}) => {
          handleConfigChange({...config, to: code, toType: type});
        }}
      />
      <div className={c(styles['theme-page-section'], styles['theme-page-section-gray'])}>
        <Grid>
          <Row className="show-grid">
            {error && <Alert bsStyle={'danger'}>Something went wrong loading the flight data. Please try again.</Alert>}
            {(flights || loading) && (
              <Col md={3}>
                <Filters config={config} onChange={handleConfigChange} />
              </Col>
            )}
            <Col md={flights || loading ? 9 : 12}>
              <div ref={flightsRef}>
                <FlightList flights={flights} loading={loading} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}

export default hot(module)(App);
