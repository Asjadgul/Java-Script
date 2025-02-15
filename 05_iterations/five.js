//foreach


const coding = ["js", "swift", "java", "cpp"]

// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach((item)=> {
//     console.log(item)
// })


// function printMe(item){
// console.log(item)
// }

// coding.forEach(printMe)


// coding.forEach((item, index, ar) =>{
//     console.log(item, index, ar )
// })



const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCoding.forEach( (item) => {
console.log(item.languageName)
} )