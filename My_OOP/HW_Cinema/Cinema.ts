/* object Definition */
class Cinema {
    /* parameters Definition */
    public name: string;
    public numSeat: number;
    public openHour: number;
    public closeHour: number;

    /* constructor Definition */
    public constructor(name: string, numSeat: number, openHour: number, closeHour:number) {
        this.name = name;
        this.numSeat = numSeat;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }

    /* Methods Definition */
    public printCinema(): void {
        console.log("Name cinema: "+this.name+". Number of seats: "+ this.numSeat+". Open time: "+this.openHour+". Close time "+this.closeHour+".");
   }

    public getWorkHours(){
        let workHours:number=this.closeHour-this.openHour;
        return workHours;
    }
}

let cinema1=new Cinema("Magnolia",140,10,22);
let cinema2=new Cinema("CineMoll",200,15,23);
let cinema3=new Cinema("Arena",350,8,19);

cinema1.printCinema();
cinema2.printCinema();
cinema3.printCinema();

console.log("Cinema "+cinema1.name+"  work  for  "+cinema1.getWorkHours()+"  hours per day.");
console.log("Cinema "+cinema2.name+"  work  for  "+cinema2.getWorkHours()+"  hours per day.");
console.log("Cinema "+cinema3.name+"  work  for  "+cinema3.getWorkHours()+"  hours per day.");