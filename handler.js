'use strict';

const tracking = require('./lib/entry-tracking');
const getNewLinks = require('./lib/wykop-link-provider');
const formatEmail = require('./lib/email-formatter');
const sendEmail = require('./lib/email-sender');
const _ = require('lodash');

module.exports.run = (event, context, callback) => {
  tracking.get()
    .then(entryTracking => {
      return getNewLinks(entryTracking)
        .then(newLinks => {
          return formatEmail(newLinks)
            .then(sendEmail)
            .then(_ => {
              return tracking.save(toTracking(entryTracking, newLinks))
            })
            .then(_ => {
              finish(callback);
            })
            .catch(error(callback));
        });
    });
};

function toTracking(oldEntryTracking, newLinks) {
  let newestLinks = _.values(_.groupBy(newLinks, 'tag'))
    .map(link => _.maxBy(link, l => new Date(l.date).getTime()));
  return _.values(_.groupBy(oldEntryTracking, 'tag'))
    .map(t => t[0])
    .map(t => {
      return {tag: t, link: _.find(newestLinks, l => l.tag === t.tag)}
    })
    .filter(t => t.link)
    .map(t => _.set(t.tag, 'lastDate', t.link.date))
    .map(t => t.tag);
}

function finish(callback) {
  callback(null, {success: true});
}

function error(callback) {
  return (error) => {
    callback(error, {success: false});
  }
}
