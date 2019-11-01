import {map} from 'lodash/fp';
import moment from 'moment';
import queryUtils from './query-utils';
import * as airlines from './airlines';

const BASE_URL = 'https://api.skypicker.com/flights';
const API_KEY = '1dHVtsPhJAfAUgPS1jb7TJ4I12NSexz7';

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
  const url = `${BASE_URL}?${queryUtils.toQueryString({...query, apikey: API_KEY})}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(({data}) => transform(data));
}

queryAirports.operation = 'READ';
function queryAirports(query) {
  const url = `https://api.skypicker.com/locations?active_only=true&term=${query}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => json.locations);
}

queryAirports.operation = 'READ';
function queryCities(query) {
  const locale = navigator.language;
  const url = `https://api.skypicker.com/locations?active_only=true&location_types=city&locale=${locale}&term=${query}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => json.locations);
}

export {getFlights, queryAirports, queryCities};
