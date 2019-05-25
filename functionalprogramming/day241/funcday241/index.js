const R = require('ramda');

const rupdate1 = R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
const rupdate2 = R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']

console.log(rupdate1, rupdate2);
