const http = require("http");

const server = http.createServer((req, res) => {
    // if (req.url === "/") {
    //     res.writeHead(200, { 'content-type': 'text/plain' });
    //     res.end("Home");
    // }
    // else if (req.url === "/api/user") {
    //     const user = {
    //         name: 'ALi',
    //         age: 21,
    //         Email: 'aloncoder358@gmail.com'
    //     }
    //     res.writeHead(200, { 'content-type': 'application/json' });
    //     res.end(JSON.stringify(user));
    // }
   
    // else{
    //     res.writeHead(404,{'content-type':'text/html'});
    //     res.end("<h1  >page not found </h1>")}


   if(req.method === "POST" && req.url === "/submit"){
    let body = "";
    req.on("data", (chunk)=>{
        // body=body+chunk.toString();
        body += chunk.toString();
    })
  req.on("end",()=>{
    console.log(JSON.parse(body));
    res.writeHead(200,{"content-type":"application/JSON"});
    res.end(JSON.stringify({success: true , message:"account created successully !"}));
  })

   }else{
         res.writeHead(404,{'content-type':'text/html'});
       res.end("<h1  >page not found </h1>")
    }


});

server.listen(8000, () => {
    console.log("server unning on port 8000");
});
