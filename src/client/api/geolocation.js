getLocation.operation = 'READ';
getLocation.idFrom = (geo) => geo.query;
function getLocation() {
  const url = `/api/geolocation`;
  return fetch(url).then((response) => {
    return response.json();
  });
}

export {getLocation};
