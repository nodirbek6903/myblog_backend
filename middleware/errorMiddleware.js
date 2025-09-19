const errorHandler = (req,res,next) => {
    console.error(err.stack)
    res.status(err.statusCode || 500).json({
        message: err.message || "Server xatolik yuz berdi"
    })
}

module.exports = {errorHandler}