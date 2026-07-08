/*

const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums=myNums.filter((num)=> num > 4)  //sabse best yah tarika hai 
const newNums3= myNums.filter((num)=>{
    return num >4                            // scope start krne pe return keyword likhan padega
})
//const newNums2= myNums.filter((num)=>{     // filter =filter() is an array method that creates and returns a new array containing only the elements that satisfy a specified condition.
//    num>4                                 // agr without return keyword ko outpur [] empty braket aayega
//})
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]
//console.log(newNums2) // []
console.log(newNums3) //[ 5, 6, 7, 8, 9, 10 ]

*/

//+++++++WRITE THE ABOVE CODE USING FOREACH() WITH CALL BACK

const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums= []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)// push means =push() is an array method used to add one or more elements to the end of an array. It returns the new length of the array.
    }
})
console.log(newNums)    //[ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = book.filter((bk)=> )
  console.log(userBooks);