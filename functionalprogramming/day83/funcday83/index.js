const R = require('ramda');

const rhead1 = R.head(['fi', 'fo', 'fum']); //=> 'fi'
const rhead2 = R.head([]); //=> undefined

const rhead3 = R.head('abc'); //=> 'a'
const rhead4 = R.head(''); //=> ''

console.log(rhead1, rhead2, rhead3, rhead4);


