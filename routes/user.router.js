const express = require('express');
const { createUserController } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', validationMiddleware('body', ), createUserController)


module.exports = router