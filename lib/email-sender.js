'use strict';

module.exports = (email) => {
  console.log(`Sending email with body: ${email.body}`);

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
