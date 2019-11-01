var airports = require('airport-codes-updated')
  .toJSON()
  .filter((a) => a.iata !== 'THF')
  .map((a) => {
    a.name = a.name.replace(/\-/g, ' - ');
    return a;
  });

const axios = require('axios');

module.exports = function setup(app) {
  app.get('/api/airports', (req, res) => {
    const results = airports.filter((a) => isMatch(a, req.query.q));
    res.json(results);
  });

  app.get('/api/geolocation', (req, res) => {
    const ipAddress = req.ip;
    if (!ipAddress) {
      res.json({});
    } else {
      axios.get(`http://ip-api.com/json/${ipAddress}`).then((r) => {
        res.json(r.data);
      });
    }
  });
};

function isMatch(airport, query) {
  const nameMatch = new RegExp('.*' + query + '.*', 'gi').test(airport.name);
  const codeMatch = airport.iata.toLowerCase() === query;
  return nameMatch || codeMatch;
}
