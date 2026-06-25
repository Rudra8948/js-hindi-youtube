//++++++++++ SWITCH CASE ++++++++++++
//definiton= switch is a control flow statement used to execute one block of code from multiple options based on the value of an expression. 
 /* BASIC SYNTAX

\ switch () {

    case :
        break;

    case :
        break;

    default:
}

*/


const month = 3
switch(month){
    case 1:
        console.log("jan");
        break;
    
    case 2:
        console.log("feb");
        break;
        
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;
     
     default:
        console.log("default case match")
        break;
}                                       // March




const month ="march"
switch(month){
    case "jan":
        console.log("jan");
        break;

    case "feb":
        console.log("feb");
        break;
    
    case "march":
        console.log("march");
        break;
        
    case "april":
        console.log("april");
        break;
    
    default:
        console.log("default case match");
        break;    

}                      // March