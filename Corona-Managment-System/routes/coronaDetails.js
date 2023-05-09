const coronaDetailsController=require("../controllers/coronaDetails");
const routerDetails=require("express").Router();

routerDetails.get("",coronaDetailsController.getAllDetails);
routerDetails.post("",coronaDetailsController.addDetails);
routerDetails.delete("/:id",coronaDetailsController.deleteDetails);
routerDetails.post("/:id",coronaDetailsController.addVaccination);
routerDetails.post("/:id/:positiveResultDate",coronaDetailsController.addResult);


module.exports=routerDetails;