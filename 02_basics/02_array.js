const marvel_heros =["thor","Ironman","Spiderma"]
const dc_heros=["superman","flash","batman"]
marvel_heros.push(dc_heros)
//console.log(marvel_heros); // [ 'thor', 'Ironman', 'Spiderma', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);  // flash
//const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
 const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
console.log(another_array);
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Rudra"))  // false
console.log(Array.from("Rudra")) // [ 'R', 'u', 'd', 'r', 'a' ]
console.log(Array.from({name:"Rudra"})) // []  vip in interview question

let scored = 100
let scored2 = 200
let scored3 = 300

console.log(Array.of(scored,scored2,scored3));
