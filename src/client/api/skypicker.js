import {map} from 'lodash/fp';
import moment from 'moment';
import queryUtils from './query-utils';
import * as airlines from './airlines';

const BASE_URL = 'https://api.skypicker.com/flights';

const transformFlight = (flight) => {
  return {
    departure: moment(new Date(flight.dTime * 1000)),
    arrival: moment(new Date(flight.aTime * 1000)),
    airline: airlines.getAirline(flight.airlines[0]),
    ...flight
  };
};
const transform = map(transformFlight);

getFlights.operation = 'READ';
function getFlights(query) {
  const url = `${BASE_URL}?${queryUtils.toQueryString(query)}`;
  return fetch(url).then((response) => {
    const {data} = response.json();
    return transform(data);
  });
}

export {getFlights};
