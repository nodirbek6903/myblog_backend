const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const morgan = require("morgan")
const connectDB = require("./config/db")
const {errorHandler} = require("./middleware/errorMiddleware")
const createAdminDefault = require("./config/createAdminDefault")
const authRoutes = require("./routes/authRoutes")
const aboutRoutes = require("./routes/aboutRoutes")
const messageRoutes = require("./routes/messageRoutes")
const portfolioRoutes = require("./routes/portfolioRoutes")
const postRoutes = require("./routes/postRoutes")

dotenv.config()

connectDB()

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

createAdminDefault()

// routes
app.use("/api/auth", authRoutes)
app.use("/api/about", aboutRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/portfolio",portfolioRoutes)
app.use("/api/blogs", postRoutes)


// error handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishlayabdi!`)
})
 