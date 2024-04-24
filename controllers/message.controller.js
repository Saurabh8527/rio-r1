const { addMessage, getMessages, updateMessageStatus } = require("../services/message.service");
const { successRes } = require("../utils");

const createMessageController = async (req, res, next) => {
    try {
        const { sender_id: senderId, receiver_id: receiverId, message } = req.body
        const createdMessage = await addMessage(senderId, receiverId, message)
        res.status(200).send(successRes({ data: createdMessage }))
    }
    catch (err) {
        next(err)
    }
}


const getMessagesController = async (req, res, next) => {
    try {
        const { receiver_id: receiverId, status } = req.query
        // TODO: do these 2 (getMessages and updateMessages) in transaction
        const messages = await getMessages(receiverId, status)
        const messageIds = messages.map(m => m.id)
        const updateResponse = await updateMessageStatus(messageIds, 'read')
        res.status(200).send(successRes({ data: messages }))
    }
    catch (err) {
        next(err)
    }
}


module.exports = {
    createMessageController,
    getMessagesController
}