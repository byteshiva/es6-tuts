const R = require('ramda');
const alice = {
  name: 'ALICE',
  age: 101
};
const favorite = R.prop('favoriteLibrary');
const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

const rpropor1 = favorite(alice);  //=> undefined
const rpropor2 = favoriteWithDefault(alice);  //=> 'Ramda'

console.log(rpropor1, rpropor2);


