// const user = {
//     username: "Asjad",
//     gmail: "asjadgull123@gmail.com",
//     loginCount: 8,
//     SignedIn: true,
//     userDetails: function () {
//         console.log("Data is coming from the database")
//         console.log(`Username: ${this.username}`)
//     }
// }

// console.log(user.userDetails())

function user (username, loginCount,  signedIn){
this.username =username;
this.loginCount = loginCount;
this.signedIn = signedIn

return this
}

const Users = new user("Asjad  ", 8, true)
const UserTwo = new user("Gull  ", 11, false)
console.log(UserTwo)
console.log(Users)

