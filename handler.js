'use strict';

const tracking = require('./lib/entry-tracking');
const getNewLinks = require('./lib/wykop-link-provider');
const formatEmail = require('./lib/email-formatter');
const sendEmail = require('./lib/email-sender');

module.exports.run = (event, context, callback) => {
  tracking.get()
    .then(getNewLinks)
    .then(links => {
      return formatEmail(links)
        .then(sendEmail)
        .then(_ => {
          return tracking.save(toTracking(links))
        })
        .then(_ => {
          finish(callback);
        })
        .catch(error(callback));
    });
};

function toTracking(newLinks) {
  return undefined;
}

function finish(callback) {
  callback(null, {success: true});
}

function error(callback) {
  return (error) => {
    callback(error, {success: false});
  }
}
