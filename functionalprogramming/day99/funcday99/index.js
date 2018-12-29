const R = require('ramda');

const raceResults = {
  first: 'alice',
  second: 'jake'
};
const rinvertobj1 = R.invertObj(raceResults);
//=> { 'alice': 'first', 'jake':'second' }

// Alternatively:
const raceResults = ['alice', 'jake'];
const rinvertobj2  = R.invertObj(raceResults);
//=> { 'alice': '0', 'jake':'1' }
//

console.log(rinvertobj1, rinvertobj2);
