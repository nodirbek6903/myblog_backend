const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username kiritilishi kerak"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Parol kiritilishi kerak"],
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Admin", adminSchema)