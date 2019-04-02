const R = require('ramda');
const rreverse1 = R.reverse([1, 2, 3]);  //=> [3, 2, 1]
const rreverse2 = R.reverse([1, 2]);     //=> [2, 1]
const rreverse3 = R.reverse([1]);        //=> [1]
const rreverse4 = R.reverse([]);         //=> []
const rreverse5 = R.reverse('abc');      //=> 'cba'
const rreverse6 = R.reverse('ab');       //=> 'ba'
const rreverse7 = R.reverse('a');        //=> 'a'
const rreverse8 = R.reverse('');         //=> ''

console.log(rreverse8, rreverse1, rreverse2, rreverse3, rreverse4, rreverse5, rreverse7);
