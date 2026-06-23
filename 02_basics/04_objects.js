
const tinderUser1 = new Object()   // SINGLETON OBJECT
console.log(tinderUser1)         // {}
console.log("tinderUser1")       //tinderUser

const tinderUser2   = {}
console.log(tinderUser2);          // {}


const tinderUser ={}
tinderUser.id ="1234"
tinderUser.name ="Summy"
tinderUser.isLOggedIn = false
console.log(tinderUser);  //{ id: '1234', name: 'Summy', isLOggedIn: false }

const regularUser ={
    email:"sume@gmail.com",
    fullname:{
        userfullname:{
            firstname: "rudra",
            lastName: "singh"
        }
    }
}

console.log(regularUser.fullname); //{ userfullname: { firstname: 'rudra', lastName: 'singh' } }
console.log(regularUser.fullname.userfullname); //{ firstname: 'rudra', lastName: 'singh' }
console.log(regularUser.fullname.userfullname.firstname); //rudra

const obje1 ={1: "a", 2: "b"}
const obje2 ={3: "a", 4: "b"}
const obje3 ={obje1, obje2}  
console.log(obje3); //{ obje1: { '1': 'a', '2': 'b' }, obje2: { '3': 'a', '4': 'b' } }


const obje33 = Object.assign(obje1,obje2) //object.assign =It combines or copies objects into a single object.
console.log(obje33) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obje4 = Object.assign({},obje1,obje2) //curley brases lagane pe same outputa aata hai 
console.log(obje4)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 


const obje5 = {...obje1, ...obje2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } ...(spread means)=Spread Operator (...) ka use kisi object ki sabhi properties ko copy ya merge (jodne) ke liye kiya jata hai.
console.log(obje5)


const users =[
    {
        id:1,
        email:"r12@gmail.com"
    },
    {
        id:1,
        email:"r12@gmail.com"
    },
    {
        id:1,
        email:"r12@gmail.com"
    },
]

users[1].email
console.log(tinderUser) //{ id: '1234', name: 'Summy', isLOggedIn: false }

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLOggedIn' ]  means =Object.keys(tinderUser) tinderUser object ki sabhi keys (property names) ko array me return karta hai.
console.log(Object.values(tinderUser)); //[ '1234', 'Summy', false ]    means =Object.values(tinderUser) object ki sabhi values ko array ke form me return karta hai.
console.log(Object.entries(tinderUser));//[ [ 'id', '1234' ], [ 'name', 'Summy' ], [ 'isLOggedIn', false ] ] means =Object.entries() object ki har key aur value ko pair (key-value pair) ke roop me array ke andar array me return karta hai.

console.log(tinderUser.hasOwnProperty('isLOggedIn')); // true   means =hasOwnProperty() check karta hai ki object me di gayi key maujood hai ya nahi. aur given output true and false
console.log(tinderUser.hasOwnProperty('isLOgged'));  // false 


