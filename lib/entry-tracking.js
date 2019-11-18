'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});
const dynamo = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const serialize = require('dynamo-serializer').serialize;

module.exports.get = () => {
  const params = {
    TableName: process.env.dynamo_table
  };
  return new Promise((resolve, reject) => {
    dynamo.scan(params, (err, data) => {
      return err ? reject(err) : resolve(data.Items);
    });
  });
};

//todo: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property
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
