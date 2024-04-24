const { Op } = require("sequelize")
const { Message } = require("../models/db")

const addMessage = async (senderId, receiverId, message) => {
    return Message.create({ sender_id: senderId, receiver_id: receiverId, message })
}

const getMessages = async (receiverId, status) => {
    return Message.findAll({
        where: { receiver_id: receiverId, status },
        raw: true,
        order: [['created_at', 'ASC']]
    })
}

const updateMessageStatus = async (messageIds, newStatus) => {
    return Message.update({ status: newStatus }, { where: { id: { [Op.in]: messageIds } } }, { raw: true })
}


module.exports = {
    addMessage,
    getMessages,
    updateMessageStatus
}

