global.process.env = {
  appkey: 'd99b6pFK8f',
  secretkey: 'z7nF82zdPy'
};
const wykopLinkProvider = require('./wykop-link-provider');

test('test', () => {
  let tagDefs = [
    {
      tag: "heheszki",
      lastDate: '2019-10-28 21:32:24',
      minDigs: 15,
      minVotes: 0
    },
    {
      tag: "memy",
      lastDate: '2019-10-28 21:32:24',
      minDigs: 15,
      minVotes: 0
    },
  ];
    return wykopLinkProvider(tagDefs)
      .then(r => {
        console.log(r);
        return r;
      });
}, 30000);
