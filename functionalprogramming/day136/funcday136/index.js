const R = require('ramda');

let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
const rmergedeepwithkey1 = R.mergeDeepWithKey(concatValues,
                   { a: true, c: { thing: 'foo', values: [10, 20] }},
                   { b: true, c: { thing: 'bar', values: [15, 35] }});
//=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
//
//
//
console.log(rmergedeepwithkey1);
