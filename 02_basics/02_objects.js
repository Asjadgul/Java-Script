//singleton

//object.create 

//object literals





const mySymbol = Symbol("abc")
const user = {
    name: "Asjad",
    age: 20,
    [mySymbol]: "abc",
    "last_name": "Gull",
    email: "asjadgull123@gmail.com",
    location: "karachi",
    isloggedin: false,
    lastLoginDays: ["Monday", "Friday"]
}


// console.log(user.email)
// console.log(user["last_name"])
// console.log(user[mySymbol])


// user.email = "asjadgull666@gmail.com"
// console.log(user)

// Object.freeze(user)

// user.email = "safdewrefadas"
// console.log(user);


user.greetings = function(){
    console.log(`Hello Mr, ${this.name}`);
    
}
console.log(user.greetings())
