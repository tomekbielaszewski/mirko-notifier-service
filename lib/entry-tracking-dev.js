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
        tag: "heheszki",
        lastDate: "2019-10-01 00:00:00",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "smieszneobrazki",
        lastDate: "2019-10-01 00:00:00",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "smiesznypiesek",
        lastDate: "2019-10-01 00:00:00",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "smiesznekotki",
        lastDate: "2019-10-01 00:00:00",
        minDigs: 15,
        minVotes: 0
      },
      {
        tag: "kotki",
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
