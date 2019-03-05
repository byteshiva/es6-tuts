const R = require('ramda');

const rpathor1 = R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
const rpathor2 = R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"

console.log(rpathor1, rpathor2);
