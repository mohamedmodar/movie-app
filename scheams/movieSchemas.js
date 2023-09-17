const mongoose = require("mongoose");

//schema
const moviesSchema = new mongoose.Schema({
    title: {type : String, required : true},
    rating: {type : Number},
    genre: {type : String , required : true},
    year: {type : Number},
    created_at :{type : Date, default : new Date()},
    updated_at :{type : Date, default : new Date()}


    
});

//model
 const movieApp = mongoose.model("movieApp", moviesSchema);

 module.exports = movieApp;