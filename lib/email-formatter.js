'use strict';

const _ = require('lodash');

/*
[
  {
    id: 45202121,
    author: 'DerMirker',
    date: '2019-11-08 12:12:47',
    url: 'http://www.wykop.pl/wpis/45202121/zawsze-balem-sie-kazdego-kontaktu-z-krwia-zapewne-/',
    vote_count: 211,
    tag: 'swiadkowiejehowy'
  },
  ...
]
*/
const template = `
Czesc Anita!

Pojawiły się nowe wpisy i wykopaliska w tematyce JW! Może nowa aferka?

`;

function format(links) {
  return _(links)
    .map(link => `@<a href='https://wykop.pl/ludzie/${link.author}'>${link.author}</a> napisał: ${link.url} i dostał ${link.vote_count} plusów/kopnięć`)
    .join('\n');
}

module.exports = (links) => {
  console.log('Formatting email from links provided');
  return new Promise((resolve, reject) => {
    links.length ?
      resolve(template + format(links))
      : reject("links were empty");
    });
};
