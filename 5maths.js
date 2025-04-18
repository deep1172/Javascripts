const score = 433;
// console.log(score);

const balance = new Number(2000)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.789;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));

//*************** maths ***********//
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// random b/w 30 to 50

// const mini = 30;
// const maxi = 50;

// console.log (Math.floor(Math.random()* (maxi-mini+1)) + mini)

// ******************** Date *************  //

let myDate = new Date()
console.log(myDate);

// console.log(myDate.getTime());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.getDate());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getFullYear());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 , 23, 14,34);
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

