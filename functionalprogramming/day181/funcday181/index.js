const R = require('ramda');

const rpropstatisfies1 = R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true

console.log(rpropstatisfies1);
