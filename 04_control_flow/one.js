//+++++++++++++ IF STATEMENT+++++++++++++++++++ 
//basic syntax= if(condition){
//
//                           }
 
/*
+++++++++++++OPERATOR++++++++

1 Arithmetic OPERATOR =Used for mathematical calculations (addition, subtraction, multiplication, division).
| Symbol | Name           | Kaam              |
| ------ | -------------- | ----------------- |
| `+`    | Addition       | Jodna             |5+3//8
| `-`    | Subtraction    | Ghatana           |5-3//2
| `*`    | Multiplication | Guna              |5*3//15
| `/`    | Division       | Bhag              |6/2//3
| `%`    | Modulus        | Remainder nikalna |5%2//1
| `**`   | Exponentiation | Power nikalna     |2**3//8
| `++`   | Increment      | 1 badhana         |a++
| `--`   | Decrement      | 1 ghatana         |a--



2 Assigment OPERATOR=Used to assign or update values in variables.
| Symbol | Name              | Kaam                 |
| ------ | ----------------- | -------------------- |
| `=`    | Assignment        | Value assign karna   |let a=10
| `+=`   | Add & Assign      | Add karke store      |a+=5
| `-=`   | Subtract & Assign | Minus karke store    |a-=5
| `*=`   | Multiply & Assign | Multiply karke store |a*=5
| `/=`   | Divide & Assign   | Divide karke store   |a/=5
| `%=`   | Modulus & Assign  | Remainder store      |a%=2
| `**=`  | Exponent & Assign | Power store          |a**=2




3 Comparison Operators=Used to compare two values.
| Symbol | Name               | Kaam                 |
| ------ | ------------------ | -------------------- |
| `==`   | Equal To           | Sirf value compare   |5=="5"//true
| `===`  | Strict Equal       | Value + Type compare |5==="5"//false
| `!=`   | Not Equal          | Value equal nahi     |5!=3//true
| `!==`  | Strict Not Equal   | Value + Type alag    |5!=="5"//true
| `>`    | Greater Than       | Bada hai             |10>5//true
| `<`    | Less Than          | Chhota hai           |5<10//true
| `>=`   | Greater Than Equal | Bada ya barabar      |10>=10//true
| `<=`   | Less Than Equal    | Chhota ya barabar    |5<=10//true



4. Logical Operators=Used to combine multiple conditions.
| Symbol | Name        | Kaam                         |            |                   |
| ------ | ----------- | ---------------------------- | ---------- | ----------------- |
| `&&`   | Logical AND | Dono condition true          |            |                   |true&&true //true
| `      |             | `                            | Logical OR | Ek condition true |`
| `!`    | Logical NOT | True ko false, false ko true |            |                   |!true//false



5. Unary Operators=Used to perform an operation on a single operand/value.
| Symbol   | Name            | Kaam              |
| -------- | --------------- | ----------------- |
| `+`      | Unary Plus      | Number me convert |+"10"//10
| `-`      | Unary Minus     | Negative banana   |-"10"//-10
| `typeof` | Type Operator   | Data type batata  |typeof"Rudra"
| `delete` | Delete Operator | Property delete   |delet user.name



6. Ternary Operator=Used as a short form of if...else.
| Symbol | Name             | Kaam          |
| ------ | ---------------- | ------------- |
| `? :`  | Ternary Operator | Short if-else | age >=18 ? "Adult": "Minor"
age >= 18 ? "Adult" : "Minor"



7. Nullish Coalescing Operator=Used to provide a default value when a variable is null or undefined.
| Symbol | Name               | Kaam                             |
| ------ | ------------------ | -------------------------------- |
| `??`   | Nullish Coalescing | Null/Undefined par default value | null ?? "Guest"
let name = null ?? "Guest";



8. Optional Chaining=Used to safely access object properties without causing errors.
| Symbol | Name              | Kaam                 |
| ------ | ----------------- | -------------------- |
| `?.`   | Optional Chaining | Safe property access | user?.name
user?.name



9. Spread / Rest Operator=Used to copy, merge, or collect multiple values in arrays, objects, and functions.
| Symbol | Name          | Kaam                           |
| ------ | ------------- | ------------------------------ |
| `...`  | Spread / Rest | Array/Object expand ya collect |spread=const arr2=[...arr1]/Rest=function sum(...nums){}



10. Bitwise Operators= Binary bits (0 aur 1) par operation karne ke liye
| Symbol | Name                 |            |
| ------ | -------------------- | ---------- |
| `&`    | Bitwise AND          |            |5 & 1
| `      | `                    | Bitwise OR |bitwise OR
| `^`    | Bitwise XOR          |            |5^1
| `~`    | Bitwise NOT          |            |~5
| `<<`   | Left Shift           |            |5<<1
| `>>`   | Right Shift          |            |5>>1
| `>>>`  | Unsigned Right Shift |            |5>>>1



11. Special Operators=Used for special tasks such as type checking, object creation, and property existence checking.
| Symbol       | Name           | Kaam                    |
| ------------ | -------------- | ----------------------- |
| `in`         | In Operator    | Property exist check    |"name" in user
| `instanceof` | Instance Of    | Object kis class ka hai |arr instanceof Array
| `new`        | New Operator   | Object create           |new Date()
| `,`          | Comma Operator | Multiple expressions    |let a=(1,2,3)




Interview Me Sabse Important
✅ + - * / %
✅ == vs ===
✅ != vs !==
✅ && || !
✅ ? : (Ternary)
✅ ?? (Nullish)
✅ ?. (Optional Chaining)
✅ ... (Spread/Rest)
✅ typeof
✅ instanceof

*/

