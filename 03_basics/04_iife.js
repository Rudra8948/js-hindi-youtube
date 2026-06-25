// vip interviw topic
//IIFE interviw defintion =IIFE is used to create a private scope and avoid global scope pollution.
//Immdiately invoked function expression (IIFE)
// defintion=IIFE is a function that executes immediately after it is created.
// BASIC SYNTAX =(function () {
//     
//             })();


function chai(){
    //NAMED IIFE
    console.log(`DB CONNECTED`);
}
chai();  // DB CONNECTED




//IIFE 
(function pani(){
    console.log(`DB CONNECTED`);
})();   // DB CONNECTED



(function(){
    console.log(`DB CONNECTED`);
})();   //DB CONNECTED 




(function aurcode(){
    console.log(`DB CONNETED TWO`)
})(); // DB CONNECTED TWO




(()=>{
    console.log(`DB CONNECTED TWO`)
})();    // DB CONNECTED TWO



((name) =>{
    //SIMPLE IIFE & UNNAMED IIFE & paramater passed
   console.log(`DB CONNECTED TWO ${name}`);
})('mukesh')   // DB CONNECTED two mukesh
 