'use strict';

const Wykop = require('wykop-es6');
const wykop = new Wykop(process.env.appkey, process.env.secretkey);
const client = new DarkSky({
  APIKey: process.env.DARK_SKY_API_KEY,
});

module.exports = (latitude, longitude) => {
  const options = {
    exclude: 'minutely,hourly,daily,flags,alerts',
  };

  return new Promise((resolve, reject) => {
    client.get(latitude, longitude, options, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
