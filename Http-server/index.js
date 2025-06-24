const http = require('http');

const  server= http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end(" heloo bahi kay hall ha ma h muhammad bilala ,  insallah founder of code2business !");
})

server.listen(8000,()=>{
   console.log("server runing on port 8000");
})