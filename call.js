function setUserName (userName){
    this.userName = userName;
    console.log("called")
}

function createUser(userName,email, password){
    setUserName.call(this,userName);

    this.email=email
    this.password =password
}
const fun = new createUser("chai" ,"chai@google.com" , "123");
console.log(fun)