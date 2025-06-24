const express =  require("express");
const path = require("path");
const fs = require ("fs");
const app = express();

app.get("/home",(req,res)=>{
    res.status(200);
    res.send("HAnji janab ma hu ap ka home page ap kon ho ");
})

app.get("/api/user/:id",(req,res)=>{
    const  {id} = req.params;
    const data = {
        id : 1,
        name :"muhammad bilal",
        age : 21,
        emial : "aloncoder358@gmail.com"
    }
    res.status(200).send(data);
})

app.post("/signup/user",(req,res)=>{
    const userdata={
        name:"Muhammad Bilal",
        age :21,
        email:"MUhammadbilal@gmail.com",
        phon :"03219515138",
        Address :"140 GB Sardar kot "
    }
    res.status(200).send(userdata);
})
app.use((req,res)=>{
    // res.status(404).send("<h1>page not found </h1>");
    const filepat = path.join(__dirname,"notfount.html");
    fs.readFile(filepat,"utf-8",(err,data)=>{
    if(err){
        res.status(500).send("internal server error");
    }
    else{
        res.status(404).send(data);
    }
    })
});
// app.use(express.static(path.join(__dirname,"public")));  // ynha publick ki jaga folder name aya ga jnha app ki html file ha us folder ka   name 
app.listen(8000,()=>{
    console.log("server running on port 8000");
})