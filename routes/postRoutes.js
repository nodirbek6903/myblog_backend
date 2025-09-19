const express = require("express")
const router = express.Router()
const {createPost,deletePost,getPostById,getPosts,updatePost} = require("../controllers/postController")
const {protect} = require("../middleware/authMiddleware")


router.post("/",protect, createPost)

router.get("/", getPosts)

router.get("/:id", getPostById)

router.put("/:id", protect, updatePost)

router.delete("/:id",protect, deletePost)

module.exports = router