const R = require('ramda');

const rmergedeepwith1 = R.mergeDeepWith(R.concat,
                { a: true, c: { values: [10, 20] }},
                { b: true, c: { values: [15, 35] }});
//=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
//

console.log(rmergedeepwith1);
