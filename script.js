const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./home.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./about.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./contact.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
      break;
    case "/blog":
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./blog.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        return res.end();
      });
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 Not Found");
      return res.end();
  }
});

//7l terminal o change directory 'cd' lfolder li fih script.js o dir node script o 7l fchrome localhost:3000
server.listen(3000);
console.log("Server running on port 3000");
