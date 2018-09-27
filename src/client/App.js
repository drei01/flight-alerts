import React from 'react';
import {hot} from 'react-hot-loader';
import api from './api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {flights: null};
  }

  componentDidMount() {
    //&partner=flightlist&limit=20&maxstopovers=10&price_to=3000&maxFlyDuration=60&stopoverfrom=00:00&stopoverto=30:00&selectedAirlines=&dtimefrom=00:00&dtimeto=23:59
    const sort = 'price';
    const currency = 'EUR';
    const adults = 1;
    const from = 'DE';
    const to = '';
    const startDate = '14/09/2018';
    const endDate = '13/10/2018';
    const limit = 20;
    const maxStopOvers = 0;
    const priceMax = 3000;
    const maxFlightDuration = 60;
    const airlines = [];
    const timeFrom = '00:00';
    const timeTo = '23:59';

    api.skypicker
      .getFlights({
        sort: sort,
        asc: 1,
        locale: 'us',
        curr: currency,
        daysInDestinationFrom: '',
        daysInDestinationTo: '',
        adults: adults,
        children: 0,
        infants: 0,
        flyFrom: from,
        to: to,
        typeFlight: 'oneway',
        returnFrom: '',
        returnTo: '',
        dateFrom: startDate,
        dateTo: endDate,
        partner: 'picky',
        limit: limit,
        maxstopovers: maxStopOvers,
        price_to: priceMax,
        maxFlyDuration: maxFlightDuration,
        stopoverfrom: '00:00',
        stopoverto: '30:00',
        selectedAirlines: airlines.join(','),
        dtimefrom: timeFrom,
        dtimeto: timeTo
      })
      .then((flights) => {
        this.setState({flights});
      });
  }

  render() {
    const {flights} = this.state;
    return (
      <div className="App">
        {flights && (
          <ul>
            {flights.map((flight) => (
              <li>{flight.id}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default hot(module)(App);
