const R = require('ramda');

const pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']

const rsplit1 = R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']

console.log(rsplit1);
