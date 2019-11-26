'use strict';

const serialize = require('./dynamo-serializer').serialize;

test('test', () => {
  let tracking = {
    id: 123456,
    date: '2019-11-05 22:37:13'
  };
  let serialized = serialize(tracking);
  expect(serialized.id).toMatchObject({S: '123456'});
  expect(serialized.date).toMatchObject({S: '2019-11-05 22:37:13'});
});
