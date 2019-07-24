/* object Defenition */
function Person() {
    this.name;
    this.phone;
    this.age;
    this.mail;
    this.setMail = function (new_mail) {
        this.mail = new_mail;
    }

    this.getName = function () {
        return "This is My Name: " + this.name;
    }

    this.newFunc = function () {
        console.log("This is a New Func");
    }

    this.printPerson = function () {
        console.log("Person: " + this.name + ", " + this.phone + " , " + this.age);
    }
}
/* Student Defenition */
function Student() {
    Person.call(this);
    this.grades = [];
    this.class;
    this.year;

    this.printStudent = function () {
        console.log("Student: " + this.grades + ", " + this.class + " , " + this.year);
    }
}
/* Teacher Defenition */
function Teacher() {
    Person.call(this);
    this.class;
    this.degree;
    this.salary;
    this.job_title;

    this.printTeacher = function () {
        console.log("Teacher: " + this.class + ", " + this.degree + " , " + this.salary + " , " + this.job_title);
    }
}
/* Manager Defenition */
function Manager() {
    Person.call(this);
    this.office;

    this.printManager = function () {
        console.log("Manager: " + this.office);
    }
}


var person = new Person();
person.name = "Dani";
person.age = 30;
person.phone = "05032525255";

var student = new Student();

student.grades = [80, 90, 70, 80];
student.class = 5;
student.year = 2;
student.name = "Saar";


student.printStudent();

var teacher = new Teacher();
teacher.degree = "B.A.";
teacher.class = 5;
teacher.salary = 20000;
teacher.job_title = "Proferssor";

var manager = new Manager();
manager.office = "B401";


console.log(student.getName());
console.log(teacher.getName());
console.log(manager.getName());

student.newFunc();
teacher.newFunc();
manager.newFunc();