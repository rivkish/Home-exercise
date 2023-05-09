const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");


const userRoute = require("./routes/user");
const coronaDetailRoute = require("./routes/coronaDetails");



const app = express();
app.use(express.json());
app.use(cors())

app.use('/public', express.static('public'));
app.use("/user",userRoute);
app.use("/details",coronaDetailRoute);
app.use(morgan('common'))
app.use(express.static("upload"))


mongoose.connect("mongodb://localhost:27017/Corona-management-system").then(o => console.log("mongo db connected")).catch(err => console.log(err))

app.listen(5002, () => {
    console.log("listening on port 5002")
})