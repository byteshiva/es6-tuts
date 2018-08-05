// ES6 class based implementation
class grades {

  constructor(grades = []) {
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades = [...this.grades, grade];
  }

  displayAvg(){
    let sum = 0;
    this.grades.forEach(grade => sum += grade );
    return sum / this.grades.length;
  }
}

console.log('### Exercise 1');
console.log('## Using ES6 Class, using the new keyword');
const gradeObj = [90,89,75,90,89,75,90,89,75,90,89,75,90,89,75,90,89,75];
const grade    = new grades(gradeObj);
grade.addGrade(90);
grade.addGrade(25);
console.log(`Avg grade: ${grade.displayAvg()}`);

