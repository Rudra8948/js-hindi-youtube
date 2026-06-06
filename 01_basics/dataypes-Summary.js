// # Primitive ---call by value
/* 7 types : String , Number, Boolean, Null, Undefined , Symbol, BigInt

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let usereEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3465634536375n

//  ## Non- Primitive ---- call by Reference 
//  types: Array, Objects, Functions
 
const heros =["shaktiman","naagraj","doga"]
let myObj={
    name:"Aditya",
    age: 20,
}

const myFunction = function(){
  console.log("hello world");
  }

  console.log(typeof bigNumber);

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  

  