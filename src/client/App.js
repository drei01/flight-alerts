import React from 'react';
import {hot} from 'react-hot-loader';
import api from './api';
import {List, Spin} from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {flights: null, loading: true};
  }

  componentDidMount() {
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
        this.setState({flights, loading: false});
      });
  }

  render() {
    const {flights, loading} = this.state;
    return (
      <div className="App">
        <Spin spinning={loading}>
          {flights && (
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={flights}
              renderItem={(flight) => <List.Item>{flight.id}</List.Item>}
            />
          )}
        </Spin>
      </div>
    );
  }
}

export default hot(module)(App);
