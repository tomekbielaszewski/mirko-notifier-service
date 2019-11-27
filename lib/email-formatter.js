'use strict';

const _ = require('lodash');

/*
[
  {
    id: 45202121,
    author: 'DerMirker',
    date: '2019-11-08 12:12:47',
    url: 'http://www.wykop.pl/wpis/45202121/',
    vote_count: 211,
    tag: 'heheszki'
  },
  ...
]
*/
const template = `
Czesc Anita!

Pojawiły się nowe wpisy i wykopaliska w tematyce JW! Może nowa aferka?

`;
const subject = "Nowe wpisy i wykopaliska pojawily sie na wykopie";

function format(links) {
  return _(links)
    .map(link => `@${link.author} \ndostał ${link.vote_count} plusów/kopnięć za:\n${link.url}\n\n`)
    .join('\n');
}

module.exports = (links) => {
  console.log('Formatting email from links provided');
  return new Promise((resolve, reject) => {
    links.length ?
      resolve({
        subject: subject,
        body: template + format(links)
      })
      : reject("links were empty");
    });
};
