const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Ism kiritilishi shart!"]
    },
    email: {
        type:String,
        required: [true, "Email kiritilishi shart!"]
    },
    phone:{
        type:String,
        required: [true, "Telefon raqam kiritilishi shart!"]
    },
    message: {
        type:String,
        required: [true, "Xabar kiritilishi shart!"]
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Message",messageSchema)