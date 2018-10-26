const R = require('ramda');

const list1 = R.concat('ABC', 'DEF'); // 'ABCDEF'
const list2 = R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
const list3 = R.concat([], []); //=> []
console.log(list1, list2, list3);
