import utils from './utils';
const BASE_URL = 'https://api.skypicker.com/flights';

getFlights.operation = 'READ';
function getFlights(query) {
    const url = `${BASE_URL}?${utils.toQueryString(query)}`;
    return fetch(url)
        .then(response => response.json())
        .then(response => response.data);
}

export { getFlights };
