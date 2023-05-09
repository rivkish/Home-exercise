const mongoose=require("mongoose");
const User=require("../models/user.model")

const getAllUsers=async(req,res)=>{
    try{
      let users=await User.find({});
      res.send(users);
    }
    catch(e) {
        res.status(400).send(e.message)
    }
}
const getUserByUserCode= async (req,res)=>{
    try{
        let id=req.params.code;
        if(!mongoose.Types.ObjectId.isValid(id))
          return res.status(400).send("קוד לא תקין")
        let user=await User.findOne({"_id":id})
        if(!user)
           return res.status(404).send("לא נמצא משתמש עם קוד כזה");
        return res.send(user)
        
    }
    catch(e){
        res.status(400).send(e.message)
    }

}


const getUserByID=async(req,res)=>{
          try {
        let id = req.params.identity;
        let user=await User.findOne({identity:id})
        if(!user)
        return res.status(404).send("לא נמצא משתמש עם קוד זה");
        return res.send(user)
    }
    catch(e) {
        res.status(400).send(e)
    }
}

const addUser=async(req,res)=>{
    try{    
let user=new User({...req.body})
let us=await user.save();
return res.send(us);
    }
    catch(e) {
        res.status(400).send(e.message)
    }
}


const deleteUser=async(req,res)=>{
    try{
        let{id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).send("קוד לא תקין")
        let b =await User.findByIdAndDelete(id);
        return res.send(b);
    }
    catch (e) {
        res.status(400).send(e.message)
    }
}

module.exports = {
    getAllUsers,
    getUserByUserCode,
    getUserByID,
    addUser,
    deleteUser}