const formatEmail = require('./email-formatter');

test('test', () => {
  let links = [
    {
      id: 45202121,
      author: 'DerMirker',
      date: '2019-11-08 12:12:47',
      url: 'http://www.wykop.pl/wpis/45202121/',
      vote_count: 211,
      tag: 'heheszki'
    },
    {
      id: 5203449,
      author: 'Szewczenko',
      date: '2019-11-05 22:37:13',
      url: 'http://www.wykop.pl/link/5203449/',
      vote_count: 388,
      tag: 'humorobrazkowy'
    },
    {
      id: 45139739,
      author: 'Zihzy',
      date: '2019-11-05 15:59:45',
      url: 'http://www.wykop.pl/wpis/45139739/',
      vote_count: 12,
      tag: 'smiesznypiesek'
    },
    {
      id: 45043465,
      author: 'Mroczny_Piskacz',
      date: '2019-11-01 16:02:19',
      url: 'http://www.wykop.pl/wpis/45043465/',
      vote_count: 7,
      tag: 'kotki'
    },
    {
      id: 45024307,
      author: 'sebastian-ka-735',
      date: '2019-10-31 18:11:32',
      url: 'http://www.wykop.pl/wpis/45024307/',
      vote_count: 1,
      tag: 'pieski'
    }
  ];
  return formatEmail(links)
    .then(r => {
      console.log(r);
      return r;
    });
});
