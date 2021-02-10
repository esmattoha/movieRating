const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
   username:{
     type:String,
     require
   },
   email:{
     type:String,
     require
   },
   password:{
     type:String,
     require
   }
});
const User = mongoose.model('User' , UserSchema);
module.exports = User ;

module.exports.createUser = (newUser , callback) =>{
    bcrypt.genSalt(10, (err , salt) =>{
        bcrypt.hash(newUser.password,salt, (error, hash)=>{
            const newUserResource = newUser;
            newUserResource.password = hash;
            newUserResource.save(callback);
        });
    });
};