

// given a string, reverse each word in the sentence 

//using map, join and split

// let str = "Hello how are you ?";

// let revStr = str.split(" ").map(word => {
//    return word.split("").reverse().join("")
// });

// console.log(revStr.join(" "));



// using for each loop 

// let str = "Hello how are you ?";
// let words = str.split(" ");
// let reverseStr =[];

// words.forEach(word => {
//     let reversed = "";
//     for (let i = word.length -1; i >= 0; i--) {
//         reversed += word[i];
        
//     }
//     reverseStr.push(reversed);
// });


// const finalReversed= reverseStr.join(" ");

// console.log(finalReversed)


//without using split and join

let str = "Hello how are you ?";
let word = "";
let result = "";

const addReversedWord = (word) =>{
    let reversed = "";
    for (let i = word.length -1 ; i>=0  ; i--) {
        reversed += word[i];
        
    }
    result+= reversed + " ";
};

let currentWord = "";

for (let i  = 0 ; i <=  str.length; i++) {
     const char = str[i];
     if (char === " " || i === str.length) {
        
        addReversedWord(currentWord);
        currentWord = "";
    } else {
        currentWord += char;
    }
}

console.log(result.trim()); 
  
