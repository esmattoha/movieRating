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
