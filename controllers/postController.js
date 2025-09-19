const Post = require("../models/Post")

const createPost = async(req,res) => {
    try {
        const {title, category, date, image, content, tags, slug, description} = req.body

        if(!title || !category || !date || !image || !content || !tags || !slug || !description){
            return res.status(400).json({message:"Barcha majburiy maydonlar to'ldirilishi shart!"})
        }

        const newPost = await Post.create({title,category,date,image,content,tags,slug,description})
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json({message: "Server xatosi", error: error.message})
    }
}

const getPosts = async (req,res) => {
    try {
        const posts = await Post.find().sort({date:-1})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
}

const getPostById = async(req,res) => {
    try {
        const {id} = req.params
        const post = await Post.findById(id)

        if(!post){
            return res.status(404).json({ message: "Post topilmadi" });
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
}

const updatePost = async(req,res) => {
    try {
        const {id} = req.params
        const updatedPost =  await Post.findByIdAndUpdate(id, req.body, {new:true})

        if (!updatedPost) return res.status(404).json({ message: "Post topilmadi" });

        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
}

const deletePost = async(req,res) => {
    try {
        const {id} = req.params
        const deletedPost = await Post.findByIdAndDelete(id)

        if(!deletedPost){
            return res.status(404).json({message: "Post topilmadi"})
        }

        res.status(200).json({message:"Post muvaffaqqiyatli o'chirildi"})
        
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
}

module.exports = {
    createPost,getPosts,getPostById,updatePost,deletePost
}