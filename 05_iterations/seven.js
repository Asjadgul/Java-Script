const myNum = [1,2,3,4,5,6,7]

// console.log(myNum.map( (item) =>  (item + 10) ))

const newNum = myNum.map( (item) =>  item * 10 ).map( (item) => item +1 ).filter( (item) => item > 40 )

console.log(newNum)