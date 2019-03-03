const R = require('ramda');

const rpath1 = R.path(['a', 'b'], {a: {b: 2}}); //=> 2
const rpath2 = R.path(['a', 'b'], {c: {b: 2}}); //=> undefined

console.log(rpath1, rpath2);
