// let myHeros = ["Thor", "Spiderman"]




// let heroPower = {
//     thor: "Hammer",
//     spiderman: "Sling",
//     getPowers: function (){
//             console.log(`Spider power is ${this.spiderman}`)
//     }
// }

// Object.prototype.asjad = function () {
//     console.log(`Asjad is being called`)
// }

// myHeros.asjad()
// heroPower.asjad()

// Array.prototype.heyAsjad = function () {
//     console.log(`Asjad says Hello`)
// }

// myHeros.heyAsjad()


let anotherUser = "AsjadAndCode     "

String.prototype.trueLength = function() {
console.log(`${this}`)
console.log(`True length is ${this.trim().length}`)
}

anotherUser.trueLength()