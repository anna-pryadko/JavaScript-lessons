/*object Defenition*/
function Person() {
    this.name;
    this.phone;
    this.age;
    this.mail;
    this.salary=0;

    this.setMail=function(new_mail){
        this.mail=new_mail;
    }

}

/*create Instance*/
var person1=new Person(); 
var person2=new Person(); 

person1.name="saar";
person1.age=36;
person1.phone="111111111";

person2.name="dani";
person2.age=38;
person2.phone="22222222";

person1.setMail("1@1.mail.com");

console.log(person1);
console.log(person2);