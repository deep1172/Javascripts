console.log("Hello Universe");

let bill= 200;
if(bill<0){
    console.log("invalid Input");
}
if (bill>=0 && bill < 100) {
    console.log(`The Electricity bill is rs 0  `);
    
}

if (bill>=100 && bill<200) {
    console.log(`The Electricity bill is rs ${5*bill}  `);
} 

else {
    console.log(`The Electricity bill is rs ${8*bill}`)
}