const R = require('ramda');

const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
const rforeachobjindex = R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}

console.log(rforeachobjindex);

