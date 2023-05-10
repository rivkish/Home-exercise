const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
    img:
    {
        type: String
    },
    firstName:String,
    lastName:String,
    identity:String,  
    address:{
     city:String,
    street:String,
    numberStreet:Number},
    birthDate:Date,
    phone:String,
    cellPhone:String     
})

const User=mongoose.model("users",userSchema);
module.exports=User;
