const R = require('ramda');

const rinit1 = R.init([1, 2, 3]);  //=> [1, 2]
const rinit2 = R.init([1, 2]);     //=> [1]
const rinit3 = R.init([1]);        //=> []
const rinit4 = R.init([]);         //=> []

const rinit5 = R.init('abc');  //=> 'ab'
const rinit6 = R.init('ab');   //=> 'a'
const rinit7 = R.init('a');    //=> ''
const rinit8 = R.init('');     //=> ''

console.log(rinit1, rinit2, rinit3, rinit4, rinit5, rinit6, rinit7, rinit8);

