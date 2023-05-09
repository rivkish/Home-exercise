const userController = require("../controllers/user");
const routerUser = require("express").Router();
// const upload=require("../middlwares/upload")
routerUser.get("",userController.getAllUsers);
routerUser.get("/:identity",userController.getUserByID);
routerUser.get("/:code",userController.getUserByUserCode);
routerUser.post("",userController.addUser);
routerUser.delete("/:id",userController.deleteUser);
// routerUser.post("",upload.single('img'),userController.addUser);
module.exports=routerUser;