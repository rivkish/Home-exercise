const koronaDetailsController=require("../controllers/koronaDetails");
const routerDetails=require("express").Router();

routerDetails.get("",koronaDetailsController.getAllDetails);
routerDetails.post("",koronaDetailsController.addDetails);
routerDetails.delete("/:id",koronaDetailsController.deleteDetails);
routerDetails.post("/:id",koronaDetailsController.addVaccination);
routerDetails.post("/:id/:positiveResultDate",koronaDetailsController.addResult);


module.exports=routerDetails;