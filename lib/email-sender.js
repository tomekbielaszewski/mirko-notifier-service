'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: process.env.region});
const sns = new AWS.SNS();

module.exports = (email) => {
  console.log(`Sending email with body: ${email.body}`);

  return new Promise((resolve, reject) => {
    resolve('done');

    let params = {
      Message: email.body,
      Subject: email.subject,
      TopicArn: process.env.sns_topic_arn
    };
    sns.publish(params, (err, data) => {
      if (err) {
        console.error(JSON.stringify(err));
        reject(err);
      } else {
        console.log(JSON.stringify(data));
        resolve(data);
      }
    });
  });
};
