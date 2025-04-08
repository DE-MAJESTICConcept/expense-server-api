
const mongoose =require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

//xF4DPRZFlVvlPmwD
//mongodb+srv://me<db_username>:<db_password>@cluster0.hdcm0.mongodb.net/
const dbConnect = async () =>{
    try {
        await mongoose.connect(
        //    "mongodb+srv://me:xF4DPRZFlVvlPmwD@cluster0.hdcm0.mongodb.net/"

        process.env.MONGO_URL,
         );
             
       console.log("MongoDB connection SUCCESS");
    } 
     catch(error){
        console.error("MongoDB connection FAIL");
        
    }
}

module.exports = dbConnect;