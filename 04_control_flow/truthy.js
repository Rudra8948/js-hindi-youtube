const userEmail = "rudra@gmail.com"
if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}  
                                     // got user email


 const userEmail2 = ""
if(userEmail2){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}                                        // Don't have user email


//FALSY VALUE
//false , 0, -0, BigInt 0n, "", null, undefined, Nan

//TRYTHY VALUE
//"0", 'false', " ", [], {}, function(){}, 

//Nullish Coalescing Operator(??): null undefined


let val1;
val1= 5?? 10        // 5
val1 = null ?? 10     //10
val1 = undefined ?? 15   //15
 val1 = null ?? 10 ??20    //10

console.log(val1);




// +++++++++++Terniary Operator+++++++
//condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80"):console.log("more than 80")    // more than 80