const R = require('ramda');
const Maybe       = require('ramda-fantasy').Maybe;
const Just    = Maybe.Just;
const Nothing = Maybe.Nothing;

// Returns `Maybe.Nothing` if the given divisor is `0`
const safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)

const rtraverse1 = R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
const rtraverse2 = R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing

console.log(rtraverse1, rtraverse2);
