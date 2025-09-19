const About = require("../models/About")

const getAbout = async (req,res) => {
    try {
        const about = await About.findOne()

        if(!about){
            return res.status(404).json({message: "About ma'lumotlari topilmadi"})
        }

        res.json(about)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createAbout = async(req,res) => {
    try {
        const exists = await About.findOne()
        if(exists){
            return res.status(400).json({message:"About ma'lumotlari allaqachon mavjud"})
        }

        const about = await About.create(req.body)
        res.status(201).json(about)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateAbout = async (req,res) => {
    try {
        const about = await About.findById(req.params.id)

        if(!about){
            return res.status(404).json({message: "About ma'lumotlari topilmadi"})
        }

        const updated = await About.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.json(updated)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    getAbout,createAbout,updateAbout
}