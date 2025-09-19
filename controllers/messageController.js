const Message = require("../models/Message");

// Yangi message yaratish
const createMessage = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "Barcha maydonlar to‘ldirilishi shart!" });
    }

    const newMessage = await Message.create({ name, email, phone, message });

    res.status(201).json({
      message: "Xabar muvaffaqiyatli yuborildi",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

// Barcha message'larni olish
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }); // eng oxirgi xabar birinchi chiqadi
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

// Bitta message'ni o‘chirish
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Message.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Xabar topilmadi" });
    }

    res.status(200).json({ message: "Xabar muvaffaqiyatli o‘chirildi" });
  } catch (error) {
    res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

module.exports = {
  createMessage,
  getMessages,
  deleteMessage,
};
