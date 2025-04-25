// How to check if an object is an array or not ?

let fruits = [{
    name: "mango",
    price: 130,
    taste: "sweet",

}
]
// console.log(typeof(fruits));

function checkArray(elem){
   return Array.isArray(elem);
}

console.log(checkArray([]));
console.log(checkArray({}));
console.log(checkArray(fruits));
