const mitthu ={
    name: "Mitthu Prasad",
    sayName: function () {
        console.log(this.name)
    },
}
const susu ={
    name: "Sudhanshu Kumar",
    sayName: function () {
        console.log(this.name)
    },
}

susu.sayName.call(mitthu);
susu.sayName();
