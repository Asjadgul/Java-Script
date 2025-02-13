// const arr = [4, 56, 6, 4 , "Asjad", true]

// console.log(arr[0])

// ++++++++++++++++++++++++++Array Methods+++++++++++++++++++++++++


// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)


// arr.unshift(9)
// console.log(arr)

// arr.shift()
// console.log(arr )

// let arr2 = arr.slice(1,3)
// console.log(arr2)
// let arr3 = arr.splice(1,3)
// console.log(arr3)




let marvel_heroes = ["ironman","thor","spiderman"]
let dc_heroes = ["superman","batman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log("A", marvel_heroes)

// const allHeros = marvel_heroes.concat(dc_heroes)
// console.log("B", allHeros)


const all_new_heros = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heros)


