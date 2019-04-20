const R = require('ramda');

const rtail1 = R.tail([1, 2, 3]);  //=> [2, 3]
const rtail2 = R.tail([1, 2]);     //=> [2]
const rtail3 = R.tail([1]);        //=> []
const rtail4 = R.tail([]);         //=> []
const rtail5 = R.tail('abc');  //=> 'bc'
const rtail6 = R.tail('ab');   //=> 'b'
const rtail7 = R.tail('a');    //=> ''
const rtail8 = R.tail('');     //=> ''

console.log(rtail1, rtail2, rtail3, rtail4, rtail5, rtail6, rtail7, rtail8);
