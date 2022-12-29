const users=require("./TpM")
// console.log(users)
const {getUser,moyAge}=require('./Local')

console.log(getUser(users,"hachem"))
console.log(moyAge(users))