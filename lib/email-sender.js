'use strict';

module.exports = (emailBody) => {
  console.log(`Sending email with body: ${emailBody}`);

  return new Promise((resolve, reject) => {
    resolve('done');
    // client.get(latitude, longitude, options, (error, data) => {
    //   if (error) {
    //     reject(error);
    //   } else {
    //     resolve(data);
    //   }
    // });
  });
};
