'use strict';

const tracking = require('./lib/entry-tracking');
const getNewLinks = require('./lib/wykop-link-provider');
const formatEmail = require('./lib/email-formatter');
const sendEmail = require('./lib/email-sender');

module.exports.run = (event, context, callback) => {
  try {
    let tracking = tracking.get();
    let newLinks = getNewLinks(tracking);
    let email = formatEmail(newLinks);
    sendEmail(email);
    tracking.save(toTracking(newLinks));
    finish(callback);
  } catch (e) {
    error(callback)(e);
  }
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
