var fullname = "Manoj Kumar";

var obj ={
    fullname:"Siddharth Suman",
    prop:{
        fullname: "Vijay Kumar",
        getFullname: function () {
            return this.fullname;
        },
    },

    getFullname: function () {
        return this.fullname;
    },

    getFullnameV2: () => this.fullname,

    getFullnameV3: (function () {
        return this.fullname;
    })(),

};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3());