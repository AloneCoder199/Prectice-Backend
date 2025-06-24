import express from "express";
import router from "./routs/user.routs.js";
const app = express();
app.use("/api/user/signp",router);



app.listen(8000,()=>{
    console.log("App listen on port 8000");
})