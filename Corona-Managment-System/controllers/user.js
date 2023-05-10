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
    const url = req.protocol + '://' + req.get('host')
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        img:url + '/public/' + req.file.filename,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        identity:req.body.identity,      
     address:{city:req.body.city,street:req.body.street,numberStreet:req.body.numberStreet},
        birthDate:req.body.birthDate,
        phone:req.body.phone,
        cellPhone:req.body.cellPhone
    });
    user.save().then(result => {
        res.status(201).json({
            message: "user add successfully!",
            userCreated: {
                _id: result._id,
                img: result.img
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })}

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