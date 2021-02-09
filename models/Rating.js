const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RatingSchema = new Schema({
    movie_id:{
        type:String,
        require
    },
    user_id:{
        type:String,
        require
    },
    rate:{
        type:Number,
        require
    }
 });
 const Rating = mongoose.model('Rating' , RatingSchema);
 module.exports = Rating ;