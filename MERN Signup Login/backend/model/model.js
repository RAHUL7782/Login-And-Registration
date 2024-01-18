const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
    empno:
        String
    ,
    name:
        String,
    email:
        String,
    password:
        String
    
});
module.exports=new mongoose.model("employee",employeeSchema);