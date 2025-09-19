const jwt = require("jsonwebtoken")
const Admin = require("../models/Admin")


const protect = async(req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.admin = await Admin.findById(decoded.id).select("-password")

            next()
        } catch (error) {
            return res.status(401).json({message: "Token yaroqsiz yoki muddati o'tgan"})
        }
    }

    if(!token){
        return res.status(401).json({message: "Token topilmadi, ruxsat yo'q"})
    }
}
module.exports = {protect}