let x:number=10;
let _name:string="Shay";
let bool:boolean=true;
let arr:Array<number>=[5,3,6,9,6];
let arr_obj: Array<Date>;
let current_date: Date;


console.log(x*arr[2]);

function CalcAvg(arr:Array<number>):number{
let avg=0;

for(let i:number=0; i<arr.length; i++) {
    avg+=arr[i];
}
avg/=arr.length;
return avg;
} 


function PrintArray(arr:Array<number>):void
{
    
}

let arr_avg=CalcAvg(arr);

console.log(arr_avg);