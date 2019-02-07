const R = require('ramda');

const rmergewith1 = R.mergeWith(R.concat,
            { a: true, values: [10, 20] },
            { b: true, values: [15, 35] });
//=> { a: true, b: true, values: [10, 20, 15, 35] }
//

console.log(rmergewith1);
