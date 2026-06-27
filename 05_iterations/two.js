/*+++++++++ WHILE ++++++++
DEFINITION=A while loop is used to repeat a block of code as long as a condition is true. It checks the condition before executing the loop body.
BASIC SYNTAX

(initialization)
(condition)
{
    // code
    // update
}

*/


let index = 0
while(index <= 10){
   console.log(`value of index is ${index}`);
   index =index+2
}



let MyArray =["falsh","batman","superman"]
let arr = 0
while(arr<MyArray.length){
     console.log(`Value is ${MyArray[arr]}`);
     arr = arr+1
}

/*++++++++ DO WHILE LOOP ++++++ 
DEFINTION =A do-while loop is used to execute a block of code at least once, and then it repeats as long as the condition is true. The condition is checked after the code executes.
BASIC SYNATAX=


Initialization
{
   // Code
   // Update
}
Condition 

*/

let score =1
do {
    console.log(`Score is ${score}`)
    score++
} while (score<=10);