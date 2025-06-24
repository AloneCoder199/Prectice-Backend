const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    const dirpath = path.join(__dirname, "index.html");
    // const  directry = __dirname+"/index.html";
   const page =  fs.readFileSync(dirpath);
   res.end(page);
})

server.listen(8000,()=>{
 console.log("server  running on port 8000");
})