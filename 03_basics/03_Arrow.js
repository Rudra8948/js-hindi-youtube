// +++++++++most vip topic++++ARROW FUNCTION+++++++// 
//this is a keyword that refers to the object that is currently executing the function.
//this us object ko refer karta hai jo abhi function ko call kar raha hai (current execution context).


const user ={
    username:"rudra",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }

}
//user.welcomeMessage()
//user.username="aditya"
//user.welcomeMessage()

console.log(this);


function chai(){
    let userName ="rudra"
    console.log(this.userName) // undefined 
    console.log(this)

}
chai()

const pani =  function (){
    let userName ="manoj"
    console.log(this.username);
}
pani()  // undefined 


//++++ARROW FUNCTION+++++//
const samosa =  ()=> {
    let userName ="manoj"
    console.log(this.username);
    console.log(this)    //{}
}
samosa()   //undefined 
 
// ARROW FUNCTION BASIC SYNTAX ()=> {}

    const addtwo =(num1,num2) => {
        return num1+num2
    } 
    console.log(addtwo (3,4))   //7
   

 // IMPLICITY RETURN    basic syntax=(parameter) => expression
 // definition = Implicit return means an arrow function automatically returns a value without using the return keyword.
 // {}curley brases me rap kra to return keyword likhna padega 
 //() me rap kra to retuen keyword nho likhna padega 


 //const addTwo =(num1,num2) =>  num1+ num2
const addTwo = (num1,num2) =>(num1+ num2)
console.log(addTwo(4,5))   //9




