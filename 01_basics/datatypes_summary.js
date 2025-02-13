// PRIMITIVE

// 7 TYPES => Number, String, Boolean, null, undefined, Symbol, BigInt (WE GET COPY OF THESE IF WE CHANGE ANYTHING IN THESE WE DO NOT GET THE REFERENCE BUT THE COPY OF OTIGINAL)

let name = "ASJAD"
let age = 20
let isLoggedIn = false
let HasCame;


const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id == anotherId)

const BigInt = 2134341212343252345435234123412341n








// Reference Type NON PRIMITIVE

//ARRAY, OBJECTS, FUNCTIONS 


const heroes = ["Ironman", "Superman", "Flash"]

let object1 = {
    name : "ASJAD",
    age: 20,
    email:"asjadgull123@gmail.com"
}

const myFunc = function(){
    console.log("Hello World")
}




// +++++++++++++++++++++++++++++++++++++++++++++Memory+++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack(Primitive)+(Copy) , Heap(Non-Primitive)+(Reference)


// Stack

let FirstName = "Asjad"
let secondName =  FirstName
secondName = "Gull"
// console.log(secondName)

// console.log(FirstName)


let userOne = {
    email: "asjadgull666@hmail.com"
}

let userTwo = userOne
userTwo.email = "asjadgull123@gmail.com"
console.log(userOne)
console.log(userTwo)




