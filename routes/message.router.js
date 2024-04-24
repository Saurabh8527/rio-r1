const express = require('express');
const { createMessageController, getMessagesController } = require('../controllers/message.controller');

const router = express.Router();

router.post('/', createMessageController)
router.get('/', getMessagesController)


module.exports = router