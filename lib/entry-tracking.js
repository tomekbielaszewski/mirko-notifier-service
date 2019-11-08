'use strict';

module.exports.get = () => {
  return {
      swiadkowiejehowy: "2019-11-08T14:01:13+01:00",
      jehowi: "",
      jechowi: "",
      archiwumswiadkajehowy: "",
      bekazjehowych: "",
    }
    // client.get(latitude, longitude, options, (error, data) => {
    //   if (error) {
    //     reject(error);
    //   } else {
    //     resolve(data);
    //   }
    // });
};

module.exports.save = (entryTracking) => {
  return new Promise((resolve, reject) => {
    resolve(entryTracking);
  });
};
