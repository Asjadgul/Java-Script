// for of


// const arr = [1,2,3,4,5]

// for (const num of arr) {

//     console.log(num)
// }


const greeting = "Asjad-Gull"

for (const greet of greeting) {
    // console.log(greet)
}


const myMap = new Map()

myMap.set("PK", "Pakistan")
myMap.set("UK", "United Kingdom")

console.log(myMap)

for (const [ key, value ] of myMap) {
    console.log(key, value)
}


