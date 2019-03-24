const R = require('ramda');

const groupNames = (acc, {name}) => acc.concat(name)
const toGrade = ({score}) =>
  score < 65 ? 'F' :
  score < 70 ? 'D' :
  score < 80 ? 'C' :
  score < 90 ? 'B' : 'A'

var students = [
  {name: 'Abby', score: 83},
  {name: 'Bart', score: 62},
  {name: 'Curt', score: 88},
  {name: 'Dora', score: 92},
]

const rreduceby1 = reduceBy(groupNames, [], toGrade, students)
//=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}

console.log(rreduceby1);
