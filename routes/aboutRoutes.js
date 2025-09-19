const express = require("express")
const router = express.Router()
const {createAbout,getAbout,updateAbout} = require("../controllers/aboutController")
const {protect} = require("../middleware/authMiddleware")

router.get("/", getAbout)

router.post("/", protect, createAbout)
router.put("/:id", protect, updateAbout)

module.exports = router