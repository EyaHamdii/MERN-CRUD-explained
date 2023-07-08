// import mongoose to build model
const mongoose = require("mongoose");

// the rules we need to follow
// to create a model we need to call mongoose.schema 
const HeroSchema = new mongoose.Schema({

    name:{
        type:String
    },
    power: {
        type :Number
    },
    isAlive:{
        type:Boolean
    }
// Created at ,Updated At
},{timestamps:true})

// We need to export our model in order to be able to call it from other files
const Hero = mongoose.model("Hero",HeroSchema)
module.exports= Hero