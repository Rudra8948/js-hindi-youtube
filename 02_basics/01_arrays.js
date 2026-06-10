// ARRAY

const myArr = [0,1,2,3,4,5] // ORIGINAL ARRAY

const myHeros =["Batman","Superman","Spiderman"]
console.log(myHeros[2]) // Spiderman

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]); // 2


// ARRAY METHODS

myArr.push(6)
console.log(myArr) // [0,1,2,3,4,5,6] “It will print values starting from 0 up to the value given.”

myArr.pop()
console.log(myArr) // [0,1,2,3,4,5] “It will remove the last element of the array.”

myArr.unshift(9)
console.log(myArr) // [9,0,1,2,3,4,5] “It will add the given value at the beginning of the array.”

myArr.shift()
console.log(myArr)  // [0,1,2,3,4,5] “It will remove the first element of the array.”

console.log(myArr.includes(3)) // true “It will check if the given value is present in the array or not and return true or false accordingly.”
console.log(myArr.includes(9)) // false “It will check if the given value is present in the array or not and return true or false accordingly.”

console.log(myArr.indexOf(9))  // -1 “It will return the index of the first occurrence of the given value in the array. If the value is not present, it will return -1.”
console.log(myArr.indexOf(3))  // 3 “It will return the index of the first occurrence of the given value in the array. If the value is not present, it will return -1.”

const newArr = myArr.join()
console.log(myArr); // [0,1,2,3,4,5]
console.log(newArr); // 0 1 2 3 4 5



// SLICE AND SPLICE
console.log("A",myArr)
const myn1= myArr.slice(1,3)
console.log(myn1);  

console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C", myArr)
// output
 /* A [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ]
C [ 0, 4, 5 ]
*/

// defintion slice and splice

/*A  -> Displays the original array.

slice(1,3)
-> Returns a copy of elements from index 1 to 2.
-> Does not modify the original array.

B
-> Shows that the original array is unchanged.

splice(1,3)
-> Removes 3 elements starting from index 1.
-> Returns the removed elements.
-> Modifies the original array.

C
-> Displays the updated array after splice().
 */



