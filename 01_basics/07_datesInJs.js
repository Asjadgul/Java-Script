let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())




// let myCreatedString = new Date(2023, 0, 23)
// console.log(myCreatedString.toString());


let newCreatedString = new Date(2023, 0, 23, 5, 6)
console.log(newCreatedString.toLocaleString());


console.log(Math.round(Date.now()/1000))

console.log(myDate.getDate())
console.log(myDate.getMonth() + 1)
console.log(myDate.getDay())