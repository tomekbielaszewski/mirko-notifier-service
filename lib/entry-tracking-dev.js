'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: process.env.region});
const dynamo = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const serialize = require('./dynamo-serializer').serialize;
const deserialize = require('./dynamo-serializer').deserialize;

/*
[
  {
    "lastDate": "2019-10-01 00:00:00",
    "minDigs": 15,
    "minVotes": 0,
    "tag": "heheszki"
  }
]
*/

module.exports.get = () => {
  const params = {
    TableName: process.env.dynamo_table
  };
  console.log(`Getting entry tracking from ${params.TableName} table`);
  return new Promise((res, _) => {
    res([
      {
        tag: "swiadkowiejehowy",
        lastDate: "2019-11-13 21:32:14",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "jehowi",
        lastDate: "2019-11-13 19:50:17",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "archiwumswiadkajehowy",
        lastDate: "2019-10-01 00:00:00",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "bekazjehowych",
        lastDate: "2019-10-01 00:00:00",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "jechowi",
        lastDate: "2019-10-01 00:00:00",
        minDigs: 15,
        minVotes: 0
      },
    ]);
  });
};

module.exports.save = (entryTracking) => {
  const saved = entryTracking
    .map(serialize)
    .map(entry => {
      return {
        TableName: process.env.dynamo_table,
        Item: entry
      };
    })
    .map(params => {
      return new Promise((resolve, reject) => {
        resolve(params);
      });
    });
  return Promise.all(saved)
    .then(params => console.log(JSON.stringify(params)));
};
