global.process.env = {
  appkey: 'd99b6pFK8f',
  secretkey: 'z7nF82zdPy'
};
const wykopLinkProvider = require('./wykop-link-provider');

test('test', () => {
  return wykopLinkProvider({})
    .then(console.log);
  // expect(sum(1, 2)).toBe(3);
});
