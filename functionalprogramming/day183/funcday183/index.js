const R = require('ramda');

const rreduce1 = R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10

console.log(rreduce1);
//          -               -10
//         / \              / \
//        -   4           -6   4
//       / \              / \
//      -   3   ==>     -3   3
//     / \              / \
//    -   2           -1   2
//   / \              / \
//  0   1            0   1
