const R = require('ramda');
R.call(R.add, 1, 2); //=> 3

var indentN = R.pipe(R.repeat(' '),
                     R.join(''),
                     R.replace(/^(?!$)/gm));

var format = R.converge(R.call, [
                            R.pipe(R.prop('indent'), indentN),
                            R.prop('value')
                        ]);

const formatFn = format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'

console.log(formatFn);
