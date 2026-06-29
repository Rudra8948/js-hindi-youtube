//forEach() is an array method that executes a callback function once for each element of an array. It does not return a new array or any value; it always returns undefined.

const coding =["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
   console.log(item);
})
console.log(values);
/*OUTPUT
js
ruby
java
python
cpp
undefined
*/

const coding2 =["js","ruby","java","python","cpp"]

const values2=coding.forEach((item)=>{
   console.log(item);
   return item
})
console.log(values);
/*OUTPUT
js
ruby
java
python
cpp
undefined

*/

const coding3 =["js","ruby","java","python","cpp"]

const values3=coding.forEach((item)=>{
   
   return item
})
console.log(values); 
// OUTPUT = undefined 

