/* object Definition */
var Cinema = /** @class */ (function () {
    /* constructor Definition */
    function Cinema(name, numSeat, openHour, closeHour) {
        this.name = name;
        this.numSeat = numSeat;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }
    /* Methods Definition */
    Cinema.prototype.printCinema = function () {
        console.log("Name cinema: " + this.name + ". Number of seats: " + this.numSeat + ". Open time: " + this.openHour + ". Close time " + this.closeHour + ".");
    };
    Cinema.prototype.getWorkHours = function () {
        var workHours = this.closeHour - this.openHour;
        return workHours;
    };
    return Cinema;
}());
var cinema1 = new Cinema("Magnolia", 140, 10, 22);
var cinema2 = new Cinema("CineMoll", 200, 15, 23);
var cinema3 = new Cinema("Arena", 350, 8, 19);
cinema1.printCinema();
cinema2.printCinema();
cinema3.printCinema();
console.log("Cinema " + cinema1.name + "  work  for  " + cinema1.getWorkHours() + "  hours per day.");
console.log("Cinema " + cinema2.name + "  work  for  " + cinema2.getWorkHours() + "  hours per day.");
console.log("Cinema " + cinema3.name + "  work  for  " + cinema3.getWorkHours() + "  hours per day.");
