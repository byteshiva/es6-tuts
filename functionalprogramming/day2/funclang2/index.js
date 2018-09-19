const R = require('ramda');

var addNums = R.call(R.add, 1, 2); //=> 3

console.log(addNums);

var indentN = R.pipe(R.repeat(' '),
                     R.join(''),
                     R.replace(/^(?!$)/gm));

var format = R.converge(R.call, [
                            R.pipe(R.prop('indent'), indentN),
                            R.prop('value')
                        ]);

var f1 = format({indent: 2, value: 'foo\nbar\nbaz\n'});

console.log(f1);
