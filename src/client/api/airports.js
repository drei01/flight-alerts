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

export {queryAirports, queryCities};
