variable = 10;
foo =13;
(() =>{
    foo = 150;
    console.log(variable);
    var foo = 100;
    variable = 20;
    console.log(variable);
    console.log(foo);
})();

console.log(foo);
console.log(variable);
var variable = 30;

console.log(variable);