global.process.env = {
  appkey: 'd99b6pFK8f',
  secretkey: 'z7nF82zdPy'
};
const wykopLinkProvider = require('./wykop-link-provider');
const _ = require('lodash');

test('test', () => {
  let tagDefs = [
    {
      tag: "swiadkowiejehowy",
      lastDate: '2019-10-28 21:32:24',
      minDigs: 15,
      minVotes: 0
    },
    {
      tag: "jehowi",
      lastDate: '2019-10-28 21:32:24',
      minDigs: 15,
      minVotes: 0
    },
    // {
    //   tag: "jechowi",
    //   lastDate: '2019-10-28 21:32:24',
    //   minDigs: 15,
    //   minVotes: 0
    // },
    // {
    //   tag: "archiwumswiadkajehowy",
    //   lastDate: '2019-10-28 21:32:24',
    //   minDigs: 15,
    //   minVotes: 0
    // },
    // {
    //   tag: "bekazjehowych",
    //   lastDate: '2019-10-28 21:32:24',
    //   minDigs: 15,
    //   minVotes: 0
    // }
  ];
    return wykopLinkProvider(tagDefs)
      .then(_.flatten)
      .then(r => {
        console.log(r);
        // console.log(JSON.stringify(r));
        return r;
      });
  // expect(sum(1, 2)).toBe(3);
});
