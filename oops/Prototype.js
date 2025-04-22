// let myName = "Deepak     "
// let mychannel = "Rajesh     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rajesh = function(){
    console.log(`rajesh is present in all objects`);
}

Array.prototype.dinesh = function(){
    console.log(`dinesh says hello`);
}

// heroPower.rajesh()
// myHeros.rajesh()
// myHeros.dinesh()
// heroPower.dinesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mahesh  sah        ".trueLength()
" iceTea preferred ".trueLength()