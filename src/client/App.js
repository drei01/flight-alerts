import React from 'react';
import {hot} from 'react-hot-loader';
import api from './api';
import FlightList from './components/FlightList';
import Filters from './components/Filters';
import {Grid, Row, Col, Alert} from 'react-bootstrap';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: null,
      error: null,
      loading: true,
      config: {
        sort: 'price',
        currency: 'GBP',
        adults: 1,
        from: 'DE',
        to: '',
        startDate: moment().format('DD/MM/YYYY'),
        endDate: moment().format('DD/MM/YYYY'),
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

  componentDidMount() {
    const {config} = this.state;
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
    const {flights, loading, error} = this.state;
    return (
      <Grid>
        <Row className="show-grid">
          {error && <Alert bsStyle={'danger'}>Something went wrong loading the flight data. Please try again.</Alert>}
          <Col md={5}>
            <Filters onChange={() => {}} />
          </Col>
          <Col md={7}>{flights && <FlightList flights={flights} loading={loading} />}</Col>
        </Row>
      </Grid>
    );
  }
}

export default hot(module)(App);
