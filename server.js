const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req.url)

  // res.write('hello')
  // res.end()
  // fs.readFile("./index.html",(err,data)=>{
  //     if (err) {
  //         console.log(err)
  //     } else {
  //          res.write(data)
  //  res.end()
  //     }
  // })
  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/Home.html";
      break;
    case "/aboutus":
      res.statusCode = 301;
      res.setHeader('Location','/about')
      break;
    case "/about":
      path += "/About.html";
      break;
    default:
      res.statusCode = 404;
      res.write("404 Not Found");
      res.end();
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(7000, (err) =>
  err ? console.log(err) : console.log("server is running on port 7000")
);
