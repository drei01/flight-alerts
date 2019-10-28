queryAirports.operation = 'READ';
function queryAirports(query) {
  const url = `/api/airports?q=${query}`;
  return fetch(url).then((response) => {
    return response.json();
  });
}

export {queryAirports};
