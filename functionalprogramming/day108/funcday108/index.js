const R = require('ramda');

const rlast1 = R.last(['fi', 'fo', 'fum']); //=> 'fum'
const rlast2 = R.last([]); //=> undefined

const rlast3 = R.last('abc'); //=> 'c'
const rlast4 = R.last(''); //=> ''

console.log(rlast1, rlast2, rlast3, rlast4);
