const R = require('ramda');

var isQueen = R.propEq('rank', 'Q');
var isSpade = R.propEq('suit', '♠︎');
var isQueenOfSpades = R.allPass([isQueen, isSpade]);

const predicateCase1 = isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
const predicateCase2 = isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true

console.log(predicateCase1, predicateCase2);
