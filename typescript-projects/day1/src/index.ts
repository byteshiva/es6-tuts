class student {
    FirstName:string;
    LastName:string;
    RollNumber:number;
    Grade:string;
    constructor(firstname:string, lastname:string, rollno:number, grade:string) {
        this.FirstName = firstname;
        this.LastName = lastname;
        this.RollNumber = rollno;
        this.Grade = grade;
    }
    showStudent() {
        return "First Name is:" + this.FirstName + ", Last Name is :" + this.LastName + ", RollNo is :"+this.RollNumber+", Grade is :" + this.Grade;
    }
}

var obj = new student("ABC", "DEF", 1234, "A");
console.log(obj.showStudent());