const mongoose = require("mongoose")

const aboutSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type:String,
        default: ""
    },

    // info bolimi
    info: {
        fullName: {
            type:String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        email: {
            type:String,
            required: true,
        },
        phone: {
            type: String,
            required: true
        },
        github: {
            type:String,
            required:true
        },
        linkedin:{
            type:String,
            required: true
        },
        telegram: {
            type:String,
            required:true
        },
        instagram: {
            type: String,
            required:true
        },
    },
    // skills
    skills: [
        {
            type: String
        }
    ],
    // services
    services: [
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type:String,
                required: true
            },
        },
    ],
    // education
    education: [
        {
            education_location: {
                type:String,
                required: true
            },
            degree: {
                type:String,
                required: true
            },
            year: {
                type:String,
                required: true
            },
            description: {
                type:String,
                required: true
            }
        }
    ],
    // experince
    experience: [
        {
            company:{
                type:String,
                required: true
            },
            position: {
                type:String,
                required: true
            },
            duration: {
                type: String,
                required: true
            },
            experience_description: {
                type:String,
                required: true
            }
        }
    ],
    // achievements
    achievements: [
        {
            type: String
        }
    ],
    // stats
    stats: [
        {
            label: {
                type:String,
                required: true
            },
            value: {
                type:Number,
                required: true
            }
        }
    ],
    // hobby
    interests: [
        {
            type: String
        }
    ]
},

{timestamps: true}
)


module.exports = mongoose.model("About", aboutSchema)

