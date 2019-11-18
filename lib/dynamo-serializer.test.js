'use strict';

const serialize = require('./dynamo-serializer').serialize;

test('test', () => {
  let tracking = {
    id: 123456,
    date: new Date('2019-11-05 22:37:13'),
    obj: {innerVal: 'test'}
  };
  let serialized = serialize(tracking);
  expect(serialized.id).toMatchObject({S: 123456});
  expect(serialized.date).toMatchObject({S: new Date('2019-11-05 22:37:13')});
  expect(serialized.obj).toMatchObject({S: {innerVal: 'test'}});
});
