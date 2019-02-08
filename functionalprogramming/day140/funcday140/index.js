const R = require('ramda');

let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
const rmergewithkey1 = R.mergeWithKey(concatValues,
               { a: true, thing: 'foo', values: [10, 20] },
               { b: true, thing: 'bar', values: [15, 35] });
//=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }


console.log(rmergewithkey1);
