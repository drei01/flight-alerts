const toQueryString = (query) =>
  Object.keys(query)
    .map((key) => key + '=' + query[key])
    .join('&');

export default {toQueryString};
