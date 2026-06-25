// {} curleybases is called a scopes



if(true){
let a = 10
const b=20
var c=30

}
//console.log(a);
//console.log(b);
console.log(c);   // 30 


let a = 300
if(true){
    let a =10
    const b = 20
    console.log("INNER",a); // INNER 10
}
console.log(a) //300  


function one (){
    const username="Rudra"

    function two(){
      const website ="youtube";
      console.log(username)
    }
    //console.log(website);
    two()

}
one()


if(true){
    const username ="rudra"
    if(username==="rudra"){
        const website =" youtube"
        console.log(username +website)

    }
    //console.log(website);  // not define  bcz it is out of loop
}
//console.log(username);   // not define  bcz it is a out of loop

//++++++++++++++VIP interesting +++++++++++++
function addone(num){
    return num +1
}
addone(5)



/*const addTwo = function(num){
    return num + 2
}
addTwo(5)
*/


console.log(addone(5))
function addone(num){
    return num +1

}

addTwo(5)
const addTwo = function(num){
     return num+2
}
