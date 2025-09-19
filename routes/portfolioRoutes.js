const express = require("express")
const router = express.Router()
const {createPortfolio,deletePortfolio,getPortfolioById,getPortfolios,updatePortfolio} = require("../controllers/portfolioController")

const {protect} = require("../middleware/authMiddleware")

router.post("/", protect, createPortfolio)

router.get("/",getPortfolios)

router.get("/:id",getPortfolioById)

router.put("/:id", protect, updatePortfolio)

router.delete("/:id", protect, deletePortfolio)


module.exports = router