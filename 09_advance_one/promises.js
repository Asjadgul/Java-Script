// const promiseOne = new Promise(function (resolve, reject){


//     setTimeout( function ()  {
//         console.log("Promise executed")
//         resolve()
//     }, 1000); 



// })

// promiseOne.then(function(){
//     console.log("It really executed")
// })



// new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log("Async 2")
//         resolve()
//     }, 2000);
// }).then(function () {
//     console.log("Async 2 really completed")
// })

// const promiseThree = new Promise(function(resolve, reject){
// setTimeout(() => {
//     console.log("Async 3")
//     resolve({username: "Asjad Gull", email: "asjadgull123@gmail.com"})
// }, 1000);
// })
// promiseThree.then(function(user){
// console.log(user)
//     })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "asjad", password: "123"})
//         }else{
//             reject('ERROR SOMETHING WENT WRONG')
//         }
//     }, 1000);
// })


// promiseFour
// .then( (user) => {
// console.log(user)
// return user.username
// })
// .then(function(username){
// console.log(username)
// })
// .catch(function (error){
// console.log(error)
// })
// .finally(() => console.log("The Promised has been terminated successfully wither resolved or rejected"))



// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "JavaScript", password: "123"})
//         }else{
//             reject('ERROR JS WENT WRONG')
//         }
//     }, 1000);
// })


// async function consumePromiseFive() {
//     try {
//     const response = await(promiseFive)
//     console.log(response)
//     } catch (error) {
//     console.log(error)    
//     }
// }

// consumePromiseFive()


// async function getAllUsers() {
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E", error)
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
           return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
  