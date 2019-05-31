const R = require('ramda');

// pred :: Object -> Boolean
const pred = R.where({
  a: R.equals('foo'),
  b: R.complement(R.equals('bar')),
  x: R.gt(R.__, 10),
  y: R.lt(R.__, 20)
});

const rwhere1 = pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
const rwhere2 = pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
const rwhere3 = pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
const rwhere4 = pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
const rwhere5 = pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false

console.log(rwhere1, rwhere2, rwhere3, rwhere4, rwhere5);
