'use strict';

const _ = require('lodash');

// model as described in:
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#putItem-property
module.exports.serialize = (obj) => {
  return _.forIn(obj, (v, k, o) => {
    o[k] = {S: v.toString()};
  });
};
