//Lecture 16

// A Singleton is a design pattern that ensures only one instance of a class (or object) is created, and it provides a global point of access to that instance.
// Object.create
// This is useful when exactly one object is needed to coordinate actions across the system — for example: a configuration manager, logger, or database connection.

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Deepak",
    "full name": "Deepak Kumar",
    [mySym]: "mykey1",
    age: 19,
    location: "kolkata",
    email: "1172dipu@gmail.com",
    lastLoginDays: ["Sunday", "Friday"],
    isLoggedIn: false

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["mySym"]);  
// console.log(typeof(jsUser["mySym"]));

// console.log(jsUser[mySym]);
// console.log(typeof(jsUser["mySym"]));

// jsUser.email = "dipu@hotmail.com";
// Object.freeze(jsUser);
// jsUser.email = "dipu@yahoo.com";

// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello Js user");
}

// console.log(jsUser.greeting());

jsUser.greetingTwo = function() {
    // console.log(`Hello Js user, ${this.name}`);
}

// console.log(jsUser.greetingTwo());

 // Lecture 17

 // const tinderUser = new Object()

 const tinderUser = {}
 tinderUser.id = "123xyz";
 tinderUser.name = "Mannu";
 tinderUser.isLoggedIn = false;

//  console.log(tinderUser);

const regularUser = {
    email: "rahu.ketu@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Rahu",
            lastName: "Ketu",
        }
    },
}

// console.log(regularUser.fullname.userfullname.firstName);

// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "x", 4: "y", 5: "z"};

// const obj3 = { obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);

const obj3 ={ ...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id: 101,
        email: "hemant@gmail.com"
    },
    {
        id: 102,
        email: "himesh@gmail.com"
    },
    {
        id: 103,
        email: "harsh@gmail.com"
    },
]

// console.log(users[1].email)


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]