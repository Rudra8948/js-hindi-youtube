const name ="Aditya"
const repoCount = 4
// console.log(name +repoCount+"Value"); old syntax model(not useable)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new syntax model
 
const gameName = new String ('ramsingh')  // check to google console
console.log(gameName[0]);   // r
console.log(gameName.__proto__); // {}
console.log(gameName.toUpperCase()); //RAMSINGH
console.log(gameName.charAt('4')); //i
console.log(gameName.indexOf('s')); //3

const newString = gameName.substring(0,5)
console.log(newString)  // ramsi

const anotherString = gameName.slice(-5,4)
console.log(anotherString) // s [repeat agin and check]

const newStringOne = "    Atul "
console.log(newStringOne)         //   Atul  
console.log(newStringOne.trim())  //ATUL

const url = "https://www.rudra%20singh.com"
console.log(url.replace('%20','-'))   //https://www.rudra-singh.com
console.log(url.includes('rudra'))   //true
console.log(url.includes('aditya'))  //false

