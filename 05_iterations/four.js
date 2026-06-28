// how do you loop over an iterable object? 
//answer = for in loop mostly use iterable object

const  myObject ={
    js: 'javascript',
    cpp:'C++',
    rb: "ruby",
    swift:"swift by apple"
}
for(const key in myObject){
    console.log(key);
}
/*output given key
js
cpp
rb
swift
*/
for(const key in myObject){
    console.log(myObject[key]);
}
/*output given value
javascript
C++
ruby
swift by apple
*/

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/* OUTPUT
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple

*/