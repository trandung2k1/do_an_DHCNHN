const mongoose = require('mongoose');

// Các cuộc hội thoại
const conversationSchema = new mongoose.Schema(
    {
        groupTitle: {
            type: String,
        },
        members: {
            type: Array,
        },
        lastMessage: {
            type: String,
        },
        lastMessageId: {
            type: String,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('Conversation', conversationSchema);
