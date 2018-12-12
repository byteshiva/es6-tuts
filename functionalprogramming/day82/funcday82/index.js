const R = require('ramda');

const rhaspath1 = R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
const rhaspath2 = R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
const rhaspath3 = R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
const rhaspath4 = R.hasPath(['a', 'b'], {});                  // => false

console.log(rhaspath1, rhaspath2, rhaspath3, rhaspath4);
