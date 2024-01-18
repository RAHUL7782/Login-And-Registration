const express=require("express");
const app=express();
const PORT=5000;
const cors=require("cors");
app.use(cors());
app.use(express.json());
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/employeedatabase").then(()=>{
    console.log("Connecting to database");
}).catch((err)=>{
    console.log("Error in connecting");
});
const controllers=require("./controller/controller");
app.post("/insert",controllers.insertData);
app.get("/login/:email",controllers.login);
app.listen(PORT,console.log("Listening on port 5000"));