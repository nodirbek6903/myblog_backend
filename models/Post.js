const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    slug:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    content:{
        type:String,
        required: true
    },
    tags: [{type:String}]
},
{
    timestamps:true
})

module.exports = mongoose.model("Posts", postSchema)