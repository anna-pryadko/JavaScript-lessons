/* object Defenition */
function Person() {
    this.name;
    this.phone;
    this.age;
    this.mail;
    this.address; // Address Obj
    this.salary = 0;
    this.setMail = function (new_mail) {
        this.mail = new_mail;
    }

    this.printPerson = function () {
        console.log("Person: " + this.name + ", " + this.phone + " , " + this.age);
        this.address.printAddress();
    }
}

function Address(_city, _street, _num, _zip) {
    this.city = _city;
    this.street = _street;
    this.num = _num;
    this.zip = _zip;

    this.printAddress = function () {
        console.log("Address: " + this.city + ", " + this.street + " / " + this.num + " | " + this.zip);
    }
}

/* create Instance */
var person1 = new Person();
var person2 = new Person();

//var person_arr = [person1, person2];
person1.name = "saar";
person1.age = 36;
person1.phone = "050252555";
person1.address = new Address("Haifa", "Zrobavel", 10, 60900);

person2.name = "dani";
person2.age = 20;
person2.phone = "050255555";
person2.address = new Address("Tel Aviv", "Henkin", 1, 555000);

person1.setMail("saar@app.com");


console.log(person1.mail);
console.log(person2.mail);

person1.printPerson();
person2.printPerson();



