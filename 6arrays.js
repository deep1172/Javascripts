const myArr = [10,11,12,31,14,51,61]

const girls = ["anu", "natasa", "tanu", "manu"];

const boys = new Array("raju", "manoj", "ganesh", "vaibhav", "aayu");

// console.log(myArr[2])

// Array methods
// myArr.push("golu");
// myArr.push("laddu");
// myArr.push("gopal");

// console.log(myArr);

// myArr.pop()

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

//slice, splice

// console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
// console.log("sliced: ", myn1);

// console.log("B ", myArr);

// console.log("A ", myArr);
// const myn2 = myArr.splice(1,3)
// console.log("spliced: ", myn2);

// console.log("B ", myArr);

const marvel_heros = ["Thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heroes); //array inside array
// console.log(marvel_heros);
const super_heros =marvel_heros.concat(dc_heroes);
console.log(super_heros);

const all_super_heros = [...marvel_heros, ...dc_heroes];

console.log(all_super_heros);

console.log(Array.isArray("Deepak"))
console.log(Array.from("Deepak"))
console.log(Array.from({name: "Deepak"})) // returns empty array because we have to give value before creating array whether it has to create array of key or value or both

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

