"use strict";
var student = (function () {
    function student(firstname, lastname, rollno, grade) {
        this.FirstName = firstname;
        this.LastName = lastname;
        this.RollNumber = rollno;
        this.Grade = grade;
    }
    student.prototype.showStudent = function () {
        return "First Name is:" + this.FirstName + ", Last Name is :" + this.LastName + ", RollNo is :" + this.RollNumber + ", Grade is :" + this.Grade;
    };
    return student;
}());
var obj = new student("ABC", "DEF", 1234, "A");
console.log(obj.showStudent());
//# sourceMappingURL=index.js.map