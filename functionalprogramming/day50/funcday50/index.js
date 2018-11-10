const R = require('ramda');

const dissocPathExample = R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}

console.log(dissocPathExample);