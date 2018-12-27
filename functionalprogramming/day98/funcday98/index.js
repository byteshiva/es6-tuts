const R = require('ramda');

const raceResultsByFirstName = {
  first: 'alice',
  second: 'jake',
  third: 'alice',
};
const invert1 = R.invert(raceResultsByFirstName);
//=> { 'alice': ['first', 'third'], 'jake':['second'] }

console.log(invert1);
