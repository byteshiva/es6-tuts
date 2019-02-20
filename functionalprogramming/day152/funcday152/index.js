const R = require('ramda');

const matchPhrases = R.compose(
  R.objOf('must'),
  R.map(R.objOf('match_phrase'))
);
const robjof1 = matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}

console.log(robjof1);
