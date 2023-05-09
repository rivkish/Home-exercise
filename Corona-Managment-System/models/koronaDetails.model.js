const mongoose = require("mongoose");


const koronaDetailsSchema = mongoose.Schema({
        userCode:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'users'
     },
     vaccinationsDate:[Date],
     manufacturerVaccine: [String],
     positiveResultDate:Date,
     recoveryDate:Date
});

const KoronaDetails = new mongoose.model("koronaDetails", koronaDetailsSchema);
module.exports = KoronaDetails;

