require("dotenv").config();
const Admin = require("../models/Admin")
const bcrypt = require("bcryptjs")

const admin_username = process.env.ADMIN_USERNAME
const admin_password  = process.env.ADMIN_PASSWORD


const createAdminDefault = async () => {
    try {
        const adminExists = await Admin.findOne({username: admin_username})

        if(!adminExists){
            const hashedPassword = await bcrypt.hash(admin_password,10)

            await Admin.create({
                username: admin_username,
                password: hashedPassword
            })
            
        }else{
            console.log("Admin allaqachon mavjud");
        }
    } catch (error) {
        console.error("Default admin yaratishda xatolik:", error.message);
    }
}

module.exports = createAdminDefault