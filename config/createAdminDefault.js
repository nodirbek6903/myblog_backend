const Admin = require("../models/Admin")
const bcrypt = require("bcryptjs")


const createAdminDefault = async () => {
    try {
        const adminExists = await Admin.findOne({username: "Nodirbek"})

        if(!adminExists){
            const hashedPassword = await bcrypt.hash("Nodirbek6903",10)

            await Admin.create({
                username: "Nodirbek",
                password: hashedPassword
            })

            console.log("Default admin yaratildi: Nodirbek / Nodirbek6903");
        }else{
            console.log("Admin allaqachon mavjud");
        }
    } catch (error) {
        console.error("Default admin yaratishda xatolik:", error.message);
    }
}

module.exports = createAdminDefault