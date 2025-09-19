const mongoose = require("mongoose")

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    technologies: [{type:String, default:[]}],
    category:{
        type:String,
        required:true
    },
    demoLink: {
        type:String,
        required:true
    },
    githubLink:{
        type:String,
        required: true
    },
    details:{
        type:String,
        required:true
    }
},
{timestamps:true})

module.exports = mongoose.model("Portfolio",portfolioSchema)