const firstName = "Deepak"
const lastName = "Kumar"

console.log(firstName+" " +lastName);

console.log(`Full Name is ${firstName} ${lastName}`);

const deep = new String('myrepo-deep');

// console.log(deep.toUpperCase());
// console.log(deep.toString());
// console.log(deep.length);
// console.log(deep.lastIndexOf('deep'));
// console.log(deep.indexOf('deep'));

const newString = deep.substring(0,6);
console.log(newString);

const anotherString = deep.slice(-8, 8);
console.log(anotherString);

