//number => 2 to power 53
// bigint
// string => '' or ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol =>unique

// object 
let score = '34abc'
let age = 32
// console.log(typeof(str));
console.log(typeof(age)); 
console.log(typeof age);

console.log(typeof(age + 1)); 
console.log(typeof age + 1 );

console.log(typeof(null));
console.log(typeof(undefined));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //number in case of score
console.log(valueInNumber);         //NAN  in case of score here.

//"33" => 33
//"abc34" => NAN
// true => 1
//false => 0

// 1 => true; 0 => false
// "" => false; "anyValue" => true

// **************** Operations ********************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// ************* comparision *********************
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

// ************* Data Types **************
// updated in readme
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const scores = 10
const scoreValue = 10.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "Krish", "bhim"];
let myObj = {
    name: "Deepak",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


