var fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');

module.exports = function getAirports() {
  return new Promise((resolve, reject) => {
    var csvData = [];
    fs.createReadStream(path.join(__dirname, 'airports-mini.dat'))
      .pipe(
        csvParser([
          'airportId',
          'name',
          'city',
          'country',
          'iata',
          'icao',
          'assigned',
          'latitude',
          'longitude',
          'altitude',
          'timezone',
          'dst',
          'tz',
          'type',
          'source'
        ])
      )
      .on('data', function(csvrow) {
        csvData.push(csvrow);
      })
      .on('error', reject)
      .on('end', function() {
        resolve(csvData);
      });
  });
};
