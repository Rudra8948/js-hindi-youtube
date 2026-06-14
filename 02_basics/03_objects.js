// SINGLETON
// object.create

//OBJECT LITERALS

const mySym = Symbol("Key1")


const JsUser = {
    name: "Rudra",                // Stores the user's first name
    "full name": "Rudra Singh",   // Stores the user's full name
    [mySym]: "mykey1",            // Stores a value using a Symbol key
    age: 18,                      // Stores the user's age
    location: "lucknow",          // Stores the user's city/location
    email: "rudra@gmail.com",     // Stores the user's email address
    isLoggedIn: false,             // Indicates whether the user is logged in or not
    lastLoginDays:["Monaday","Saturday"] // Stores the days on which the user last logged in

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "rudrasingh@gmail.com"
Object.freeze(JsUser)                 // freeze means= It locks the object so its values cannot be changed.
JsUser.email = "Rudragooglegmail.com"
console.log(JsUser)
//........output..... 1 to 28 line
/*rudra@gmail.com
rudra@gmail.com
Rudra Singh
mykey1
{
  name: 'Rudra',
  'full name': 'Rudra Singh',
  age: 18,
  location: 'lucknow',
  email: 'rudrasingh@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monaday', 'Saturday' ],
  Symbol(Key1): 'mykey1'
}
*/


JsUser.greeting = function(){       // greeting means=**Greeting** means a message or word used to say hello or welcome someone.
   console.log("Hello JS user");
}

console.log(JsUser.greeting);    // undefined
console.log(JsUser.greeting())   // again learn line 47 to 52


JsUser.greetingTwo = function (){
  console.log('Hello JS user, ${this.name}');
}
console.log(JsUser.greetingTwo());