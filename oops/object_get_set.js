const User = {
    _email: 'hero@haris.com',
    _password: "abc1325",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);