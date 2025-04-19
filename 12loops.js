// Lecture 27 
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}
// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}
// Lecture 28 

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }


let heros = ['SRK', "HR", "SSR"]

let arr = 0
while (arr < heros.length) {
    //console.log(`Value is ${heros[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

// Lecture 29
// for of 

// ["", "", ""]
//[{}, {}, {}]

const arr1 =  [1,3,5,7,8,9]

for (const element of arr1) {
    // console.log(element);
}

const greetings= "Hello Brother"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('BN', "Bangladesh");
map.set('FR', "France");
map.set('USA', "America");
map.set('PAK', "Pakistan");

// console.log(map);

for (const [key, value] of map){
    // console.log(key, ":-" , value)
}

const myobject = {
    "first name": "Raju",
    "last name": "Bhatia",
    age: 54,
    address: "Lucknow, UP"
}

// for (const [key, value] of myobject){
//     console.log(key, ":-" , value);
// }   This will not work for the object


const mylang = {
    js: "javascripts",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple",

}

for (const key in mylang) {
    // console.log(mylang[key]);
    
}
for (const key of Object.keys(mylang)) {
    // console.log(mylang[key]);
}

for (const [key, value] of Object.entries(mylang)) {
    // console.log(`${key} => ${value}`);
}

const sql= ["mySQL", "oracle","MongoDB", "postgres", "MsSql"];

for (const key in sql) {
        // console.log(sql[key])
        
    }
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//for each

const lang = ["c", "c++", "JS", "python", "typescript", "java"];

// lang.forEach( function (val) {
//     console.log(val)
// })

// lang.forEach((val)=> {
//     console.log(val)
// })

// function printme(val) {
//     console.log(val);
    
// }
// lang.forEach(printme)

// coding.forEach(printMe)

// lang.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )