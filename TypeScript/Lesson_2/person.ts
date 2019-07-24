/* object Definition */
class Person {
    /* parameters Definition */
    public name: string;
    public age: number;
    public phone: string;


    /* constructor Definition */
    public constructor(name: string, age: number, phone: string) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }

    /* Methods Definition */
    public printPerson(): void {
        console.log(this.name, this.age, this.phone);
    }
}

let p = new Person("saar", 10, "0505050505");