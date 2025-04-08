const expressAsyncHandler = require('express-async-handler');
const User = require("../../model/User");

//registers a new user

const registerUser = expressAsyncHandler (async (req, res) => {
  const{ email, lastname,fristname, password }= req?.body;

         //check if user already exists
         const userExists = await User.findOne({email});
         if (userExists) {
             throw new Error('User already exists');
         };
      
     try {

       //create new user
       const user=await User.create({ email, lastname, fristname, password });
       res.status(200).json(User);

   } catch (error) {
     res.json(error);
   }
}); 

// fetch all users
const fetchUsersCtrl = expressAsyncHandler( async (req, res) => { 
try{
  const users = await User.find({});
  res.json(users);
}
catch (error) {
  res.json(error);
}
});  
module.exports = {
  registerUser , fetchUsersCtrl
};