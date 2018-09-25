const R = require('ramda');

applyFnInIndexMentioned = R.adjust(R.add(10), 1 , [1, 2, 3]);
applyFnInIndexMentionedClosure = R.adjust(R.add(10))(1)([1, 2, 3]);

console.log(applyFnInIndexMentioned);
console.log(applyFnInIndexMentionedClosure);

