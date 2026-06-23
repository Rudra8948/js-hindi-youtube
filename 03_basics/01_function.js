  // function =A Function is a reusable block of code that performs a specific task. It runs only when it is called and can accept input (parameters) and return output (return value).
 //Parameter = parameters wo variables hote hain jo function banate samay () ke andar likhe jate hain
 //Argumrnts=Arguments wo actual values hoti hain jo function call karte samay di jati hain.
  
 function greet(name) {                // greet = Function Name, name = Parameter
    console.log("Hello " + name);
}

greet("Rudra");                         // greet() = Function Call, "Rudra" = Argument


function sayMyName(){
    console.log("R")
    console.log("u")
    console.log("d")
    console.log("r")
    console.log("a")
}
sayMyName()


function addTwoNumber(number1,number2){
   console.log(number1+number2);
}
addTwoNumber(3,4)      //7
addTwoNumber(3,"4")    //34
addTwoNumber(3,"a")    //3a
addTwoNumber(3,null)   //3

addTwoNumber(3,5)      //8
const result = addTwoNumber(3,5) //8
console.log("Result:", result);  //Result: undefined

function addTwoNumber(number1,number2){
   let result = number1+number2   //hum line 35 ,36 ko return number1+number2 bhi likh skte hai
   return result
   console.log("Rudra") // result k bad kych bhi print nhi hota hai and result se phle  sab kuch print hota hai
}

//const result = addTwoNumber(3, 6)
//console.log("Result5:",result5)  // Result: 9


function loginUserMessage(username){
    if(username === undefined){ // hum isko if(!username) 
        //console.log("please enter a username ")
        return
    }
    return`${username} just logged in`
}
console.log(loginUserMessage("Rudra"))     //Rudra just logged in
console.log(loginUserMessage(""))          //just logged in
console.log(loginUserMessage())            //undefined just logged in


  function calculateCartPrice (num1){
      return num1
  }
  console.log(calculateCartPrice(2))           //2
  console.log(calculateCartPrice(200,400,500)) //200



  function calculaterCartPrice(...num1){
     return num1
  }
  console.log(calculaterCartPrice(200, 400, 500,))  //[ 200, 400, 500 ]


  const user = {
    username:"rudra",
    price: 199
  }
  function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);  //User name is rudra and price is 199

  }
  handleObject(user)



  const myNewArray = [200,400,500,100]

  function returnSecondValue(getArray){
    return getArray[1]
  }
  console.log(returnSecondValue(myNewArray)); 