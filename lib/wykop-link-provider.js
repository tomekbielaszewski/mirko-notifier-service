'use strict';

const Wykop = require('wykop-es6');
const wykop = new Wykop(process.env.appkey, process.env.secretkey, {output: 'clear'});

module.exports = (entryTracking) => {
  return wykop.request('Tag', 'Index', {params: ['swiadkowiejehowy'],});
};
