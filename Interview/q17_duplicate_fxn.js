// make this work :
// duplicate([1,2,3,4,5]);  
// output : [1,2,3,4,5,1,2,3,4,5]

let myArr = [1,2,3,4,5];

function duplicate(a) {
    return a.concat(a);
}

console.log(duplicate(myArr));
