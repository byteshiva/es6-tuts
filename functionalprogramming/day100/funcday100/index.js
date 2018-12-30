const R = require('ramda');

const sliceFrom = R.invoker(1, 'slice');
const rslicefrom1 = sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
const sliceFrom6 = R.invoker(2, 'slice')(6);
const rslicefrom2 = sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'

console.log(rslicefrom1, rslicefrom2);
