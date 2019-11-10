'use strict';

const Wykop = require('wykop-es6');
const _ = require('lodash')
const wykop = new Wykop(process.env.appkey, process.env.secretkey, {output: 'clear'});

// [
//   {
//     tag: "swiadkowiejehowy"
//     lastDate: '2019-11-05 22:37:13',
//     minDigs: 15,
//     minVotes: 0
//   }
// ]


function callWykop(tag) {
  return wykop.request('Tag', 'Index', {params: [tag]})
}

function onlyNewItems(lastDate) {
  return item =>
    Date.parse(item.date) > Date.parse(lastDate);
}

function isDig(item) {
  return item.hasOwnProperty('description')
}

function onlyValuable(minDigs, minVotes) {
  return item =>
    isDig(item) && item.vote_count >= minDigs ||
    item.vote_count >= minVotes;
}

function getNewLinks(tagDefinition) {
  return _.chain([tagDefinition])
    .map(def => def.tag)
    .map(tag => callWykop(tag))
    .value()[0]
    .then(response => response.items)
    .then(items => _.chain(items)
        .filter(onlyNewItems(tagDefinition.lastDate))
        .filter(onlyValuable(tagDefinition.minDigs, tagDefinition.minVotes))
        .value())
}

module.exports = (tagDefinitions) => {
  return Promise.all(tagDefinitions.map(getNewLinks))
  // return wykop.request('Tag', 'Index', {params: ['swiadkowiejehowy']})
};
