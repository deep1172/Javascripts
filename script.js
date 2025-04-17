console.log("Chaliye shuru karte hain ");

// let rectangle ={
//     length: 1,
//     breadth: 2,
//     draw: function () {
//         console.log("Scenary");
//     }

// } 


// //  factory function 
// // Camelcase -> numberOfStudents

// function createRectangle(len, bre) {
//   return rectangle ={
//     length: len,
//     breadth: bre,
//     draw: function () {
//         console.log("Scenary");
//     }

// }   
// }

// let rectangleobj = createRectangle(4,7);



// constructor function -> Pascal Notation -> first letter Of Every Word IS Capital
  

// function Rectangle() {
//     this.len = 33;
//     this.bre = 44;
//     this.draw = function () {
//         console.log('drawing');
//     }
// }

// let rectangleobj = new Rectangle()


function Rectangle(len,bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function () {
        console.log('drawing');
    }
}
// object Creation using constructor function
let rectangleobj = new Rectangle(32,43);




