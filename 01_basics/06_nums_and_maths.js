 const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance);  // [NUMBER : 100]

console.log(balance.toString()); //100
console.log(balance.toFixed(2)); // 100.00


const otherNumber = 23.89765
console.log(otherNumber.toPrecision(3)) // 23.9

const otherNumber2 = 123.8966
console.log(otherNumber2.toPrecision(3)) // 124


const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000
console.log(hundreds.toLocaleString('en-IN'))  //10,00,000
console.log(hundreds.toLocaleString('en-US')) //1,000,000


// +++++++++++++++++++++++MATHS+++++++++++++++++++++++

console.log(Math)  // object [Math]{}
console.log(Math.abs(4)); // 4  [positive value to change a positive value]
console.log(Math.abs(-4)); // 4 [abs (absolute value) always negative value to convet in positive value but positiv value to not convet in negative value ]
console.log(Math.round(4.6)); // 5 [rounding value to nearest integer]
console.log(Math.ceil(4.1)); // 5 [rounding value to nearest upper integer]
console.log(Math.floor(4.9)); // 4 [rounding value to nearest lower integer]
console.log(Math.min(4, 5, 6, 7)); // 4 [return minimum value from given values]
console.log(Math.max(4, 5, 6, 7)); // 7 [return maximum value from given values]
console.log(Math.random()); //o.5205996098490682 [ramdom value between  0 and 1]
console.log(Math.random() * 10); // 5.205996098490682 [random value between 0 and 10]{The value will change again and again but if we add 1 to it then the value will not change}
console.log(Math.random() *10+1); // 4.196693004917557

const min = 10 
const max = 20 
console.log(Math.floor(Math.random() * (max - min +1)) +min); // 14 [random value between 10 and 20] 