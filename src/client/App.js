import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: null,
      error: null,
      loading: false,
      geoCity: null,
      config: {
        sort: 'price',
        currency: 'GBP',
        currencySymbol: '£',
        adults: 1,
        from: null,
        to: '',
        startDate: moment().format('DD/MM/YYYY'),
        endDate: moment()
          .add(30, 'days')
          .format('DD/MM/YYYY'),
        limit: 20,
        maxStopOvers: 0,
        priceMax: 3000,
        maxFlightDuration: 60,
        airlines: [],
        timeFrom: '00:00',
        timeTo: '23:59'
      }
    };
  }

  loadFlights() {
    const {config} = this.state;
    if (!config.from) {
      return;
    }
    this.setState({loading: true});
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
        to: config.to,
        typeFlight: 'oneway',
        returnFrom: '',
        returnTo: '',
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
      .then((flights) => this.setState({flights, loading: false}))
      .catch((error) => this.setState({error, loading: false}));
  }

  render() {
    const {flights, loading, geoCity, error, config} = this.state;
    return (
      <div>
        <Nav />
        <Header
          geoCity={geoCity}
          onChangeAirport={(airport) => {
            this.setState((prevState) => {
              return {config: {...prevState.config, from: airport}};
            }, this.loadFlights);
          }}
        />
        <div className={c(styles['theme-page-section'], styles['theme-page-section-gray'])}>
          <Grid>
            <Row className="show-grid">
              {error && (
                <Alert bsStyle={'danger'}>Something went wrong loading the flight data. Please try again.</Alert>
              )}
              {(flights || loading) && (
                <Col md={3}>
                  <Filters
                    config={config}
                    onChange={(newConfig) => {
                      this.setState({config: newConfig, loading: true}, this.loadFlights);
                    }}
                  />
                </Col>
              )}
              <Col md={flights || loading ? 9 : 12}>
                <FlightList flights={flights} loading={loading} />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
