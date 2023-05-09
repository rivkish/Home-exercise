const mongoose = require("mongoose");


const coronaDetailsSchema = mongoose.Schema({
        userCode:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'users'
     },
     vaccinationsDate:[Date],
     manufacturerVaccine: [String],
     positiveResultDate:Date,
     recoveryDate:Date
});

const coronaDetails = new mongoose.model("coronaDetails", coronaDetailsSchema);
module.exports = coronaDetails;