/*
const isUserLoggedIn = true

if(2=="2"){
    console.log("executed");
    
}

// ARITHMETIC OPERATOR
let a = 10;
let b = 3;
console.log(a + b);  // 13  Addition
console.log(a - b);  // 7   Subtraction
console.log(a * b);  // 30  Multiplication
console.log(a / b);  // 3.33 Division
console.log(a % b);  // 1   Modulus
console.log(a ** b); // 1000 Exponentiation

a++;
console.log(a);      // 11 Increment

a--;
console.log(a);      // 10 Decrement


//ASSIGNMENT OPERATOR
let x = 10;
x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

x %= 4;
console.log(x); // 2

x **= 3;
console.log(x); // 8


//COMPARISON OPERATOR
console.log(5 == "5");    // true
console.log(5 === "5");   // false

console.log(5 != "5");    // false
console.log(5 !== "5");   // true

console.log(10 > 5);      // true
console.log(10 < 5);      // false

console.log(10 >= 10);    // true
console.log(5 <= 10);     // true

//LOGIC OPERATOR
let age1 = 20;
let hasId = true;
console.log(age1 >= 18 && hasId);  //TRUE
console.log(age1 < 18 || hasId); // true
console.log(!hasId); //// false

//5 UNARY OPERATOR
console.log(typeof "Aditya");  // string
console.log(typeof 100); // number
console.log(+"123");  // 123
console.log(-"123"); // -123

const user1 = {
    name: "Aditya"
};

delete user1.name;
console.log(user1); // {}


//6 TERNARY OPERATOR
let age = 20;

let result =
    age >= 18
    ? "Eligible"
    : "Not Eligible";

console.log(result);  // Eligible


//7 Nullish Coalescing Operator (??)
let username = null;
console.log(username ?? "Guest"); //Guest


let username1 = undefined;
console.log(username1 ?? "Guest"); // Guest

let username2 = "Aditya";
console.log(username2 ?? "Guest");  //Aditya


//8 optional changing(?.)
const user2 = {
    name: "Aditya"
};

console.log(user2?.name); // Aditya
console.log(user2?.email); // undefined


// 9 Spread Operator
  const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1,2,3,4,5]

//Rest Operator
function total(...numbers) {
    return numbers;
}

console.log(total(10, 20, 30));  //[10,20,30]


//10 bitwise Opertor
 console.log(5 & 1);  // 1
console.log(5 | 1); //// 5
console.log(5 ^ 1); // 4
console.log(~5); // -6
console.log(5 << 1); //// 10
console.log(5 >> 1); // 2
console.log(5 >>> 1);// 2



//11 Special Operator[in]
const user3 = {
    name: "Aditya"
};
console.log("name" in user3); //true

// instanceOf
const arr = [1, 2, 3];
console.log(arr instanceof Array); //true

*/

const temperature =41
if(temperature===41){
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50"); 
}
console.log("Executed") //less than 50 & executed


const score = 200
if(score >100){
    const power ="fly"
    console.log(`User power: ${power}`);  // user power: fly
}


const balance = 1000
if(balance>500) console.log("test"),
console.log("test2");
  

if(balance <500){
   console.log("less than");

}else if(balance <750){
    console.log("less than 750")
}else if (balance <900){
    console.log("less than 750");
}else{
    console.log("less than 1200");  // 1200
}


//+++++  && jab dono true rahega tabhi code run krega(multiople chek kr skte hai )
const userLoggedIn= true
const debitCard= true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course"); // Allowed to buy course 
}


const userLoggedIn1= true
const debitCard1= true
if(userLoggedIn1 && debitCard1 && 2==2){
    console.log("Allow to buy course"); // Allowed to buy course
}

const userLoggedIn3= true
const debitCard3= true
if(userLoggedIn3 && debitCard3 && 2==3){
    console.log("Allow to buy course");  
}

//++++++ || dono condition me se koi ek true rhna chahiye(multiole chek kr skte hai)
const loggedInFromGoogle = false
const LoggedInfromEmail= true
if(loggedInFromGoogle || LoggedInfromEmail){
    console.log("User Logged In");
}