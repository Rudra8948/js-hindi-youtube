//++++++FOR OF++++++++
/*
definition=A for...of loop is used to iterate over the values of an iterable object, such as an array, string, or other iterable collection. It accesses each value one by one.
itrable object =An iterable object is an object whose elements or values can be accessed one by one using a  loop like for...of. hindi Iterable Object वह object होता है जिसके elements या values को एक-एक करके access (iterate) किया जा सकता है।
example = Apple , mango ,banana,Orange  

Which JavaScript Objects are Iterable?
Object	       B?
Array	       ✅ Yes
String	       ✅ Yes
Map	           ✅ Yes
Set	           ✅ Yes
Object {}	   ❌ No (by default)


basic synatx=

(Element)
(Collection)
{
    // Code
}
*/



const arr=[1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}/*
outpt
1
2
3
4
5

*/




const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}/*
output
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/



//+++++++++Maps+++++++++
const map = new Map()
map.set(`IN`,"India")
map.set(`USA`,"United State of America")
map.set(`Fr`,"france")

console.log(map);
/* OUTPUT
Map(3) {
  'IN' => 'India',
  'USA' => 'United State of America',
  'Fr' => 'france'
}

*/

const map2 = new Map()
map.set(`IN`,"India")
map.set(`USA`,"United State of America")
map.set(`Fr`,"france")

//console.log(map);

for (const [key, value] of map2) {
     console.log(key,':-',value);
}




const myObject ={
    'game1': `NFS`,
    'game2': 'Spiderman'
}
//for(const[key,value]of myObject){
//    console.log(key,':-', value);
// }