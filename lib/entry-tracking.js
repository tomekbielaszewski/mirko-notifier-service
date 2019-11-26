'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: process.env.region});
const dynamo = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const serialize = require('./dynamo-serializer').serialize;

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
  return new Promise((resolve, reject) => {
    dynamo.scan(params, (err, data) => {
      console.log(`Got response from dynamo. Err: ${err}, Data ${data}`);
      return err ? reject(err) : resolve(data.Items);
    });
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
        dynamo.putItem(params, (err, data) => {
          return err ? reject(err) : resolve(data);
        });
      });
    });
  return Promise.all(saved);
};
