const Admin = require("../models/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


// jwt token yaratish

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
}

// login qilish
const loginAdmin = async (req, res) => {
    const {username, password} = req.body
     try {
        const admin = await Admin.findOne({username})
        if(!admin){
            return res.status(400).json({message: "Username yoki parol noto'g'ri"})
        }

        const isMatch = await bcrypt.compare(password, admin.password)

        if(!isMatch){
            res.status(400).json({message: "Username yoki parol noto'g'ri"})
        }

        res.json({
            _id: admin._id,
            username : admin.username,
            token: generateToken(admin._id)
        })
     } catch (error) {
        res.status(500).json({message: error.message})
     }
}

module.exports = {loginAdmin}