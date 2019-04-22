const R = require('ramda');

const rtakelast1 = R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
const rtakelast2 = R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
const rtakelast3 = R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
const rtakelast4 = R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
const rtakelast5 = R.takeLast(3, 'ramda');               //=> 'mda'

console.log(rtakelast1, rtakelast2, rtakelast3, rtakelast4, rtakelast5);
