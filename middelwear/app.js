import express from "express";
import bodyparser from "body-parser";
const app= express();
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
 app.get("/home",(req,res)=>{
   res.status(200).send("hanji ma  gay hu chalo satrat karta hn ");
 })
 app.post("/api/user/perfile",  (req,res)=>{
    const  data = req.body;
    console.log(data);
    res.status(200).json({
        success:true,
        message:"account created successfully"
    })
 })
app.listen(8000,()=>{
   console.log("Server running on port 8000");
})
