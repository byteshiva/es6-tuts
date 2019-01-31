const R = require('ramda');

const rmergeall1 = R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
const rmergeall2 = R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}

console.log(rmergeall1, rmergeall2);
