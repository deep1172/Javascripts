// Lecture 23 This and Arrow functions

const user = {
    username: "Deepak",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Raju";
// user.welcomeMessage();
// console.log(this)

function property(){
    let username = "rajesh";

    // console.log(this.username);  // this gives undefined 
    // console.log(this);    
}

// property();

const someproperty = function (){
    let username = "rajesh";

    // console.log(this.username);  // this also give undefined    
}

// someproperty();

const somepropertyarrow = () =>{
    let username = "rajesh";
    console.log(this.username);  
}

somepropertyarrow();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//Lecture 24  IIFE
console.log(`Hello`);

(function db() {
    console.log(`DB Connected`)
})();

((name) =>{
    console.log(`DB 2 Connected $ ${name}`)
})(Rakesh);


