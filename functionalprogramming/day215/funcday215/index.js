const R = require('ramda');

const rtest1 = R.test(/^x/, 'xyz'); //=> true
const rtest2 = R.test(/^y/, 'xyz'); //=> false

console.log(rtest1, rtest2);
