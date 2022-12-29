const uuid=require("uuid")

const users=[
    {
        id:uuid.v4(),
        name:"hachem",
        age:24
    },
    {
        id:uuid.v4(),
        name:"Sami",
        age:27
    },
    {
        id:uuid.v4(),
        name:"taher",
        age:34
    },
]
// console.log(users)
// console.log(module)
module.exports=users