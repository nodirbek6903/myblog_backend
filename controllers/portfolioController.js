const Portfolio = require("../models/Portfolio")

const createPortfolio = async (req,res) => {
    try {
        const {title,description,image,technologies,category,demoLink,githubLink,details} = req.body

        if (!title || !description || !image || !category || !demoLink || !githubLink || !details) {
      return res.status(400).json({ message: "Barcha majburiy maydonlar to‘ldirilishi shart!" });
    }

    const newPortfolio = await Portfolio.create({
        title,
        description,
        image,
        technologies,category,
        demoLink,githubLink,details
    })

    res.status(201).json(newPortfolio)
    } catch (error) {
        res.status(500).json({messsage: "Server xatosi", error: error.message})
    }
}

const getPortfolios = async (req,res) => {
    try {
        const portfolios = await Portfolio.find().sort({createdAt: -1})
        res.status(200).json(portfolios)
    } catch (error) {
         res.status(500).json({ message: "Server xatosi", error: error.message });
    }
}

const getPortfolioById = async (req,res) => {
    try {
        const {id} = req.params
    const portfolio = await Portfolio.findById(id)

    if(!portfolio){
        return res.status(404).json({message:"Portfolio topilmadi"})
    }

    res.status(200).json(portfolio)
    } catch (error) {
        res.status(500).json({message:"Server xatosi", error:error.message})
    }
}

const updatePortfolio = async (req,res) => {
    try {
        const {id} = req.params
        const updatePortfolio = await Portfolio.findByIdAndUpdate(id, req.body, {new:true})

        if(!updatePortfolio){
            return res.status(404).json({ message: "Portfolio topilmadi" });
        }

        res.status(200).json(updatePortfolio)
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
}

const deletePortfolio = async (req,res) => {
    try {
        const {id} = req.params
        const deletedPortfolio = await Portfolio.findByIdAndDelete(id)

        if (!deletedPortfolio) {
      return res.status(404).json({ message: "Portfolio topilmadi" });
    }
    res.status(200).json({message:"Portfolio muvaffaqqiyatli o'chirildi"})

    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
}

module.exports = {
    createPortfolio,
    getPortfolios,
    getPortfolioById,
    updatePortfolio,
    deletePortfolio
}