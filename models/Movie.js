const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MovieSchema = new Schema({
   name:{
     type:String,
     require
   },
   description:{
     type:String,
     require
   },
   release_year:{
     type:Number,
     require
   },
   genre:{
     type:String,
     require
   }
});
const Movie = mongoose.model('Movie' , MovieSchema);
module.exports = Movie ;