 // DATE

 let myDate = new Date();
console.log(myDate); //2026-06-07T05:40:49.218Z
console.log(myDate.toString()); //Sun Jun 07 2026 05:46:47 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sun Jun 07 2026
console.log(myDate.toLocaleString()); //6/7/2026, 5:49:11 AM
 
let myCreateDate = new Date(2026 ,0,25) //2026-01-25T00:00:00.000Z
let myCreateDate = new Date(2026, 0, 23, 5, 3) //2026-01-23T05:03:00.000Z
let myCreateDate = new Date("2026-01-14") //2026-01-14T00:00:00.000Z
let myCreateDate = new Date("01-04-2026")  //2026-01-04T00:00:00.000Z
console.log(myCreateDate);


 let myCreateDate = new Date("01-04-2026")
let myTimeStamp = Date.now() //1780878778550 [milisecond values]
console.log(myTimeStamp);
console.log(myCreateDate.getTime()); //1767484800000
console.log(Math.floor(Date.now()/1000)); //1780879143 [second values]

let newDate = new Date()
console.log(newDate); //2026-06-08T00:45:58.766Z
console.log(newDate.getMonth()); //5 [month start with 0, so 5 means June]
console.log(newDate.getDay());   //1 [day start with 0, so 1 means Monday]
console.log(newDate.getDate());  //8 [date start with 1, so 8 means 8th]
console.log(newDate.getFullYear()); //2026
console.log(newDate.getHours()); //0
console.log(newDate.getMinutes()); //47
console.log(newDate.getSeconds()); //53


newDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
})
