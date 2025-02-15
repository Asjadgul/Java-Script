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
    // console.log(`Hello Mr, ${this.name}`);
    
}
// console.log(user.greetings())


const userinfo = {
    userfullname: {
        fullname: {
            firstname: "Asjad",
            lastname: "Gull"
        }
    }
}

// console.log(userinfo.userfullname.fullname);

const obj1 = {
    1:"A", 2:"B"
}
const obj2 = {
    3:"A", 4:"B"
}

// obj3 = Object.assign({}, obj1,obj2)


obj3 = {...obj1 , ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
]
// console.log(users[0].id)



// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


const course = {
    name: "Java script",
    price: 999,
    courseInstructor: "Asjad Gull"
}


const {name : n, price : p, courseInstructor: c} = course

console.log(n , p , c)
