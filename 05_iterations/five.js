//+++++++FOREACH / array method function ++++++

const coding = ["js","ruby","java","pythin","cpp"]
coding.forEach(function  (val){
    console.log(val);
})
/** OUTOUT
  js
ruby
java
pythin
cpp
 
 */
//CALL BACK FUNCTION WITH FOREACH 
coding.forEach((item)=>{
    console.log(item);
})
/** OUTOUT
  js
ruby
java
pythin
cpp
 
 */

coding.forEach((item)=>{
    console.log(item);
})
 /** OUTOUT
  js
ruby
java
pythin
cpp
 
 */




function printMe(item){
   console.log(item);
}
coding.forEach(printMe)
/** OUTOUT
  js
ruby
java
pythin
cpp
 
 */

coding.forEach((item,index,arr,)=>{
   console.log(item,index,arr,);
})
/*OUTPUT
 js 0 [ 'js', 'ruby', 'java', 'pythin', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'pythin', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'pythin', 'cpp' ]
pythin 3 [ 'js', 'ruby', 'java', 'pythin', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'pythin', 'cpp' ]
 */



const myCoding = [
    {
        languageName:"javascript",
        languageFieName:"js"
    },
     {
        languageName:"java",
        languageFieName:"java"
    },
     {
        languageName:"python",
        languageFieName:"py"
    },
]
   
myCoding.forEach((item) => {
    
    console.log(item.languageName);
})
/*OUTPUT
 javascript
java
python
 */