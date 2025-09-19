const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

// Contact formdan yangi message yuborish
router.post("/", createMessage);

// Admin barcha message'larni ko‘rishi
router.get("/", protect, getMessages);

// Admin bitta message'ni o‘chirishi
router.delete("/:id", protect, deleteMessage);

module.exports = router;
