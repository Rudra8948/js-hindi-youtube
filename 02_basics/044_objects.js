//Destructuring occurs where `{}` is used.

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor:"Rajat"
}
const {courseInstructor}= course
console.log(courseInstructor); //rajat

const {courseInstructor: instructor}= course
console.log(instructor);  //Rajat


//{
//   "name":"Atul",
//    "coursename":"js in hindi",
//    "price":"free"
//}

[
    {},
    {},
    {}
]

