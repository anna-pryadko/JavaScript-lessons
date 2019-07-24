var x = 10;
var _name = "Shay";
var bool = true;
var arr = [5, 3, 6, 9, 6];
var arr_obj;
var current_date;
console.log(x * arr[2]);
function CalcAvg(arr) {
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    avg /= arr.length;
    return avg;
}
function PrintArray(arr) {
}
var arr_avg = CalcAvg(arr);
console.log(arr_avg);
