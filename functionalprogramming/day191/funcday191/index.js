const R = require('ramda');
const rreplace1 = R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
const rreplace2 = R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'

// Use the "g" (global) flag to replace all occurrences:
const rreplace3 = R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'

console.log(rreplace1, rreplace2, rreplace3);
