const xLens = R.lensProp('x');

const rset1 = R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
const rset2 = R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}

console.log(rset1, rset2);
