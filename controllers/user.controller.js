const { createUser, getAllUsers, } = require("../services/user.service");
const { successRes } = require("../utils");

const createUserController = async (req, res, next) => {
    try {
        const { first_name: firstName, last_name: lastName, mobile } = req.body
        const user = await createUser(firstName, lastName, mobile)
        res.status(200).send(successRes({ data: user }))
    }
    catch (err) {
        next(err)
    }
}


module.exports = {
    createUserController
}