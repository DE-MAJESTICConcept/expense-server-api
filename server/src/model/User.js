const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
    //schema
const userSchema = mongoose.Schema({
    email: {
        required: [true,'Email is required'],
        type: String,
   
},
lastname: {
    required: [true,'last Name is required'],
    type: String,
},
fristname: {
    required: [true,'First Name is required'],
    type: String,
},
password: {
    required: [true,'Password is required'],
    type: String,
},
isAdmin: {
    type: Boolean,
    default: false,
},

},{

    timestamps: true,
}
);
//hash password before saving
userSchema.pre("save",async function (next){
if(!this.isModified("password")){
    next();
    }
 const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});


//compile model from schema
const User = mongoose.model('User', userSchema);

module.exports = User;