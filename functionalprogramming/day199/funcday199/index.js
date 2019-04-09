const R = require('ramda');

const alice = {
  name: 'alice',
  age: 40
};
const bob = {
  name: 'bob',
  age: 30
};
const clara = {
  name: 'clara',
  age: 40
};
const people = [clara, bob, alice];
const ageNameSort = R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name'))
]);
const rsortwith1 = ageNameSort(people); //=> [alice, clara, bob]`

console.log(rsortwith1);
