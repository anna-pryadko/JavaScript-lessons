var person = { name: "saar", age: 36, phone: "0503838388" };

/** not easy to implement */
/*
var student1_name = "dani";
var student1_age = 23;
var student1_name = "dani";
var student1_age = 23;
var student1_name = "dani";
var student1_age = 23;
var student1_name = "dani";
var student1_age = 23;
*/

var student1 = { name: "dani", age: 23, phone: "0505050505" };
var student2 = { name: "dani", age: 23, phone: "0505050505" };
var student3 = { name: "dani", age: 23, phone: "0505050505" };
var student4 = { name: "dani", age: 23, phone: "0505050505" };
var _class = [student1, student2, student3, student4];
var i = 0;
/*
$("div").each(function () {
    $(this).css("background", "#000");
    $(this).html(i);
    i++;
});
*/

var arr = [5, 6, 7, 8];
console.log(arr);
var arr2 = arr;
arr2[0] = 35;
console.log(arr);