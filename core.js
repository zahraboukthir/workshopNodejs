// console.log('hello tlija')
// console.log(global)
// console.log(__filename)
// console.log(__dirname)

//path
// const path=require("path")
//  console.log(path.extname(__filename))
// console.log(path.dirname(__filename))
// console.log(path.parse(__filename))

//file system
//fs
const fs = require("fs");
// console.log(fs)
// Sync
// console.log('........start')
// const data=fs.readFileSync("test.txt")
// console.log(data.toString())
// console.log("........finish")

//Asyn
// console.log("........start");
// fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) =>
//   err ? console.log(err) : console.log(data)
// );

// console.log("........finish");

//os

const os=require("os")
// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.freemem())
