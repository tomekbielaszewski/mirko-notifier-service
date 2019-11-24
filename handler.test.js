'use strict';
global.process.env = {
  appkey: 'd99b6pFK8f',
  secretkey: 'z7nF82zdPy',
  dynamo_table: 'entry_tracking',
  region: 'eu-west-1'
};

const handler = require('./handler');

test('test', () => {
  return new Promise((res, rej) => {
    handler.run({}, {}, (err, status) => {
      console.error(err);
      console.log('success: ' + status.success);
      if (err) {
        rej(err);
      }
      res(status.success);
    })
  });
  // expect(sum(1, 2)).toBe(3);
}, 30000);
