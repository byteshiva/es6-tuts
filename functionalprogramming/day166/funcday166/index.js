const R = require('ramda');

const rpathsatisfies1 = R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true

console.log(rpathsatisfies1);
