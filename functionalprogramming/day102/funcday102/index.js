const R = require('ramda');

const risempty1 = R.isEmpty([1, 2, 3]);   //=> false
const risempty2 = R.isEmpty([]);          //=> true
const risempty3 = R.isEmpty('');          //=> true
const risempty4 = R.isEmpty(null);        //=> false
const risempty5 = R.isEmpty({});          //=> true
const risempty6 = R.isEmpty({length: 0}); //=> false

console.log(risempty1, risempty2, risempty3, risempty4, risempty5, risempty6);
