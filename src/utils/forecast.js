const request = require('request');

const forecast = (latitude, longtitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=110596643dd87ada7bf3ea8a2313dd19&query=' +
    latitude +
    ',' +
    longtitude +
    '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It's currently ${body.current.temperature} degrees out. Feels like ${body.current.feelslike}. The humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
