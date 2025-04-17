const vijay ={
    name: "Vijay Kumar",
    sayName: function () {
        console.log(this.name)
    },
};

// setTimeout(vijay.sayName, 0);

// setTimeout(vijay.sayName.bind(vijay), 3000);

setTimeout(() => vijay.sayName(), 3000);