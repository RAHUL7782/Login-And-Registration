const empModel=require("../model/model");
const insertData=(req,res)=>{
    const dataSave=new empModel(req.body);
       
    dataSave.save().then((data)=>{
        console.log("Data saved succesfully");
        console.log(data);
    }).catch((err)=>{
        console.log("Error in connecting ");
        console.log(err);
    });
};
const login=(req,res)=>{
    const email=req.params.email;
    empModel.find({email}).then((data)=>{
        res.send(data);
        console.log("Data Send succcessfully");
    }).catch((err)=>{
        console.log("Error in saving data");
    });
}
module.exports={
    insertData,
    login
}