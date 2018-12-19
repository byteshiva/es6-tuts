const R = require('ramda'):

const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
const rindexby1 = R.indexBy(R.prop('id'), list);

console.log(rindexby1);
//=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
