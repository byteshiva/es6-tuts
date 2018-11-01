const R = require('ramda');

var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
console.log(R.countBy(Math.floor)(numbers));    //=> {'1': 3, '2': 2, '3': 1}

var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
console.log(R.countBy(R.toLower)(letters));   //=> {'a': 3, 'b': 2, 'c': 1}
