function setUserName (username){
this.username = username
}

function createUser(username, email, password){
setUserName.call(this, username)
this.email = email
this.password = password
}


const chai = new createUser("Asjad", "asjadgull123@gmail.com", 321)

console.log(chai)