const R = require('ramda');

const  rAppend1 = R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
const  rAppend2 =R.append('tests', []); //=> ['tests']
const  rAppend3 =R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]

console.log(rAppend1, rAppend2, rAppend3);
