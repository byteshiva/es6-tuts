const R = require('ramda');

const list = ['foo', 'bar', 'baz', 'quux'];
const rnth1 = R.nth(1, list); //=> 'bar'
const rnth2 = R.nth(-1, list); //=> 'quux'
const rnth3 = R.nth(-99, list); //=> undefined
const rnth4 = R.nth(2, 'abc'); //=> 'c'
const rnth5 = R.nth(3, 'abc'); //=> ''

console.log(rnth1, rnth2, rnth3, rnth4, rnth5);
