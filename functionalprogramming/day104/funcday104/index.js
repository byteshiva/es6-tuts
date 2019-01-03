const R = require('ramda');

const spacer = R.join(' ');
const rjoin1 = spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
const rjoin2 = R.join('|', [1, 2, 3]);    //=> '1|2|3'

console.log(rjoin1, rjoin2);
